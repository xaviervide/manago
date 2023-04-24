import { UserLogin } from "./schemas/UserLogin";
import { UserRegister } from "./schemas/UserRegister";

const serverURL = 'http://localhost:3001/';

interface Task {
  taskName: string,
  taskDescription: string
}


export async function loginUser (userCredentials : UserLogin) {
  try {
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
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function registerUser (userCredentials : UserRegister) {
  try {
    const registeringUser = await fetch((serverURL + 'register'), {
      method: 'POST',
      body: JSON.stringify(userCredentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
    
    const autoLoggingUser = {email: registeringUser.email, password: userCredentials.password}
    await loginUser(autoLoggingUser);

  } catch (err) {
    throw new Error(err as string);
  }
}

export async function fetchUserData (userID: string) {
  try {
    const loggedUserData = await fetch(serverURL + `user/${userID}`)
      .then (res => res.json())

    return loggedUserData;
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function crateUserTask (userID: string, newTask: Task) {
  try {
    const addedTask = await fetch((serverURL + 'new/task'), {
      method: 'POST',
      body: JSON.stringify({userID: userID, taskName: newTask.taskName, taskDescription: newTask.taskDescription}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())

  } catch (err) {
    throw new Error(err as string);
  }
}

export async function updateUserTasks (userID: string) {

}

export async function updateUserProjects (userID: string) {

}

export async function updateUserTeams (userID: string) {

}