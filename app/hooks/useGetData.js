import React, { useEffect, useState } from "react";
import app from "../firebase/config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const useGetData =  async collectionName => {
  const [docs, setDocs] = useState();

    const db = getFirestore(app);
    const colt = collection(db, collectionName);
    const querySnapshot = await getDocs(colt);
    querySnapshot.forEach(doc => {
      const ndoc = { id: doc.id, ...doc.data() };
      setDocs([...docs, ndoc]);
      // docs.push(ndoc);
    });

  useEffect(() => {
    getData()
  }, []);

  return docs;
};

export default useGetData;
