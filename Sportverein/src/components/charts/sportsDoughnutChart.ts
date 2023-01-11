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
		} /* 
		plugins: {
			type: Object as PropType<Plugin<"bar">>,
			default: () => {},
		}, */,
	},
	setup(props) {
		const chartData = {
			labels: ["100m Sprint", "110m Hürden", "Weitsprung", "Hochsprung", "Speerwerfen"],
			datasets: [
				{
					data: [82, 61, 45, 28, 27],
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
				//plugins: props.plugins,
			});
	},
});
