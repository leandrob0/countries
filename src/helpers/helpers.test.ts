import { formatResponse } from './formatResponse';

const preFormattedObj = [{
    name: '',
    population: '',
    tld: '',
    borders: '',
    capital: '',
    thisShouldntGo2: '',
    currencies: '',
    region: '',
    subregion: '',
    languages: '',
    flags: '',
    thisShouldntGo: '',
}];

const postFormattedObj = [{
    name: '',
    population: '',
    tld: '',
    borders: '',
    capital: '',
    currencies: '',
    region: '',
    subregion: '',
    languages: '',
    flags: ''
}]

describe('Format response function.', () => {
    test('Function formats the API response as desired.', () => {
        expect(formatResponse(preFormattedObj)).toEqual(postFormattedObj);
    });

    test('Function returns an empty array if the passed array is empty.', () => {
        expect(formatResponse([])).toEqual([]);
    })
})