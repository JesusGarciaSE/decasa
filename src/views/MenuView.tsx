import FoodList from "../components/FoodList";
import { MENU_DATA } from "../constants/MenuData";

const MenuView = () => {
  return (
    <div className="flex flex-col">
      <FoodList title="Pizza" className="px-10 py-4" foodList={MENU_DATA.pizzas} />
    </div>
  );
}

export default MenuView;