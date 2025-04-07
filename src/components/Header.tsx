import { HOME_STRINGS } from "../constants/Strings";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-decasa">
      <h1 className="font-decasa text-6xl">{HOME_STRINGS.decasa}</h1>
      <h2 className="font-decasa text-4xl">{HOME_STRINGS.wfp}</h2>
    </div>
  );
};

export default Header;
