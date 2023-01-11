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
	name: "BarChart",
	//typ of the chart
	components: {Bar},
	//defines values via vue props (when no prop is given, use default value)
	props: {
		chartId: {
			type: String,
			default: "bar-chart",
		},
		width: {
			type: Number,
			default: 900,
		},
		height: {
			type: Number,
			default: 200,
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
			labels: ["Gesamt", "2022", "Nov. 2022"],
			//datasets = values for a specific bar
			datasets: [
				{
					//unit
					label: "Trainingsstunden",
					//values
					data: [122, 32, 6],
					//colors of bar in hex-code
					backgroundColor: ["#d291bc", "#e8c7dd", "#f3e3ee"],
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
