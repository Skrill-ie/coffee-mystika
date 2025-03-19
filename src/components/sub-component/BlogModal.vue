<template>
  <div v-if="showBlogModal" class="fixed inset-0 flex items-center justify-center z-50 font-radley overflow-y-auto">
    <div class="bg-black-secondary w-full relative h-screen bg-opacity-50 flex">
      <div class="bg-black-secondary rounded-lg shadow-lg max-w-3xl w-full z-10 m-auto relative">
        <div class="font-imFell backdrop-blur-md absolute h-80 w-full justify-center flex flex-col space-y-5 items-center px-5 md:px-10 z-20">
          <span class="text-5xl text-text-title">{{currentBlog.title}}</span>
          <span class="text-text-divider text-2xl">{{ currentBlog.date }}</span>
        </div>
        <div class="h-80 w-full bg-black-secondary bg-opacity-50 absolute z-10"></div>
        <div class="h-80 bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: `url(${currentBlog.blogImage})`}"></div>
        
        <div class="px-5 lg:px-10 mt-20 pb-20">
          <div class= "text-text-paragraph mb-20 text-left indent-8">{{ currentBlog.content }}</div>
          <img class="mb-20" v-bind="{src:currentBlog.blogImageModal}">
          <!--<div class= "mb-20"><img :scr="`require('@${currentBlog.blogImageModal}')`"></div>-->
          <!--<div class="h-[30rem] mb-20 bg-contain bg-no-repeat bg-center"></div>-->
          <button @click="$emit('close-blog-modal')" class="px-4 py-2 bg-button-active rounded-md hover:bg-orange-400 transition w-full text-text-paragraph">
            Close
          </button>
        </div>
        
      </div>
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