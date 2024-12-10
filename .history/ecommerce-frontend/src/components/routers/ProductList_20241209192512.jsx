import { useState, useEffect } from "react";
// import { fetchProducts } from "../Services/fetchApi";
import ProductAdder from "../Services/postApi";
// import firebaseApp from "../Services/fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { FetchProducts } from "../Services/fetchApi";
import { AuthContext } from "../Context/ContextProvider";
import { useContext } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { app } = useContext(AuthContext);

  // const { items, error, loading } = useShopProduct();

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
      console.log(productsData);
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
              <div className="container" key={product.id}>
                <li className="imageContainer">
                  <img src={product.image} alt={product.title} />
                </li>

                <div className="additionalInfoContainer">
                  <div className="titleContainer">
                    {" "}
                    <h4>{product.title}</h4>
                    <span className="rateEl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>star</title>
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                      </svg>
                      {product.rating.rate}
                    </span>
                  </div>
                  <p>{`Price: $${product.price}`}</p>

                  <div className="quantityContainer">
                    <button onClick={(e) => decrease(e, product.id)}>-</button>

                    <input
                      type="number"
                      data-index={product.id}
                      maxLength="20"
                      // onFocus={() => setOnFocus(true)}
                      value={quantity?.[product.id] || 0}
                      onChange={(e) => handleQuantity(e, product.id)}
                    />

                    <button onClick={(e) => increment(e, product.id)}>+</button>
                  </div>

                  <div className="priceOrderEl">
                    <button
                      className="orderBtn"
                      onClick={(e) => addToCart(e, product.id, product)}
                    >
                      Order now!
                    </button>
                  </div>
                </div>
              </div>

              // <li key={product.id} className="product" >
              //   <img src={product.imageUrl} alt={product.name} />
              //   <h2>{product.name}</h2>
              //   <p>{product.description}</p>
              //   <p>${product.price}</p>
              // </li>
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
      <FetchProducts />
    </>
  );
};