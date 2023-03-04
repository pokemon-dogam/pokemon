<script setup lang="ts">
  import {
    requestDetailPokeData,
    requestPokeApi,
    requestPokemonSpeciesData,
  } from '@/api/poke';
  import { AxiosResponse } from 'axios';
  import { PokemonListType } from '@/interfaces/pokemonList';
  import { RefinedPokemonListType } from '@/interfaces/refiendPokemonType';

  const pokemonAllList = ref<PokemonListType[]>([]);
  const refinedPokemonList = ref<RefinedPokemonListType[]>([]);

  const loading = ref<boolean>(true);
  const getPokemonIndex = (url: string) => {
    return url.split('/')[6];
  };

  const getPokemonAllList = async () => {
    try {
      const res = (await requestPokeApi()) as AxiosResponse;

      pokemonAllList.value = res.data.results.map((item: any, i: number) => {
        return {
          index: getPokemonIndex(item.url),
          name: item.name,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setPokemonDetail = async () => {
    try {
      for (const pokemon of pokemonAllList.value) {
        const { data: detail } = (await requestDetailPokeData(
          pokemon.index,
        )) as AxiosResponse;
        const { data: speciese } = (await requestPokemonSpeciesData(
          pokemon.index,
        )) as AxiosResponse;

        const pokemonDetail: RefinedPokemonListType = {
          index: pokemon.index,
          name:
            speciese.names.filter((item: any) => item.language.name === 'ko')[0]
              .name ?? pokemon.name,
          abilities: detail.abilities,
          height: detail.height,
          weight: detail.weight,
          image: detail.sprites.other['official-artwork'].front_default,
          types: detail.types.map((item: any) => item.type.name),
          stats: {
            HP: detail.stats[0].base_stat,
            ATTACK: detail.stats[1].base_stat,
            DEFENSE: detail.stats[2].base_stat,
            SPECIAL_ATTACK: detail.stats[3].base_stat,
            SPECIAL_DEFENSE: detail.stats[4].base_stat,
            SPEED: detail.stats[5].base_stat,
          },
          generation: speciese.generation.name ?? 'no-gen',
        };
        refinedPokemonList.value.push(pokemonDetail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonInformation = async () => {
    await getPokemonAllList();
    await setPokemonDetail();
    loading.value = false;
  };

  getPokemonInformation();
</script>

<template>
  <div class="relative py-8">
    <button
      v-if="loading"
      class="loading btn-square btn flex"
    />
    <div
      v-else
      class="grid grid-cols-3 justify-items-center gap-10"
    >
      <PokemonCard
        v-for="pokemon in refinedPokemonList"
        :key="pokemon.index"
        :refined-pokemon-list="pokemon"
      />
    </div>
  </div>
</template>
