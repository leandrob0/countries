import { formattedAPIResponse } from "./../types.d";

export const formatResponse = (
  countries: Array<any>
): formattedAPIResponse[] => {
  if (countries.length === 0) return [];
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

export const formatCapitals = (capitals: string[]): string => {
  if (capitals !== undefined) {
    if (capitals.length === 1) return capitals[0];
    else if (capitals.length > 1) {
      let formattedText = "";

      capitals.forEach((capital, index) => {
        if (index + 1 === capitals.length) formattedText += capital;
        else formattedText += capital + ", ";
      });

      return formattedText;
    }
  }

  return "Unknown";
};
