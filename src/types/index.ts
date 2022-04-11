export type VIDEOS = {
    name: string;
    duration:number;
    description: string;
    dateCreated:string;
    id:number;
    thumbnail: string;
}

export type PLAYLISTS = {
    name: string;
    description: string;
    id:number;
    videoIds: number[];
    dateCreated:string;
}
