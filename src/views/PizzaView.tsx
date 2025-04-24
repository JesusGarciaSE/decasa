import FoodList from "../components/FoodList";
import { PIZZA_DATA } from "../constants/PizzaData";

const PizzaView = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <FoodList title="Pizza" className="px-10 py-4" foodList={PIZZA_DATA} />
    </div>
  );
}

export default PizzaView;