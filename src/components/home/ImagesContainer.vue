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
    display: flex;
    justify-content: space-around;
}
</style>