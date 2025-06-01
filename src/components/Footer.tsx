import { FOOTER_STRINGS } from "../constants/Strings";
import { ICustomizableComponent } from "../models/ComponentModels";

const Footer: React.FC<ICustomizableComponent> = ({ className }) => {
  return (
    <div
      className={
        className + " flex flex-col items-center justify-center py-4 text-sm"
      }
    >
      <footer>
        <a href='https://github.com/JesusGarciaSE'>{FOOTER_STRINGS.body}</a>
      </footer>
    </div>
  );
};

export default Footer;
