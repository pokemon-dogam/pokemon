<script lang="ts" setup="">
  import { RefinedPokemonListType } from '@/interfaces/refiendPokemonType';

  defineProps<{
    pokemonTypes?: string[];
    refinedPokemonList: RefinedPokemonListType;
  }>();
</script>

<template>
  <div class="card w-96 bg-yellow-50 shadow-2xl">
    <figure>
      <img
        :src="refinedPokemonList.image"
        alt="포켓몬 이미지"
      />
    </figure>
    <div class="card-body">
      <h3>No.{{ refinedPokemonList.index }}</h3>
      <h2 class="card-title">{{ refinedPokemonList.name }}</h2>
      <!--            <p>능력</p>-->
      <!--            <p>{{ pokemonAbility }}</p>-->
      <div>
        <div>체력 : {{ refinedPokemonList.stats.HP }}</div>
        <div>공격력 : {{ refinedPokemonList.stats.ATTACK }}</div>
        <div>방어력 : {{ refinedPokemonList.stats.DEFENSE }}</div>
        <div>특수 공격 : {{ refinedPokemonList.stats.SPECIAL_ATTACK }}</div>
        <div>특수 방어: {{ refinedPokemonList.stats.SPECIAL_DEFENSE }}</div>
        <div>속도 : {{ refinedPokemonList.stats.SPEED }}</div>
      </div>
      <div class="card-actions justify-end">
        <div class="btn-outline btn-secondary btn tracking-wide">상세설명</div>
      </div>
    </div>
  </div>
</template>
