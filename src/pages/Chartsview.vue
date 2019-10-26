<template>
  <div class="container">
    <RecordSubmit />
    <Charts />
    <ReviewModule reviewId="3" />
  </div>
</template>

<script>
import ReviewModule from "../components/ReviewModule.vue";
import Charts from "../components/Charts.vue";
import RecordSubmit from "../components/RecordSubmit.vue";

export default {
  name: "Chartsview",
  components: { ReviewModule, Charts, RecordSubmit }
};
</script>
