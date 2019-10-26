<template>
  <div class="container">
    <h1>讲座信息</h1>
    <RecordSubmit />
    <MessageList />
    <ReviewModule reviewId="2" />
  </div>
</template>

<script>
import RecordSubmit from "../components/RecordSubmit";
import MessageList from "../components/MessageList.vue";
import ReviewModule from "../components/ReviewModule.vue";

export default {
  name: "lecture",
  components: { RecordSubmit, MessageList, ReviewModule },
};
</script>
