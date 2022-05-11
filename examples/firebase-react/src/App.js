import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  createDocument,
  getCollection,
  getDataCollection,
  onSnapshotDataCollection,
  setDocument,
} from './utils/firebase';

import './App.css';

const auth = getAuth();
const provider = new FacebookAuthProvider();

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const handleClick = async () => {
    const data = {
      title: 'Listar los datos de la collecion',
      description: 'Listar los datos de la collecion',
      isCompleted: true,
    }
    await createDocument('tasks', data);
  }

  const  getOnSnapshotDataCollection = async() =>{
    const col = getCollection('tasks');

    const unsubscribe = onSnapshotDataCollection(col, (snapshot) => {
      const tasks = [];
      snapshot.forEach((doc) => {
          tasks.push({
            id: doc.id,
            ...doc.data()
          });
      });
      setData(tasks);
    })

    return unsubscribe
  }

  const handleCreateAccount = async () => {
    const email = 'cristian.moreno@makeitreal.camp';
    const password = '123456';
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // Signed in
      setUser(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    }
  }

  const handleLogin = async () => {
    const email = 'cristian.moreno@makeitreal.camp';
    const password = '123456';
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      // Signed in
      setUser(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  }

  const handleLoginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;
      setUser(user);

      await setDocument('users', {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: 'user',
      });

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      console.log("🚀 ~ file: App.js ~ line 95 ~ handleLoginWithFacebook ~ credential", credential)
      const accessToken = credential.accessToken;
      console.log("🚀 ~ file: App.js ~ line 97 ~ handleLoginWithFacebook ~ accessToken", accessToken)
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 100 ~ handleLoginWithFacebook ~ error", error)
    }
  }

  const getSession = async () => {
    try {
      const user = await onAuthStateChanged(auth);
      console.log("🚀 ~ file: App.js ~ line 108 ~ getSession ~ user", user)
      if (user) {
        const uid = user.uid;
        setUser(user);
      }
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 114 ~ getSession ~ error", error)

    }
  }

  useEffect(() => {
    getDataCollection('tasks')
      .then(tasks => {
        setData(tasks);
      })

    getOnSnapshotDataCollection('tasks');

    if (auth.currentUser) {
      setUser(auth.currentUser);
    }
  }, [])

  return (
    <div className="App-header">
      <ul>
        {data.map(task => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>

      <button onClick={handleClick}>Create document</button>
      <br />
      <div>
        {
          user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button onClick={handleCreateAccount}> Crear Cuenta</button>
              <button onClick={handleLogin}> Iniciar Sesion</button>
              <button onClick={handleLoginWithFacebook}> FB Login </button>
            </>
          )
        }

        <button onClick={() => {getSession()}}>Get status</button>

      </div>
    </div>
  );
}

export default App;
