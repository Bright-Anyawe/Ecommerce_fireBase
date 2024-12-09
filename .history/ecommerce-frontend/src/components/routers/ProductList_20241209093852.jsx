import { useState, useEffect } from "react";
// import { fetchProducts } from "../Services/fetchApi";
import ProductAdder from "../Services/postApi";
import firebaseApp from "../Services/fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp);
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


export const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const { items, error, loading } = useShopProduct();
  
  

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
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>
                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </li>
            ))
          ) : (
            <p>No products available.</p>
          )}

          {/* {products.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </li>
            );
          })} */}
        </ul>
      </div>
      <ProductAdder />
    </>
  );
};
