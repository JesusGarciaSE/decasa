import PizzaList from "./components/PizzaList";
import decasaman from "./assets/decasaman.png";
import Header from "./components/Header";
import ToppingList from "./components/ToppingList";
import Footer from "./components/Footer";
import OtherList from "./components/OtherList";
import DipList from "./components/DipList";

function App() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="absolute inset-0 flex justify-center items-center opacity-50">
        <img src={decasaman} alt="Background" className="h-auto max-w-full" />
      </div>
      <PizzaList />
      <ToppingList />
      <OtherList />
      <DipList />
      <Footer />
    </div>
  );
}

export default App;
