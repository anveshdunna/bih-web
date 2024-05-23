const IcPlus16 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="16" height="16" {...rest} viewBox="0 0 16 16">
      <path
        fill={color}
        d="M8 2.5a.5.5 0 1 0-1 0V7H2.5a.5.5 0 1 0 0 1H7v4.5a.5.5 0 0 0 1 0V8h4.5a.5.5 0 0 0 0-1H8V2.5Z"
      />
    </svg>
  );
};

export default IcPlus16;
