import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const goBack = () => navigate(-1);

  useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={goBack()}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
