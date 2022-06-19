export interface formattedAPIResponse {
    flags: {
        png: string;
        svg: string;
    };
    currencies: object;
    capital: string[];
    borders: string[];
    languages: object;
    population: number;
    region: string;
    subregion: string;
    tld: string[];
    name: {
        common: string;
        official: string;
        nativeName: object;
    };
}