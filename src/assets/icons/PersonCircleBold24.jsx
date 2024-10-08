const IcPersonCircleBold24 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="24" height="24" {...rest} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M19.463 18.657A9.963 9.963 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.97 9.97 0 0 0 2.537 6.657A9.975 9.975 0 0 0 12 22a9.975 9.975 0 0 0 7.463-3.343ZM12.454 14.5a7.98 7.98 0 0 1 6.134 2.872A8.483 8.483 0 0 1 12 20.5a8.483 8.483 0 0 1-6.588-3.128 7.98 7.98 0 0 1 6.134-2.872h.908ZM15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export default IcPersonCircleBold24;
