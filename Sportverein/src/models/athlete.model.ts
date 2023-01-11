export class Athlete {
    id: number;
    firstname: string;
    lastname: string;

    constructor (
        id: number,
        firstname: string,
        lastname: string,
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

export class CreateAthleteDto {
    id?: number;
    firstname!: string;
    lastname!: string;
}

export class UpdateAthleteDto {
    firstname?: string;
    lastname?: string;
}