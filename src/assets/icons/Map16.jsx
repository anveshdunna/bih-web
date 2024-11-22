const IcMap16 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="16" height="16" {...rest} viewBox="0 0 16 16">
      <path
        fill={color}
        d="M5.382 2.096a.75.75 0 0 1 .703-.017l4.144 2.072 3.653-2.055A.75.75 0 0 1 15 2.75V11a.75.75 0 0 1-.382.654l-4 2.25a.75.75 0 0 1-.703.017L5.77 11.849l-3.653 2.055A.75.75 0 0 1 1 13.25V5a.75.75 0 0 1 .382-.654l4-2.25Zm1.118 8.44 3 1.5V5.465l-3-1.5v6.572ZM5 4.033 2.5 5.44v6.529L5 10.56V4.032Zm6 1.407v6.529l2.5-1.407v-6.53L11 5.44Z"
      />
    </svg>
  );
};

export default IcMap16;
