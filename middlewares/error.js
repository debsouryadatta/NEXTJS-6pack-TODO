export const errorHandler = (res, statusCode = 500, message = 'Internal Server Error') => {
    return res.status(statusCode).json({
        success: false,
        message,
    })
}

export const asyncError = (passedFunc) => (req, res) => { // Same as the assync error middleware that we have used in backend project 01
    return Promise.resolve(passedFunc(req, res)).catch((err) => {
        return errorHandler(res, 500, err.message)
    })
}