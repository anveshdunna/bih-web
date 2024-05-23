const IcSearch24 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M14.391 15.452a7 7 0 1 1 1.06-1.06l5.33 5.328a.75.75 0 1 1-1.061 1.06l-5.329-5.328ZM15.5 10a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Z"
      />
    </svg>
  );
};

export default IcSearch24;
