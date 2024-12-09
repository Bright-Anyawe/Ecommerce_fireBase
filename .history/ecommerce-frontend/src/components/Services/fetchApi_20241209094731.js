import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { GeneralContext } from "../Context/ContextProvider";
import { useContext } from "react";

const {app} = useContext(GeneralContext)

const db = getFirestore(app)
const productCollectionRef = collection(db, "products");

export const fetchProducts = () => {

  
 const fetchProducts = async () => {
  try {
    const querySnapShot = await getDocs(productCollectionRef);
    const products = querySnapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
}

