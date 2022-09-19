import { useEffect, useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProdList.style.css";
import { ProductsContext } from "../../App";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { FaSearch } from "react-icons/fa";

export default function ProductList() {
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [inputValue, setInputValue] = useState("");

  const context = useContext(ProductsContext);

  const handleClearClick = () => {
    setInputValue("");
  };

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
    setSelectedSort("None");
  };

  function handleCategoryChange({ target: { value } }) {
    setSelectedCategory(value);
    setSelectedSort("None");
  }

  function handleSortChange({ target: { value } }) {
    switch (value) {
      case "increase":
        context.products.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case "decrease":
        context.products.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      default:
        break;
    }
    setSelectedSort(value);
  }

  const handleShow = () => setShow(!show);

  useEffect(() => {
    fetch("http://localhost:9000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  const categories = Array.from(new Set(category.map((item) => item.category.charAt(0).toUpperCase() + item.category.slice(1))));

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("http://localhost:9000/api/products/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword: inputValue,
          category: selectedCategory,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoader(false);
          context.setProducts(data);
        });
    }, 700);
    return () => clearTimeout(timer);
  }, [selectedCategory, inputValue]);

  const handleAddToCart = (productId) => () => {
    const token = JSON.parse(localStorage.getItem('me'))?.token
    
    fetch(
      'http://localhost:9000/api/cart',
      {
        method: 'POST',
        body: JSON.stringify({
          productId
        }),
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    ).then((res) => {
      console.log(res.status);
      if (res.status === 401) {
        return setShow(true)
      }
    })
  }

  return (
    <div className="mainDivClass">
      <div className="filters">
        <div className="filterContainer">
          <div>Filter by Category:</div>
          <div>
            <select className="categoryList" onChange={handleCategoryChange}>
              <option value="">All</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
              
            </select>
          </div>
        </div>

        <div className="sortContainer">
          <div>Sort by:</div>
          <div>
            <select
              className="categoryList"
              value={selectedSort}
              onChange={handleSortChange}
            >
              <option value="">None</option>
              <option value="decrease">Price high to low</option>
              <option value="increase">Price low to high</option>
            </select>
          </div>
        </div>

        <div className="search">
          <FaSearch className="srch" />
          <form>
            <input
              className="input"
              placeholder="Search..."
              onChange={handleInputChange}
              value={inputValue}
            />
            {inputValue !== "" && (
              <button onClick={handleClearClick} className="clearbtn">
                Clear
              </button>
            )}
          </form>
        </div>
      </div>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Sign in to add items to your trolley.</Modal.Body>
        <Modal.Footer>
          <Link to={"/login"}>
            <Button variant="secondary">
              Sign in
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      {loader ? (
        <Loader />
      ) : (
        context.products.map(({ id, imgUrl, title, price }) => {
          return (
            <div key={id} className="classproductlist">
              <Link to={`/products/${id}`} style={{ height: "50px" }}>
                <img src={imgUrl} alt={title} className="imgClass" />
              </Link>
              <p className="pclassname">{title}</p>
              <p className="pclassprice">Price: ${price}</p>
              <button className="buttonclassS" onClick={handleAddToCart(id)}>
                Add To Cart
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
