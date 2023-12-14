//'use client'
import {useContext} from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { projectFirestore } from '@/firebaseConfig';
import {collection, getDocs} from 'firebase/firestore';
//import Card from 'react-bootstrap/Card'
import { getUsers } from '@/lib/collections';
import Link from 'next/link'
import HomePage from '@/components/HomePage';
//import { AuthContext } from '@/context/AuthContext';


export default async function Home({ data }) {
//const { currentUser } = useContext(AuthContext);



//normal client side fetching

/*   useEffect(()=>{
  let results=[];
  const fetchData = async () => {
  const querySnapshot = await getDocs(collection(projectFirestore, "users"));
  querySnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    results.push({id: doc.id, ...doc.data()});
  });
  console.log(results);
  setMyData(results);
}
fetchData()
  },[]) */


// **function to call when rendered as SS Component **
 const myData = await getUsers();



console.log(myData)

  
  return (
    <main>
      <br/>
      <br/>
      <HomePage myData={myData} />
      
      

    </main>
  )
}





/* export async function getServerSideProps() {
  const db = projectFirestore;
  const collectionRef = await getDocs(collection(db,'users'));

  try {
    const snapshot = collectionRef;

    // Map the Firestore document data to an array
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
} */