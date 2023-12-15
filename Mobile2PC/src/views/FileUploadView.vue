<template>
  <div class="file-upload_area">
    <input type="file" name="" id="" v-on:change="onFileUpload" />
    <button @click="uploadFile">Upload</button>
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
  const files = inputElement.files

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
