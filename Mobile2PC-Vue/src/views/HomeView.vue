<template>
  <div class="flex justify-center h-screen items-center flex-col">
    <p class="title-font text-white text-4xl p-2">
      Scan me to transfer files from your mobile device
    </p>
    <svg
      class="w-20 h-32 text-white animate-custom-bounce"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
    <qrcode-vue :size="150" :value="qrCode" :level="level" :render-as="renderAs" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import type {Level, RenderAs} from 'qrcode.vue'
import { io } from 'socket.io-client'

const qrCode = ref<string>('')
const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')

onMounted(() => {
  handleSocket()
})

const handleSocket = () => {
  const socket = io(`${import.meta.env.VITE_API_ENDPOINT_URL}`)
  socket.on('connect', () => {
    qrCode.value = `${import.meta.env.VITE_API_ENDPOINT_URL}/fileUpload/${socket.id}`
  })

  socket.on('fileUploaded', (file: FileType) => {
    try {
      handleDownload(file)
      socket.emit('disconnectSocket')
    } catch (e) {
      console.error('An error has occured while downloading the file.')
    }
  })
}

const handleDownload = (file: FileType) => {
  const blob = new Blob([file.buffer], { type: file.mimetype })
  const link = document.createElement('a')
  const blobUrl = URL.createObjectURL(blob)

  link.href = blobUrl
  link.download = file.originalname
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(blobUrl)
}

interface FileType {
  buffer: ArrayBuffer
  encoding: string
  fieldname: string
  mimetype: string
  originalname: string
  size: number
}
</script>
