import { Country } from '../types';

interface ObjectCurrencies {
    [index: string]: string;
}

export const filterByCurrencies = (countryList: Array<Country> | undefined) => {
    let objectToArray: ObjectCurrencies = {};

    countryList?.forEach((country) => {
        if (!objectToArray[country.currency]) {
            objectToArray[country.currency] = country.currency;
        }
    });
    return objectToArray;
};