function ValidatePassword (password : string) {
  if (password.trim().length > 4) {
    if (password.trim().length <= 15) {
            return true;
    }
  }

  return false;
}

export default ValidatePassword;