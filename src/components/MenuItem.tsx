import { useState } from "react";
import { IMenuItem } from "../models/MenuItem";

interface MenuItemProps {
  item: IMenuItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (window.innerWidth > 768 || window.innerWidth < 1024) {
      setOpen(!open);
    }
  };

  return (
    <div className='h-auto w-full text-decasa'>
      <h2 className='font-menu text-lg whitespace-pre' onClick={toggleOpen}>
        <span className='underline underline-offset-2 decoration-2 font-semibold cursor-pointer'>
          {item.name}{" "}
        </span>
        <span>{item.price}</span>
      </h2>
      <p
        className={
          "text-sm transition- ease-in-out duration-300 lg:h-auto lg:opacity-100 " +
          (open ? "md:h-18 md:opacity-100" : "md:h-0 md:opacity-0")
        }
      >
        {item.ingrediants}
      </p>
    </div>
  );
};

export default MenuItem;
