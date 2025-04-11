import MenuItem from "./MenuItem";
import { IFoodList } from "../models/ComponentModels";
import React from "react";

export const DipList:React.FC<IFoodList> = ({className, title, foodList: dips}) => {
  return (
    <div className={`${className}  flex flex-col gap-4`}>
      <h2 className="text-2xl font-semibold text-decasa">{title}</h2>
      <ul className="flex flex-col gap-2">
        {dips.map((dip, index) => (
          <li key={index}>
            <MenuItem item={dip} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DipList;
