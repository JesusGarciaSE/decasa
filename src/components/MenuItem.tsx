import { IMenuItem } from "../models/MenuItem";

interface MenuItemProps {
  item: IMenuItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="text-decasa">
      <h2 className="font-menu text-lg whitespace-pre">
        <span className="underline underline-offset-2 decoration-2 font-semibold cursor-pointer">{item.name} </span>
        <span>{item.price}</span>
      </h2>
      <p className="text-sm">{item.ingrediants}</p>
    </div>
  );
};

export default MenuItem;