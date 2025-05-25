import MenuItem from "./MenuItem";
import { IFoodList } from "../models/ComponentModels";
import React from "react";

const FoodList: React.FC<IFoodList> = ({ className, title, foodList }) => {
  return (
    <div className={`${className}`}>
      <h2 className='text-2xl font-semibold text-decasa pb-4'>{title}</h2>
      <ul className='flex flex-col gap-3'>
        {foodList.map((food, index) => (
          <li key={index}>
            <MenuItem item={food} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
