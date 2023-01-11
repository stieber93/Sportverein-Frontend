import { Performance, CreatePerformanceDto, UpdatePerformanceDto } from "@/models/performance.model";
import httpService from "@/services/http.service";

const parsePerformance = (s: any) => new Performance(s.id, s.reachedPerformance, s.trainingSession);
const basePath = "performance/";

export async function getAllPerformances(): Promise<Performance[]> {
    let performance = await httpService.get(basePath, null, parsePerformance);
    if (!Array.isArray(performance)) {
        performance = [performance];
    }
    return performance;
}

export async function getPerformanceById(id: number): Promise<Performance> {
    const performance = await httpService.get(`${basePath}/${id}`, null, parsePerformance);
    return performance as Performance;
}

export async function postPerformance(_CreatePerformance: CreatePerformanceDto): Promise<Performance> {
    const performance = await httpService.post(`${basePath}`, _CreatePerformance);
    return performance as Performance;
}

export async function deletePerformance(id: number): Promise<any> {
    const result = await httpService.del(`${basePath}/${id}`, null, parsePerformance);
    return result;
}

export async function updatePerformance(_UpdatePerformance: Partial<UpdatePerformanceDto>, id: number): Promise<Performance> {
    const performance = await httpService.pat(`${basePath}/${id}`, _UpdatePerformance);
    return performance as Performance;
}