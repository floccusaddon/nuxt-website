<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <h1 class="headline">Privacy</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8" class="d-flex flex-wrap" v-html="privacy">

      </v-col>
    </v-row>
  </div>
</template>

<script>
import privacy from '~/privacy.md'

export default {
  name: 'PrivacyPage',
  data() {
    return {
      privacy
    }
  }
}
</script>
