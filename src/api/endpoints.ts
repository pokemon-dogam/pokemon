const POKE_API_URL = 'https://pokeapi.co/api/v2';
export const endpoints = {
  pokeApi: {
    list: `${POKE_API_URL}/pokemon/?offset=0&limit=1279`,
    detail: `${POKE_API_URL}/pokemon`,
    species: `${POKE_API_URL}/pokemon-species`,
  },
};
