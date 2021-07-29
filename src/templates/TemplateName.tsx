interface MyProps {}
const defaultProps: MyProps = {};
const TemplateName = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div data-testid="TemplateName" className="row justify-content-center">
      <div className="col-md-10"></div>
      <h1>TemplateName component</h1>
    </div>
  );
};

export default TemplateName;
