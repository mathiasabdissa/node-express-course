class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}

const createCustomError=()=>{
    return new CustomAPIError(msg,statusbar)
}

module.exports={createCustomError,CustomAPIError}