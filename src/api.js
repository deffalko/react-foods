import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};

// const getAllCategories = async () => {
//   const response = await fetch(API_URL + "categories.php");
//   return await response.json();
// };

const getAllCategories = async () => {
  try {
    const response = await fetch(API_URL + "categories.php");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    // Обработка ошибки, например, показывать сообщение пользователю
  }
};

const getFilteredCategories = async (catName) => {
  const response = await fetch(API_URL + "filter.php?c=" + catName);
  return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategories };
