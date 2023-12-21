import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import "./Loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const loaderColor = theme === "dark-theme" ? "#ffffff" : "#000000";
    setColor(loaderColor);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="loader">
      <HashLoader
        color={color}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
