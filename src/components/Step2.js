import useFormContext from "../hooks/useFormContext";
import advanced from "../assets/images/icon-advanced.svg";
import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";

const Step2 = () => {
  const { data, handleChange } = useFormContext();

  return (
    <div className="step step-2">
      <div className="step-2-inputs">
        <div className="step-2-input-container">
          <input
            id="arcade"
            className="radio-button"
            type="radio"
            name="plan"
            value="arcade"
            checked={data.plan === "arcade"}
            onChange={handleChange}
          />
          <div className="radio-tile">
            <div>
              <img src={arcade} alt="" />
            </div>
            <div>
              <label htmlFor="arcade">Arcade</label>
              <div>
                {!data.yearly && <div className="monthly">$9/mo</div>}
                {data.yearly && <div className="yearly">$90/yr</div>}
                {data.yearly && (
                  <div className="yearly-savings">2 months free</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="step-2-input-container">
          <input
            id="advanced"
            className="radio-button"
            type="radio"
            name="plan"
            value="advanced"
            checked={data.plan === "advanced"}
            onChange={handleChange}
          />
          <div className="radio-tile">
            <div>
              <img src={advanced} alt="" />
            </div>
            <div>
              <label htmlFor="advanced">Advanced</label>
              <div>
                {!data.yearly && <div className="monthly">$12/mo</div>}
                {data.yearly && <div className="yearly">$120/yr</div>}
                {data.yearly && (
                  <div className="yearly-savings">2 months free</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="step-2-input-container">
          <input
            id="pro"
            className="radio-button"
            type="radio"
            name="plan"
            value="pro"
            checked={data.plan === "pro"}
            onChange={handleChange}
          />
          <div className="radio-tile">
            <div>
              <img src={pro} alt="" />
            </div>
            <div>
              <label htmlFor="pro">Pro</label>
              <div>
                {!data.yearly && <div className="monthly">$15/mo</div>}
                {data.yearly && <div className="yearly">$150/yr</div>}
                {data.yearly && (
                  <div className="yearly-savings">2 months free</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="step-2-toggle">
        <div
          className={
            !data.yearly
              ? "step-2-toggle-monthly-text marine"
              : "step-2-toggle-monthly-text"
          }
        >
          Monthly
        </div>
        <label className="switch">
          <input
            id="toggle"
            type="checkbox"
            name="yearly"
            checked={data.yearly}
            onChange={handleChange}
          />
          <span className="slider round"></span>
        </label>
        <div
          className={
            data.yearly
              ? "step-2-toggle-yearly-text marine"
              : "step-2-toggle-yearly-text"
          }
        >
          Yearly
        </div>
      </div>
    </div>
  );
};

export default Step2;
