const IcChevronLeft20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M13.79 2.229a.75.75 0 0 1-.019 1.06L6.83 10l6.942 6.71a.75.75 0 1 1-1.042 1.08l-7.5-7.25a.75.75 0 0 1 0-1.08l7.5-7.25a.75.75 0 0 1 1.06.019Z"
      />
    </svg>
  );
};

export default IcChevronLeft20;
