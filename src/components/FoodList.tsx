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
    setOpen((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : false)));
  };

  return (
    <div className={`${className}`}>
      <h2 className='text-2xl font-semibold text-decasa pb-4'>{title}</h2>
      <ul className='flex flex-col gap-2'>
        {foodList.map((food, index) => (
          <li key={index} onClick={() => toggleOpen(index)}>
            <MenuItem item={food} />
            <img
              className={
                "mt-3 w-full transition- ease-in-out duration-300 " +
                (open[index] ? "h-[236px] opacity-100" : "h-0 opacity-0")
              }
              src={PIZZA_IMAGES[index]}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
