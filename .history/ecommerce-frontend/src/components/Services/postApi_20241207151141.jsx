import { useEffect } from "react";
import { useShopProduct } from "./getProductFromFakeApi";
import { db } from "./fireBaseConfig";
import { addDoc,collection } from "firebase/firestore";

import axios from "axios";

const API_URL = "http://localhost:5000/api";

const ProductAdder = () => {
  const { items } = useShopProduct();

  const storageProduct = items;
  // console.log(storageProduct);

  const addProduct = async () => {
    const formattedProducts = storageProduct.map((product) => ({
      name: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.image,
      category: product.category || "unCategorized",
    }));

    let lastIndex = 5;
    const extractedArr = formattedProducts.slice(0, lastIndex);
    console.log(extractedArr);

    try {
      console.log("Sending request:", extractedArr);
      for (const product of extractedArr) {
        const docRef = await addDoc(collection(db, "products"), product)
        const response = await axios.post(`${API_URL}/products`, product);
        console.log("Product added successfully:", response.data);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  useEffect(() => {
  //   console.log(storageProduct)
  if (storageProduct.length > 0) {
    addProduct();
  }
  }, [storageProduct]);

  return <div>Adding product...</div>;
};

export default ProductAdder;
