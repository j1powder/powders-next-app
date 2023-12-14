import { projectFirestore } from "@/firebaseConfig";
import {collection, getDocs} from 'firebase/firestore';


export const getUsers = async () => {
    let results = [];
    try {
        const snapshot = await getDocs(collection(projectFirestore,'users')); 
        const data = snapshot.docs.forEach(doc=>{
          results.push({...doc.data(), id: doc.id})
        });
        //console.log(results)
        return results;
      } catch (error) {
        throw new Error(error.message);
      }
}