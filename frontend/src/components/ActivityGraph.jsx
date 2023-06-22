import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineController,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineController,
  Tooltip,
  Legend,
  LineElement
);

function ActivityGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;
    const updateScale = () => {
      const containerWidth = chartInstance?.canvas.parentNode.offsetWidth;
      const dataPointsCount = chartInstance?.data.labels.length;

      if (containerWidth && dataPointsCount) {
        const maxPointsToShow = Math.floor(containerWidth / 70); // Adjust this value based on your preference
        const visiblePointsCount = Math.min(maxPointsToShow, dataPointsCount);
        const startIndex = Math.max(0, dataPointsCount - visiblePointsCount);

        chartInstance.options.scales.x.min = startIndex;
        chartInstance.options.scales.x.max = startIndex + visiblePointsCount - 1;
        chartInstance.update();
      }
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const data = {
    labels: [
      "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06",
      "2023-07", "2023-08", "2023-09", "2023-10", "2023-11", "2023-12"
    ],
    datasets: [
      {
        label: "Spending",
        data: [1000, 2000, 900, 800, 1100, 1300, 1200, 1300, 1000, 900, 1000, 1100],
        borderColor: "#FFC01E",
        fill: false,
        tension: 0.5,
      },
      {
        label: "Income",
        data: [1000, 500, 1000, 2300, 2100, 2500, 2600, 2500, 2800, 2900, 2300, 2400],
        borderColor: "#1FCB4F",
        fill: false,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Added maintainAspectRatio option
    scales: {
      x: {
        type: "time",
        adapters: {
          date: {
            locale: enUS,
          },
        },
        time: {
          unit: "month",
          displayFormats: {
            month: "MMM",
          },
        },
        grid: {
          display: false,
        },
        border: {
          color: "grey",
        },
        ticks : {
        }
      },
      y: {
        type: "linear",
        min: 0,
        max: 3000,
        grid: {
          display: true,
          drawBorder: false,
          drawTicks: false,
          color: "rgba(255, 255, 255, 0.3)",
        },
        border: {
          display: false,
          dash: [4, 2],
        },
        ticks: {
          padding: 20,
          stepSize: 750,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            return `${label}: ${value}`;
          },
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "line",
        },
      },
    },
  };

  return (
    <div className="bg-[#1A1C22] flex flex-col rounded-xl p-2 w-full h-full">
      <h1 className="h-1/8">Overview</h1>
      <div className="h-7/8 w-full">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}

export default ActivityGraph;
