import { useState, useEffect } from "react";
import { fetchProducts } from "../Services/fetchApi";
import ProductAdder from "../Services/postApi";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const { items, error, loading } = useShopProduct();
  
  import { getDocs, collection } from "firebase/firestore";
  import { getFirestore } from "firebase/firestore";

  const db = getFirestore(app);
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


   useEffect(() => {
     const getProducts = async () => {
       const productsData = await fetchProducts();
       console.log(productsData)
       setProducts(productsData);
     };
     getProducts();
   }, []);
  return (
    <>
      <div>
        <h1>This is the product page!</h1>
        <ul>
          {products.map((product) => {
            return (
              <li key={product._id}>
                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <ProductAdder/>
    </>
  );
};
