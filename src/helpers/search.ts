import { formattedAPIResponse } from "./../types.d";

export const searchCountry = (
  name: string | undefined,
  countries: formattedAPIResponse[]
): formattedAPIResponse | null => {
  if (name === undefined) return null;
  
  for(let i = 0; i < countries.length; i++) {
    if(countries[i].name.official === name) {
        return countries[i];
    }
  }

  return null;
};
