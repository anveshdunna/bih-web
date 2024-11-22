const IcList16 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="16" height="16" {...rest} viewBox="0 0 16 16">
      <path
        fill={color}
        d="M2.53 2c-.122 0-.255 0-.37.01-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547c-.09.176-.116.348-.127.478C1 3.275 1 3.408 1 3.53v1.94c0 .122 0 .255.01.37.01.13.036.3.126.477.12.236.311.427.547.547.176.09.348.116.478.127.114.01.247.009.369.009h.94c.122 0 .255 0 .37-.01.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.547 1.26 1.26 0 0 0 .127-.478C5 5.725 5 5.592 5 5.47V3.53c0-.122 0-.255-.01-.37a1.26 1.26 0 0 0-.126-.477 1.25 1.25 0 0 0-.547-.547 1.259 1.259 0 0 0-.478-.127A4.745 4.745 0 0 0 3.47 2h-.94Zm0 7c-.122 0-.255 0-.37.01-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547 1.26 1.26 0 0 0-.127.478C1 10.275 1 10.408 1 10.53v1.94c0 .122 0 .255.01.37.01.13.036.3.126.478.12.235.311.426.547.546.176.09.348.116.478.127.114.01.247.009.369.009h.94c.122 0 .255 0 .37-.01.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.546 1.26 1.26 0 0 0 .127-.479A4.94 4.94 0 0 0 5 12.47v-1.94c0-.122 0-.255-.01-.37a1.26 1.26 0 0 0-.126-.477 1.25 1.25 0 0 0-.547-.547 1.259 1.259 0 0 0-.478-.127A4.744 4.744 0 0 0 3.47 9h-.94ZM6 2.75A.75.75 0 0 1 6.75 2h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 2.75ZM6.75 5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM6 9.75A.75.75 0 0 1 6.75 9h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 9.75ZM6.75 12a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
      />
    </svg>
  );
};

export default IcList16;
