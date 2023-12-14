'use client'

import React,{useContext} from 'react'
import Link from 'next/link'
import { AuthContext } from '@/context/AuthContext'


const HomePage = (props) => {
  const {currentUser} = useContext(AuthContext)
  
if(!currentUser) {
    return <div className='container-md'>
        <h1>Please Log in to view the data</h1>
    </div>
}



 if(currentUser){
    return (
        <div className='container-md'>
        <Link href="/sign-in">Go to sign In</Link>
          <div className='row'>
            <div className='col-6'>
            <h3>This is my App</h3> 
        {props.myData && props.myData.map((user)=>{
          return <div key={user.id} style={{
            border: "1px gray solid",
            margin: ".3rem",
            padding: ".5rem",
            borderRadius: "5px"
          }}>
            <p ><b>Name:</b> {user.firstName + " " + user.lastName}</p>
            <p><b>Company:</b> {user.company}</p>
            </div>
        })}
        
        
            </div>
    
            <div className='col-6'>
    
            <button className='btn btn-primary'>This Button</button>
    
            </div>
    
          </div>
          
        </div>
      )
 }


}

export default HomePage;