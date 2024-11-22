const IcBookmarkBold20 = (props) => {
  const { color = "currentColor", ...rest } = props;
  return (
    <svg width="20" height="20" {...rest} viewBox="0 0 20 20">
      <path
        fill={color}
        d="M7.121 2h5.758c.395 0 .736 0 1.017.023.297.024.592.078.875.222.424.216.768.56.984.984.144.283.198.578.222.875.023.28.023.622.023 1.017V17.25a.75.75 0 0 1-1.186.61L10 14.422 5.186 17.86A.75.75 0 0 1 4 17.25V5.121c0-.395 0-.736.023-1.017a2.29 2.29 0 0 1 .222-.875 2.25 2.25 0 0 1 .984-.984 2.29 2.29 0 0 1 .875-.222C6.384 2 6.726 2 7.12 2Z"
      />
    </svg>
  );
};

export default IcBookmarkBold20;