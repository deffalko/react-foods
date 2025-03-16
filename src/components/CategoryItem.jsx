import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <p>{strCategoryDescription.slice(0, 60)}...</p>
        <span className="card-title">{strCategory}</span>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Watch categoty
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
