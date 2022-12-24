import useFormContext from "../hooks/useFormContext";

const Step3 = () => {
  const { data, handleCheckboxes } = useFormContext();

  return (
    <div className="step step-3">
      <div className="step-3-inputs">
        <div className="step-3-input-container">
          <input
            id="online"
            type="checkbox"
            name="addons"
            value="online service"
            checked={data.addons.includes("online service")}
            onChange={handleCheckboxes}
          />
          <div className="step-3-root-tile">
            <div>
              <label htmlFor="online">Online service</label>
              <div>Access to multiplayer games</div>
            </div>
            <div>
              {!data.yearly && <div className="monthly">+$1/mo</div>}
              {data.yearly && <div className="yearly">+$10/yr</div>}
            </div>
          </div>
        </div>
        <div className="step-3-input-container">
          <input
            id="storage"
            type="checkbox"
            name="addons"
            value="larger storage"
            checked={data.addons.includes("larger storage")}
            onChange={handleCheckboxes}
          />
          <div className="step-3-root-tile">
            <div>
              <label htmlFor="storage">Larger Storage</label>
              <div>Extra 1TB of cloud save</div>
            </div>
            <div>
              {!data.yearly && <div className="monthly">+$2/mo</div>}
              {data.yearly && <div className="yearly">+$20/yr</div>}
            </div>
          </div>
        </div>
        <div className="step-3-input-container">
          <input
            id="profile"
            type="checkbox"
            name="addons"
            value="customizable profile"
            checked={data.addons.includes("customizable profile")}
            onChange={handleCheckboxes}
          />
          <div className="step-3-root-tile">
            <div>
              <label htmlFor="profile">Customizable Profile</label>
              <div>Custom theme on your profile</div>
            </div>
            <div>
              {!data.yearly && <div className="monthly">+$2/mo</div>}
              {data.yearly && <div className="yearly">+$20/yr</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
