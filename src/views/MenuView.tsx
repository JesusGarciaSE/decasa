import { useState } from "react";
import FoodList from "../components/FoodList";
import { MENU_DATA } from "../constants/MenuData";
import { PIZZA_DESCRIPTIONS } from "../constants/Strings";

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
    <div className='h-auto w-full items-center flex flex-col gap-4 px-4'>
      <div className='h-auto w-full flex justify-between gap-4 md:justify-center'>
        {routes.map((route) => (
          <div
            key={route.key}
            className={
              "p-3 text-decasa font-decasa text-lg cursor-pointer " +
              (activeTab === route.key
                ? "underline underline-offset-4 decoration-decasa decoration-2 font-semibold"
                : "")
            }
            onClick={() => changeTab(route.key)}
          >
            {route.label}
          </div>
        ))}
      </div>
      <div className='h-auto w-full flex flex-col px-10'>
        <FoodList
          title={routes.find((route) => route.key === activeTab)!.label}
          className={""}
          foodList={
            activeTab === "pizza"
              ? MENU_DATA.pizzas
              : activeTab === "extra"
              ? MENU_DATA.others
              : MENU_DATA.toppings
          }
        />
      </div>
      <h1 className='font-[deca-serif] font-bold mt-6'>
        {PIZZA_DESCRIPTIONS.size +
          " | " +
          PIZZA_DESCRIPTIONS.slices +
          " | " +
          PIZZA_DESCRIPTIONS.halves}
      </h1>
    </div>
  );
};

export default MenuView;
