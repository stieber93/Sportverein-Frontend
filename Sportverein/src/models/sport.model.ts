export class Sport {
    id: number;
    title: string;

    constructor (
        id: number,
        title: string,
    ) {
        this.id = id;
        this.title = title;
    }
}

export class CreateSportDto {
    id?: number;
    title!: string;
}

export class UpdateSportDto {
    title?: string;
}