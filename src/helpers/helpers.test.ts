import { formatResponse, formatCapitals } from "./formatters";

describe("Format response function.", () => {
  const preFormattedObj = [
    {
      name: "",
      population: "",
      tld: "",
      borders: "",
      capital: "",
      thisShouldntGo2: "",
      currencies: "",
      region: "",
      subregion: "",
      languages: "",
      flags: "",
      thisShouldntGo: "",
    },
  ];

  const postFormattedObj = [
    {
      name: "",
      population: "",
      tld: "",
      borders: "",
      capital: "",
      currencies: "",
      region: "",
      subregion: "",
      languages: "",
      flags: "",
    },
  ];

  test("Function formats the API response as desired.", () => {
    expect(formatResponse(preFormattedObj)).toEqual(postFormattedObj);
  });

  test("Function returns an empty array if the passed array is empty.", () => {
    expect(formatResponse([])).toEqual([]);
  });
});

describe("Format capitals function.", () => {
  test("Function formats the capitals name as desired.", () => {
    expect(formatCapitals(["Buenos Aires", "La plata", "Mar del Plata"])).toBe(
      "Buenos Aires, La plata, Mar del Plata"
    );
  });

  test("Function returns the only capital name if the capital is only one.", () => {
    expect(formatCapitals(["Buenos Aires"])).toBe("Buenos Aires");
  });

  test("Function returns unknown if the capitals are not returned.", () => {
    expect(formatCapitals([])).toBe("Unknown");
  });
});
