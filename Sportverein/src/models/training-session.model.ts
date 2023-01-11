import type {Athlete} from "@/models/athlete.model";
import type {Sport} from "@/models/sport.model";

export class TrainingSession {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
    athlete: Athlete;
    sport: Sport;

    constructor (
        id: number,
        date: string,
        startTime: string,
        endTime: string,
        athlete: Athlete,
        sport: Sport,

    ) {
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.athlete = athlete;
        this.sport = sport;
    }
}

export class CreateTrainingSessionDto {
    id?: number;
    date!: string;
    startTime!: string;
    endTime!: string;
    athleteId!: number;
    sportId!: number;
}

export class UpdateTrainingSessionDto {
    date?: string;
    startTime?: string;
    endTime?: string;
    athleteId?: number;
    sportId?: number;
}