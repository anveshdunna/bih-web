const IcPersonBold24 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M8 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-1.576 7.77C7.906 12.58 9.894 12 12 12c2.106 0 4.094.58 5.576 1.77C19.082 14.98 20 16.768 20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3c0-2.232.92-4.02 2.424-5.23Z"
      />
    </svg>
  );
};

export default IcPersonBold24;
