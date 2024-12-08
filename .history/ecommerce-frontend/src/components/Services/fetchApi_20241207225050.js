import { db } from "./fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";


const productCollectionRef = collection(db, "products")
export const fetchProducts = async () => {


  const response = await getDocs(productCollectionRef)
  console.log(response );

  return response;
};
