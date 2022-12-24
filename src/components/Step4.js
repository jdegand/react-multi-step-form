import useFormContext from "../hooks/useFormContext";

const Step4 = () => {
  const { data, setData } = useFormContext();

  const costMap = {
    arcade: 9,
    advanced: 12,
    pro: 15,
    "online service": 1,
    "larger storage": 2,
    "customizable profile": 2,
  };

  const handleChangeClick = (e) => {
    setData((prevData) => ({
      ...prevData,
      yearly: !prevData.yearly,
    }));
  };

  return (
    <div>
      <div className="magnolia">
        <div className="flex">
          <div className="titlecase marine bold">
            {data.plan} <span>{data.yearly ? " (Yearly)" : " (Monthly)"}</span>
            <div className="change" onClick={handleChangeClick}>
              Change
            </div>
          </div>
          <div className="marine">
            +${costMap[data.plan]}
            {data.yearly ? "0" : null}
            <span>{data.yearly ? "/yr" : "/mo"}</span>
          </div>
        </div>
        <div>
          {data.addons.map((addon, index) => {
            return (
              <div key={index} className="flex">
                <div className="titlecase gray">{addon}</div>
                <div className="marine">
                  +${costMap[addon]}
                  {data.yearly ? "0" : null}
                  <span>{data.yearly ? "/yr" : "/mo"}</span>
                </div>
              </div>
            );
          })}
          <hr />
        </div>
      </div>
      <div className="flex padding-inline-10 gray">
        <div>Total (per {data.yearly ? "year" : "month"})</div>
        <div className="purplish">
          $
          {data.addons
            .map((addon) => costMap[addon])
            .reduce((acc, curr) => acc + curr, 0) +
            costMap[data.plan] +
            `${data.yearly ? "0" : ""}`}
          <span>{data.yearly ? "/yr" : "/mo"}</span>
        </div>
      </div>
    </div>
  );
};

export default Step4;

/*
        <div>
            <div>Name: {data.name}</div>
            <div>Email: {data.email}</div>
            <div>Phone: {data.phone}</div>
            <div>Plan: {data.plan}</div>
            <div>Addon: {data.addons.toString()}</div>
            <div>Monthly: {data.yearly.toString()}</div>
        </div>
*/
