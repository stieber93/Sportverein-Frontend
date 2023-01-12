import {defineComponent, h} from "vue";
import type {PropType} from "vue";
import {Doughnut} from "vue-chartjs";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale,
	LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

/* ChartJS.defaults.plugins.legend.display = true;
ChartJS.defaults.plugins.legend.position = "bottom";
ChartJS.defaults.plugins.title.display = true;
ChartJS.defaults.plugins.title.position = "top";
ChartJS.defaults.plugins.title.text = "Anzahl Traningseinheiten im Zeitraum X"; */



export default defineComponent({
	name: "SportsDoughnutChart",
	components: {Doughnut},
	props: {
		chartId: {
			type: String,
			default: "doughnut-chart",
		},
		width: {
			type: Number,
			default: 300,
		},
		height: {
			type: Number,
			default: 300,
		},
		cssClasses: {
			default: "",
			type: String,
		},
		styles: {
			type: Object as PropType<Partial<CSSStyleDeclaration>>,
			default: () => {},
		},
		optionsArray: {
			type: Array as PropType<String[]>,
			default: () => [],
		},
		valuesArray: {
			type: Array as PropType<number[]>,
			default: () => [],
		} /* 
		plugins: {
			type: Object as PropType<Plugin<"bar">>,
			default: () => {},
		}, */,
	},
	setup(props) {
		const chartData = {
			labels: [props.optionsArray[0], props.optionsArray[1], props.optionsArray[2], props.optionsArray[3], props.optionsArray[4]],
			datasets: [
				{
					data: [props.valuesArray[0], props.valuesArray[1], props.valuesArray[2], props.valuesArray[3], props.valuesArray[4]],
					backgroundColor: ["#D291BC", "#F997B1", "#FFA49C", "#FFBA83", "#FFD870"],
					//hoverOffset: 4,
				},
			],
		};

		const chartOptions = {responsive: true, maintainAspectRatio: false};
		return () =>
			h(Doughnut, {
				chartData,
				chartOptions,
				chartId: props.chartId,
				width: props.width,
				height: props.height,
				cssClasses: props.cssClasses,
				styles: props.styles,
				optionsArray: props.optionsArray,
				valuesArray: props.valuesArray,
				//plugins: props.plugins,
			});
	},
});
