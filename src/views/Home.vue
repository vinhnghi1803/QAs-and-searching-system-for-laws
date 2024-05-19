<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" color="grey lighten-4">
      <v-system-bar></v-system-bar>
      <v-btn class="my-2" fab dark small color="teal darken-2" @click="createSession()">
        <v-icon size="30px" dark>mdi-plus </v-icon>
      </v-btn>
      <v-divider></v-divider>
      <v-list rounded>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(session, index) in sortedSessions" :key="index" @click="selectSession(session)">
            <v-list-item-content>
              <v-list-item-title>{{ session.title ? session.title : 'Not set title yet' }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Chat UI</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid class="d-flex flex-column">
        <!-- Chat messages area -->
        <v-row justify="center" class="flex-grow-1">
          <v-col cols="12" sm="10" md="8">
            <v-card class="overflow-y-auto grey darken-4">
              <v-card-text class="grey darken-4">
                <v-list class="grey darken-4">
                  <v-list-item
                    v-for="(message, i) in messages"
                    :key="i"
                    :class="[message.from === 'user' ? 'grey darken-1 rounded pr-2' : 'grey darken-4 pa-2']"
                  >
                    <v-list-item-content>
                      <v-row align="center">
                        <v-col cols="auto">
                          <!-- Conditionally render the icon if message is from the bot -->
                          <v-icon v-if="message.from !== 'user'" class="mr-2" dark>mdi-robot-confused</v-icon>
                        </v-col>
                        <v-col>
                          <v-list-item-title
                            :class="[message.from === 'user' ? 'text-right' : 'text-left', 'white--text']"
                            style="white-space: pre-wrap"
                          >
                            {{ message.text }}
                          </v-list-item-title>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!-- Input field -->
    <v-row justify="center" class="fixed-bottom">
      <v-col cols="12" sm="10" md="8">
        <v-text-field filled v-model="newMessage" placeholder="Type your message..." @keyup.enter="sendMessage" outlined></v-text-field>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import store from '@/store/store'
import axios from 'axios'
export default {
  data() {
    return {
      drawer: false,
      selectedItem: 0,
      sessions: [],
      messages: [{ text: 'Hi there! How can I help you?', from: 'bot' }],
      newMessage: ''
    }
  },
  mounted() {
    // Fetch user sessions from API when component is mounted
    this.fetchUserSessions().then(() => {
      // After fetching sessions, select the latest session
      if (this.sessions.length > 0) {
        this.selectSession(this.sortedSessions[0])
      }
    })
  },
  computed: {
    sortedSessions() {
      return this.sessions.slice().sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    }
  },
  methods: {
    async fetchUserSessions() {
      try {
        // Get userID from localStorage
        const user = store.getters.getLoginUserInfo
        // console.log(user)
        // Make GET request to API
        const response = await axios.get(`http://localhost:8080/api/chat/sessionList`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        // Set sessions data
        // const sortedSessions = response.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        // console.log(sortedSessions)
        this.sessions = response.data
        // console.log(this.sessions)
      } catch (error) {
        console.error('Error fetching user sessions:', error)
      }
    },
    async fetchMessages(sessionId) {
      try {
        const user = store.getters.getLoginUserInfo
        const response = await axios.get(`http://localhost:8080/api/chat/session/${sessionId}/message`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        // console.log('Fetched messages:', response.data)
        // Assuming response.data is an array of messages, update your messages array
        // this.messages = response.data
        if (response.data.length > 0) {
          this.messages = []
          for (let i = 0; i < response.data.length; i++) {
            const conversation = response.data[i]
            this.messages.push({ text: conversation.request, from: 'user' })
            this.messages.push({ text: conversation.response, from: 'bot' })
          }
        } else {
          this.messages = [{ text: 'Hi there! How can I help you?', from: 'bot' }]
        }
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    },
    selectSession(session) {
      // Handle selection of session
      console.log('List session:', this.sortedSessions)
      console.log('Selected session:', session)
      this.fetchMessages(session.id)
    },
    async sendMessage() {
      const user = store.getters.getLoginUserInfo
      if (this.newMessage.trim() !== '') {
        this.messages.push({ text: this.newMessage, from: 'user' })
        const messageToSend = this.newMessage
        this.newMessage = ''
        console.log(this.selectedItem)

        const result = await axios.post(
          'http://localhost:8080/api/chat/message/send',
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
        this.$nextTick(() => {
          // Automatically scroll to the bottom of the chat window
          window.scrollTo(0, document.body.scrollHeight)
        })
      }
    },
    async createSession() {
      try {
        const user = store.getters.getLoginUserInfo
        const response = await axios.post('http://localhost:8080/api/chat/session/create', null, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        console.log(response)
        this.sessions.push(response.data)
        this.selectedItem = 0
        this.messages = [{ text: 'Hi there! How can I help you?', from: 'bot' }]
      } catch (error) {
        console.error('Error creating session:', error)
      }
    }
  }
}
</script>

<style scoped>
header {
  height: 64px !important;
}
.v-main {
  margin-top: 64px !important;
  margin-bottom: 70px !important;

  .container {
    height: 100% !important;

    .v-card {
      height: 100% !important;
    }

    /* .v-list-item__content {
      word-wrap: break-word;
    } */
  }
}
.v-sheet.v-card {
  padding: 5px !important;
}
.overflow-y-auto {
  overflow-y: auto;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
