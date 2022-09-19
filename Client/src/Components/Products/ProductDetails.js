import "./ProductDetails.style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function ProductDetails(props) {
  const [show, setShow] = useState(false);
  // const handleShow = () => setShow(!show);
  const { id } = useParams();
  function signInOnClick(){

  }
  const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
      fetch(
          "http://localhost:9000/api/products/" + id,
      ).then(res => res.json())
      .then((x) => {
          setProduct(x)
          setLoader(false)
        })
    }, [])


    const handleAddToCart = () => {
      const token = JSON.parse(localStorage.getItem('me'))?.token
      
      fetch(
        'http://localhost:9000/api/cart',
        {
          method: 'POST',
          body: JSON.stringify({
            productId: id
          }),
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type' : 'application/json'
          }
        }
      ).then((res) => {
        console.log(id);
        if (res.status === 401) {
          return setShow(true)
        }
      })
    }

  return (
    <>
      <Modal show={show} >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>Sign in to add items to your trolley.</Modal.Body>
        <Modal.Footer>
        <Link to={"/login"} >
          <Button variant="secondary" onClick={signInOnClick}>
            Sign in
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <div className="maindivclass">
        <div className="imageDiv">
          <img className="imageClass" src={product.imgUrl} alt=""  width="400" />
        </div>
        <div className="ProdDetrigth">
          <h1 className="ProdDeths">{product.title}</h1>
          <h1 className="ProdDeths">${product.price}</h1>
          <p className="ProdDetcount">Available: {product.count}</p>
          <button className="buttonclass" onClick={handleAddToCart}>Add To Cart</button>
          <p className="ProdDetdescription">{product.description}</p>
          <h4 className="ProdDeths">{product.country}</h4>
          <p >Category: {product.category}</p>
        </div>
      </div>
    </>
  );
}
