const IcEdit20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M13.22 2.72a2.871 2.871 0 1 1 4.06 4.06l-9.75 9.75a.75.75 0 0 1-.318.19l-4.25 1.25a.75.75 0 0 1-.932-.932l1.25-4.25a.75.75 0 0 1 .19-.318l9.75-9.75Zm3 1.06a1.371 1.371 0 0 0-1.94 0L12.56 5.5l1.94 1.94 1.72-1.72a1.371 1.371 0 0 0 0-1.94ZM13.44 8.5 11.5 6.56l-6.834 6.835-.808 2.747 2.747-.808L13.439 8.5Z"
      />
    </svg>
  );
};

export default IcEdit20;
