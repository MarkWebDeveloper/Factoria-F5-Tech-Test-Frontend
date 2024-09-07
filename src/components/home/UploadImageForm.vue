<script setup lang="ts">
import ImageService from '@/core/images/ImageService';
import { useImagesStore } from '@/stores/imagesStore';
import { ref } from 'vue';

const imagesStore = useImagesStore()
const imageTitle = ref('')

async function handleSubmit(): Promise<void> {

    const formData = new FormData()
    formData.append('file', imagesStore.uploadingImage!)
    formData.append('imageTitle', imageTitle.value)

    try {
        imagesStore.postImage(formData)
        // imagesStore.deleteImageFromArray(imagesStore.images.findIndex((element) => element.id == productsStore.newProductId))
        // const productWithImages = await productService.getOneById(productsStore.newProductId)
        setTimeout(() => {
            imagesStore.addImageToArray(imagesStore.uploadedImage)
        }, 1000);
        imagesStore.uploadImageFormIsOpened = false
        // imagesStore.resetImagesForm()
        // alertsStore.createAlert("success", "Images are uploaded successfully")
    } catch (error) {
        // alertsStore.createAlert("error", "Unexpected error occurred during the images upload")
        throw new Error("Unexpected error happened during images upload" + error)
    }

}

</script>

<template>
    <div class="form-background">
        <form class="form-container" @submit.prevent="handleSubmit">
            <button class="close-button" @click="imagesStore.switchUploadForm()">
                <img class="close-button-image" src="/images/icons/close-tab-svgrepo-com.svg" alt="close-image">
            </button>
            <h2>UPLOAD NEW IMAGE</h2>
            <label for="image-upload" class="image-input-label">
                <div class="image-background">
                    <div class="image"
                        :style="{ 'background-image': 'url(' + imagesStore.uploadingImageUrl + ')' }" alt="image"></div>
                    </div>
                <input @change="imagesStore.handleFileUpload" class="image-input" type="file" name="file"
                    id="image-upload">
            </label>
            <input class="email-input" type="text" name="email-input" id="email-input" v-model="imageTitle" required placeholder="Insert Image Title">
            <button class="send-button" id="send-button" type="submit">SEND</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.form-background {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    background-color: rgba($color: #000000, $alpha: 0.06);
    backdrop-filter: blur(3px);
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17rem;
    background-color: white;
    z-index: 99;
    border-radius: 10px;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    margin: auto;
}

.close-button {
    margin-left: auto;
    background-color: transparent;
    cursor: pointer;
}

.close-button-image {
    width: 2rem;
}

h2 {
    font-family: "Anybody", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 3rem;
}

#image-input-label {
    display: block;
    margin: auto;
}

.image-input {
    display: none;
}

.image-background {
    background-color: rgb(213, 213, 213);
    border-radius: 0.5rem;
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
}

.image {
    display: block;
    width: 100%;
    padding: 50%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

input {
    width: 80%;
    background-color: $input-background-color;
    border-radius: 5px;
    margin-bottom: 2rem;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2rem;
    z-index: 98;
    padding: 0.3rem;
    box-shadow: 2px 2px 4px #888888;
}

::placeholder {
   text-align: center; 
}

.send-button {
    background-color: $factoria-orange;
    width: 6rem;
    font-size: 1rem;
    padding: 0.7rem;
    font-family: "Ubuntu", sans-serif;
    color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 4px #888888;
    cursor: pointer;
}

@media only screen and (min-width: 992px) {
.form-container {
    width: 25rem;
    padding: 1rem 1rem 1rem 1rem;
}

.close-button-image {
    width: 2.5rem;
}

h2 {
    font-size: 2rem;
    margin-bottom: 4rem;
}

.image {
    margin-bottom: 3rem;
}

input {
    border-radius: 5px;
    margin-bottom: 3rem;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.5rem;
    padding: 0.5rem;
}

.send-button {
    width: 7rem;
    font-size: 1.3rem;
    padding: 1rem;
    font-family: "Ubuntu", sans-serif;
    color: white;
    border-radius: 10px;
    margin-bottom: 2rem;
}
}

@media only screen and (min-width: 1200px) {
    .form-container {
    width: 22rem;
    padding: 1rem 1rem 1rem 1rem;
}

.close-button-image {
    width: 2rem;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
}

input {
    border-radius: 5px;
    margin-bottom: 2rem;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.3rem;
    padding: 0.7rem;
}

.send-button {
    width: 7rem;
    font-size: 1.3rem;
    padding: 1rem;
    font-family: "Ubuntu", sans-serif;
    color: white;
    border-radius: 10px;
    margin-bottom: 2rem;
}
}
</style>