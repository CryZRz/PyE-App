import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  )

export const GraficFrequency = ({listMarca, listRowsfi}) => {

    let labels = listMarca
    let listY = listRowsfi

    const options = {
        fill: true,
        responsive: true,
        scales: {
          y: {
            min: 0,
          },
        },
        plugins: {
          legend: {
            display: true,
          },
        },
      };

      let data = {
        datasets: [
          {
            label: "Histograma",
            data: listY,
            tension: 0.3,
            borderColor: "gold",
            pointRadius: 6,
            pointBackgroundColor: "gold",
            backgroundColor: "rgba(6, 37, 79, 0.6)",
          },],
          labels
        }
    return <Line data={data} options={options}></Line>
}