<template>
  <div v-if="showBlogModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-black-secondary w-full relative h-screen bg-opacity-50">

      <div class="bg-black-secondary rounded-lg shadow-lg max-w-3xl w-full z-10 m-auto">{{ currentBlog }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogModal',
  props: {
    showBlogModal: {
      type: Boolean,
      required: true, // The parent must pass this prop
    },
    currentBlog:{},

  },
}
</script>
<style scoped>

</style>