<template>
  <div class="home">
    <ShowForm msg="Welcome to Your Vue.js App"/>
    <ReviewForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShowForm from '@/components/ShowForm.vue'
import ReviewForm from '@/components/ReviewForm.vue'

export default {
  name: 'home',
  components: {
    ShowForm,
    ReviewForm
  }
}
</script>
