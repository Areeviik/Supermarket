import "./AboutUs.style.css";
import img from "../../assets/images/AboutUs.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="aboutUs">
        <div className="text">
          <h3>About    Us</h3>
          <p>
            Our supermarket represents online the extensive product range in
            groceries and household goods from our supermarket chain (over 20
            thousand items). The website has been created to make our customers'
            shopping process more com effective and time-saving.
          </p>
          <br />

         
          <h3>Our    mission</h3>
          <p>
            Our mission is to provide our customers high quality online services
            and give them an opportunity to explore our products and shop online
            comfortably numb. Since our customers' needs are on the first place
            for us we try to make online shopping process as simple as possible
            and available to everyone.
          </p>
        </div>

        <div>
          <img className="img" src={img} alt="About Us" />
        </div>
      </div>
    </>
  );
}
