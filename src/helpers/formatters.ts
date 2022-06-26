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

export const formatCapitals = (capitals: string[] | undefined): string => {
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

export const formatPopulation = (pop: number | undefined): string => {
  if (pop === undefined) return "Unknown";
  // Code from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript.
  return pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatCurrencies = (currencies: object | undefined): string => {
  if (currencies !== undefined) {
    let keys = Object.keys(currencies);
    let keysLength = keys.length;
    if (keysLength === 1)
      return currencies[keys[0] as keyof typeof currencies]["name"];

    let formattedText = "";

    for (let i = 0; i < keysLength; i++) {
      if (i + 1 === keysLength) {
        formattedText += currencies[keys[i] as keyof typeof currencies]["name"];
      } else {
        formattedText +=
          currencies[keys[i] as keyof typeof currencies]["name"] + ", ";
      }
    }
    return formattedText;
  }
  return "Unknown";
};

export const formatLanguages = (languages: object | undefined): string => {
  if (languages !== undefined) {
    let keys = Object.keys(languages);
    let keysLength = keys.length;
    if (keysLength === 1)
      return languages[keys[0] as keyof typeof languages];

    let formattedText = "";

    for (let i = 0; i < keysLength; i++) {
      if (i + 1 === keysLength) {
        formattedText += languages[keys[i] as keyof typeof languages];
      } else {
        formattedText +=
        languages[keys[i] as keyof typeof languages] + ", ";
      }
    }
    return formattedText;
  }
  return "Unknown";
};
