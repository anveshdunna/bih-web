const IcPerson12Bold = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="12" height="12" {...rest} viewBox="0 0 12 12">
      <path
        fill={color}
        d="M6 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9.56 10.56A1.5 1.5 0 0 1 8.5 11h-5A1.5 1.5 0 0 1 2 9.5c0-1.116.46-2.01 1.212-2.615C3.953 6.29 4.947 6 6 6c1.053 0 2.047.29 2.788.885C9.541 7.49 10 8.384 10 9.5a1.5 1.5 0 0 1-.44 1.06Z"
      />
    </svg>
  );
};

export default IcPerson12Bold;
