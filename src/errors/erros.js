class ErrorHandler {
    constructor(message, success, data, errors) {
        this.message = message;
        this.success = success;
        this.data = data;
        this.errors = errors;
    }
}

module.exports = ErrorHandler;
