const IcChevronDown16 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="16" height="16" {...rest} viewBox="0 0 16 16">
      <path
        fill={color}
        d="M4.199 6.741a.75.75 0 0 1 1.06-.042L8 9.229l2.741-2.53A.75.75 0 1 1 11.76 7.8l-3.25 3a.75.75 0 0 1-1.018 0l-3.25-3A.75.75 0 0 1 4.2 6.74Z"
      />
    </svg>
  );
};

export default IcChevronDown16;
