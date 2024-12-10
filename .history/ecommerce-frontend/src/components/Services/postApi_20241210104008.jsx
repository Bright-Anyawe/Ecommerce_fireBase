import { useEffect } from "react";
import { useShopProduct } from "./getProductFromFakeApi";
import { addDoc,collection } from "firebase/firestore";

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


    try {
      console.log("Sending request:", formattedProducts);
      for (const product of formattedProducts) {
        const docRef = await addDoc(collection(db, "products"), product);
        console.log("Document written with  successfully ID: ", docRef.id);
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
  }, []);

  return <div>Adding product...</div>;
};

export default ProductAdder;
