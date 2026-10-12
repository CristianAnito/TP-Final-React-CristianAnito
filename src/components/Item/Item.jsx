import { getFinalPrice } from "../../utils/price";
import "./Item.css";

export const Item = ({
  image,
  title,
  description,
  price,
  discountPercent = 0,
  platforms = [],
  genres = [],
  children,
}) => {
  const hasDiscount = discountPercent > 0;  // chequea si hay descuento
  const finalPrice = getFinalPrice({ price, discountPercent }).toFixed(2);

  return (
    <article className="item">
      <div className="item-media">
        <img src={image} alt={title} className="item-image" />
        {hasDiscount && <span className="item-tag">-{discountPercent}%</span>}
        <p className="item-platforms">{platforms.join(" · ")}</p>
      </div>

      <div className="item-details">
        <h2 className="item-title">{title}</h2>
        <p className="item-genre">{genres.slice(0, 2).join(" · ")}</p>
        <p className="item-description">{description}</p>

        <div className="item-price-block">
          {hasDiscount && (
            <p className="item-from">
              <span className="item-price-old">
                <s>${price.toFixed(2)}</s>
              </span>
            </p>
          )}
          <p className="item-price">${finalPrice}</p>
          {hasDiscount && (
            <p className="item-savings">
              Ahorrás ${(price - finalPrice).toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {children}
    </article>
  );
};