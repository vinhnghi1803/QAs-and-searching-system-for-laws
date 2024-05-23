<template>
  <v-menu bottom right offset-x dark>
    <template v-slot:activator="{ on, attrs }">
      <v-btn small dark icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list class="grey darken-4">
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon dense>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'Rename', icon: 'mdi-pencil' },
        { text: 'Delete', icon: 'mdi-trash-can' }
      ]
    }
  }
}
</script>
<style scoped>
.v-list {
  padding: 0;
}
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 16px;
}
</style>
