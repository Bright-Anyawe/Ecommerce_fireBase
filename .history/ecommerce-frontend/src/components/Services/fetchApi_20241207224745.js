import axios from "axios";
import { db } from "./fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";

const API_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {

  const productCollectionRef = collection()

  const response = await axios.get(`${API_URL}/products`);
  console.log(response.data);

  return response.data;
};
