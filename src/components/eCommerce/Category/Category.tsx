import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

interface IProps {
  title: string;
  prefix: string;
  img: string;
}

const Category = ({ title, prefix, img }: IProps) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
      </Link>

      <h4 className={categoryTitle}>{title}</h4>
    </div>
  );
};

export default Category;
