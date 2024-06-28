const PageTemplate = (props) => {
  const { children } = props;
  return <div className="flex flex-col items-stretch md:ml-16">{children}</div>;
};

export default PageTemplate;
