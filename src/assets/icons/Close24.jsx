const IcClose24 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L10.94 12l-5.72 5.72a.75.75 0 1 0 1.06 1.06L12 13.06l5.72 5.72a.75.75 0 1 0 1.06-1.06L13.06 12l5.72-5.72a.75.75 0 0 0-1.06-1.06L12 10.94 6.28 5.22Z"
      />
    </svg>
  );
};

export default IcClose24;
