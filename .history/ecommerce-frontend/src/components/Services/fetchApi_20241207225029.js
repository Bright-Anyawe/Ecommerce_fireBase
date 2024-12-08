import axios from "axios";
import { db } from "./fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";

const API_URL = "http://localhost:5000/api";

const productCollectionRef = collection(db, "products")
export const fetchProducts = async () => {


  const response = await getDocs(productCollectionRef)
  console.log(response. );

  return response.data;
};
