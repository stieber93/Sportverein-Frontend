import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Athlete from "@/views/Athlete.vue";
import Sport from "@/views/Sport.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			path: "/home",
			name: "home",
			component: Home,
		},
		{
			path: "/athlete",
			name: "athlete",
			component: Athlete,
		},
		{
			path: "/sport",
			name: "sport",
			component: Sport,
		},
	],
});

export default router;
