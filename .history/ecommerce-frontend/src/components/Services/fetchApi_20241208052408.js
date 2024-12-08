import { db } from "./fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";


const productCollectionRef = collection(db, "products")
export const fetchProducts = async () => {


  const query = await getDocs(productCollectionRef)
  response.docs.map((doc) => ({
    doc.id, 

  }))
  console.log(response );

  return response;
};
