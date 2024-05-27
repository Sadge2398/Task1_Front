import Add from "./../../assets/svg/product_icons/Add.svg";
import Shop from "./../../assets/svg/product_icons/Shop.svg";
import Badge from "./../../assets/png/badge.png";
import Product from "./../../assets/png/Product.png";
import Star from "./../../assets/png/Star.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card-badges">
        <img src={Badge} alt="badge" />
        <img src={Badge} alt="badge" />
        <img src={Badge} alt="badge" />
      </div>
      <div className="card-img">
        <img src={Product} alt="product" />
      </div>
      <div>
        <p className="card-title">
          عنوان محصول عنوان محصول عنوان محصول عنوان محصول
        </p>
      </div>
      <div className="card-detail">
        <div>
          <p className="rating">
            4.6{" "}
            <span>
              <img src={Star} alt="" />
            </span>
          </p>
        </div>
        <div className="card-shop">
          <img src={Shop} alt="shop" />
          <p>مهراشاپ</p>
        </div>
      </div>
      <div className="card-price">
        <div>
            <img src={Add} alt="add" />
        </div>
        <div>
        <p className="off-price">460,000</p>
        <p className="price">460,000 <span>تومان</span></p>
        </div>
      </div>
    </div>
  );
};
export default Card;
