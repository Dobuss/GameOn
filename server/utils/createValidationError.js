class ValidationError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'CustomValidationError';
    this.code = code || 400;
    /*Checking */
  }
}

module.exports = { ValidationError };
