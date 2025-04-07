import { OTHER_DATA as others } from "../constants/OtherData";
import MenuItem from "./MenuItem";

const OtherList = () => {
  return (
    <div className="flex flex-col gap-4 px-8 py-6">
      <h2 className="text-2xl font-semibold text-decasa">Other</h2>
      <ul className="flex flex-col gap-2">
        {others.map((other, key) => (
          <MenuItem item={other} key={key} />
        ))}
      </ul>
    </div>
  );
};

export default OtherList;
