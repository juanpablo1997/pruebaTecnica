export interface TypeCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string;
    url: string;
    created: string;
}

export interface Location {
    name: string;
    url: string;
}