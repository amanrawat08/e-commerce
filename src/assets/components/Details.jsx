import { FaFire } from "react-icons/fa";
import data from "../../data/productdata";
import { useEffect } from "react";
function Details() {
   
  return (
    <div className="block-features block block-features--layout--top-strip">
      <div className="container">
        <ul className="block-features__list">
          <li className="block-features__item">
            <div className="block-features__item-icon"><FaFire className="text-2xl" /></div>
            <div className="block-features__item-info">
              <div className="block-features__item-title">Free Shipping</div>
              <div className="block-features__item-subtitle">
                For orders from $50
              </div>
            </div>
          </li>
          <li className="block-features__item">
            <div className="block-features__item-icon"></div>
            <div className="block-features__item-info">
              <div className="block-features__item-title">Free Shipping</div>
              <div className="block-features__item-subtitle">
                For orders from $50
              </div>
            </div>
          </li>
          <li className="block-features__item">
            <div className="block-features__item-icon"></div>
            <div className="block-features__item-info">
              <div className="block-features__item-title">Free Shipping</div>
              <div className="block-features__item-subtitle">
                For orders from $50
              </div>
            </div>
          </li>
          <li className="block-features__item">
            <div className="block-features__item-icon"></div>
            <div className="block-features__item-info">
              <div className="block-features__item-title">Free Shipping</div>
              <div className="block-features__item-subtitle">
                For orders from $50
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Details;
