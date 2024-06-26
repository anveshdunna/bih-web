const IcLocation12Bold = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="12" height="12" {...rest} viewBox="0 0 12 12">
      <path
        fill={color}
        d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5Zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
};

export default IcLocation12Bold;
