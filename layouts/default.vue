<template>
  <v-app>
    <v-app-bar fixed app flat color="white" class="fl-appbar" height="68">
      <nuxt-link :to="{ name: 'index' }" class="fl-brand">
        <img src="/logo.svg" alt="" width="36" height="36" />
        <span>floccus</span>
      </nuxt-link>
      <v-spacer />
      <nav class="d-none d-md-flex align-center">
        <v-btn
          v-for="item in nav"
          :key="item.name"
          text
          class="mr-1 fl-navlink"
          :to="item.to"
          >{{ item.title }}</v-btn
        >
        <v-btn
          outlined
          class="ml-3 mr-2"
          :to="{ name: 'donate', query: { from: 'site' } }"
          ><v-icon left small color="pink">mdi-heart</v-icon>Donate</v-btn
        >
        <v-btn color="primary" depressed :to="{ name: 'download' }"
          >Download</v-btn
        >
      </nav>
      <v-btn
        color="primary"
        depressed
        small
        class="d-md-none mr-1"
        :to="{ name: 'download' }"
        >Download</v-btn
      >
      <v-app-bar-nav-icon
        class="d-md-none"
        aria-label="Open menu"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary right width="280">
      <v-list nav class="pt-4">
        <v-list-item :to="{ name: 'index' }" exact>
          <v-list-item-icon><v-icon>mdi-home-outline</v-icon></v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="item in nav" :key="item.name" :to="item.to">
          <v-list-item-icon
            ><v-icon>{{ item.icon }}</v-icon></v-list-item-icon
          >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'download' }">
          <v-list-item-icon><v-icon>mdi-download</v-icon></v-list-item-icon>
          <v-list-item-title>Download</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'donate', query: { from: 'site' } }">
          <v-list-item-icon
            ><v-icon color="pink">mdi-heart</v-icon></v-list-item-icon
          >
          <v-list-item-title>Donate</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pb-16">
        <Nuxt />
      </v-container>
    </v-main>

    <footer class="fl-footer">
      <div class="fl-page fl-footer-inner">
        <div class="fl-footer-brand">
          <div class="d-flex align-center">
            <img src="/logo.svg" alt="" width="32" height="32" />
            <strong class="ml-2">floccus</strong>
          </div>
          <p class="mt-3">
            Free and open source bookmark &amp; tab sync for every browser.
          </p>
          <div class="fl-footer-social">
            <a
              v-for="link in social"
              :key="link.href"
              :href="link.href"
              :aria-label="link.label"
              target="_blank"
              rel="noopener"
              ><v-icon color="white" size="22">{{ link.icon }}</v-icon></a
            >
          </div>
        </div>
        <div v-for="col in footerCols" :key="col.title" class="fl-footer-col">
          <h4>{{ col.title }}</h4>
          <template v-for="link in col.links">
            <nuxt-link v-if="link.to" :key="link.title" :to="link.to">{{
              link.title
            }}</nuxt-link>
            <a
              v-else
              :key="link.title"
              :href="link.href"
              target="_blank"
              rel="noopener"
              >{{ link.title }}</a
            >
          </template>
        </div>
      </div>
      <div class="fl-page fl-footer-bottom">
        © {{ new Date().getFullYear() }} floccus · Created by
        <a href="https://marcelklehr.de/">Marcel Klehr</a>
      </div>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      nav: [
        {
          name: 'guides',
          title: 'Guides',
          icon: 'mdi-book-open-outline',
          to: { name: 'guides' },
        },
        {
          name: 'faq',
          title: 'FAQ',
          icon: 'mdi-help-circle-outline',
          to: { name: 'faq' },
        },
        {
          name: 'support',
          title: 'Support',
          icon: 'mdi-lifebuoy',
          to: { name: 'support' },
        },
      ],
      social: [
        {
          icon: 'mdi-mastodon',
          label: 'Mastodon',
          href: 'https://fosstodon.org/@floccus',
        },
        {
          icon: 'mdi-reddit',
          label: 'Reddit',
          href: 'https://reddit.com/r/floccus',
        },
        {
          icon: 'mdi-github',
          label: 'GitHub',
          href: 'https://github.com/floccusAddon',
        },
        {
          icon: 'mdi-google-play',
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=org.handmadeideas.floccus',
        },
      ],
      footerCols: [
        {
          title: 'Product',
          links: [
            { title: 'Download', to: { name: 'download' } },
            { title: 'Guides', to: { name: 'guides' } },
            { title: 'FAQ', to: { name: 'faq' } },
            { title: 'Support', to: { name: 'support' } },
          ],
        },
        {
          title: 'Community',
          links: [
            {
              title: 'Donate',
              to: { name: 'donate', query: { from: 'site' } },
            },
            {
              title: 'Source code',
              href: 'https://github.com/floccusaddon/floccus',
            },
            {
              title: 'Translate',
              href: 'https://explore.transifex.com/floccus/floccus/',
            },
            { title: 'Mastodon', href: 'https://fosstodon.org/@floccus' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { title: 'Privacy policy', to: '/privacy' },
            { title: 'License', to: '/license' },
          ],
        },
      ],
    }
  },
}
</script>

<style>
.fl-appbar.v-app-bar.v-toolbar {
  border-bottom: 1px solid var(--fl-border) !important;
}

.fl-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--fl-ink) !important;
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

/* stylelint-disable-next-line selector-class-pattern -- Vuetify class */
.fl-navlink.v-btn--active::before {
  opacity: 0.06;
}

.fl-footer {
  background: var(--fl-navy);
  color: rgb(255 255 255 / 72%);
  padding: 64px 16px 28px;
  font-size: 0.95rem;
}

.fl-footer a {
  color: rgb(255 255 255 / 72%) !important;
  text-decoration: none;
}

.fl-footer a:hover {
  color: #fff !important;
}

.fl-footer strong {
  color: #fff;
  font-size: 1.2rem;
}

.fl-footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

.fl-footer-brand p {
  max-width: 300px;
}

.fl-footer-social {
  display: flex;
  gap: 18px;
  margin-top: 16px;
}

.fl-footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fl-footer-col h4 {
  color: #fff;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}

.fl-footer-bottom {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgb(255 255 255 / 12%);
  font-size: 0.85rem;
}

@media (max-width: 760px) {
  .fl-footer-inner {
    grid-template-columns: 1fr 1fr;
  }

  .fl-footer-brand {
    grid-column: 1 / -1;
  }
}
</style>
