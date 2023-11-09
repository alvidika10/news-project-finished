function errorhandler(err, req, res, nexr) {
    console.log(err, '<<<<<< ERROR HANDLER')

    let status = 500
    let message = "Internal server error "

    if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
        status = 400
        message = err.errors[0].message
    }
    else if (err.name === "email_required") {
        status = 400
        message = "Email is required"
    }
    else if (err.name === "password_required") {
        status = 400
        message = "Password is required"
    }
    else if (err.name === "invalid_email_password") {
        status = 400
        message = "Invalid email and password"
    }
    else if (err.name === "data_not_found") {
        status = 404
        message = "Data not found"
    }
    else if (err.name === 'already_premium') {
        status = 400
        message = "You already premium"
    }
    else if (err.name === 'MidtransError') {
        status = 400
        message = err.ApiResponse.error_messages[0]
    }
    
    res.status(status).json({message})
}

module.exports = errorhandler