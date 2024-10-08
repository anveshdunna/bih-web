const IcLocation16 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="16" height="16" {...rest} viewBox="0 0 16 16">
      <path fill={color} d="M8 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path
        fill={color}
        d="M8 .95C4.661.95 2.45 3.733 2.45 6.5c0 3.265 2.18 5.908 5.198 8.422.204.17.5.17.704 0C11.37 12.409 13.55 9.765 13.55 6.5 13.55 3.733 11.339.95 8 .95ZM3.55 6.5c0-2.233 1.789-4.45 4.45-4.45 2.661 0 4.45 2.217 4.45 4.45 0 2.626-1.677 4.903-4.45 7.28-2.773-2.377-4.45-4.654-4.45-7.28Z"
      />
    </svg>
  );
};

export default IcLocation16;
