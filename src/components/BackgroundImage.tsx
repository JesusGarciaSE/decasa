import { ICustomizableComponent } from "../models/ComponentModels";
import decasaman from "../assets/decasaman.png";

const BackgroundImage: React.FC<ICustomizableComponent> = ({ className }) => {
  return (
    <img
      src={decasaman}
      alt="Background"
      className={className + " h-auto max-w-full absolute inset-0 object-cover z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}
    />
  );
};

export default BackgroundImage;
