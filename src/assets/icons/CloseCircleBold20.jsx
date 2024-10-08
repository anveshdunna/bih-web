const IcCloseCircleBold20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.72 6.72a.75.75 0 0 1 1.06 0L10 8.94l2.22-2.22a.75.75 0 1 1 1.06 1.06L11.06 10l2.22 2.22a.75.75 0 1 1-1.06 1.06L10 11.06l-2.22 2.22a.75.75 0 0 1-1.06-1.06L8.94 10 6.72 7.78a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  );
};

export default IcCloseCircleBold20;
