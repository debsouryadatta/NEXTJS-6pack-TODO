import { User } from "@/models/user";
import { asyncError, errorHandler } from "@/middlewares/error";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt"

const handler = asyncError(async (req, res) => {
    if (req.method !== "POST") return errorHandler(res, 400, 'Only POST Method is allowed')

    const { email, password } = req.body

    if ( !email || !password) return errorHandler(res, 400, 'Please enter all fields')

    await connectDB() // connecting to database

    const user = await User.findOne({ email }).select("+password") // Since in the mongoose model we have given select: false, in password field so we can't access the password, so to access the password we have to force select password now

    if (!user) return errorHandler(res, 400, 'Invalid email or password')

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return errorHandler(res, 400, 'Invalid email or password')


    const token = generateToken(user._id)
    cookieSetter(res, token, true) // set is used in this function to make sure that the cookie is set not delted

    res.status(200).json({
        success: true,
        message: `Welcome back, ${user.name}`,
        user,
    })
})

export default handler