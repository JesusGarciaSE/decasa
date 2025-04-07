import { PIZZA_DATA as pizzas } from "../constants/PizzaData";
import MenuItem from "./MenuItem";

const PizzaList = () => {
  return (
    <div>
      <ul className="px-8 py-6">
        {pizzas.map((pizza, key) => (
          <MenuItem item={pizza} key={key} />
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
