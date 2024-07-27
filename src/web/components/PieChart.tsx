"use client";

import * as React from "react";
import { Label, Pie, PieChart, Tooltip } from "recharts";

const initialChartData = [
  { browser: "Oryx/Bird", visitors: 1234, fill: "#BAE7E8" },
  { browser: "Ostrich", visitors: 2167, fill: "#D28C6C" },
  { browser: "Zebra", visitors: 1345, fill: "#463F41" },
  { browser: "Boar", visitors: 800, fill: "#FCE2BD" },
];

export function PieChartComponent() {
  const [chartData, setChartData] = React.useState(initialChartData);

  React.useEffect(() => {
    setChartData(initialChartData);
  }, []);

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  return (
    <div className="flex justify-center items-center h-full">
      <PieChart width={800} height={400}>
        <Tooltip />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={80}
          outerRadius={160}
          fill="#8884d8"
          strokeWidth={5}
        >
          <Label
            position="center"
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fill: "#F5DEB3" }}
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      style={{
                        fill: "#F5DEB3",
                        fontSize: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      style={{ fill: "var(--text-main)" }}
                    >
                      Bettor
                    </tspan>
                  </text>
                );
              }
              return null;
            }}
          />
        </Pie>
      </PieChart>
    </div>
  );
}
