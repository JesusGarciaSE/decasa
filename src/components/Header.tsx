import { HOME_STRINGS } from "../constants/Strings";
import { ICustomizableComponent } from "../models/ComponentModels";

const Header: React.FC<ICustomizableComponent> = ({ className }) => {
  return (
    <div className={className + ' text-6xl flex flex-col items-center justify-center py-8 text-decasa font-decasa'}>
      <h1>{HOME_STRINGS.decasa}</h1>
      <h2 className='text-2xl text-center'>{HOME_STRINGS.wfp}</h2>
    </div>
  );
};

export default Header;
