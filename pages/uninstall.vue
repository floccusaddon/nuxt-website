<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <v-img src="/undraw_heartbroken.svg" max-width="400"/>
        <h1 class="headline text-h2">We're sad to see you&nbsp;go!</h1>
        <p class="subtitle-2 text-h5 mt-2">
          Would you mind giving us some feedback on what made you turn away from floccus?
        </p>
        <v-textarea
          v-model="message"
          auto-grow
          solo
          label="What was your main reason for removing floccus?">
          >
        </v-textarea>
        <p>This feedback form is powered by Sentry. By pressing submit you agree to store the entered data anonymously on Sentry's servers. None of your bookmark data will be sent to Sentry.</p>
        <v-btn
          :disabled="!submitEnabled"
          color="primary"
          @click="onSubmit()">
          Submit feedback
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as Sentry from '@sentry/browser'
Sentry.setTag('platform', 'web')
Sentry.setTag('uninstalled', true)
const dsn = 'https://836f0f772fbf2e12b9dd651b8e6b6338@o4507214911307776.ingest.de.sentry.io/4507216408870992'

export default {
  name: 'UninstallPage',
  data() {
    return {
      email: '',
      message: '',
    }
  },
  computed: {
    submitEnabled() {
      return this.message.length > 0
    },
    version() {
      const params = (new URL(window.location.href)).searchParams
      return params.get('version')
    }
  },
  methods: {
    async onSubmit() {
      if (!this.submitEnabled) {
        return
      }
      if (!(await Sentry.isInitialized())) {
        Sentry.init({
          dsn,
          integrations: [],
          sampleRate: 0,
          release: this.version,
          debug: true,
        })
      }
      Sentry.captureFeedback({
        message: this.message,
      })
      this.message = ''
      alert('Thank you for your feedback!')
    }
  },
  head: {
    title: 'Goodbye',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find all the answers to your questions.' },
      { hid: 'og:title', property: 'og:title', content: 'Goodbye - Floccus bookmarks sync' },
      { hid: "twitter:title", name: "twitter:title", content: 'Goodbye - Floccus bookmarks sync' },
    ],
  },
}
</script>
