import { useState } from "react";
import FoodList from "../components/FoodList";
import { MENU_DATA } from "../constants/MenuData";

const MenuView = () => {
  const routes = [
    { key: "pizza", label: "Pizza" },
    { key: "extra", label: "Not Pizza" },
    { key: "other", label: "Toppings" },
  ];
  const [activeTab, setActiveTab] = useState("pizza");

  const changeTab = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className='h-auto w-full items-center flex flex-col gap-4'>
      <div className='flex gap-4'>
        {routes.map((route) => (
          <div
            key={route.key}
            className='p-3 text-decasa font-decasa text-lg font-semibold cursor-pointer'
            onClick={() => changeTab(route.key)}
          >
            {route.label}
          </div>
        ))}
      </div>
      <div className='flex flex-col'>
        <FoodList
          title={routes.find((route) => route.key === activeTab)!.label}
          className={"px-10 py-4"}
          foodList={
            activeTab === "pizza"
              ? MENU_DATA.pizzas
              : activeTab === "extra"
              ? MENU_DATA.others
              : MENU_DATA.toppings
          }
        />
      </div>
    </div>
  );
};

export default MenuView;
