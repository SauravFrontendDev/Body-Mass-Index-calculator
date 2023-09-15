import logo from "../assets/images/logo.svg";

const TitleContainer = () => {
  return (
    <div className="container title-container">
      <h1 className="heading__primary">Design System</h1>
      <div className="logo__container ">
        <img src={logo} alt="company logo" className="logo" />
      </div>
    </div>
  );
};

export default TitleContainer;
