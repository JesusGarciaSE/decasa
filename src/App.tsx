import decasaman from "./assets/decasaman.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FoodList from "./components/FoodList";
import { OTHER_DATA } from "./constants/OtherData";
import { EXTRA_DATA } from "./constants/ExtraData";
import { PIZZA_DATA } from "./constants/PizzaData";
import { TOPPING_DATA } from "./constants/ToppingData";

function App() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="absolute inset-0 flex justify-center items-center opacity-50">
        <img src={decasaman} alt="Background" className="h-auto max-w-full" />
      </div>
      <FoodList title="Pizza" className="px-10 py-4" foodList={PIZZA_DATA}/>
      <FoodList title="Toppings" className="text-center px-6" foodList={TOPPING_DATA}/>
      <FoodList title="Others" className="px-8 py-6" foodList={OTHER_DATA}/>
      <FoodList title="Extras" className="px-8 py-6" foodList={EXTRA_DATA}/>
      <Footer />
    </div>
  );
}

export default App;
