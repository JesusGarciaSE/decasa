import { EXTRA_DATA as dips } from "../constants/ExtraData";
import MenuItem from "./MenuItem";

export const DipList = () => {
  return (
    <div className="flex flex-col gap-4 px-8 py-6">
      <h2 className="text-2xl font-semibold text-decasa">Other</h2>
      <ul className="flex flex-col gap-2">
        {dips.map((dip, index) => (
          <MenuItem item={dip} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default DipList;
