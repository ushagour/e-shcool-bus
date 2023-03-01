import app from "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const getData = async collectionName => {
  const db = getFirestore(app);

  const querySnapshot = await getDocs(collection(db, collectionName));
  
  const fetchedData = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return fetchedData;
};

export default getData;
