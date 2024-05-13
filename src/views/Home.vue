<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" color="grey lighten-4"> </v-navigation-drawer>
    <v-app-bar app color="indigo" dark fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Chat UI</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid class="d-flex flex-column">
        <!-- Chat messages area -->
        <v-row justify="center" class="flex-grow-1">
          <v-col cols="12" sm="10" md="8">
            <v-card class="overflow-y-auto">
              <v-card-text>
                <v-list>
                  <v-list-item v-for="(message, i) in messages" :key="i">
                    <v-list-item-content :class="message.from === 'user' ? 'text-right' : 'text-left'">
                      <v-list-item-title>{{ message.text }}</v-list-item-title>
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
        <v-text-field v-model="newMessage" placeholder="Type your message..." @keyup.enter="sendMessage" outlined></v-text-field>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      messages: [
        { text: 'Hello!', from: 'user' },
        { text: 'Hi there!', from: 'bot' },
        { text: 'How can I help you?', from: 'bot' },
        { text: 'I have a question.', from: 'user' },
        { text: 'Sure, what is it?', from: 'bot' }
      ],
      newMessage: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({ text: this.newMessage, from: 'user' })
        this.newMessage = ''
        this.$nextTick(() => {
          // Automatically scroll to the bottom of the chat window
          window.scrollTo(0, document.body.scrollHeight)
        })
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
