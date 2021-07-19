import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import {
  dailyTurnoverChartData,
  returnsChartData,
  rollingVolatilityChartData,
  totalHoldingChartData,
} from 'src/assets/charts-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'poc-client';

  date = [];

  ngOnInit() {
    console.log(returnsChartData.map((e: any) => new Date(e.date)));
    console.log(
      totalHoldingChartData.totalHoldings[0].holdings.map((e: any) => e.value)
    );
    console.log(
      totalHoldingChartData.totalHoldings[0].holdings.reduce(
        (a: any, b: any) => a + b.value,
        0
      ) / totalHoldingChartData.totalHoldings[0].holdings.length
    );
  }

  returnsLineChartData = [
    {
      label: 'returns',
      data: returnsChartData.map((e: any) => e.value),
    },
  ];

  returnsLineChartLabels = [
    ...returnsChartData.map((e: any) =>
      new Date(e.date).toISOString().substring(0, 10)
    ),
  ];

  returnsLineChartOptions: any = {
    responsive: true,
    bezierCurve: false,
    spanGaps: true,
    legend: {
      align: 'center',
      fullWidth: true,
    },
    title: {
      text: 'Returns',
      display: true,
      fontSize: 20,
    },
    maintainAspectRatio: true,
    hover: {
      axis: 'xy',
    },
  };

  returnsLineChartColors: any[] = [
    {
      borderWidth: 2.6,
      borderColor: 'green',
      backgroundColor: 'transparent',
      capBezierPoints: false,
      radius: 0,
    },
  ];

  returnsLineChartLegend = true;
  returnsLineChartPlugins: any = [];
  returnsLineChartType: ChartType = 'line';

  holdingsLineChartData = [
    {
      data: totalHoldingChartData.totalHoldings[0].holdings.map(
        (e: any) => e.value
      ),
      label: 'Total Holdings',
    },
    {
      data:
        totalHoldingChartData.totalHoldings[0].holdings.reduce(
          (a: any, b: any) => a + b.value,
          0
        ) / totalHoldingChartData.totalHoldings[0].holdings.length,
      label: 'Total Holdings',
    },
  ];

  holdingsLineChartOptions: any = {
    responsive: true,
    bezierCurve: true,
    spanGaps: true,
    legend: {
      align: 'center',
      fullWidth: true,
    },
    title: {
      text: 'Total holdings',
      display: true,
      fontSize: 20,
    },
    maintainAspectRatio: true,
    hover: {
      axis: 'xy',
    },
    scales: {
      x: {
        offset: true,
      },
      y: {
        offset: true,
      },
    },
  };

  holdingsLineChartColors: any[] = [
    {
      borderWidth: 2.6,
      borderColor: 'rgb(204,124,92)',
      backgroundColor: 'transparent',
      capBezierPoints: false,
      radius: 0,
    },
    {
      borderWidth: 2.6,
      borderColor: 'blue',
      backgroundColor: 'transparent',
      capBezierPoints: false,
      radius: 0,
    },
  ];

  holdingsLineChartLabels = [
    ...returnsChartData.map((e: any) =>
      new Date(e.date).toISOString().substring(0, 10)
    ),
  ];

  holdingsLineChartLegend = true;

  holdingsLineChartPlugins: any = [];

  holdingsLineChartType: ChartType = 'line';

  dailyTurnoverChartData = [
    {
      label: 'Daily Turnover',
      data: dailyTurnoverChartData.dailyTurnover[0].turnover.map(
        (e: any) => e.value
      ),
    },
  ];

  dailyTurnoverChartOptions: any = {
    responsive: true,
    bezierCurve: false,
    spanGaps: true,
    legend: {
      align: 'center',
      fullWidth: true,
    },
    title: {
      text: 'Daily Turnover',
      display: true,
      fontSize: 20,
    },
    maintainAspectRatio: true,
    hover: {
      axis: 'xy',
    },
  };

  dailyTurnoverChartLabels = [
    ...dailyTurnoverChartData.dailyTurnover[0].turnover.map((e: any) =>
      new Date(e.date).toLocaleDateString().substring(0, 10)
    ),
  ];

  dailyTurnoverChartColors: any = [
    {
      borderWidth: 2.6,
      borderColor: 'blue',
      backgroundColor: 'transparent',
      capBezierPoints: false,
      radius: 0,
    },
  ];

  dailyTurnoverChartLegend = true;

  dailyTurnoverChartPlugins: any = [];

  dailyTurnoverChartType: ChartType = 'line';

  rollingVolatilityChartData: any = [
    {
      label: 'Rolling Volatility',
      data: rollingVolatilityChartData.rollingVolatility[0].returns.map(
        (e: any) => e.value
      ),
    },
  ];

  rollingVolatilityChartType: ChartType = 'line';

  rollingVolatilityChartPlugins: any = [];

  rollingVolatilityChartLegend = true;

  rollingVolatilityChartColors: any = [
    {
      borderWidth: 2,
      borderColor: 'rgb(204,124,92)',
      backgroundColor: 'transparent',
      capBezierPoints: false,
      radius: 0,
    },
  ];

  rollingVolatilityChartLabels = [
    ...rollingVolatilityChartData.rollingVolatility[0].returns.map((e: any) =>
      new Date(e.date).toLocaleDateString().substring(0, 10)
    ),
  ];

  rollingVolatilityChartOptions: any = {
    responsive: true,
    bezierCurve: false,
    spanGaps: true,
    legend: {
      align: 'center',
      fullWidth: true,
    },
    title: {
      text: 'Rolling Volatility (6-months)',
      display: true,
      fontSize: 20,
    },
    maintainAspectRatio: true,
    hover: {
      axis: 'xy',
    },
  };

  constructor() {}
}
