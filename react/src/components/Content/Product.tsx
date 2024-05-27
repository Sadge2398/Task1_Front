import "./Content.css";
import ArrowIcon from "./../../assets/svg/product_icons/Arrow.svg";
import Card from "./Card";

const Product = () => {
  return (
    <section className="main-content">
      <div className="filters-section">
        <div className="filters">
          <button type="button" title="پرفروش‌ترین‌ها">
            پرفروش‌ترین‌ها
          </button>
          <button type="button" title="جدیدترین‌ها">
            جدیدترین‌ها
          </button>
          <button type="button" title="محبوب‌ترین‌ها">
            محبوب‌ترین‌ها
          </button>
        </div>
        <div className="view-all">
          <button type="button">
            مشاهده همه{" "}
            <span>
              <img src={ArrowIcon} alt="Arrow" />
            </span>
          </button>
        </div>
      </div>
      <div className="products">
        {Array.from(new Array(15)).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </section>
  );
};
export default Product;
