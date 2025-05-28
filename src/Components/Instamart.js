import { useState } from "react";
import "../index.css"; // assuming Instamart.js is in src/Components

//Created Accordion UI
const Section = ({ title, description, isvisible, setIsVisible }) => {
  console.log(isvisible);
  console.log(setIsVisible);
  return (
    <>
      <div className="section">
        <h3>{title}</h3>
        {isvisible && <p>{description}</p>}
        {isvisible ? (
          <button onClick={() => setIsVisible()}>Hide</button>
        ) : (
          <button onClick={() => setIsVisible()}>Show</button>
        )}
      </div>
    </>
  );
};

const Instamart = () => {
  debugger;
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <div className="insta-mart">
        <h1>Instamart</h1>
        <Section
          title={"Rapid Delivery:"}
          description={
            "The on-demand delivery space is experiencing rapid growth with millions of users turning to it every month. Swiggy’s primary goal was to gain more traction among users as it expanded to more cities. A key challenge they encountered was the time it took new users to complete their first order after installing the app. This delay posed a risk of user churn, as customers would explore the app but fail to make a purchase, leading to lost opportunities. So Swiggy Instamart recognized the need for a more robust retargeting strategy to bring users back into the app and prompt them to make a purchase."
          }
          isvisible={visibleSection === "Rapid Delivery"}
          setIsVisible={() => {
            return visibleSection === "Rapid Delivery"
              ? setVisibleSection("")
              : setVisibleSection("Rapid Delivery");
          }}
        />
        <Section
          title={"Wide Product Selection:"}
          description={
            "The on-demand delivery space is experiencing rapid growth with millions of users turning to it every month. Swiggy’s primary goal was to gain more traction among users as it expanded to more cities. A key challenge they encountered was the time it took new users to complete their first order after installing the app. This delay posed a risk of user churn, as customers would explore the app but fail to make a purchase, leading to lost opportunities. So Swiggy Instamart recognized the need for a more robust retargeting strategy to bring users back into the app and prompt them to make a purchase."
          }
          isvisible={visibleSection === "Wide Product Selection"}
          setIsVisible={() => {
            return visibleSection === "Wide Product Selection"
              ? setVisibleSection("")
              : setVisibleSection("Wide Product Selection");
          }}
        />
        <Section
          title={"Strategic Dark Stores:"}
          description={
            "The on-demand delivery space is experiencing rapid growth with millions of users turning to it every month. Swiggy’s primary goal was to gain more traction among users as it expanded to more cities. A key challenge they encountered was the time it took new users to complete their first order after installing the app. This delay posed a risk of user churn, as customers would explore the app but fail to make a purchase, leading to lost opportunities. So Swiggy Instamart recognized the need for a more robust retargeting strategy to bring users back into the app and prompt them to make a purchase."
          }
          isvisible={visibleSection === "Strategic Dark Stores"}
          setIsVisible={() => {
            return visibleSection === "Strategic Dark Stores"
              ? setVisibleSection("")
              : setVisibleSection("Strategic Dark Stores");
          }}
        />
        <Section
          title={"24/7 Delivery:"}
          description={
            "The on-demand delivery space is experiencing rapid growth with millions of users turning to it every month. Swiggy’s primary goal was to gain more traction among users as it expanded to more cities. A key challenge they encountered was the time it took new users to complete their first order after installing the app. This delay posed a risk of user churn, as customers would explore the app but fail to make a purchase, leading to lost opportunities. So Swiggy Instamart recognized the need for a more robust retargeting strategy to bring users back into the app and prompt them to make a purchase."
          }
          isvisible={visibleSection === "24/7 Delivery"}
          setIsVisible={() => {
            return visibleSection === "24/7 Delivery"
              ? setVisibleSection("")
              : setVisibleSection("24/7 Delivery");
          }}
        />
      </div>
    </>
  );
};

export default Instamart;
