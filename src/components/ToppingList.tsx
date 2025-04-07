import { TOPPING_DATA as toppings } from "../constants/ToppingData";
import { TOPPING_LIMIT_NOTE as notes } from "../constants/Strings";
import MenuItem from "./MenuItem";

const ToppingList = () => {
  return (
    <div className="text-center px-6">
      <h1>Toppings</h1>
      <h2 className="text-sm">
        {notes.hot_truffle_limit + " & " + notes.veggie_limit}
      </h2>
      <ul className="px-8 py-6">
        {toppings.map((item, key) => (
          <MenuItem item={item} key={key} />
        ))}
      </ul>
    </div>
  );
};

export default ToppingList;
