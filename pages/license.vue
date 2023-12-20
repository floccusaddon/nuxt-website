<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <h1 class="headline">License</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8" class="d-flex flex-wrap" v-html="license">

      </v-col>
    </v-row>
  </div>
</template>

<script>
import license from '~/license.md'

export default {
  name: 'LicensePage',
  data() {
    return {
      license
    }
  },
  head: {
    title: 'License',
  },
}
</script>
