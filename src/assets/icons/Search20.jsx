const IcSearch20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M11.823 12.883a5.5 5.5 0 1 1 1.06-1.06l3.897 3.897a.75.75 0 1 1-1.06 1.06l-3.897-3.897ZM12.5 8.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
    </svg>
  );
};

export default IcSearch20;
