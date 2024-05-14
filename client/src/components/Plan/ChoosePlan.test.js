import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChoosePlan from "./ChoosePlan";
import AuthProvider from "../../context/AuthProvider";

describe("ChoosePlan component", () => {
  test("should render three plan options", () => {
    render(
        <AuthProvider>
            <ChoosePlan showChoosePlan />
        </AuthProvider>
    );
    const platinumPlan = screen.getByText("Platinum");
    const goldPlan = screen.getByText("Gold");
    const silverPlan = screen.getByText("Silver");

    expect(platinumPlan).toBeInTheDocument();
    expect(goldPlan).toBeInTheDocument();
    expect(silverPlan).toBeInTheDocument();
  });

  test("should be 3 activate buttons", async () => {
    render(
        <AuthProvider>
            <ChoosePlan showChoosePlan />
        </AuthProvider>
        );
    const activatePlatinumBtn = screen.getByTestId("activate-platinum");
    const activateGoldBtn = screen.getByTestId("activate-gold");
    const activateSilverBtn = screen.getByTestId("activate-silver");
    expect(activatePlatinumBtn).toBeInTheDocument();
    expect(activateGoldBtn).toBeInTheDocument();
    expect(activateSilverBtn).toBeInTheDocument();
  });
});
