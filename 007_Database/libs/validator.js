module.exports = {
  username(user) {
    if(!user) {
      return 'Username must not be empty!'
    } else if(user.length > 32) {
      return 'Username must not be more than 32 characters';
    } else if(!/^\w{4,32}$/.test(user)) {
      return 'Invalid username format';
    } else {
      return null;
    }
  },
  password(password) {
    if(!password) {
      return 'Password must not be empty!'
    } else if(password.length > 32) {
      return 'Password must not be more than 32 characters';
    } else {
      return null;
    }
  }
}
