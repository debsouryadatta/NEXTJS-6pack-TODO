import { asyncError, errorHandler } from "@/middlewares/error";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";


const handler = asyncError(async (req, res) => {
    if (req.method !== "GET") return errorHandler(res, 400, 'Only GET Method is allowed')

    
    cookieSetter(res, null, false) // Here we set the "set" as false

    res.status(200).json({
        success: true,
        message: `Logged Out Successfully`,
    })
})

export default handler