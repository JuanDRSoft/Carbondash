import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import useAuth from "../hooks/useAuth";

const Reports = () => {
  const co2Ref = useRef(null);
  const scope1Ref = useRef(null);
  const scope2Ref = useRef(null);
  const scope3Ref = useRef(null);

  const { scope1Report, scope2Report, scope3Report } = useAuth();

  const handleResize = () => {
    [co2Ref, scope1Ref, scope2Ref, scope3Ref].forEach((chartRef) => {
      const myChart = echarts.getInstanceByDom(chartRef.current);
      if (myChart) {
        myChart.resize();
      }
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const initChart = (chartRef, option) => {
    const myChart = echarts.init(chartRef.current);
    myChart.setOption(option);
    return myChart;
  };

  const CO2graph = () => {
    const option = {
      title: {
        text: "Total CO2 Emissions",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        left: "center",
        top: "bottom",
      },
      series: [
        {
          name: "Total CO2 Emissions",
          type: "pie",
          radius: "50%",
          data: [
            { value: scope1Report.Scope1, name: "Scope 1" },
            { value: scope2Report.Scope2, name: "Scope 2" },
            { value: scope3Report.Scope3, name: "Scope 3" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    return initChart(co2Ref, option);
  };

  const Scope1Graph = () => {
    const option = {
      title: {
        text: "Scope 1",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        left: "center",
        top: "bottom",
      },
      series: [
        {
          name: "Scope 1",
          type: "pie",
          radius: "50%",
          data: [
            { value: scope1Report.vehicles, name: "VEHICLES" },
            { value: scope1Report.machinery, name: "MACHINERY" },
            { value: scope1Report.refrigerant, name: "REFRIGERANT & COOLING" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    return initChart(scope1Ref, option);
  };

  const Scope2Graph = () => {
    const option = {
      title: {
        text: "Scope 2",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        left: "center",
        top: "bottom",
      },
      series: [
        {
          name: "Scope 2",
          type: "pie",
          radius: "50%",
          data: [
            {
              value: scope2Report.kwh,
              name: "How many kilowatt hours (kwh) of electricity did your business consume?",
            },
            {
              value: scope2Report["spend on electricity"],
              name: "How much did you spend on electricity?",
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    return initChart(scope2Ref, option);
  };

  const Scope3Graph = () => {
    const option = {
      title: {
        text: "Scope 3",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        left: "center",
        top: "bottom",
      },
      series: [
        {
          name: "Scope 3",
          type: "pie",
          radius: "50%",
          data: [
            {
              value: scope3Report.TRAVEL,
              name: "TRAVEL",
            },
            {
              value: scope3Report.COMMUTING,
              name: "COMMUTING",
            },
            {
              value: scope3Report["FREIGHT & WAREHOUSING"],
              name: "FREIGHT & WAREHOUSING",
            },
            {
              value: scope3Report.INVENTORY,
              name: "INVENTORY",
            },
            {
              value: scope3Report["CAPITAL GOODS & EXPENSES"],
              name: "CAPITAL GOODS & EXPENSES",
            },
            {
              value: scope3Report.SERVICES,
              name: "COMMUTING",
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    return initChart(scope3Ref, option);
  };

  useEffect(() => {
    const co2Chart = CO2graph();
    const scope1Chart = Scope1Graph();
    const scope2Chart = Scope2Graph();
    const scope3Chart = Scope3Graph();

    return () => {
      co2Chart.dispose();
      scope1Chart.dispose();
      scope2Chart.dispose();
      scope3Chart.dispose();
    };
  }, [scope1Report, scope2Report, scope3Report]);

  return (
    <div className="pb-10">
      <div className="shadow-xl border rounded-3xl bg-white grid lg:grid-cols-2">
        <div className="p-5">
          <div className="h-[500px]" ref={co2Ref} />
        </div>

        <div className="p-5">
          <div className="h-[500px]" ref={scope1Ref} />
        </div>

        <div className="p-5">
          <div className="h-[500px]" ref={scope2Ref} />
        </div>

        <div className="p-5">
          <div className="h-[500px]" ref={scope3Ref} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
