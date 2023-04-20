import { UserLogin } from "./schemas/UserLogin";

const serverURL = 'http://localhost:3001/';

export async function loginUser (userCredentials : UserLogin) {
  const loggingUser = await fetch((serverURL + 'login'), {
    method: 'POST',
    body: JSON.stringify(userCredentials),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())

  sessionStorage.setItem('user-token', JSON.stringify(loggingUser))
}