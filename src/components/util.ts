export interface ProjectInterface {
    icon: string;
    cover: string;
    tag: string[];
    title: string;
    intro: string;
    insp: string;
    jrny: string[];
}

export interface ProjectsInterface {
    [key: string]: ProjectInterface;
}