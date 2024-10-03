const IcPlaceholder24 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M7.5 3h-.75A3.75 3.75 0 0 0 3 6.75v.75h1.5v-.75A2.25 2.25 0 0 1 6.75 4.5h.75V3ZM9 4.5h6V3H9v1.5ZM16.5 3v1.5h.75a2.25 2.25 0 0 1 2.25 2.25v.75H21v-.75A3.75 3.75 0 0 0 17.25 3h-.75ZM21 9h-1.5v6H21V9Zm0 7.5h-1.5v.75a2.25 2.25 0 0 1-2.25 2.25h-.75V21h.75A3.75 3.75 0 0 0 21 17.25v-.75ZM15 21v-1.5H9V21h6Zm-7.5 0v-1.5h-.75a2.25 2.25 0 0 1-2.25-2.25v-.75H3v.75A3.75 3.75 0 0 0 6.75 21h.75ZM3 15h1.5V9H3v6Z"
      />
    </svg>
  );
};

export default IcPlaceholder24;
