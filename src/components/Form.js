import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import { useState } from "react";
import thanks from "../assets/images/icon-thank-you.svg";

const Form = () => {
  const { setPage, data, title, page, disableNext } = useFormContext();

  const [confirm, setConfirm] = useState(false);

  const handlePrev = () => {
    if (page < 0) return;
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page > 3) return;
    setPage((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    setConfirm((prev) => !prev);
  };

  const thanksContent = (
    <div className="thank-you-div">
      <img src={thanks} alt="" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );

  const content = (
    <div className="step-content">
      <div>
        <h1>{title[page].heading}</h1>
        <h2>{title[page].subHeading}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInputs />

        <div className="button-container">
          <button
            type="button"
            className={page === 0 ? "prev-button invisible" : "prev-button"}
            onClick={handlePrev}
          >
            Prev
          </button>
          {page !== 3 && (
            <button
              type="button"
              className="next-button"
              onClick={handleNext}
              disabled={disableNext}
            >
              Next
            </button>
          )}
          {page === 3 && (
            <button type="submit" className="confirm-button">
              Confirm
            </button>
          )}
        </div>
      </form>
    </div>
  );

  return !confirm ? content : thanksContent;
};
export default Form;
