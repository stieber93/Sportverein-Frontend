import { Sport, CreateSportDto, UpdateSportDto } from "@/models/sport.model";
import httpService from "@/services/http.service";

const parseSport = (s: any) => new Sport(s.id, s.title);
const basePath = "sport/";

export async function getAllSports(): Promise<Sport[]> {
    let sport = await httpService.get(basePath, null, parseSport);
    if (!Array.isArray(sport)) {
        sport = [sport];
    }
    return sport;
}

export async function getSportById(id: number): Promise<Sport> {
    const sport = await httpService.get(`${basePath}/${id}`, null, parseSport);
    return sport as Sport;
}

export async function postSport(_Sport: CreateSportDto): Promise<Sport> {
    const sport = await httpService.post(`${basePath}`, _Sport);
    return sport as Sport;
}

export async function deleteSport(id: number): Promise<any> {
    const result = await httpService.del(`${basePath}/${id}`, null, parseSport);
    return result;
}

export async function updateSport(_Sport: Partial<UpdateSportDto>, id: number): Promise<Sport> {
    const sport = await httpService.pat(`${basePath}/${id}`, _Sport);
    return sport as Sport;
}