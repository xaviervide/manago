import ValidatePassword from "./validatePassword";

function ValidateLoginInput (email: string, password: string) {
  if (!email.match(/.+\@.+\..+/)) return false;
  if (!ValidatePassword(password)) return false;
  return true;
}

export default ValidateLoginInput;