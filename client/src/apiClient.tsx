import { Project } from "./interfaces/Project";
import { Team } from "./interfaces/Team";
import { Task } from "./interfaces/Task";
import { UserLogin } from "./schemas/UserLogin";
import { UserRegister } from "./schemas/UserRegister";

const serverURL = 'http://localhost:3001/';


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

export async function updateUserTask (taskID: string, updatedTaskTime: string) {
  try {
    const updatedTask = await fetch((serverURL + 'update/task'), {
      method: 'POST',
      body: JSON.stringify({taskID: taskID, updatedTaskTime: updatedTaskTime}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())

  } catch (err) {
    throw new Error(err as string);
  }
}

export async function fetchProjectData (projectID: string) {
  try {
    const currWSData = await fetch((serverURL + `project/${projectID}`))
      .then(res => res.json());

    return currWSData;
    
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function createTask (userID: string, newTask: Task) {
  try {
    const addedTask = await fetch((serverURL + 'new/task'), {
      method: 'POST',
      body: JSON.stringify({userID: userID, 
        taskName: newTask.taskName, 
        taskDescription: newTask.taskDescription
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())

  } catch (err) {
    throw new Error(err as string);
  }
}

export async function createProject (userID: string, newProject: Project) {
  try {
    const createdProject = await fetch((serverURL + 'new/project'), {
      method: 'POST',
      body: JSON.stringify({userID: userID, 
        title: newProject.title, 
        description: newProject.description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())

  } catch (err) {
    throw new Error(err as string);
  }
}

export async function createTeam (userID: string, newTeam: Team) {
  try {
    const createdProject = await fetch((serverURL + 'new/team'), {
      method: 'POST',
      body: JSON.stringify({userID: userID, 
        title: newTeam.title, 
        description: newTeam.description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())

  } catch (err) {
    throw new Error(err as string);
  }
}