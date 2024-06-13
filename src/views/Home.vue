<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right flat height="72" color="grey darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Travel Assistant</v-toolbar-title>

      <v-spacer></v-spacer>

      <logout-button />
    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" app width="250" class="grey darken-4">
      <v-sheet height="100" width="100%" class="pt-8 grey darken-4" style="display: flex; justify-content: center; align-items: center">
        <v-btn elevation="10" rounded class="ma-2 font-weight-bold" dark @click="createSession()">
          <v-icon dark left size="30px">mdi-plus</v-icon>New chat
        </v-btn>
      </v-sheet>

      <v-list rounded>
        <v-list-item-group v-model="selectedItem">
          <v-list-item v-for="(session, index) in sortedSessions" :key="index" @click="selectSession(session)">
            <v-list-item-icon>
              <v-icon>mdi-message-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">{{ session.title ? session.title : 'Not set title yet' }}</v-list-item-title>
            </v-list-item-content>
            <Menu :session="session" @session-updated="fetchUserSessions()"></Menu>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey darken-4">
      <v-container fluid class="d-flex flex-column">
        <!-- Chat messages area -->
        <v-row justify="center" class="flex-grow-1">
          <v-col cols="12" sm="10" md="8">
            <v-card class="grey darken-4">
              <v-card-text class="grey darken-4">
                <v-list class="grey darken-4">
                  <v-list-item v-for="(message, i) in messages" :key="i" class="pa-2 mb-9">
                    <v-list-item-content>
                      <v-row no-gutters align="start">
                        <v-col cols="auto" class="mr-3">
                          <!-- Conditionally render the icon if message is from the bot -->
                          <v-icon v-if="message.from !== 'user'" dark>mdi-robot-confused</v-icon>
                          <v-avatar v-else size="30" color="green darken-2" dark>
                            <span class="white--text">{{ getInitials() }}</span>
                          </v-avatar>
                        </v-col>
                        <v-col>
                          <v-list-item-title class="white--text text-left" style="white-space: normal">
                            <span v-if="message.from === 'user'">{{ message.text }}</span>
                            <span v-else v-html="message.text"></span>
                          </v-list-item-title>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                  <template v-if="loading">
                    <v-list-item class="pa-2">
                      <v-list-item-content>
                        <lottie-player
                          :src="OrangeSpin"
                          style="width: 200px; height: 200px; margin: auto"
                          background="transparent"
                          speed="1"
                          direction="1"
                          mode="normal"
                          autoplay
                          loop
                        ></lottie-player>
                        <span class="white--text text-h6">Waiting for respond....</span>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="transparent" height="72" inset class="grey darken-4">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <!-- <v-text-field background-color="grey lighten-1" dense flat hide-details rounded solo></v-text-field> -->
          <v-textarea
            background-color="grey darken-2"
            v-model="newMessage"
            placeholder="Type your message..."
            auto-grow
            rows="1"
            reverse
            hide-details
            @keyup.enter="sendMessage"
            flat
            rounded
            solo
            dark
          ></v-textarea>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import store from '@/store/store'
import '@lottiefiles/lottie-player'
import axios from 'axios'
import LogoutButton from '@/components/LogoutButton.vue'
import Menu from '@/components/Menu.vue'
import OrangeSpin from '../assets/animation/OrangeSpin.json'

export default {
  components: {
    LogoutButton,
    Menu
  },
  data() {
    return {
      drawer: null,
      selectedItem: 0,
      sessions: [],
      messages: [{ text: 'Welcome to the AI travel assistant! How can I help you with your travel plans today?', from: 'bot' }],
      newMessage: '',
      loading: false,
      OrangeSpin: JSON.stringify(OrangeSpin)
    }
  },
  mounted() {
    this.fetchUserSessions().then(() => {
      if (this.sessions.length > 0) {
        this.selectSession(this.sortedSessions[0])
      }
    })
    this.scrollToBottom()
  },
  updated() {
    this.scrollToBottom()
  },
  computed: {
    sortedSessions() {
      return this.sessions.slice().sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    }
  },
  methods: {
    async fetchUserSessions() {
      try {
        const user = store.getters.getLoginUserInfo
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/chat/sessionList`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        this.sessions = response.data
      } catch (error) {
        console.error('Error fetching user sessions:', error)
      }
    },
    async fetchMessages(sessionId) {
      try {
        const user = store.getters.getLoginUserInfo
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/chat/session/${sessionId}/message`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        if (response.data.length > 0) {
          this.messages = []
          for (let i = 0; i < response.data.length; i++) {
            const conversation = response.data[i]
            this.messages.push({ text: conversation.request, from: 'user' })
            this.messages.push({ text: conversation.response, from: 'bot' })
          }
        } else {
          this.messages = [{ text: 'Welcome to the AI travel assistant! How can I help you with your travel plans today?', from: 'bot' }]
        }
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    },
    selectSession(session) {
      this.fetchMessages(session.id).then(() => {
        this.scrollToBottom()
      })
    },
    async sendMessage() {
      const user = store.getters.getLoginUserInfo
      if (this.newMessage.trim() !== '') {
        // Set loading state
        this.loading = true

        this.messages.push({ text: this.newMessage, from: 'user' })
        const messageToSend = this.newMessage
        this.newMessage = ''
        try {
          const result = await axios.post(
            `${process.env.VUE_APP_BE_URL}/api/chat/message/send`,
            {
              sessionId: this.sortedSessions[this.selectedItem].id,
              request: messageToSend
            },
            {
              headers: {
                Authorization: `Bearer ${user.token}`
              }
            }
          )
          this.messages.push({ text: result.data.response, from: 'bot' })
          if (this.messages.length === 3) {
            await this.fetchUserSessions()
          }
          this.scrollToBottom()
        } catch (error) {
          console.error('Error sending message:', error)
        } finally {
          // Clear loading state
          this.loading = false
        }
      }
    },
    async createSession() {
      try {
        const user = store.getters.getLoginUserInfo
        const response = await axios.post(`${process.env.VUE_APP_BE_URL}/api/chat/session/create`, null, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        this.sessions.push(response.data)
        this.selectedItem = 0
        this.messages = [{ text: 'Welcome to the AI travel assistant! How can I help you with your travel plans today?', from: 'bot' }]
      } catch (error) {
        console.error('Error creating session:', error)
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight)
      })
    },
    getInitials() {
      const user = store.getters.getLoginUserInfo
      return user.username.slice(0, 1).toUpperCase()
    }
  }
}
</script>

<style scoped>
.container {
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }
}
.v-navigation-drawer {
  .v-btn {
    text-transform: none;
  }
}
</style>
