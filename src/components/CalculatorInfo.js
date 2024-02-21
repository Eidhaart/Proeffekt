import React from "react";
import "./Calculator.css";
import { Button } from "@mui/material";

function CalculatorInfo() {
  return (
    <div className="cost-backdrop" id="calculator">
      <div className="cost-estimation-intro">
        <div className="cost-estimate-content">
          <h2>Snabb och Enkel Kostnadsberäkning</h2>
          <p>
            Planerar du att måla om eller lägga nya kakel? Använd vår gratis
            kalkylator för att:
          </p>
          <ul>
            <li>Mäta ditt rum</li>
            <li>Ange dina mått</li>
            <li>Få en direkt uppskattning</li>
          </ul>
        </div>

        <Button
          className="cost-estimation-intro-button"
          variant="contained"
          color="primary"
          href="#calculate"
        >
          Beräkna Nu
        </Button>
      </div>
    </div>
  );
}

export default CalculatorInfo;
