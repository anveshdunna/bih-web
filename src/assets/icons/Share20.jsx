const IcShare20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M10.512 2.202a.75.75 0 0 0-1.024 0l-3.75 3.5a.75.75 0 0 0 1.024 1.096L9.25 4.476v7.774a.75.75 0 0 0 1.5 0V4.476l2.488 2.322a.75.75 0 1 0 1.024-1.096l-3.75-3.5Z"
      />
      <path
        fill={color}
        d="M4.5 10.75a.75.75 0 0 0-1.5 0v3A3.25 3.25 0 0 0 6.25 17h7.5A3.25 3.25 0 0 0 17 13.75v-3a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75v-3Z"
      />
    </svg>
  );
};

export default IcShare20;
