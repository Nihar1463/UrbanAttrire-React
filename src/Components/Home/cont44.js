import "./cont44.css";
import Tshirtoff from "../image/tshirt_off.png";
import Shirtoff from "../image/shirt_off.png";
import Jeansoff from "../image/jeans_off.png";
import Trouserstoff from "../image/trouser_off.png";
import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function Cont44() {
  return (
    <>
      <div id="sale">
        <h1>SALE IS ON...</h1>
      </div>

      <div id="cont44">
        <div class="item">
          <Link to="/Half_S_T-shirt">
            <div class="img1">
              <img src={Tshirtoff} alt="" />
            </div>
          </Link>

          <p>T-Shirts</p>
          <h2>UP TO 70% OFF</h2>
        </div>
        <div class="item">
          <Link to="/All_Shirt">
            <div class="img1">
              <img src={Shirtoff} alt="" />
            </div>
          </Link>
          <p>Casual Shirts</p>
          <h2>UP TO 55% OFF</h2>
        </div>
        <div class="item">
          <Link to="/New_arrival_jeans">
            <div class="img1">
              <img src={Jeansoff} alt="" />
            </div>
          </Link>

          <p>Jeans</p>
          <h2>UP TO 40% OFF</h2>
        </div>
        <div class="item">
          <div class="img1">
            <img src={Trouserstoff} alt="" />
          </div>
          <p>Trousers</p>
          <h2>UP TO 33% OFF</h2>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
}
export default Cont44;
