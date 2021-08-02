interface MyProps {}
const defaultProps: MyProps = {};
const AboutPage = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div data-testid="AboutPage" className="row justify-content-center">
      <div className="col-md-10">
        <h1>AboutPage component</h1>
      </div>
    </div>
  );
};

export default AboutPage;
