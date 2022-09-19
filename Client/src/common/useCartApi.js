const useCartApi = () => {
    const url = "http://localhost:9000/api/cart"; //url get from proxy

    const addCart = async (productId, count, token) => {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        productId,
        count: count,
      };
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers,
      });
    };
  
    const updateCart = async (productId, count, token) => {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        productId,
        count: count,
      };
      return fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers,
      });
    };
  
    const deleteCart = async (token, userId) => {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        userId
      };
      return fetch(url, {
        method: "DELETE",
        body: JSON.stringify(body),
        headers,
      });
    };
  
    const getCart = async (token) => {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      return fetch(url, {
        method: "GET",
        headers,
      });
    };
  
    const buyCart = async (token, cartId) => {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",

      };
      const body = {
          cartId,
        };
      return fetch("http://localhost:9000/api/order", {
        method: "POST",
        body: JSON.stringify(body),
        headers,
      });
    };
  
    return {
      addCart,
      updateCart,
      deleteCart,
      getCart,
      buyCart
    };
  };
  
  export default useCartApi;