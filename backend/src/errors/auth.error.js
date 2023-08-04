exports.factory = function (name) {
  return class BusinessError extends Error {
    constructor() {
      super(name)
      this.name = name;
    }
  }
}

exports.connectionDBError = this.factory('Connection Error');
exports.validationError = this.factory('Validation Error');
exports.userNotFoundError = this.factory('NotFound');
exports.validationAuthError = this.factory('Password or user error');