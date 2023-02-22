import app from "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const getData = async collectionName => {
  let docs = [];

  const db = getFirestore(app);

  const querySnapshot = await getDocs(collection(db, collectionName));

  
  const fetchedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));



//   const colt = collection(db, collectionName);
//   const querySnapshot = await getDocs(colt);
//   querySnapshot.forEach(doc => {
//     const ndoc = { id: doc.id, ...doc.data() };
//     //   setDocs([...docs, ndoc]);
//     docs.push(ndoc);
//   });

  return fetchedData;
};

export default getData;
