<template>
  <div class="a4">
    <h1>Word Document Viewer</h1>
    <div class="content" v-html="wordContent"></div>
  </div>
</template>

<script>
export default {
  name: 'WordViewer',
  data() {
    return {
      wordContent: ''
    }
  },
  created() {
    this.wordContent = ``
  }
}
</script>

<style>
.a4 {
  width: 21cm;
  height: 29.7cm;
  margin: 0 auto;
  padding: 2cm;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.content {
  font-family: Arial, sans-serif;
  font-size: 12pt;
  line-height: 1.5;
  word-wrap: break-word;
}
</style>
