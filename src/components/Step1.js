import useFormContext from "../hooks/useFormContext";
import { useState } from "react";

const Step1 = () => {
  const { data, handleChange, nameError, emailError, phoneError } =
    useFormContext();

  const [showNameError, setShowNameError] = useState(false);

  const [showEmailError, setShowEmailError] = useState(false);

  const [showPhoneError, setShowPhoneError] = useState(false);

  const handleNameBlur = (e) => {
    setShowEmailError(false);
    setShowPhoneError(false);
    if (nameError === false) {
      setShowNameError(true);
    } else {
      setShowNameError(false);
    }
  };

  const handleEmailBlur = (e) => {
    setShowNameError(false);
    setShowPhoneError(false);
    if (emailError === false) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
  };

  const handlePhoneBlur = (e) => {
    setShowEmailError(false);
    setShowNameError(false);
    if (phoneError === false) {
      setShowPhoneError(true);
    } else {
      setShowPhoneError(false);
    }
  };

  return (
    <div className="step-1-inputs">
      <label htmlFor="name">
        Name {showNameError && <span>This field is required.</span>}
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="e.g. Stephen King"
        value={data.name}
        onChange={handleChange}
        onBlur={handleNameBlur}
      />
      <label htmlFor="email">
        Email Address {showEmailError && <span>This field is required.</span>}
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="e.g. stephenking@lorem.com"
        value={data.email}
        onChange={handleChange}
        onBlur={handleEmailBlur}
      />
      <label htmlFor="phone">
        Phone Number {showPhoneError && <span>This field is required.</span>}
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="e.g. +1 234 567 890"
        pattern="[1]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
        value={data.phone}
        onChange={handleChange}
        onBlur={handlePhoneBlur}
      />
    </div>
  );
};

export default Step1;

/*
import useFormContext from "../hooks/useFormContext"

const Step1 = () => {

    const { data, handleChange } = useFormContext()

    return (
        <div className="step-1-inputs">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="e.g. Stephen King" value={data.name} onChange={handleChange} />
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" placeholder="e.g. stephenking@lorem.com" value={data.email} onChange={handleChange} />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" name="phone" placeholder="e.g. +1 234 567 890" pattern="[1]{1} [0-9]{3} [0-9]{3} [0-9]{3}" value={data.phone} onChange={handleChange} />
      </div>
    )
}

export default Step1;
*/
