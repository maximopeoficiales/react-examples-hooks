interface MyProps {}
const defaultProps: MyProps = {};
const TemplateName = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div data-testid="TemplateName">
      <h1>TemplateName component</h1>
    </div>
  );
};


export default TemplateName;
