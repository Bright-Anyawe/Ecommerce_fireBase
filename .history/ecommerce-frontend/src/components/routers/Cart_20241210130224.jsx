import { useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { QuantityContext } from "../Context/ContextProvider";
import { Delete } from "../Feature Components/Delete";

export default function Cart() {
  const { qtySummery, setSummery } = useContext(QuantityContext);
  const [totalCostPrice, seTotalCostPrice] = useState([]);


  useMemo(() => {
    function handleCostPrice() {
      console.log(qtySummery);

      if (qtySummery.length !== 0) {
        const totalCost = qtySummery.reduce((acc, summery) => {
          return acc + summery.productPrice * summery.QtySelected;
        }, 0);
        seTotalCostPrice(totalCost);
      }
    }

    handleCostPrice();
  }, [qtySummery]);

  return (
    <>
      <div className="summeryListContainer">
        <ul className="summeryListSubContainer">
          {qtySummery.length !== 0 ? (
            qtySummery.map((summery, index) => {
              return (
                <li className="summerList" key={index}>
                  <img src={summery.productUrl} alt={summery.productTitle} />

                  <div className="summeryTextContainer">
                    <div className="productPrice_TitleContainer">
                      <h4>{summery.productTitle}</h4>
                      <div className="">{`$${summery.productPrice}`}</div>
                    </div>

                    <div className="delQtySelectedContainer">
                      <h5>{`Qty: ${summery.QtySelected}`}</h5>
                      <Delete
                        qtySummery={qtySummery}
                        productIndex={index}
                        setSummery={setSummery}
                      />
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p className="itemNotSelected">
              You have not selected any product yet!{" "}
            </p>
          )}
        </ul>

        <div className="totalSummery">
          <h2>Summery</h2>

          <div>Congratulation! on free shipping</div>

          <div className="totalContainer">
            <div className="subTotal">
              <p>subTotal: </p>
              <p>${totalCostPrice}</p>
            </div>
            <div className="shippingFee">
              <p>Free Shipping</p>
              <p>$00. 00</p>
            </div>

            <div className="total">
              <p>Total: </p>
              <p>${totalCostPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
