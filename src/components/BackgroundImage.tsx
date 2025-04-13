import { ICustomizableComponent } from "../models/ComponentModels";
import decasaman from "../assets/decasaman.png";

const BackgroundImage: React.FC<ICustomizableComponent> = ({ className }) => {
  return (
    <div className={className}>
      <img src={decasaman} alt="Background" className="h-auto max-w-full" />
    </div>
  );
};

export default BackgroundImage;
