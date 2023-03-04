export interface statsType {
    HP: number;
    SPEED: number;
    ATTACK: number;
    DEFENSE: number;
    SPECIAL_ATTACK: number;
    SPECIAL_DEFENSE: number;
}

export interface RefinedPokemonListType {
    index: string;
    name: string;
    generation?: string;
    stats: statsType;
    height: number;
    weight: number;
    types: string[],
    image: string,
    abilities: string[],
}
