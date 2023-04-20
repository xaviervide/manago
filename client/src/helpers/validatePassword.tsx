function ValidatePassword (password : string) {
  if (password.trim().length > 6) {
    if (password.trim().length <= 15) {
            return true;
    }
  }

  return false;
}

export default ValidatePassword;