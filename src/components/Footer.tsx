import { PIZZA_DESCRIPTIONS, FOOTER_STRINGS } from "../constants/Strings";
import { ICustomizableComponent } from "../models/ComponentModels";

const Footer: React.FC<ICustomizableComponent> = ({ className }) => {
  return (
    <div
      className={className + ' flex flex-col items-center justify-center py-4 text-sm'}
    >
      <h1 className='font-[deca-serif]  font-bold'>
        {PIZZA_DESCRIPTIONS.size +
          " | " +
          PIZZA_DESCRIPTIONS.slices +
          " | " +
          PIZZA_DESCRIPTIONS.halves}
      </h1>
      <footer>
        <a href='https://github.com/JesusGarciaSE'>
          {FOOTER_STRINGS.body}
        </a>
      </footer>
    </div>
  );
};

export default Footer;
