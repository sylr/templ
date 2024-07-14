import * as LighweightCharts from 'lightweight-charts';

class Graph {
	private chart: LighweightCharts.IChartApi;

	constructor(container: HTMLElement) {
		this.chart = LighweightCharts.createChart(container, {
			width: container.clientWidth,
			height: container.clientHeight,
		});
		const lineSeries = this.chart.addLineSeries();
		lineSeries.setData([
			{ time: '2019-04-01', value: 80.01 },
			{ time: '2019-04-02', value: 96.63 },
			{ time: '2019-04-03', value: 76.64 },
			{ time: '2019-04-04', value: 81.89 },
			{ time: '2019-04-05', value: 74.43 },
			{ time: '2019-04-06', value: 80.01 },
			{ time: '2019-04-07', value: 96.63 },
			{ time: '2019-04-08', value: 76.64 },
			{ time: '2019-04-09', value: 81.89 },
			{ time: '2019-04-10', value: 74.43 },
			{ time: '2019-04-11', value: 80.01 },
			{ time: '2019-04-12', value: 96.63 },
			{ time: '2019-04-13', value: 76.64 },
			{ time: '2019-04-14', value: 81.89 },
			{ time: '2019-04-15', value: 74.43 },
			{ time: '2019-04-16', value: 80.01 },
			{ time: '2019-04-17', value: 96.63 },
			{ time: '2019-04-18', value: 76.64 },
			{ time: '2019-04-19', value: 81.89 },
			{ time: '2019-04-20', value: 74.43 },
			{ time: '2019-04-21', value: 80.01 },
			{ time: '2019-04-22', value: 96.63 },
			{ time: '2019-04-23', value: 76.64 },
			{ time: '2019-04-24', value: 81.89 },
			{ time: '2019-04-25', value: 74.43 },
			{ time: '2019-04-26', value: 80.01 },
			{ time: '2019-04-27', value: 96.63 },
			{ time: '2019-04-28', value: 76.64 },
			{ time: '2019-04-29', value: 81.89 },
			{ time: '2019-04-30', value: 74.43 },
		]);
		this.chart.timeScale().fitContent();
	}
}

export default { Graph };
