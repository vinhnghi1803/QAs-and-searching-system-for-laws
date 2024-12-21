<template>
  <v-dialog v-model="isOpen" max-width="400px">
    <v-card>
      <v-card-title class="headline"> Xác nhận </v-card-title>

      <v-card-text>
        {{ message }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" dark @click="cancel">Hủy</v-btn>
        <v-btn color="red" dark @click="confirm">Xác nhận</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Bạn có chắc chắn không?'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  emits: ['confirm', 'update:isOpen'],
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.$emit('update:isOpen', false)
      this.isOpen = false
    },
    confirm() {
      this.$emit('confirm')
      this.close()
    },
    cancel() {
      this.close()
    }
  }
}
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
