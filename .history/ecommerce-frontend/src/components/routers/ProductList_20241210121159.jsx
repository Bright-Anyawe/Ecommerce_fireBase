import { useState, useEffect } from "react";
// import { fetchProducts } from "../Services/fetchApi";
import ProductAdder from "../Services/postApi";
// import firebaseApp from "../Services/fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { FetchProducts } from "../Services/fetchApi";
import { AuthContext } from "../Context/ContextProvider";
import { useContext } from "react";
import { QuantityContext } from "../Context/ContextProvider";

export const ProductList = () => {
  const { cartCount, setCartCount, inputQuantity, setInputQuantity } =
    useContext(QuantityContext);
  const [products, setProducts] = useState([]);
  const { app } = useContext(AuthContext);

  const db = getFirestore(app);
  const productCollectionRef = collection(db, "products");

  const increment = (e, productId) => {
    let siblingValue = e.target.previousElementSibling.value;

    console.log(productId);

    const increaseQuantity = parseInt(siblingValue) + 1;
    console.log(increaseQuantity);

    setInputQuantity((prevQuantities) => ({
      ...prevQuantities,
      [productId]: increaseQuantity,
    }));
  };

  const decrease = (e, productId) => {
    let sibling = e.target.nextElementSibling.value;
    console.log(sibling);

    // console.log(quantity[itemId]);
    const decreaseQuantity = parseInt(sibling) - 1;
    console.log(decreaseQuantity);

    setInputQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: decreaseQuantity,
    }));
  };

  function handleQuantity(e, productId) {
    const newQuantity = parseInt(e.target.value);

    if (inputQuantity !== undefined) {
      setInputQuantity((prevQuantities) => ({
        ...prevQuantities,
        [productId]: newQuantity,
      }));
    }
  }

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

  const removeDuplicates = (products) => {
    const uniqueProducts = products.filter(
      (product, index, self) =>
        index ===
        self.findIndex(
          (p) => p.name === product.name && p.price === product.price // Compare relevant properties
        )
    );
    return uniqueProducts;
  };

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      const uniqueProduct = removeDuplicates(productsData);
      console.log(uniqueProduct);
      setProducts(uniqueProduct);
    };
    getProducts();
  }, []);
  return (
    <>
      <div>
        <ul className="shopProductContainer">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="container" key={product.id}>
                <li className="imageContainer">
                  <img src={product.imageUrl} alt={product.name} />
                </li>

                <div className="additionalInfoContainer">
                  <div className="titleContainer">
                    {" "}
                    <h4>{product.name}</h4>
                  </div>

                  <p>{`Price: $${product.price}`}</p>

                  <div className="quantityContainer">
                    <button onClick={(e) => decrease(e, product.id)}>-</button>
                    <button>-</button>

                    <input
                      type="number"
                      data-index={product.id}
                      maxLength="20"
                      // onFocus={() => setOnFocus(true)}
                      value={inputQuantity?.[product.id] || 0}
                      onChange={(e) => handleQuantity(e, product.id)}
                    />

                    <button onClick={(e) => increment(e, product.id)}>+</button>
                  </div>

                  <div className="priceOrderEl">
                    {/* <button
                      className="orderBtn"
                      onClick={(e) => addToCart(e, product.id, product)}
                    >
                      Order now!
                    </button> */}

                    <button className="orderBtn">Order now!</button>
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
