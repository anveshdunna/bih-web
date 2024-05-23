const IcSearch24Bold = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M14.192 15.606a7 7 0 1 1 1.414-1.414l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1ZM15 10a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
      />
    </svg>
  );
};

export default IcSearch24Bold;
