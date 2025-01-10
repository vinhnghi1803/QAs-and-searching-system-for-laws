<template>
  <div>
    <v-menu bottom right offset-x dark>
      <template v-slot:activator="{ on, attrs }">
        <v-btn small dark icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list class="grey darken-4">
        <v-list-item v-for="(item, i) in items" :key="i" @click="handleItemClick(item.text)">
          <v-list-item-icon>
            <v-icon dense>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog v-model="renameDialog" dark transition="dialog-bottom-transition" max-width="600px">
      <v-card class="grey darken-3 rounded-xl" elevation="10">
        <v-card-title>
          <span class="headline">Rename Session</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="modifySession.title" outlined hide-details></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue lighten-3" rounded text @click="renameDialog = false">Cancel</v-btn>
          <v-btn color="blue lighten-3" rounded text @click="renameSession">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" dark transition="dialog-bottom-transition" max-width="400">
      <v-card class="grey darken-3 rounded-xl" elevation="10">
        <v-card-title class="headline">Confirm Delete</v-card-title>
        <v-card-text>Are you sure you want to delete this session?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue lighten-3" rounded text @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="blue lighten-3" rounded text @click="deleteSession">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'

export default {
  data() {
    return {
      items: [
        { text: 'Rename', icon: 'mdi-pencil' },
        { text: 'Delete', icon: 'mdi-trash-can' }
      ],
      renameDialog: false,
      deleteDialog: false,
      modifySession: { ...this.session }
    }
  },
  props: {
    session: Object
  },
  methods: {
    handleItemClick(action) {
      if (action === 'Rename') {
        this.renameDialog = true
      } else if (action === 'Delete') {
        this.deleteDialog = true
      }
    },
    async renameSession() {
      const user = store.getters.getLoginUserInfo
      try {
        await axios.put(
          `${process.env.VUE_APP_BE_URL}/api/chat/session/rename`,
          {
            id: this.modifySession.id,
            title: this.modifySession.title
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
        )
        // After a successful rename operation
        this.renameDialog = false
        this.$emit('session-updated') // Emit a custom event
      } catch (error) {
        console.error('Error during rename sessions:', error)
      }
    },
    async deleteSession() {
      const user = store.getters.getLoginUserInfo
      try {
        await axios.delete(`${process.env.VUE_APP_BE_URL}/api/chat/session/delete/${this.modifySession.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        this.deleteDialog = false
        this.$emit('session-updated') // Emit a custom event
      } catch (error) {
        console.error('Error during delete session:', error)
      }
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
.v-btn {
  font-size: 20px;
  font-weight: bolder;
}
.v-card {
  padding: 15px;
}
.v-card__text {
  padding-bottom: 10px !important;
  font-size: 20px;
}
</style>
