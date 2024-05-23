export const IconMap = {};

const Icon = (props) => {
  const { name, color = "currentColor", ...rest } = props;
  const Vector = IconMap[name] ? IconMap[name] : null;
  const size = name.includes("16") ? "16" : "24";
  const viewBox = name.includes("16") ? "0 0 16 16" : "0 0 24 24";

  return (
    <svg width={size} height={size} {...rest} viewBox={viewBox}>
      <Vector color={color} />
    </svg>
  );
};

export default Icon;
