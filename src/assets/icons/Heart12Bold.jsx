const IcHeart12Bold = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="12" height="12" {...rest} viewBox="0 0 12 12">
      <path
        fill={color}
        d="M3.578 2C2.078 2 1 3.148 1 4.645c0 1.658 1.275 3.083 2.462 4.061a14.72 14.72 0 0 0 2.202 1.486c.246.135.413.141.672 0a14.72 14.72 0 0 0 2.202-1.486C9.725 7.728 11 6.303 11 4.645 11 3.148 9.921 2 8.422 2 7.486 2 6.635 2.558 6 3.207 5.365 2.558 4.514 2 3.578 2Z"
      />
    </svg>
  );
};

export default IcHeart12Bold;
