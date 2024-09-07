<script setup lang="ts">
import type { IImage } from '@/core/images/IImage';
import { useImagesStore } from '@/stores/imagesStore';

const props = defineProps<{
    image: IImage
}>()

const imagesStore = useImagesStore()
const imageDirectory: string = imagesStore.imageURL + `/${props.image.imageName}`
</script>

<template>
    <div id="card-container">
        <div id="image-background">
            <div id="image" :style="{ 'background-image': 'url(' + imageDirectory + ')' }">
                <button class="buttons" @click="imagesStore.findUpdatingProduct(image.id), imagesStore.switchUpdateForm()">
                    <img class="icons" src="/images/icons/edit-svgrepo-com.svg" alt="delete-image">
                </button>
                <button class="buttons" @click="imagesStore.deleteImage(image.imageName)">
                    <img class="icons" src="/images/icons/delete-svgrepo-com (2).svg" alt="delete-image">
                </button>
            </div>
        </div>
        <p id="image-title">{{ image.imageTitle }}</p>
    </div>  
</template>

<style lang="scss" scoped>
#card-container {
    text-align: right;
}

#image-background {
    background-color: rgb(229, 229, 229);
    border-radius: 0.5rem;
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
}

#image {
    display: block;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

#image-title {
    text-align: center;
    font-family: "Ubuntu", sans-serif;
    margin: auto;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 11rem
}

.buttons {
    background-color: $factoria-orange;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    margin-top: 7.5rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
}

.icons {
    width: 1rem;
}

@media only screen and (min-width: 960px) {
#image-background {
    width: 12rem;
    margin-bottom: 1rem;
}

#image-title {
    margin: auto;
    font-size: 1.3rem;
    width: 14rem
}

.buttons {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    margin-top: 9rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
}

.icons {
    width: 1.25rem;
}
}

@media only screen and (min-width: 1264px) {

.buttons {
    width: 2rem;
    height: 2rem;
    border-radius: 1.5rem;
    margin-top: 9rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
}

.icons {
    width: 1rem;
}
}
</style>