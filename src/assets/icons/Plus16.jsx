const IcPlus16 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="16" height="16" {...rest} viewBox="0 0 16 16">
      <path
        fill={color}
        d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 1 0 1.5 0V8.5h4.25a.75.75 0 1 0 0-1.5H8.5V2.75Z"
      />
    </svg>
  );
};

export default IcPlus16;
