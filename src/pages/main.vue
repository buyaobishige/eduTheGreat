<template>
  <div class="container">
    <a href="/">hello</a>
    <h1>GO DIE!</h1>
    <RecordSubmit />
    <MyImage />
  </div>
</template>

<script>
import MyImage from "../components/MyImage";
import RecordSubmit from "../components/RecordSubmit";

export default {
  name: "mymain",
  components: { MyImage, RecordSubmit }
};
</script>
