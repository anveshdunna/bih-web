const IcCloseSmall20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M7.28 6.22a.75.75 0 0 0-1.06 1.06L8.94 10l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 11.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L11.06 10l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 8.94 7.28 6.22Z"
      />
    </svg>
  );
};

export default IcCloseSmall20;
