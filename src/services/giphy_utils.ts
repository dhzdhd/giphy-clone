import { GiphyFetch } from "@giphy/js-fetch-api";
import axios from 'axios';

export enum GiphyDataType {
    TRENDING,
    SEARCH
}

interface GiphyRequestJson {
    limit: number,
    offset: number,
    q?: string | undefined
}
export interface GiphyResponseJson {
    // GIF object
    type: string,
    id: string,
    slug: string,
    url: string,
    bitly_url: string,
    username: string,
    source: string,
    upload_date: string,
    title: string,

    // Pagination object
    offset: number,
    count: number,

    // Meta object
    status: string
}

export const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY as string)
const key = import.meta.env.VITE_GIPHY_KEY as string

export const fetchData = async (type: GiphyDataType, data: GiphyRequestJson, query?: string): Promise<GiphyResponseJson[]> => {
    console.log('hi');

    const endpoint = type === GiphyDataType.SEARCH ? 'search' : 'trending';
    let params = { ...data, api_key: key, u: 'hello' };
    if (!query) params['u'] = query!;

    const res = await axios.get(`https://api.giphy.com/v1/gifs/${endpoint}`, { params: params });

    let resList: GiphyResponseJson[] = [];
    for (let element of res.data['data']) {
        resList.push({
            type: element.type as string,
            id: element.id as string,
            slug: element.slug as string,
            url: element.url as string,
            bitly_url: element.bitly_url as string,
            username: element.username as string,
            source: element.source as string,
            upload_date: element.import_datetime as string,
            title: element.title as string,
            offset: res.data.pagination.offset as number,
            count: res.data.pagination.count as number,
            status: res.data.meta.status as string
        });
    }
    return resList;
}
