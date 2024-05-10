const PageTemplate = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col h-80 items-stretch md:ml-16 xl:ml-60">
      {children}
    </div>
  );
};

export default PageTemplate;
