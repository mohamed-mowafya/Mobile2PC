<template>
  <div class="flex justify-center">
    <p class="title-font text-white text-3xl p-2 mt-9">Choose a file and press upload !</p>
  </div>
  <div class="mt-6 flex justify-center">
    <img width="350" src="/images/black_upload_img.png" />
  </div>
  <div class="file-upload-container">
    <div class="flex flex-col">
      <label class="block">
        <input
          v-on:change="onFileUpload"
          type="file"
          class="mb-7 block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black dark:file:bg-white"
        />
      </label>
      <button @click="uploadFile" class="bg-white text-black font-bold py-2 px-6 rounded-full">
        Upload
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const route = useRoute()
const connectionId = ref<string>((route.params.connectionId as string) || '')
let selectedFile: File | null = null

const onFileUpload = (e: Event) => {
  const inputElement = e.target as HTMLInputElement
  const files = inputElement.files as FileList | null

  if (files && files.length == 1) {
    selectedFile = files[0]
  }
}

const uploadFile = async () => {
  if (!selectedFile) {
    console.error('No file selected')
    return
  }

  const formData = new FormData()
  formData.append('file', selectedFile)
  formData.append('sid', connectionId.value)

  try {
    await fetch(`${import.meta.env.VITE_API_ENDPOINT_URL}/upload`, {
      method: 'POST',
      body: formData
    })
    /**
     * No need to show success toast if we redirect user to homepage right after upload.
     */
    window.location.href = import.meta.env.VITE_FRONT_URL;
  } catch (error: unknown) {
    toast.error('An error has occured !', {
      position: toast.POSITION.TOP_LEFT
    });
  }
}
</script>
