const IcArrowUpLeft20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M12 3.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0V5.56l11.219 11.22a.75.75 0 1 0 1.06-1.062L5.561 4.5h5.689a.75.75 0 0 0 .75-.75Z"
      />
    </svg>
  );
};

export default IcArrowUpLeft20;
