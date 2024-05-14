import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AuthProvider from "../../context/AuthProvider";
import RenewPlan from "./RenewPlan";

describe("RenewPlan component", () => {
  test("should render three plan options", () => {
    render(
        <AuthProvider>
            <RenewPlan showRenewPlan />
        </AuthProvider>
    );
    const platinumPlan = screen.getByText("Platinum");
    const goldPlan = screen.getByText("Gold");
    const silverPlan = screen.getByText("Silver");

    expect(platinumPlan).toBeInTheDocument();
    expect(goldPlan).toBeInTheDocument();
    expect(silverPlan).toBeInTheDocument();
  });

  test("As user have Platinum plan, it should only show Silver is expired and renew plan", async () => {
    render(
        <AuthProvider>
            <RenewPlan showRenewPlan customer={{plan:{planName:'Silver', planCost:199}}} />
        </AuthProvider>
        );
    const activePlanTestId = screen.getByRole('button', { name: /Renew/i }).getAttribute('data-testid')
    
    expect(activePlanTestId).toBe('activate-silver');
  });

});
