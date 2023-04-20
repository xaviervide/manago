import ValidatePassword from "./validatePassword";

function ValidateRegisterInput (firstName: string, lastName: string, email: string, password: string) {
  if (firstName.trim().length < 3) return false;
  if (firstName.trim().length > 12) return false;
  if (lastName.trim().length < 3) return false;
  if (lastName.trim().length > 12) return false;
  if (!email.match(/.+\@.+\..+/)) return false;
  if (!ValidatePassword(password)) return false;
  return true;
}

export default ValidateRegisterInput;