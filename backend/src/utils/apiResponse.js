 class ApiResponse {
    constructor(statusCode,Data,message){
        this.data = data
        this.message = message
        this.statusCode = statusCode
        this.success = statusCode < 400
    }
}
export default ApiResponse
