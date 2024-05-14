import React from "react";
import ModalForm from "../Modal";
import { AuthState } from "../../context/AuthProvider";
import { fetchCustemers } from "../../utils/fetch";
import { Notify } from "../../utils";

function RenewPlan({
  showRenewPlan,
  setShowRenewPlan,
  customer,
  setTableData,
}) {
  const isPlatinumPlan = () => {
    return (
      customer?.plan?.planName === "Platinum" &&
      customer?.plan?.planCost === 499
    );
  };

  const isGoldPlan = () => {
    return (
      customer?.plan?.planName === "Gold" && customer?.plan?.planCost === 299
    );
  };

  const isSilverPlan = () => {
    return (
      customer?.plan?.planName === "Silver" && customer?.plan?.planCost === 199
    );
  };

  const planContents = [
    {
      header: "Platinum",
      price: 499,
      features: ["365 days Validity", "more speed"],
      buttonLabel: isPlatinumPlan() ? "Renew" : "Activate",
      outline: isPlatinumPlan(),
    },
    {
      header: "Gold",
      price: 299,
      features: ["180 days Validity", "normal speed"],
      buttonLabel: isGoldPlan() ? "Renew" : "Activate",
      outline: isGoldPlan(),
    },
    {
      header: "Silver",
      price: 199,
      features: ["90 days Validity", "slow speed"],
      buttonLabel: isSilverPlan() ? "Renew" : "Activate",
      outline: isSilverPlan(),
    },
  ];
  const Plan = (props) => {
    return (
      <div className="card mb-4 shadow-sm" style={{ width: "30%" }}>
        <div className={`card-header ${props.outline ? "bg-secondary" : ""}`}>
          <h4 className="my-0 font-weight-normal">{props.header}</h4>
        </div>
        <div className="card-body card-outline-primary">
          <h1 className="card-title pricing-card-title">
            {`$${props.price}`}
            <small className="text-muted">/ mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {props.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button
            className={`btn btn-lg btn-block ${
              props.outline ? "btn-secondary" : "btn-outline-primary"
            }`}
            type="button"
            onClick={props.buttonAction}
            data-testid={`activate-${props.header.toLowerCase()}`}
          >
            {props.buttonLabel}
          </button>
        </div>
      </div>
    );
  };

  const modalContent = () => {
    const { auth } = AuthState();
    const activate = async (plan) => {
      console.log("activating ", customer, plan);
      try {
        // Register user
        const response = await fetch("/api/private/customers/plan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify({
            customerId: customer.id,
            plan,
          }),
        });
        const data = await response.json();

        if (data.success) {
          setShowRenewPlan(false);
          await fetchCustemers(setTableData, auth);
          // navigate("/"); // Go to home page
          return Notify("Activated choosed plan", "success");
        } else {
          // setIsLoading(false);
          return Notify(data.error, "error");
        }
      } catch (error) {
        //   setIsLoading(false);
        return Notify("Internal server error", "error");
      }
    };
    const plans = planContents.map((obj, i) => {
      return (
        <Plan
          key={obj.header}
          header={obj.header}
          price={obj.price}
          features={obj.features}
          buttonLabel={obj.buttonLabel}
          buttonAction={() => activate(obj)}
          outline={obj.outline}
        />
      );
    });
    return (
      <div
        className="card-deck mb-3 text-center"
        style={{ display: "flex", gap: "5%" }}
      >
        {plans}
      </div>
    );
  };
  return (
    <ModalForm
      {...{ show: showRenewPlan, setShow: setShowRenewPlan }}
      title={"Renew plan"}
      bodyContent={modalContent}
      noFooter={true}
    />
  );
}

export default RenewPlan;
