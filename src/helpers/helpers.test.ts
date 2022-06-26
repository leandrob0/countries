import {
  formatResponse,
  formatCapitals,
  formatPopulation,
  formatCurrencies,
} from "./formatters";

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

describe("Format population function.", () => {
  test("Formats a 7 digit number well.", () => {
    expect(formatPopulation(1231231)).toBe("1.231.231");
  });

  test("Formats a 6 digit number well.", () => {
    expect(formatPopulation(123123)).toBe("123.123");
  });

  test("Returns unkonwn in the case the number is undefined.", () => {
    expect(formatPopulation(undefined)).toBe("Unknown");
  });
});

describe("Format currencies function.", () => {
  test("Formats only one currency well.", () => {
    expect(
      formatCurrencies({
        YER: { name: "Yemeni rial", symbol: "﷼" },
      })
    ).toBe("Yemeni rial");
  });

  test("Formats multiple currencies well.", () => {
    expect(
      formatCurrencies({
        YER: { name: "Yemeni rial", symbol: "﷼" },
        ARG: { name: "Peso Argentino", symbol: "$"},
        YER2: { name: "Yemeni rial2", symbol: "﷼" },
      })
    ).toBe("Yemeni rial, Peso Argentino, Yemeni rial2");
  });

  test("Returns unkonwn in the case the currencies is undefined.", () => {
    expect(formatCurrencies(undefined)).toBe("Unknown");
  });
});
