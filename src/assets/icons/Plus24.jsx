const IcPlus24 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M11.75 3a.75.75 0 0 1 .75.75V11h7.25a.75.75 0 0 1 0 1.5H12.5v7.25a.75.75 0 0 1-1.5 0V12.5H3.75a.75.75 0 0 1 0-1.5H11V3.75a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
};

export default IcPlus24;
