const useProductApi = () => {
    const url = "http://localhost:9000/api/products";

    const getProducts = async () => {
        const headers = {
        };
        return fetch(url, {
          method: "GET",
          headers,
        });
      };
    return {
        getProducts
      };
};

export default useProductApi;