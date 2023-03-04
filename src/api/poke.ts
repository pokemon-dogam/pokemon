import {endpoints} from "@/api/endpoints";
import axios from "axios";

export const requestPokeApi = () => {
    const url = endpoints.pokeApi.list;

    return axios.get(url);
}

/**
 * 포켓몬 상세 API
 * https://pokeapi.co/api/v2/pokemon/인덱스
 * 무게 : weight : number
 * 키 : height : number
 * 타입 : types : []
 * 스탯 : stats : []
 * 특성 : abilities : []
 * 이미지 : sprites : {}
 * */

export const requestDetailPokeData = (number: string) => {
    const url = `${endpoints.pokeApi.detail}/${number}`;

    return axios.get(url);
}

/**
 * 어빌리티 상세 API
 * https://pokeapi.co/api/v2/pokemon/기술이름
 * 기술 이름 : names : []
 *
 * */


/**
 * 포켓몬 종에 대한 API
 * https://pokeapi.co/api/v2/pokemon-species/인덱스/
 * 이름 : names : []
 * 전설 포켓몬 : is_legendary : boolean
 * 신화 포켓몬 : is_mythical : boolean
 * 포켓몬 세대 : generation : []
 *
 * */
export const requestPokemonSpeciesData = (number: string) => {
    const url = `${endpoints.pokeApi.species}/${number}`;

    return axios.get(url);
}
