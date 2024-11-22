const IcPlus20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M10.5 2.75a.75.75 0 1 0-1.5 0V9H2.75a.75.75 0 0 0 0 1.5H9v6.25a.75.75 0 1 0 1.5 0V10.5h6.25a.75.75 0 1 0 0-1.5H10.5V2.75Z"
      />
    </svg>
  );
};

export default IcPlus20;
