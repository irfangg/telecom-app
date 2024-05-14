import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AuthProvider from "../../context/AuthProvider";
import ModifyPlan from "./ModifyPlan";

describe("ModifyPlan component", () => {
  test("should render three plan options", () => {
    render(
        <AuthProvider>
            <ModifyPlan showModifyPlan />
        </AuthProvider>
    );
    const platinumPlan = screen.getByText("Platinum");
    const goldPlan = screen.getByText("Gold");
    const silverPlan = screen.getByText("Silver");

    expect(platinumPlan).toBeInTheDocument();
    expect(goldPlan).toBeInTheDocument();
    expect(silverPlan).toBeInTheDocument();
  });

  test("As user have Platinum plan, it should only show Platinum is active plan", async () => {
    render(
        <AuthProvider>
            <ModifyPlan showModifyPlan customer={{plan:{planName:'Platinum', planCost:499}}} />
        </AuthProvider>
        );
    const activePlanTestId = screen.getByRole('button', { name: /active/i }).getAttribute('data-testid')
    
    expect(activePlanTestId).toBe('activate-platinum');
  });
  test("As user have Platinum plan, it should only show Gold is active plan", async () => {
    render(
        <AuthProvider>
            <ModifyPlan showModifyPlan customer={{plan:{planName:'Gold', planCost:299}}} />
        </AuthProvider>
        );
    const activePlanTestId = screen.getByRole('button', { name: /active/i }).getAttribute('data-testid')
    
    expect(activePlanTestId).toBe('activate-gold');
  });
  test("As user have Platinum plan, it should only show Silver is active plan", async () => {
    render(
        <AuthProvider>
            <ModifyPlan showModifyPlan customer={{plan:{planName:'Silver', planCost:199}}} />
        </AuthProvider>
        );
    const activePlanTestId = screen.getByRole('button', { name: /active/i }).getAttribute('data-testid')
    
    expect(activePlanTestId).toBe('activate-silver');
  });
});
