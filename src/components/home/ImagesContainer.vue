<script setup lang="ts">
import { useImagesStore } from '@/stores/imagesStore';
import ImageCard from './ImageCard.vue';

const imagesStore = useImagesStore()
</script>

<template>
    <div id="images-container" v-if="imagesStore.isLoaded">
        <ImageCard v-for="image in imagesStore.images" :key="image.id" :image="image"/>
    </div>
</template>

<style lang="scss" scoped>
#images-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
}

@media only screen and (min-width: 960px) {
    #images-container {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 3rem;
    padding-inline-start: 3rem;
    padding-inline-end: 3rem;
}
}

@media only screen and (min-width: 1264px) {
    #images-container {
    grid-template-columns: repeat(5, 1fr);
    row-gap: 5rem;
}
}
</style>