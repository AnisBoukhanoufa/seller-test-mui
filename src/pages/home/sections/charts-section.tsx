// ChartsSection.tsx
import React from "react";
import Piechart from "../components/charts/piechart/pie-chart";
import Barchart from "../components/charts/barchart/bar-chart";

interface ChartsSectionProps {}

const ChartsSection: React.FC<ChartsSectionProps> = () => {
  return (
    <div className="chartContainers">
      <Piechart />
      <Barchart />
    </div>
  );
};

export default ChartsSection;
