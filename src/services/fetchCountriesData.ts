import { formattedAPIResponse } from '../types';
import { formatResponse } from '../helpers/formatters';

const baseUrl = 'https://restcountries.com/v3.1/';

export const getAllCountries = async (): Promise<formattedAPIResponse[]> => {
    const data = await fetch(`${baseUrl}all`);
    const jsonData = await data.json();
    const formattedResponse = formatResponse(jsonData);

    return formattedResponse;
}