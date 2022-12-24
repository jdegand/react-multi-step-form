import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: {
      heading: "Personal Info",
      subHeading: "Please provide your name, email address, and phone number.",
    },
    1: {
      heading: "Select your plan",
      subHeading: "You have the option of monthly or yearly billing.",
    },
    2: {
      heading: "Pick add-ons",
      subHeading: "Add-ons help enhance your gaming experience.",
    },
    3: {
      heading: "Finishing up",
      subHeading: "Double-check everything looks OK before confirming.",
    },
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    addons: [],
    yearly: false,
  });

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxes = (e) => {
    const { value, checked } = e.target;
    const { addons } = data;

    //console.log(`${value} is ${checked}`);

    if (checked) {
      setData((prevData) => ({
        ...prevData,
        addons: [...addons, value],
      }));
    } else {
      // Case 2  : The user unchecks the box
      setData((prevData) => ({
        ...prevData,
        addons: addons.filter((item) => item !== value),
      }));
    }
  };

  const emailRegex = /@/g; // /^\S+@\S+\.\S+$/;

  const phoneRegex = /^[1]{1} [0-9]{3} [0-9]{3} [0-9]{3}$/;

  const nameError = data["name"].length > 0;

  const emailError = emailRegex.test(data["email"]);

  const phoneError = phoneRegex.test(data["phone"]);

  const page1Valid = nameError && emailError && phoneError;

  const page2Valid = data["plan"].length > 0;

  const disableNext =
    (page === 0 && !page1Valid) || (page === 1 && !page2Valid);

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        handleChange,
        handleCheckboxes,
        disableNext,
        nameError,
        emailError,
        phoneError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
