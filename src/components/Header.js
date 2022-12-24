import useFormContext from "../hooks/useFormContext";

const Header = () => {
  const { page } = useFormContext();

  return (
    <div className="container-header">
      <header>
        <ul className="header-numbers-ul">
          <li className={page === 0 ? "step-number fill" : "step-number"}>
            <div className="step-number-circle">1</div>
          </li>
          <li className={page === 1 ? "step-number fill" : "step-number"}>
            <div className="step-number-circle">2</div>
          </li>
          <li className={page === 2 ? "step-number fill" : "step-number"}>
            <div className="step-number-circle">3</div>
          </li>
          <li className={page === 3 ? "step-number fill" : "step-number"}>
            <div className="step-number-circle">4</div>
          </li>
        </ul>
        <div className="header-numbers-second-ul mobile-hide">
          <div className="header-numbers-second-ul-div">
            <div className="pastel">Step 1</div>
            <div>Your Info</div>
          </div>
          <div className="header-numbers-second-ul-div">
            <div className="pastel">Step 2</div>
            <div>Select plan</div>
          </div>
          <div className="header-numbers-second-ul-div">
            <div className="pastel">Step 3</div>
            <div>Add-ons</div>
          </div>
          <div className="header-numbers-second-ul-div">
            <div className="pastel">Step 4</div>
            <div>Summary</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
