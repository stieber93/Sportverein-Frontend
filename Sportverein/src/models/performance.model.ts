import type {TrainingSession} from "@/models/training-session.model";

export class Performance {
    id: number;
    reachedPerformance: string;
    trainingSession: TrainingSession;

    constructor (
        id: number,
        reachedPerformance: string,
        trainingSession: TrainingSession,
    ) {
        this.id = id;
        this.reachedPerformance = reachedPerformance;
        this.trainingSession = trainingSession;
    }
}

export class CreatePerformanceDto {
    id?: number;
    reachedPerfomance!: string;
    trainingSessionId!: number;
}

export class UpdatePerformanceDto {
    reachedPerfomance?: string;
    trainingSessionId?: number;
}