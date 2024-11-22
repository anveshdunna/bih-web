const IcLocation16 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="16" height="16" {...rest} viewBox="0 0 16 16">
      <path fill={color} d="M8 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path
        fill={color}
        d="M8 1C4.68 1 2.5 3.798 2.5 6.558c0 3.301 2.144 5.842 5.016 8.265a.75.75 0 0 0 .968 0C11.356 12.4 13.5 9.86 13.5 6.558 13.5 3.798 11.32 1 8 1ZM4 6.558C4 4.51 5.62 2.5 8 2.5s4 2.01 4 4.058c0 2.432-1.468 4.481-4 6.703-2.532-2.222-4-4.271-4-6.703Z"
      />
    </svg>
  );
};

export default IcLocation16;
