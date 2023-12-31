<template>
  <div class="flex justify-center">
  <p class="title-font text-white text-3xl p-2 mt-9">
    Choose a file and press upload !
  </p>
</div>
  <div class="file-upload-container">
    <div class="flex flex-col">
      <label class="block">
        <input type="file" class="mb-4 block w-full text-sm text-gray-500
            file:me-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-white file:text-black
            dark:file:bg-white">
      </label>
      <button class="bg-white text-black font-bold py-2 px-6 rounded-full">Upload</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

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
    const response = await fetch('http://localhost:8082/upload', {
      method: 'POST',
      body: formData
    })

    // Handle the response as needed
    console.log('Upload successful', response)
  } catch (error) {
    console.error('Error uploading file', error)
  }
}
</script>
