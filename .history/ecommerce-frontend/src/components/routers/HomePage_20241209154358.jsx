import { NavLink } from "react-router-dom";


export const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <img src="/image.png" alt="wardrop" />
        <div className="overlayContainer">
          <h2 className="overlayText">Make room for better living</h2>
          <button className="homeShopNowBtn">
            <NavLink to="productList">Shop Now</NavLink>
          </button>
        </div>
      </section>

      <section className="featuredProduct">
        <div className="homeHeadText">
          <h2>
            Welcome to <span className="shopText">ShopRyt</span>. Your One-Stop
            Shop for Everything You Need!
          </h2>

          <p>
            At ShopRyt, we believe in offering something for everyone. Whether
            you’re looking to refresh your wardrobe with stylish clothes,
            upgrade your tech with the latest electronics, or add a touch of
            elegance to your look with beautiful jewelry, we’ve got you covered.
          </p>
        </div>

        <div className="ourOfferContainer">
          <h1 className="offerEl">We Offer</h1>

          <div className="ourOfferSubContainer">
            <div className="free-fastContainer">
              <h2>free and fast shipping</h2>
              <img
                src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20fill='rgb(247,%20100,%201)'%3e%3cpath%20d='m3.307,11.412c5.009,2.212,9.836-2.176,8.452-7.136-.546-1.959-2.077-3.489-4.036-4.035C2.764-1.143-1.624,3.684.588,8.692c.532,1.205,1.514,2.187,2.719,2.719Zm1.693-9.412h2v3.586l2.207,2.207-1.414,1.414-2.793-2.793V2Zm19,8.5c0-3.033-2.468-5.5-5.5-5.5h-1.5v-.5h0c0-1.93-1.57-3.5-3.5-3.5h-1.26c.715.891,1.238,1.939,1.52,3.083.141.088.241.238.241.417,0,0,0,0,0,0v12.499H3v-3h0v-.587C1.838,12.942.815,12.205,0,11.279v2.721s0,0,0,0v5.999h3.058c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5h8.115c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5h3.058v-9.5Zm-5.5-2.5c1.379,0,2.5,1.122,2.5,2.5v2.5h-4v-5h1.5Z'/%3e%3c/svg%3e"
                alt=""
              />
            </div>

            <div className="customerServiceContainer">
              <h2>Excellent customer support</h2>
              <img
                src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20fill='rgb(247,%20100,%201)'%3e%3cpath%20d='m21,21.5v2.5H3v-2.5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5ZM6.872,4.027c1.529-1.433,3.531-2.141,5.63-2.011,3.924.254,6.999,3.669,6.999,7.774,0,1.77-1.439,3.209-3.209,3.209h-2.406c-.244-.829-1.002-1.439-1.91-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.538,0,1.025-.215,1.384-.561h2.932c2.872,0,5.209-2.337,5.209-5.209C21.5,4.634,17.604.342,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.787,1.675-2.861,3.996-2.99,6.432h2.003c.123-1.903.948-3.654,2.355-4.973Zm8.228,6.973h1.368c.501,0,.939-.368.997-.866.068-.587.043-1.202-.091-1.831-.444-2.079-2.131-3.756-4.213-4.184-3.537-.727-6.659,1.97-6.659,5.381,0,1.469.579,2.805,1.52,3.792,0,0,0,0,0,0,.11-2.111,1.841-3.793,3.979-3.793,1.258,0,2.366.592,3.099,1.5Z'/%3e%3c/svg%3e"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
