<template>
  <a-row type="flex" justify="center">
    <a-col :span="8">
      <a-progress type="circle" :percent="porcentagem"/>
    </a-col>
  </a-row>
</template>

<script>
export default {
  props: { porcentagem: Number }
};
</script>
