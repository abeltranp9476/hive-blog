// Generated by https://quicktype.io

export interface ResponseAPI {
    info: Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface Result {
    title: string;
}