const PageTemplate = (props) => {
  const { children } = props;
  return (
    <div className="flex h-80 flex-col items-stretch md:ml-60">{children}</div>
  );
};

export default PageTemplate;
