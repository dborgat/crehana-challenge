export interface Language {
    name: string
    native: string
    code: string
}

export interface Continent {
    code: string
    name: string
}
export interface SingleState {
    name: string
}

export interface Country {
    code: string
    name: string
    native: string
    capital: string
    currency: string
    emoji: string
    states: Array<SingleState>
    languages: Array<Language>
    continent: Continent
}

export interface Continent {
    code: string
    name: string
    countries: Array<Country>
}

export interface InputState {
    country?: string
    continent?: string
    currency?: string
}

export interface InputObject {
    country?: Array<Country>
    continent?: Array<Country>
    currency?: Array<Country>
}

export interface SelectedCountryContext {
    onChangeInput: (key: string, e: React.ChangeEvent<HTMLInputElement> | string) => void
    code: InputState
    countries: Array<Country>
    continents: Array<Continent>
    input: InputState
    filterObject: InputObject
}