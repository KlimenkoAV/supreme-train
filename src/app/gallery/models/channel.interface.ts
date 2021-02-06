import { Genre, Picture } from '.';

export interface Channel {
    genres: Genre[];
    introduce: string;
    name: string;
    picture: Picture;
}
