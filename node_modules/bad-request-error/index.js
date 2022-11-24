/**
 * @class
 * @classdesc Create an error for bad HTTP request (contain http status to send err back to the client)
 */
class BadRequestError extends Error {
    /**
     * @param { String } message
     * @param { Number } httpStatus
     * @param { * } ...params
     */
    constructor(message, httpStatus, ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);

        this.name = 'BadRequestError';
        this.message = (message || '');
        this.httpStatus = (httpStatus || 400);
    }
}

module.exports = BadRequestError;
