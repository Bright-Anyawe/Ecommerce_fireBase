import { db } from "./fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";

const productCollectionRef = collection(db, "products");
export const fetchProducts = async () => {

  

  return products;
};
