const IcHeart20Bold = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M5.641 3C2.941 3 1 5.067 1 7.76c0 2.986 2.296 5.551 4.432 7.31a26.488 26.488 0 0 0 3.963 2.675c.444.243.744.255 1.21 0a26.49 26.49 0 0 0 3.963-2.674C16.704 13.31 19 10.746 19 7.76 19 5.067 17.059 3 14.359 3 12.675 3 11.143 4.005 10 5.172 8.857 4.005 7.325 3 5.641 3Z"
      />
    </svg>
  );
};

export default IcHeart20Bold;
