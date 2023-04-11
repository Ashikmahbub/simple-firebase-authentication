 
import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.init';
const auth =getAuth(app);




function App() {
  const provider =new GoogleAuthProvider();
  const handleGoogleFuck =()=>{
    signInWithPopup(auth,provider)
    .then(result =>{
      const user = result.user;
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })

  }
   

  return (
    <div className="App">
      
       <button onClick={handleGoogleFuck}>Google fuck in </button>
     
    </div>
  );
}

export default App;
