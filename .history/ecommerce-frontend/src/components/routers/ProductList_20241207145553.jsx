import { useState, useEffect } from "react";
import { fetchProducts } from "../Services/fetchApi";
import ProductAdder from "../Services/postApi";
import db

// import { useShopProduct } from "../Services/getProductFromFakeApi";

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
