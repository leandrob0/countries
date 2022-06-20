import { formattedAPIResponse } from './../types.d';

export const formatResponse = (countries: Array<any>): formattedAPIResponse[] => {
  if(countries.length === 0) return [];
  return countries.map((country) => {
    const {
      name,
      population,
      tld,
      borders,
      capital,
      currencies,
      region,
      subregion,
      languages,
      flags,
    } = country;

    return {
      flags,
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
    };
  });
};
