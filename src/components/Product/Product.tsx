import productImage from "../../assets/images/product-2.png";

import "./Product.css";

interface Props {
  title: string;
  regularPrice: number;
  salePrice?: number;
}

export const Product = (props: Props) => {
  return (
    <li className="products-list__item">
      <div className="products-list__image">
        <img src={productImage} alt="IDFK" />
      </div>
      <h3 className="products-list__title">{props.title}</h3>
      <div className="products-list__information">
        {props.salePrice && (
          <h4 className="products-list__price products-list__price--sale">
            ${props.regularPrice}
          </h4>
        )}
        <h5 className="products-list__price">
          ${props.salePrice ? props.salePrice : props.regularPrice}
        </h5>
      </div>
    </li>
  );
};
