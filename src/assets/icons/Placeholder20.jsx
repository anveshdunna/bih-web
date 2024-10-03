const IcPlaceholder20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M6 3h-.5A2.5 2.5 0 0 0 3 5.5V6h1.5v-.5a1 1 0 0 1 1-1H6V3Zm2 1.5V3h4v1.5H8ZM15.5 6v-.5a1 1 0 0 0-1-1H14V3h.5A2.5 2.5 0 0 1 17 5.5V6h-1.5Zm0 6V8H17v4h-1.5ZM14 15.5h.5a1 1 0 0 0 1-1V14H17v.5a2.5 2.5 0 0 1-2.5 2.5H14v-1.5Zm-6 0h4V17H8v-1.5ZM4.5 14v.5a1 1 0 0 0 1 1H6V17h-.5A2.5 2.5 0 0 1 3 14.5V14h1.5Zm0-6v4H3V8h1.5Z"
      />
    </svg>
  );
};

export default IcPlaceholder20;
