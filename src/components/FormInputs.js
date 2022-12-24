import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import useFormContext from "../hooks/useFormContext";

const FormInputs = () => {
  const { page } = useFormContext();

  const display = {
    0: <Step1 />,
    1: <Step2 />,
    2: <Step3 />,
    3: <Step4 />,
  };

  const content = <div>{display[page]}</div>;

  return content;
};
export default FormInputs;
