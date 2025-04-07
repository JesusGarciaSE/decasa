import { useEffect, useState } from "react";
import stampdark from '../assets/stampdark.png';
import stamplight from '../assets/stamplight.png';

const Logo = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(mediaQuery.matches); // set initial state
  
      const handleChange = (event: MediaQueryListEvent) => {
        setIsDarkMode(event.matches);
      };
  
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
  
    return (
      <div>
        <img
          src={isDarkMode ? stamplight : stampdark}
          alt="Site Logo"
          width={120}
        />
      </div>
    );
};

export default Logo;