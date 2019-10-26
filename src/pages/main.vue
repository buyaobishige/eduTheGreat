<template>
  <div class="container">
    <h1>GO DIE!</h1>
    <RecordSubmit />
    <MyImage />
    <ReviewModule reviewId="1" />
  </div>
</template>

<script>
import MyImage from "../components/MyImage";
import RecordSubmit from "../components/RecordSubmit";
import ReviewModule from "../components/ReviewModule.vue";

export default {
  name: "mymain",
  components: { MyImage, RecordSubmit, ReviewModule }
};
</script>
