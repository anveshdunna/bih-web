const IcHeartBold20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M1 7.886C1 5.133 2.994 3 5.77 3 7.502 3 8.97 4.03 10 5.019 11.03 4.03 12.497 3 14.23 3 17.007 3 19 5.133 19 7.886c0 2.623-1.627 4.839-3.43 6.496-1.821 1.673-3.951 2.897-5.235 3.539a.75.75 0 0 1-.67 0c-1.284-.642-3.414-1.866-5.235-3.54C2.627 12.726 1 10.51 1 7.887Z"
      />
    </svg>
  );
};

export default IcHeartBold20;
