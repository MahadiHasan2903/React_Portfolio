/* eslint-disable react/prop-types */

const ThemeItem = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt="ThemeImage"
      className="theme_img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default ThemeItem;
