import { IMenuItem } from "../models/MenuItem";

interface MenuItemProps {
  item: IMenuItem;
  key: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, key }) => {
  return (
    <div key={key} className="mt-4 first:mt-0 text-decasa">
      <h2 className="font-menu text-lg whitespace-pre">
        <span>{item.name} </span>
        <span>{item.price}</span>
      </h2>
      <p className="text-sm">{item.ingrediants}</p>
    </div>
  );
};

export default MenuItem;
