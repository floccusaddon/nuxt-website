<template>
  <div class="fl-page">
    <!-- Hero -->
    <section class="hero">
      <nuxt-link to="/guides#sync-s3" class="hero-badge">
        <span class="hero-badge-new">New in v5.13</span>
        Sync with S3 buckets
        <v-icon small color="primary">mdi-arrow-right</v-icon>
      </nuxt-link>
      <h1 class="fl-h1 hero-title">
        Sync bookmarks &amp; tabs<br />
        <span class="hero-accent">privately</span>
      </h1>
      <p class="fl-lead hero-lead">
        Across all your browsers and devices — through a server you choose. No
        ads, no tracking, free and open source.
      </p>
      <div class="hero-ctas">
        <v-btn
          color="primary"
          x-large
          depressed
          class="px-8"
          :to="{ name: 'download' }"
          ><v-icon left>mdi-download</v-icon>Download</v-btn
        >
        <v-btn
          x-large
          outlined
          class="px-6"
          target="_blank"
          href="https://youtube.com/watch?v=Ln2mR-lSxLs"
          ><v-icon left color="primary">mdi-play-circle</v-icon>Watch the
          intro</v-btn
        >
        <v-btn x-large text class="px-4" :to="{ name: 'guides' }"
          >Get started<v-icon right>mdi-arrow-right</v-icon></v-btn
        >
      </div>
      <div class="hero-visual">
        <img
          src="/devices_mockup.svg"
          alt="Floccus running in a desktop browser and in the mobile app"
          width="584"
          height="403"
        />
      </div>
    </section>

    <!-- Highlights -->
    <section class="fl-section fl-grid fl-grid-3">
      <div v-for="h in highlights" :key="h.title" class="highlight">
        <div class="highlight-icon">
          <v-icon color="primary">{{ h.icon }}</v-icon>
        </div>
        <h3>{{ h.title }}</h3>
        <p>{{ h.text }}</p>
      </div>
    </section>

    <!-- Sync methods -->
    <section class="fl-section">
      <div class="section-head">
        <p class="fl-eyebrow">Sync with what you already use</p>
        <h2 class="fl-h2">Pick where your bookmarks live</h2>
        <p class="fl-lead">
          Floccus syncs your browser's own bookmarks through a server of your
          choice — then gets out of your way.
        </p>
      </div>
      <div class="fl-grid fl-grid-4 mt-8">
        <nuxt-link
          v-for="m in methods"
          :key="m.name"
          :to="`/guides#${m.guide}`"
          class="fl-card method"
        >
          <div class="method-top">
            <div class="method-logo">
              <BrandIcon v-if="m.brand" :name="m.brand" :size="30" />
              <v-icon v-else :color="m.color" size="30">{{ m.icon }}</v-icon>
            </div>
            <span v-if="m.isNew" class="chip chip-new">New</span>
            <span v-if="m.e2ee" class="chip" title="Optional end-to-end encryption"
              ><v-icon x-small color="primary">mdi-lock</v-icon> E2EE</span
            >
          </div>
          <h3>{{ m.name }}</h3>
          <p>{{ m.text }}</p>
          <span class="method-more"
            >Setup guide <v-icon small color="primary">mdi-arrow-right</v-icon></span
          >
        </nuxt-link>
      </div>
    </section>

    <!-- Platforms -->
    <section class="fl-section platforms fl-card">
      <div>
        <p class="fl-eyebrow">Everywhere you browse</p>
        <h2 class="fl-h2">Apps for browsers, Android &amp; iOS</h2>
        <p class="fl-lead mb-0">
          Install the extension in Firefox, Chrome, Edge, Brave, Vivaldi, Opera
          or any other Chromium-based browser. The mobile app shows your synced
          bookmarks on the go. Looking for tab syncing?
          <nuxt-link to="/guides#tabs">It's covered too.</nuxt-link>
        </p>
        <p class="platforms-note">
          Safari is currently not supported due to technical limitations.
        </p>
      </div>
      <div class="platforms-icons">
        <div v-for="p in platforms" :key="p.title" class="platforms-icon" :title="p.title">
          <BrandIcon v-if="p.brand" :name="p.brand" :size="34" />
          <v-icon v-else :color="p.color" size="36">{{ p.icon }}</v-icon>
        </div>
      </div>
    </section>

    <!-- Feature matrix -->
    <section class="fl-section">
      <div class="section-head">
        <p class="fl-eyebrow">Compare</p>
        <h2 class="fl-h2">Feature matrix</h2>
      </div>
      <FeatureMatrix class="mt-6" />
      <p class="fm-footnote">
        <em>Mobile app</em> means the feature is available in the floccus
        mobile app, which syncs to a folder inside the app, not to mobile
        browsers. Floccus support across mobile browsers is currently sparse. See the <nuxt-link to="/faq">FAQ</nuxt-link> for details.
      </p>
    </section>

    <!-- Testimonials -->
    <section class="fl-section">
      <div class="section-head">
        <p class="fl-eyebrow">Loved by its users</p>
        <h2 class="fl-h2">What people are saying</h2>
      </div>
      <div class="fl-grid fl-grid-3 mt-8">
        <figure v-for="(quote, i) in shownFeedback" :key="i" class="fl-card quote">
          <v-icon color="primary" class="quote-mark">mdi-format-quote-open</v-icon>
          <blockquote>{{ quote }}</blockquote>
        </figure>
      </div>
      <div class="text-center mt-6">
        <v-btn outlined :to="{ name: 'donate', query: { from: 'site' } }"
          ><v-icon left color="amber darken-1">mdi-star</v-icon>Leave a
          review</v-btn
        >
      </div>
    </section>

    <!-- Mastodon -->
    <section class="fl-section">
      <div class="fl-card news">
        <div class="news-head">
          <BrandIcon name="mastodon" :size="28" />
          <span>Latest from <strong>@floccus</strong> on Mastodon</span>
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-if="posts.length" class="news-body fl-prose" v-html="posts[0]" />
        <p v-else class="news-body">
          Follow along for release notes and news.
        </p>
        <v-btn
          text
          color="primary"
          class="px-0"
          href="https://fosstodon.org/@floccus"
          target="_blank"
          >Follow @floccus on fosstodon.org<v-icon right small
            >mdi-open-in-new</v-icon
          ></v-btn
        >
      </div>
    </section>

    <!-- Get involved -->
    <section class="fl-section">
      <div class="section-head">
        <p class="fl-eyebrow">Get involved</p>
        <h2 class="fl-h2">Help make floccus even better</h2>
        <p class="fl-lead">
          Floccus is made possible by volunteers, especially its creator Marcel
          Klehr, improving it bit by bit.
        </p>
      </div>
      <div class="fl-grid fl-grid-4 mt-8">
        <component
          :is="a.to ? 'nuxt-link' : 'a'"
          v-for="a in actions"
          :key="a.title"
          :to="a.to"
          :href="a.href"
          :target="a.href ? '_blank' : null"
          class="fl-card action"
          :class="{ 'action-primary': a.primary }"
        >
          <v-icon :color="a.primary ? 'white' : 'primary'" size="28">{{
            a.icon
          }}</v-icon>
          <h3>{{ a.title }}</h3>
          <p>{{ a.text }}</p>
        </component>
      </div>
    </section>
  </div>
</template>

<script>
const FEEDBACK = [
  'The Floccus ecosystem, coupled with the Nextcloud Bookmarks App, has significantly improved my workflows for bookmark management across multiple computers.',
  "It didn't take much work to set up, and it was totally worth it!",
  "Fantastic free extension (and app available) that works like a charm! I Support this project. It's very underrated!",
  'Spiritual successor to Xmarks, although this is superior. End-to-end encryption!',
  'This extension is really amazing! Marcel, I want to write big thank you for what are you doing, keep going!',
  'Works 100% of the time, super easy to configure. respects privacy: you decide where your data are stored. Good job. Thanks for the Dev.',
  "I've been using it to sync between Firefox and Chrome since 2020, and while it had some problems syncing early on, it's been solid for so long I can't even remember the last time I encountered a sync error.",
  'Super tool, it does what it should!',
  'Brotha, how good is floccus??!',
  "It's actually amazing. I have it connected to google drive and it does what it says. It also has failsafes to make sure your bookmarks don't get nuked everywhere in case something goes wrong. Also works on mobile, for example, with kiwi. Also don't need to do any mental gymnastics to get it to work. The setup is really simple.",
  "I have my linkwarden instance set up with all my browsers with Floccus to sync my bookmarks no matter what device I'm on. Super useful!",
  "Linkwarden in combination with Floccus has been an absolute dream. I just bookmark things through my browser like normal, and everything's synced through linkwarden. Same bookmarks on my work PC personal browser, on my home PC, anywhere.",
  'I use Floccus ,I have it configured and synchronized with NextCloud , easy access to my bookmarks at any time and from any device',
  "Floccus! It's highly reliable and I'm actively using it to sync bookmarks between chrome and firefox",
  'linkwarden and floccus extension on browsers! absolute brilliant solution. works like a charm.',
  'Perfect. Syncs bookmarks across the board. Personally I use it on Chrome & Firefox on my Pixel as well as Chrome & Firefox on my Mac. Add/Edit/Delete a bookmark on any of those and it syncs perfectly across them all.',
  'I use Floccus on all devices, which has support and sync to nextcloud. i love that i also can keep synchonize my mobile devices with my desktop machines. Thanks for you great work. I really appreciate it.',
  'Essential for keeping your favorites organized and secure, and for synchronizing them across different browsers without having to do it manually each time.',
  'I have been using floccus for years to synchronize bookmarks across operating systems (Linux, Win11, Android) and browsers (Brave, Chromium, Chrome, Firefox, etc.). It works excellently and reliably. Highly recommended!',
]

export default {
  name: 'IndexPage',
  data() {
    return {
      posts: [],
      // Deterministic on the server, shuffled on the client after mount
      feedback: FEEDBACK,
      highlights: [
        {
          icon: 'mdi-bookmark-multiple-outline',
          title: 'Your browser, as usual',
          text: "Floccus syncs your browser's native bookmarks. Keep organizing them exactly like you always have.",
        },
        {
          icon: 'mdi-shield-lock-outline',
          title: 'Private by design',
          text: 'Your bookmarks stay on a server you choose, with optional end-to-end encryption. No data collection.',
        },
        {
          icon: 'mdi-heart-outline',
          title: 'Free & open source',
          text: 'No ads, no subscriptions, no lock-in. Built in the open by a friendly community.',
        },
      ],
      methods: [
        {
          name: 'Nextcloud Bookmarks',
          brand: 'nextcloud',
          guide: 'sync-nextcloud-bookmarks',
          text: 'Self-host or rent a Nextcloud and browse your bookmarks in its Bookmarks app.',
        },
        {
          name: 'Linkwarden',
          icon: 'mdi-link-variant',
          color: 'deep-purple',
          guide: 'sync-linkwarden',
          text: 'Open source bookmark manager — self-hosted or as a service, with a web dashboard.',
        },
        {
          name: 'Karakeep',
          brand: 'karakeep',
          guide: 'sync-karakeep',
          text: 'Self-hosted, open source bookmark manager to view your links from anywhere.',
        },
        {
          name: 'Git',
          brand: 'git',
          guide: 'sync-git',
          text: 'Keep your bookmarks in a repository on GitHub, GitLab, Gitea or your own server.',
        },
        {
          name: 'WebDAV',
          icon: 'mdi-server',
          color: 'blue-grey darken-1',
          guide: 'sync-webdav',
          e2ee: true,
          text: 'Supported by many cloud storage providers and NAS devices — or host your own.',
        },
        {
          name: 'S3 bucket',
          icon: 'mdi-bucket-outline',
          color: 'orange darken-2',
          guide: 'sync-s3',
          e2ee: true,
          isNew: true,
          text: 'Amazon S3, Cloudflare R2, Backblaze B2, MinIO, Garage and other S3-compatible storage.',
        },
        {
          name: 'Google Drive',
          brand: 'googledrive',
          guide: 'sync-google-drive',
          e2ee: true,
          text: 'The simplest option. Encrypt end-to-end if you want to keep things private.',
        },
        {
          name: 'Dropbox',
          brand: 'dropbox',
          guide: 'sync-dropbox',
          e2ee: true,
          text: 'Just as easy — use the Dropbox you already have, optionally encrypted.',
        },
      ],
      platforms: [
        { title: 'Firefox', brand: 'firefox' },
        { title: 'Chrome', brand: 'chrome' },
        { title: 'Edge', icon: 'mdi-microsoft-edge', color: '#0C78D4' },
        { title: 'Brave', brand: 'brave' },
        { title: 'Vivaldi', brand: 'vivaldi' },
        { title: 'Opera', brand: 'opera' },
        { title: 'Android', brand: 'android' },
        { title: 'iOS', brand: 'apple' },
      ],
      actions: [
        {
          title: 'Donate',
          icon: 'mdi-heart',
          primary: true,
          to: { name: 'donate', query: { from: 'site' } },
          text: 'Support ongoing development with a one-time or recurring donation.',
        },
        {
          title: 'Report an issue',
          icon: 'mdi-bug-outline',
          href: 'https://github.com/floccusAddon/floccus/issues',
          text: 'Found a problem or have an idea? Let us know on GitHub.',
        },
        {
          title: 'Contribute code',
          icon: 'mdi-source-pull',
          href: 'https://github.com/floccusAddon/floccus/pulls',
          text: 'Want to build a new feature? Pull requests are welcome.',
        },
        {
          title: 'Help translate',
          icon: 'mdi-translate',
          href: 'https://explore.transifex.com/floccus/floccus/',
          text: 'Bring floccus to your language on Transifex.',
        },
      ],
    }
  },
  head: {
    title: 'Cross-browser bookmarks syncing',
  },
  computed: {
    shownFeedback() {
      return this.feedback.slice(0, 3)
    },
  },
  mounted() {
    this.feedback = [...FEEDBACK].sort(() => Math.random() - 0.5)
    this.loadPosts()
  },
  methods: {
    async loadPosts() {
      try {
        const res = await fetch('https://fosstodon.org/@floccus.rss')
        const text = await res.text()
        const doc = new DOMParser().parseFromString(text, 'application/xml')
        this.posts = [
          ...doc.querySelectorAll('rss channel item description'),
        ].map((node) => node.textContent)
      } catch (e) {
        // Keep the fallback text
      }
    },
  },
}
</script>

<style>
.hero {
  text-align: center;
  padding-top: 56px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 6px;
  border: 1px solid var(--fl-border);
  border-radius: 999px;
  background: #fff;
  color: var(--fl-ink) !important;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.hero-badge:hover {
  border-color: #c4d6ec;
  box-shadow: 0 6px 18px rgb(25 118 210 / 12%);
}

.hero-badge-new {
  background: var(--fl-blue-soft);
  color: #0d4e94;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 999px;
  padding: 3px 10px;
}

.hero-title {
  margin-top: 28px;
}

.hero-accent {
  background: linear-gradient(90deg, #1976d2, #42a5f5);
  /* stylelint-disable-next-line property-no-vendor-prefix -- still needed by Safari */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-lead {
  max-width: 620px;
  margin: 22px auto 0;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 34px;
}

.hero-visual {
  margin: 64px auto 0;
  max-width: 1040px;
  padding: 48px 48px 0;
  border-radius: 28px;
  background:
    radial-gradient(circle at 20% 0%, #d6e9fc 0%, transparent 55%),
    radial-gradient(circle at 90% 30%, #e6e0fb 0%, transparent 50%),
    var(--fl-soft);
  overflow: hidden;
}

.hero-visual img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 583.63 / 403.32;
}

@media (max-width: 600px) {
  .hero {
    padding-top: 24px;
  }

  .hero-ctas .v-btn {
    width: 100%;
  }

  .hero-visual {
    padding: 20px 20px 0;
    margin-top: 40px;
  }
}

.highlight-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--fl-blue-soft);
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 16px 0 6px;
}

.highlight p {
  color: var(--fl-muted);
  line-height: 1.6;
}

.section-head {
  max-width: 680px;
}

.method {
  display: flex;
  flex-direction: column;
  padding: 22px;
}

.method-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.method-logo {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--fl-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
}

.method h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 16px 0 6px;
}

.method p {
  color: var(--fl-muted);
  font-size: 0.95rem;
  line-height: 1.55;
  flex: 1;
  margin-bottom: 14px;
}

.method-more {
  color: var(--fl-blue);
  font-weight: 600;
  font-size: 0.92rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 999px;
  padding: 3px 9px;
  background: var(--fl-blue-soft);
  color: #0d4e94;
}

.chip-new {
  background: #fff3e0;
  color: #b45309;
}

.platforms {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  align-items: center;
  padding: 44px;
  background:
    radial-gradient(circle at 100% 0%, #e3f0fd 0%, transparent 60%), #fff;
}

.platforms a {
  color: var(--fl-blue);
}

.platforms-note {
  margin-top: 14px;
  font-size: 0.9rem;
  color: var(--fl-muted);
}

.platforms-icons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.platforms-icon {
  aspect-ratio: 1;
  border-radius: 20px;
  background: #fff;
  border: 1px solid var(--fl-border);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgb(15 30 54 / 6%);
}

@media (max-width: 860px) {
  .platforms {
    grid-template-columns: 1fr;
    padding: 28px;
  }
}

.fm-footnote {
  margin-top: 14px;
  font-size: 0.9rem;
  color: var(--fl-muted);
  max-width: 760px;
}

.quote {
  margin: 0;
  padding: 26px;
}

.quote-mark {
  opacity: 0.5;
}

.quote blockquote {
  margin-top: 8px;
  font-size: 1.05rem;
  line-height: 1.6;
}

.news {
  padding: 28px 32px;
  max-width: 780px;
}

.news-head {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.05rem;
}

.news-body {
  margin: 16px 0 8px;
  font-size: 1.05rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.action {
  padding: 24px;
  display: block;
}

.action h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 14px 0 6px;
}

.action p {
  color: var(--fl-muted);
  font-size: 0.95rem;
  line-height: 1.55;
  margin: 0;
}

.action-primary {
  background: linear-gradient(145deg, #2c8be6, #1565c0);
  border-color: transparent;
  color: #fff !important;
}

.action-primary p {
  color: rgb(255 255 255 / 85%);
}
</style>
