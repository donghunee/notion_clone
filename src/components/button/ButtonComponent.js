import "./Button.scss";

const Button = ({ children, textColor = "#444", onClickFunc }) => {
  return (
    <div
      className="button"
      style={{ display: "flex", alignItems: "center", color: textColor }}
      onClick={onClickFunc}
    >
      {children}
    </div>
  );
};
export default Button;
