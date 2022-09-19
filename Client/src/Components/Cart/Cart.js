import { useEffect, useState } from "react";
import img from "../../assets/images/emptyBasket.png";
import trash from "../../assets/images/trash.png";
import useCartApi from "../../common/useCartApi";
import "./Cart.style.css";

export default function Cart() {
  const [_, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const { updateCart, deleteCart, getCart, buyCart } = useCartApi();
  const token = JSON.parse(localStorage.getItem("me"))?.token;
  const userId = JSON.parse(localStorage.getItem("me"))?.id;
  var basketId = 0;

  useEffect(() => {
    getCart(token)
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          setProducts(
            res.cart.map((item) => {
              const { count, product } = item;
              return { ...product, count };
            })
          );
          setLoader(false);
        }
      });
  }, []);

  function handleIncrementClick(id, count) {
    return function () {
      updateCart(id, count + 1, token);
      setProducts((prevState) =>
        products.map((product) =>
          id === product.id ? { ...product, count: product.count + 1 } : product
        )
      );
    };
  }

  function handleDecrementClick(id, count) {
    return function () {
      updateCart(id, count - 1, token);
      setProducts((prevState) =>
        products.map((product) =>
          id === product.id ? { ...product, count: product.count - 1 } : product
        )
      );
    };
  }

  function handleProductRemove(productId) {
    return function () {
      updateCart(productId, 0, token);
      setProducts((prevState) => products.filter(({ id }) => productId !== id));
    };
  }

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  const handleDeleteAll = () => {
    setProducts([]);
    deleteCart(token, userId);
  };

  const handleBuyAll = (basketId) => () => {
    buyCart(token, basketId);
    deleteCart(token, userId);
    alert(
      "Your delivery is on it's way. Thanks for using our online Supermarket"
    );
    setProducts([]);
  };

  function handleCountChange(id) {
    return function (event) {
      const {
        target: { value },
      } = event;
      const re = /^[0-9\b]+$/;
      if (re.test(value) || value === "") {
        const count = +value;
        setProducts((prevState) =>
        products.map((product) =>
        id === product.id ? { ...product, count } : product
        )
        );
        updateCart(id, count, token);
      }
    };
  }

  const handleBlur = (productId) => () => {
    const currentProduct = products.find(({ id }) => id === productId);
    if (currentProduct && currentProduct.count === 0) {
      updateCart(productId, 1, token);
      setProducts((prevState) =>
        products.map((product) =>
          productId === product.id ? { ...product, count: 1 } : product
        )
      );
    }
  };

  return products.length && totalPrice ? (
    <div className="cartLayout">
      <div className="cartBody">
        <table className="table cartTable ">
          <thead>
            <tr>
              <th width="25%" className="thProduct">
                Product
              </th>
              <th width="20%">Price</th>
              <th width="25%">TotalPrice</th>
              <th width="10%">Count</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ id, imgUrl, title, price, count, cartId }) => {
              basketId = cartId;
              return (
                <tr key={id}>
                  <td className="firstCol">
                    <img src={imgUrl} width="30" height="30" alt="" /> {title}
                  </td>
                  <td>${price.toFixed(2)}</td>
                  <td>
                    <strong>${(price * count).toFixed(2)}</strong>
                  </td>
                  <td>
                    <div className="productButtons">
                      <button
                        className="productSub"
                        disabled={count === 1 || count === 0}
                        onClick={handleDecrementClick(id, count)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={count ? count : ""}
                        className="countInput"
                        onChange={handleCountChange(id)}
                        onBlur={handleBlur(id)}
                      ></input>
                      <button
                        className="productAdd"
                        onClick={handleIncrementClick(id, count)}
                      >
                        +
                      </button>
                      <img
                        className="trashImg"
                        src={trash}
                        alt="Trash"
                        onClick={handleProductRemove(id)}
                      />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3"></th>
              <th className="cartFooter">
                Total: <i>${totalPrice.toFixed(2)}</i>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="cartBtns">
        <br />
        <button className="buyBtn" onClick={handleBuyAll(basketId)}>
          Buy
        </button>
        <button className="deleteBtn" onClick={handleDeleteAll}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="emptyCartBg">
      <div className="emptyCart">
        <img src={img} alt="Empty basket" />
        <h2>Cart is empty!</h2>
        <p>It seems that you haven't any product yet</p>
      </div>
    </div>
  );
}