//general file imports
import {defineComponent, h} from "vue";
import type {PropType} from "vue";
//chart specific vue-chart.js import
import {Bar} from "vue-chartjs";
//needed chart.js part imports
import {Chart as ChartJS, Title, Legend, BarElement} from "chart.js";

//register parts, which are needed for this specific chart
ChartJS.register(Title, Legend, BarElement);

//toogle visisbility of certain parts
ChartJS.defaults.plugins.legend.display = false; /* default true */
//ChartJS.defaults.plugins.title.display = true; /* default false  --> maybe useful for other charts */

//define chart here in export to call it from other destinations with wanted features via props
export default defineComponent({
	//name of the chart
	name: "TrainingTimesBarChart",
	//typ of the chart
	components: {Bar},
	//defines values via vue props (when no prop is given, use default value)
	props: {
		chartId: {
			type: String,
			default: "training-times-bar-chart",
		},
		width: {
			type: Number,
			default: 900,
		},
		height: {
			type: Number,
			default: 190,
		},
		cssClasses: {
			type: String,
			default: "",
		},
		styles: {
			type: Object as PropType<Partial<CSSStyleDeclaration>>,
			default: {},
		},
	},
	setup(props) {
		//set chartData (while in testing phase: directly set values)
		const chartData = {
			//labels = description texts for a specific bar
			labels: [
				"00:00",
				"01:00",
				"02:00",
				"03:00",
				"04:00",
				"05:00",
				"06:00",
				"07:00",
				"08:00",
				"09:00",
				"10:00",
				"11:00",
				"12:00",
				"13:00",
				"14:00",
				"15:00",
				"16:00",
				"17:00",
				"18:00",
				"19:00",
				"20:00",
				"21:00",
				"22:00",
				"23:00",
			],
			//datasets = values for a specific bar
			datasets: [
				{
					//unit
					label: "Trainingsstunden",
					//values
					data: [
						2, 2, 3, 4, 4, 7, 13, 35, 67, 89, 90, 78, 103, 140, 127, 99, 87, 56, 45, 23,
						20, 11, 4, 2,
					],
					//colors of bar in hex-code
					backgroundColor: [
						"#F997B1",
						"#FFA49C",
						"#FFBA83",
						"#FFD870",
						"#F9F871",
						"#FFD870",
						"#FFBA83",
						"#FFA49C",
						"#F997B1",
						"#D291BC",
						"#F997B1",
						"#FFA49C",
						"#FFBA83",
						"#FFD870",
						"#F9F871",
						"#FFD870",
						"#FFBA83",
						"#FFA49C",
						"#F997B1",
						"#D291BC",
						"#F997B1",
						"#FFA49C",
						"#FFBA83",
						"#FFD870",
					],
				},
			],
		};
		//set chart responive (resized when window is resized), with consistent aspect ratio
		const chartOptions = {responsive: true, maintainAspectRatio: true};
		//return chart with set options in this file and from given props
		return () =>
			h(Bar, {
				chartOptions,
				chartData,
				chartId: props.chartId,
				width: props.width,
				height: props.height,
				cssClasses: props.cssClasses,
				styles: props.styles,
			});
	},
});
