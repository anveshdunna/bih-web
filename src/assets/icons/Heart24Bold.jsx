const IcHeart24Bold = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M7 3C3.751 3 1.5 5.663 1.5 9c0 3.72 2.664 6.913 5.128 9.093a30.488 30.488 0 0 0 4.573 3.315c.638.375.99.357 1.598 0a30.482 30.482 0 0 0 4.573-3.315C19.836 15.913 22.5 12.72 22.5 9c0-3.337-2.251-6-5.5-6-1.96 0-3.703 1.222-5 2.6C10.703 4.223 8.96 3 7 3Z"
      />
    </svg>
  );
};

export default IcHeart24Bold;
