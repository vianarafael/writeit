const validator = require('validator');

const User = function (data) {
  this.data = data;
  this.errors = [];
};
User.prototype.validate = function () {
  if (this.data.username === '') {
    this.errors.push('You must provide a username');
  }
  if (
    this.data.username !== '' &&
    !validator.isAlphanumeric(this.data.username)
  ) {
    this.errors.push(
      'Only use letters and numbers are accepted for the username'
    );
  }
  if (!validator.isEmail(this.data.email)) {
    {
      this.errors.push('You must provide a valid email address');
    }
  }
  if (this.data.email === '') {
    this.errors.push('You must provide a valid email address');
  }
  if (this.data.password === '') {
    this.errors.push('You must provide  password');
  }
  if (this.data.password.length > 0 && this.data.password.length < 12) {
    this.errors.push('The password must be at least 12 characters');
  }
  if (this.data.password.length > 100) {
    this.errors.push('Password cannot exceed 100 characters');
  }
  if (this.data.username.length > 0 && this.data.username.length < 3) {
    this.errors.push('The username must be at least 3 characters');
  }
  if (this.data.username.length > 30) {
    this.errors.push('username cannot exceed 30 characters');
  }
};

User.prototype.register = function () {
  // #1 Validate user data
  this.validate();
};

module.exports = User;
