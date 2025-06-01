import MenuItem from "./MenuItem";
import { IFoodList } from "../models/ComponentModels";
import React, { useEffect, useState } from "react";
import { PIZZA_IMAGES } from "../constants/ImageData";

const FoodList: React.FC<IFoodList> = ({ className, title, foodList }) => {
  const [open, setOpen] = useState<boolean[]>([]);

  useEffect(() => {
    setOpen(Array(foodList.length).fill(false));
  }, [foodList]);

  const toggleOpen = (index: number) => {
    if (window.innerWidth < 768) {
      setOpen((prev) =>
        prev.map((isOpen, i) => (i === index ? !isOpen : false))
      );
    }
  };

  return (
    <div className={`${className}`}>
      <h2 className='text-2xl font-semibold text-decasa pb-4'>{title}</h2>
      <ul className='h-auto w-full flex flex-col gap-2 md:grid md:grid-cols-3 lg:grid-cols-4'>
        {foodList.map((food, index) => (
          <li
            key={index}
            onClick={() => toggleOpen(index)}
            className='md:h-[338px]'
          >
            <div className="lg:flex lg:gap-2 lg:text-center">
              <MenuItem item={food} />
              <img
                className={
                  "mt-3 w-full transition-all ease-in-out duration-300 md:h-[236px] md:opacity-100 lg:w-72 lg:h-72 " +
                  (open[index] ? "h-[236px] opacity-100" : "h-0 opacity-0")
                }
                src={PIZZA_IMAGES[index]}
              ></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
