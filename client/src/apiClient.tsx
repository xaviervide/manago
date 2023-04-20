import { UserLogin } from "./schemas/UserLogin";
import { UserRegister } from "./schemas/UserRegister";

const serverURL = 'http://localhost:3001/';

export async function loginUser (userCredentials : UserLogin) {
  const loggingUser = await fetch((serverURL + 'login'), {
    method: 'POST',
    body: JSON.stringify(userCredentials),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())

  sessionStorage.setItem('user-token', JSON.stringify(loggingUser.token));
  sessionStorage.setItem('user-data', JSON.stringify(loggingUser.user));
}

export async function registerUser (userCredentials : UserRegister) {
  const registeringUser = await fetch((serverURL + 'register'), {
    method: 'POST',
    body: JSON.stringify(userCredentials),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json());
  console.log(registeringUser.email)
  const autoLoggingUser = {email: registeringUser.email, password: registeringUser.password}

  console.log(autoLoggingUser);
}