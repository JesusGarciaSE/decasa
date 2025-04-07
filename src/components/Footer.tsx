import { PIZZA_DESCRIPTIONS, FOOTER_STRINGS } from "../constants/Strings";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="font-[deca-serif] text-sm font-bold">
        {PIZZA_DESCRIPTIONS.size +
          " | " +
          PIZZA_DESCRIPTIONS.slices +
          " | " +
          PIZZA_DESCRIPTIONS.halves}
      </h1>
      <footer className="pb-1 text-center">
        <a className="text-sm" href="https://github.com/JesusGarciaSE">
          {FOOTER_STRINGS.body}
        </a>
      </footer>
    </div>
  );
};

export default Footer;
