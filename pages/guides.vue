<template>
  <div class="fl-page fl-narrow">
    <h1 class="fl-page-title">Guides</h1>
    <p class="fl-lead">
      Everything you need to set up floccus — from installing the extension to
      choosing a sync method.
    </p>

    <section v-for="group in groups" :key="group.title" class="guide-group">
      <h2 class="guide-group-title">{{ group.title }}</h2>
      <div
        v-for="guide in group.guides"
        :id="guide.id"
        :key="guide.id"
        class="fl-card guide"
        :class="{ 'guide-open': guide.show }"
      >
        <button
          class="guide-head"
          :aria-expanded="guide.show ? 'true' : 'false'"
          @click="toggle(guide)"
        >
          <span class="guide-icon">
            <BrandIcon v-if="guide.brand" :name="guide.brand" :size="22" />
            <v-icon v-else :color="guide.color || 'primary'" size="22">{{
              guide.icon
            }}</v-icon>
          </span>
          <span class="guide-title">{{ guide.title }}</span>
          <v-icon class="guide-chevron">mdi-chevron-down</v-icon>
        </button>
        <v-expand-transition>
          <div v-show="guide.show">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="guide-content fl-prose" v-html="guide.content" />
          </div>
        </v-expand-transition>
      </div>
    </section>

    <div class="guide-footer">
      <p>
        Still stuck? Check the <nuxt-link to="/faq">FAQ</nuxt-link> or
        <nuxt-link to="/support">get support</nuxt-link>.
      </p>
      <p>
        How does floccus deal with your personal data?
        <nuxt-link to="/privacy">Privacy policy</nuxt-link> ·
        <nuxt-link to="/license">License</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import overview from '~/guides/overview.md'
import install from '~/guides/install-browser.md'
import installAndroid from '~/guides/install-android.md'
import installIos from '~/guides/install-ios.md'
import syncNcBookmarks from '~/guides/sync-nextcloud-bookmarks.md'
import syncLinkwarden from '~/guides/sync-linkwarden.md'
import syncKarakeep from '~/guides/sync-karakeep.md'
import syncWebdav from '~/guides/sync-webdav.md'
import syncGDrive from '~/guides/sync-googledrive.md'
import syncDropbox from '~/guides/sync-dropbox.md'
import syncS3 from '~/guides/sync-s3.md'
import syncGit from '~/guides/sync-git.md'
import strategies from '~/guides/strategies.md'
import tabs from '~/guides/tabs.md'
import importexport from '~/guides/importexport.md'

export default {
  name: 'GuidesPage',
  data() {
    return {
      groups: [
        {
          title: 'Getting started',
          guides: [
            { id: 'overview', title: 'How does it all work?', icon: 'mdi-lightbulb-on-outline', content: overview, show: true },
            { id: 'install-browser', title: 'Install in your browser', icon: 'mdi-puzzle-outline', content: install, show: false },
            { id: 'install-android', title: 'Install on Android', brand: 'android', content: installAndroid, show: false },
            { id: 'install-ios', title: 'Install on iOS', brand: 'apple', content: installIos, show: false },
          ],
        },
        {
          title: 'Choose a sync method',
          guides: [
            { id: 'sync-nextcloud-bookmarks', title: 'Sync with Nextcloud Bookmarks', brand: 'nextcloud', content: syncNcBookmarks, show: false },
            { id: 'sync-linkwarden', title: 'Sync with Linkwarden', icon: 'mdi-link-variant', color: 'deep-purple', content: syncLinkwarden, show: false },
            { id: 'sync-karakeep', title: 'Sync with Karakeep', brand: 'karakeep', content: syncKarakeep, show: false },
            { id: 'sync-webdav', title: 'Sync via WebDAV', icon: 'mdi-server', color: 'blue-grey darken-1', content: syncWebdav, show: false },
            { id: 'sync-google-drive', title: 'Sync via Google Drive', brand: 'googledrive', content: syncGDrive, show: false },
            { id: 'sync-dropbox', title: 'Sync via Dropbox', brand: 'dropbox', content: syncDropbox, show: false },
            { id: 'sync-s3', title: 'Sync via S3', icon: 'mdi-bucket-outline', color: 'orange darken-2', content: syncS3, show: false },
            { id: 'sync-git', title: 'Sync via Git', brand: 'git', content: syncGit, show: false },
          ],
        },
        {
          title: 'Advanced',
          guides: [
            { id: 'strategies', title: 'Choose a sync strategy', icon: 'mdi-swap-horizontal', content: strategies, show: false },
            { id: 'tabs', title: 'Sync tabs', icon: 'mdi-tab', content: tabs, show: false },
            { id: 'import-export', title: 'Import and export profiles', icon: 'mdi-file-swap-outline', content: importexport, show: false },
          ],
        },
      ],
    }
  },
  head: {
    title: 'Guides and How tos',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find guides and how-tos to get started with floccus.' },
      { hid: 'og:title', property: 'og:title', content: 'Guides and How tos - Floccus bookmarks sync' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Guides and How tos - Floccus bookmarks sync' },
    ],
  },
  watch: {
    '$route.hash'() {
      this.openFromHash()
    },
  },
  mounted() {
    this.openFromHash()
  },
  methods: {
    allGuides() {
      return this.groups.flatMap((g) => g.guides)
    },
    toggle(guide) {
      guide.show = !guide.show
      if (guide.show && history.replaceState) {
        history.replaceState(null, '', '#' + guide.id)
      }
    },
    openFromHash() {
      const id = (this.$route.hash || '').slice(1)
      const guide = this.allGuides().find((g) => g.id === id)
      if (!guide) return
      guide.show = true
      this.$nextTick(() => {
        const el = document.getElementById(id)
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 90,
            behavior: 'smooth',
          })
        }
      })
    },
  },
}
</script>

<style>
.guide-group {
  margin-top: 44px;
}

.guide-group-title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fl-muted);
  margin-bottom: 12px;
}

.guide {
  margin-bottom: 10px;
  overflow: hidden;
  scroll-margin-top: 90px;
}

.guide-head {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 16px 20px;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.guide-head:hover {
  background: #f8fbff;
}

.guide-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--fl-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.guide-title {
  flex: 1;
  font-size: 1.08rem;
  font-weight: 600;
}

.guide-chevron {
  transition: transform 0.2s;
}

.guide-open .guide-chevron {
  transform: rotate(180deg);
}

.guide-open {
  border-color: #cfdcec;
  box-shadow: 0 10px 28px rgb(15 30 54 / 6%);
}

/* Rendered markdown — scoped to guides so it doesn't affect other pages */
.guide-content {
  padding: 4px 24px 24px 74px;
  font-size: 1rem;
  line-height: 1.7;
}

.guide-content img {
  display: block;
  width: 100%;
  max-width: 700px;
  margin: 1.5em auto;
  border-radius: 12px;
  border: 1px solid var(--fl-border);
}

.guide-content p,
.guide-content ul,
.guide-content ol {
  margin-top: 10px;
}

.guide-content h1,
.guide-content h2,
.guide-content h3,
.guide-content h4 {
  margin-top: 24px;
}

.guide-content code {
  font-size: 0.9em;
}

.guide-content::after {
  content: '';
  display: table;
  clear: both;
}

@media (max-width: 600px) {
  .guide-content {
    padding: 4px 18px 20px;
  }
}

.guide-footer {
  margin-top: 48px;
  color: var(--fl-muted);
}

.guide-footer a {
  color: var(--fl-blue);
}
</style>
