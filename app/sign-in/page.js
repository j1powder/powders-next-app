'use client'
import { useState, useEffect, useContext } from 'react';
import { projectAuth } from '@/firebaseConfig';
import { AuthContext } from '@/context/AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link'



const SignInPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [user, setUser] = useState(null)
  const {currentUser, signIn, signUp, signOutUser } = useContext(AuthContext);
  //const {user, signInWithEmailPassword, signUpWithEmailPassword, signOutUser} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(email, password);
      console.log('Logged in user:', currentUser);
      // Redirect or handle successful login
      setEmail('');
      setPassword('');
      //setShow(false)
      //router.push('/dashboard')
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle error
    }
  };

 console.log(currentUser)

  return (
    <div>
      <br/>
      <div className='container-md'>
        <Link href="/"><button className='btn btn-primary'>Back</button></Link>
        </div>
      
      {currentUser ? (
      <div className='container-md'>
          <div className='row'>
            <div className='col-12'>
          <p>Welcome, {currentUser.displayName}!</p>
          <button className='btn btn-primary' onClick={signOutUser}>Sign Out</button>
        </div>
        </div>
        </div>
      ) : (
        <div className='container-md'>
          <div className='row'>
            <div className='col-12'>
          <input
            style={{marginTop:"2rem"}}
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>
          <input
            style={{marginTop:"0rem"}}
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button className='btn btn-primary' onClick={handleLogin}>Sign In with Email/Password</button>
          {/* <button onClick={signUpWithEmailPassword}>Sign Up with Email/Password</button> */}
        </div>
      </div>
    </div>

      )}
    </div>
  );
};

export default SignInPage;
