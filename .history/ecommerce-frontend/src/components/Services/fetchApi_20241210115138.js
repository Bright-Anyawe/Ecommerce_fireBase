import { getDocs, collection } from "firebase/firestore";
import { GeneralContext } from "../Context/ContextProvider";
import { useContext, useEffect } from "react";

  
  
  const { db} = useContext(GeneralContext)
  
  const productCollectionRef = collection(db, "products");
  
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
export fetchProducts
 

