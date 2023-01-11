import { TrainingSession, CreateTrainingSessionDto, UpdateTrainingSessionDto } from "@/models/training-session.model";
import httpService from "@/services/http.service";

const parseTrainingSession = (s: any) => new TrainingSession(s.id, s.date, s.startTime, s.endTime, s.athlete, s.sport);
const basePath = "training-session/";

export async function getAllTrainingSessions(): Promise<TrainingSession[]> {
    let trainingSession = await httpService.get(basePath, null, parseTrainingSession);
    if (!Array.isArray(trainingSession)) {
        trainingSession = [trainingSession];
    }
    return trainingSession;
}

export async function getTrainingSessionById(id: number): Promise<TrainingSession> {
    const trainingSession = await httpService.get(`${basePath}/${id}`, null, parseTrainingSession);
    return trainingSession as TrainingSession;
}

export async function postTrainingSession(_TrainingSession: CreateTrainingSessionDto): Promise<TrainingSession> {
    const trainingSession = await httpService.post(`${basePath}`, _TrainingSession);
    return trainingSession as TrainingSession;
}

export async function deleteTrainingSession(id: number): Promise<any> {
    const result = await httpService.del(`${basePath}/${id}`, null, parseTrainingSession);
    return result;
}

export async function updateTrainingSession(_TrainingSession: Partial<UpdateTrainingSessionDto>, id: number): Promise<TrainingSession> {
    const trainingSession = await httpService.pat(`${basePath}/${id}`, _TrainingSession);
    return trainingSession as TrainingSession;
}