import fireBaseConfig from "./fireBaseConfig";

import { getDocs, collection } from "firebase/firestore";

const productCollectionRef = collection(db, "products");
export const fetchProducts = async () => {
    const { db } = fireBaseConfig();


  try {
      const querySnapShot = await getDocs(productCollectionRef);
      const products = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(products);
      return products
  } catch (error) {
        console.error("Error fetching products:", error);
        return [];

  }

};