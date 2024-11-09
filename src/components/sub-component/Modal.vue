<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-xl font-bold mb-4">Modal Title</h2>
      <p class="mb-4">This is the content of the modal. Customize it as needed.</p>
      <div class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition w-full">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    isOpen: {
      type: Boolean,
      required: true, // The parent must pass this prop
    },
  },
};
</script>
