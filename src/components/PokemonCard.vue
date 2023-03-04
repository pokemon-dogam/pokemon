<script  lang="ts" setup="">
import {RefinedPokemonListType} from "@/interfaces/refiendPokemonType";

defineProps<{
    pokemonTypes?: string[],
    refinedPokemonList: RefinedPokemonListType,
}>();
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl">
<!--        <li v-for="(type, typeIndex) in pokemonTypes" :key="typeIndex">-->
<!--            <PokemonType :typeImage="type." />-->
<!--        </li>-->
        <figure>
            <img :src="refinedPokemonList.image" alt="포켓몬 이미지" />
        </figure>
        <div class="card-body">
            <h3>No.{{ refinedPokemonList.index}}</h3>
            <h2 class="card-title">{{ refinedPokemonList.name }}</h2>
<!--            <p>능력</p>-->
<!--            <p>{{ pokemonAbility }}</p>-->
            <div>
                <div>HP: {{ refinedPokemonList.stats.HP }}</div>
                <div>ATTACK: {{ refinedPokemonList.stats.ATTACK }}</div>
                <div>DEFENSE: {{ refinedPokemonList.stats.DEFENSE }}</div>
                <div>SPECIAL_ATTACK: {{ refinedPokemonList.stats.SPECIAL_ATTACK }}</div>
                <div>SPECIAL_DEFENSE: {{ refinedPokemonList.stats.SPECIAL_DEFENSE }}</div>
                <div>SPEED: {{ refinedPokemonList.stats.SPEED }}</div>
            </div>
            <div class="card-actions justify-end">
                <div class="badge badge-outline">상세설명</div>
            </div>
        </div>

    </div>
</template>
