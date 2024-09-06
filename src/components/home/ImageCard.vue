<script setup lang="ts">
import type { IImage } from '@/core/auth/IImage';
import { useImagesStore } from '@/stores/imagesStore';

const props = defineProps<{
    image: IImage
}>()

const imagesStore = useImagesStore()
const imageDirectory: string = imagesStore.imageURL + `/${props.image.imageName}`
</script>

<template>
    <div id="image-background">
        <div id="image" :style="{ 'background-image': 'url(' + imageDirectory + ')' }">
            <button>hi</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#image-background {
    background-color: rgb(213, 213, 213);
    border-radius: 0.5rem;
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
}

#image {
    display: block;
    width: 100%;
    padding: 50%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>