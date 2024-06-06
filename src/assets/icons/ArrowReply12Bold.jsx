const IcArrowReply12Bold = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="12" height="12" {...rest} viewBox="0 0 12 12">
      <path
        fill={color}
        d="M5.28 2.22a.75.75 0 0 1 0 1.06L3.56 5h3.19A4.25 4.25 0 0 1 11 9.25a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 0 6.75 6.5H3.56l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  );
};

export default IcArrowReply12Bold;
