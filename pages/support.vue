<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <h1 class="headline">Support</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <p>If you require support you can <a href="https://github.com/floccusaddon/floccus/issues">submit an issue on GitHub</a></p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <p>
          Need help? Learn more on
          <NuxtLink :to="{ name: 'guides' }">how to get started</NuxtLink>.
        </p>
        <p>
          How does Floccus deal with your personal data?
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
        </p>
        <p>
          What are your rights when using floccus?
          <NuxtLink to="/license">License</NuxtLink>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SupportPage',
  head: {
    title: 'Support',
  },
}
</script>
