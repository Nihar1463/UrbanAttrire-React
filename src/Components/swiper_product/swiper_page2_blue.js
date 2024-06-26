import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollRestoration } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper_page2.css";
import I1 from "../image/swiper_img/blueS.webp";
import I2 from "../image/swiper_img/blueS2.webp";
import I3 from "../image/swiper_img/blueS3.webp";
import I4 from "../image/swiper_img/blueS4.webp";
import I5 from "../image/swiper_img/p2_itm6.webp";
import I6 from "../image/swiper_img/p2_itm5.webp";
import I7 from "../image/swiper_img/p2_itm6.webp";
import I8 from "../image/swiper_img/blueH.webp";
import I9 from "../image/swiper_img/blueV.webp";
import II1 from "../image/swiper_img/itm1.webp";
import II11 from "../image/swiper_img/item11.webp";
import II2 from "../image/swiper_img/item2.webp";
import II22 from "../image/swiper_img/item22.webp";
import II3 from "../image/swiper_img/item3.webp";
import II33 from "../image/swiper_img/item33.webp";
import II4 from "../image/swiper_img/recomd1.webp";
import II44 from "../image/swiper_img/recomd11.webp";
import Head from "../Header/header";
import Footer from "../Footer/footer";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { itemData } from "../Mens_Arrival/Data";
import { useCart } from "../Context/CartContext";

// import required modules
import { Link, useParams } from "react-router-dom";

function Swip_p2_blue() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const filterProduct = itemData.filter((product) => product.id == id);
    // console.log(filterProduct)
    setProduct(filterProduct[0]);
  }, [id]);
  return (
    <>
      <Head />
      <div id="Cnt1_Sw2">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="swiper-slide_Sw2">
              <img src={product.img} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="swiper-slide_Sw2">
              <img src={product.img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide_Sw2">
              <img src={product.img3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide_Sw2">
              <img src={product.img4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide_Sw2">
              <img src={product.img5} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div id="Cnt1_right_Sw2">
          <div class="price_name_Sw2">
            <p>
              IN STOCK <br />
              ⭐⭐⭐⭐⭐ 22 reviews
            </p>
            <h2>{product.name}</h2>
            {/* <h2>
              The Conrad Shirt <br />
              in Seaside Embroidery
            </h2> */}
            <h2 class="price_Sw2">{product.price}/-</h2>
          </div>
          <div class="color_size_Sw2">
            <p>
              Color: <b>{product.color}</b>
            </p>

            <div class="Clr_option_Sw2">
              {}
              <div class="clr_Sw2">
                <Link>
                  <img src={product.img} alt="" class="clr_img_Sw2" />
                </Link>
              </div>
              {/* <div class="clr_Sw2">
                <Link to="/blue">
                  <img src={I7} alt="" class="clr_img_Sw2" />
                </Link>
              </div> */}
            </div>
            <p >Size:<b id="size_change">XS-34</b></p>
            <div class="size_Sw2">
              <div
                class="size_SML_Sw2"
                onClick={() => {
                  document.getElementById("size_change").innerText =
                    "XS-34";
                }}
              >
                XS <br />
                34
              </div>
              <div class="size_SML_Sw2" onClick={() => {
                  document.getElementById("size_change").innerText =
                    "S-36";
                }}>
                S <br />
                36
              </div>
              <div class="size_SML_Sw2" onClick={() => {
                  document.getElementById("size_change").innerText =
                    "M-38";
                }}>
                M <br />
                38
              </div>
              <div class="size_SML_Sw2" onClick={() => {
                  document.getElementById("size_change").innerText =
                    "L-40";
                }}>
                L <br />
                40
              </div>
            </div>
            <button onClick={() => addToCart(product)}>ADD TO CART</button>
            <div id="details_Sw2">
              <div id="detail_Left_Sw2">
                <p class="p_dtl_Sw2">
                  <i class="fa-solid fa-hands-bubbles"></i> Dry-Clean Only
                </p>
                <p>
                  <i class="fa-solid fa-rotate-left"></i> 7-Days Return Policy
                </p>
              </div>
              <div id="detail_Right_Sw2">
                <p class="p_dtl_Sw2">
                  <i class="fa-brands fa-cotton-bureau"></i> 100% Cotton
                </p>
                <p>
                  <i class="fa-solid fa-truck-fast"></i> Fast Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cnt2_Sw2">
        <div id="part1_Sw2">
          <div id="part1_1_Sw2">
            <h4>DESCRIPTION</h4>
            <br />
            <p>
              A timeless camp collar silhouette, The Conrad Shirt is built with
              beachside bonfires and cabana cocktails in mind. This 100% organic
              cotton iteration is washed for a vintage hand feel and finished
              with striking yet understated embroidered detailing.
              <br />
              <br />
              Features our signature chest-based sizing for a tailored fit that
              sits close to the body and tapers gently to the waist.
            </p>
          </div>
          <div id="part1_2_Sw2">
            <h4>MATERIAL</h4>
            <br />
            <p>
              Built from 100% organic cotton certified by the Global Organic
              Textile Standard (GOTS) to ensure environmental and social
              responsibility at every stage of production.
              <br />
              <br />
              The Conrad Shirt features a shorter hem for untucked wear and a
              laid-back fit with high arm holes to prevent bunching.
            </p>
          </div>
        </div>
        <div id="part2_Sw2">
          <div id="part2_1_Sw2">
            <h4>SPECIFICATIONS</h4>
            <ul>
              <li>4.5-oz. 100% organic cotton.</li>
              <li>
                Tailored fit with high armholes to prevent bunching and increase
                range of movement.
              </li>
              <li>Frond embroidery placed throughout the shirt.</li>
              <li>Washed for a soft, lived-in feel.</li>
              <li>Sleeve length measures 9" from shoulder.</li>
              <li>Shorter length to be worn untucked.</li>
              <li>Two rounded chest pockets.</li>
              <li>Double needle felled construction.</li>
              <li>Natural buttons.</li>
              <li>Wash cold and tumble dry low.</li>
              <li>Made in India.</li>
              <li>Model is 6'2", wearing a Medium.</li>
            </ul>
          </div>
        </div>
        <div id="part3_Sw2">
          <div id="part3_1_Sw2">
            <h4>LIMITED</h4>
            <br />
            <p>
              This product is part of a small batch manufacturing run that may
              use exclusive materials like dead stock fabrics.
              <br />
              <br />
              The product is limited in quantity and may never be in stock
              again. Limited products are available for immediate shipping.
            </p>
          </div>
        </div>
      </div>
      <div id="cnt3_Sw2">
        <img src={product.img6} alt="" id="c3_ig1_Sw2" />
      </div>
      <div id="cnt4_Sw2">
        <div id="cnt4_left_Sw2">
          <img src={product.img7} alt="" id="c3_ig1_Sw2" />
        </div>
        <div id="cnt4_right_Sw2">
          <div id="c4_right_inner_Sw2">
            <p id="p1_Sw2">THIS GARMENT IS MADE WITH</p>
            <br />
            <h3>Organic Cotton</h3>
            <br />
            <p>
              Who doesn’t love cotton? It’s soft, versatile, and
              low-maintenance. Unfortunately, the conventionally grown stuff is
              absurdly wasteful and often relies on harmful chemicals. That’s
              why this product is built with organic cotton—all of the benefits,
              none of the BS.
            </p>
            <button id="btn1_Sw2">LEAR MORE</button>
            <button id="btn2_Sw2">SHOP ORGANIC COTTON</button>
          </div>
        </div>
      </div>
      <div id="cnt5_Sw2">
        <h3>RECOMMENDATIONS FOR YOU...</h3>
        <div class="product_C2_Sw2">
          <div class="content_Sw2">
            <div class="items_Sw2">
              <Link to={product.url1}>
                <div class="itmImg_Sw2">
                  <img src={product.r1} alt="" class="imgg_Sw2" />
                  <img src={product.r1H} alt="" class="imgg2_Sw2" />
                </div>

                <div class="itm_name_Sw2">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>

                  <button class="cartbtn_Sw2">Add To Cart</button>
                </div>
              </Link>
            </div>

            <div class="items_Sw2">
              <Link to={product.url2}>
                <div class="itmImg_Sw2">
                  <img src={product.r2} alt="" class="imgg_Sw2" />
                  <img src={product.r2H} alt="" class="imgg2_Sw2" />
                </div>
                <div class="itm_name_Sw2">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button class="cartbtn_Sw2">Add To Cart</button>
                </div>
              </Link>
            </div>
            <div class="items_Sw2">
              <Link to={product.url3}>
                <div class="itmImg_Sw2">
                  <img src={product.r3} alt="" class="imgg_Sw2" />
                  <img src={product.r3H} alt="" class="imgg2_Sw2" />
                </div>
                <div class="itm_name_Sw2">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button class="cartbtn_Sw2">Add To Cart</button>
                </div>
              </Link>
            </div>
            <div class="items_Sw2">
              <Link to={product.url4}>
                <div class="itmImg_Sw2">
                  <img src={product.r4} alt="" class="imgg_Sw2" />
                  <img src={product.r4H} alt="" class="imgg2_Sw2" />
                </div>
                <div class="itm_name_Sw2">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button class="cartbtn_Sw2">Add To Cart</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
export default Swip_p2_blue;
