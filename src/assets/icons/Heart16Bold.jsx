const IcHeart16Bold = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="16" height="16" {...rest} viewBox="0 0 16 16">
      <path
        fill={color}
        d="M1 6c0-2.224 1.5-4 3.667-4C5.974 2 7.135 2.814 8 3.734 8.865 2.814 10.026 2 11.333 2 13.5 2 15 3.776 15 6c0 2.48-1.776 4.609-3.419 6.062a20.32 20.32 0 0 1-3.048 2.21c-.401.236-.683.225-1.066 0a20.32 20.32 0 0 1-3.048-2.21C2.776 10.609 1 8.48 1 6Z"
      />
    </svg>
  );
};

export default IcHeart16Bold;
