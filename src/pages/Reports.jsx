import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Reports = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Inicializa la gráfica cuando el componente se monta
    const myChart = echarts.init(chartRef.current);

    // Configuración de la gráfica
    const option = {
      title: {
        text: "Customers Answers",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: ["Yes", "No"],
      },
      yAxis: {
        type: "value",
        name: "",
      },
      series: [
        {
          name: "Respuestas",
          type: "bar",
          data: [50, 90],
        },
      ],
    };

    // Establece la opción de la gráfica
    myChart.setOption(option);

    // Limpia la gráfica cuando el componente se desmonta
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div>
      <div style={{ height: "400px" }} ref={chartRef} />
    </div>
  );
};

export default Reports;
