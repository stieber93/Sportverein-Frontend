import {defineStore} from "pinia";

export const currentSelections = defineStore("currentSelections", {
	state: () => ({
		athleteId: 0,
		sportId: 0,
	}),

	getters: {
		getAthleteId(state) {
			return state.athleteId;
		},
		getSportId(state) {
			return state.sportId;
		},
	},

	actions: {
		setAthleteId(newId: number) {
			this.athleteId = newId;
		},
		setSportId(newId: number) {
			this.sportId = newId;
		},
	},
});
