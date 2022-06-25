import { formattedAPIResponse } from "./../types.d";

export const searchCountry = (
  name: string | undefined,
  countries: formattedAPIResponse[]
): formattedAPIResponse | [] => {
  if (name === undefined) return [];
  
  for(let i = 0; i < countries.length; i++) {
    if(countries[i].name.official === name) {
        return countries[i];
    }
  }

  return [];
};
