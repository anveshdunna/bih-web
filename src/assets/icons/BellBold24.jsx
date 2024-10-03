const IcBellBold24 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M12 2a7.5 7.5 0 0 0-7.5 7.5v4.096l-1.44 3.359A.75.75 0 0 0 3.75 18h16.5a.75.75 0 0 0 .69-1.045l-1.44-3.359V9.5A7.5 7.5 0 0 0 12 2Zm0 19.5A3 3 0 0 1 9.041 19h5.918A3 3 0 0 1 12 21.5Z"
      />
    </svg>
  );
};

export default IcBellBold24;
