import {defineComponent, h} from "vue";
import type {PropType} from "vue";
import {Bar} from "vue-chartjs";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

ChartJS.defaults.plugins.legend.display = false;
//ChartJS.defaults.plugins.title.display = true;
//ChartJS.defaults.plugins.title.text = "Trainingsstunden vergangender Zeträume";

export default defineComponent({
	name: "BarChart",
	components: {Bar},
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
			default: "",
			type: String,
		},
		styles: {
			type: Object as PropType<Partial<CSSStyleDeclaration>>,
			default: () => {},
		},
	},
	setup(props) {
		const chartData = {
			labels: ["Gesamt", "2022", "Nov. 2022"],
			datasets: [
				{
					label: "Trainingsstunden",
					data: [122, 32, 6],
					backgroundColor: ["violet", "pink", "hotpink"],
				},
			],
		};

		const chartOptions = {responsive: true, maintainAspectRatio: false};
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
