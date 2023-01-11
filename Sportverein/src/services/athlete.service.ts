import { Athlete, CreateAthleteDto, UpdateAthleteDto } from "@/models/athlete.model";
import httpService from "@/services/http.service";

const parseAthlete = (s: any) => new Athlete(s.id, s.firstname, s.lastname);
const basePath = "athlete/";

export async function getAllAthletes(): Promise<Athlete[]> {
    let athlete = await httpService.get(basePath, null, parseAthlete);
    if (!Array.isArray(athlete)) {
        athlete = [athlete];
    }
    return athlete;
}

export async function getAthleteById(id: number): Promise<Athlete> {
    const athlete = await httpService.get(`${basePath}/${id}`, null, parseAthlete);
    return athlete as Athlete;
}

export async function postAthlete(_Athlete: CreateAthleteDto): Promise<Athlete> {
    const athlete = await httpService.post(`${basePath}`, _Athlete);
    return athlete as Athlete;
}

export async function deleteAthlete(id: number): Promise<any> {
    const result = await httpService.del(`${basePath}/${id}`, null, parseAthlete);
    return result;
}

export async function updateAthlete(_Athlete: Partial<UpdateAthleteDto>, id: number): Promise<Athlete> {
    const athlete = await httpService.pat(`${basePath}/${id}`, _Athlete);
    return athlete as Athlete;
}