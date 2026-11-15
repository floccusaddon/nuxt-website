<template>
  <div class="fl-page">
    <h1 class="fl-page-title">Download floccus</h1>
    <p class="fl-lead">
      Free on every platform. Install the extension in each browser you want to
      keep in sync.
    </p>

    <h2 class="dl-group">Browser extension</h2>
    <div class="fl-grid fl-grid-3">
      <div
        v-for="b in browsers"
        :key="b.key"
        class="fl-card dl"
        :class="{ 'dl-is-current': detected === b.key }"
      >
        <span v-if="detected === b.key" class="dl-current">Your browser</span>
        <div class="dl-head">
          <BrandIcon v-if="b.brand" :name="b.brand" :size="44" />
          <v-icon v-else :color="b.color" size="48">{{ b.icon }}</v-icon>
          <div>
            <h3>{{ b.name }}</h3>
            <p>{{ b.sub }}</p>
          </div>
        </div>
        <v-btn
          :color="detected === b.key ? 'primary' : null"
          :outlined="detected !== b.key"
          depressed
          block
          large
          :href="b.href"
          ><v-icon left>mdi-download</v-icon>Add to {{ b.name }}</v-btn
        >
      </div>
    </div>

    <h2 class="dl-group">Mobile app</h2>
    <div class="fl-grid fl-grid-3">
      <div class="fl-card dl" :class="{ 'dl-is-current': detected === 'android' }">
        <span v-if="detected === 'android'" class="dl-current">Your device</span>
        <div class="dl-head">
          <BrandIcon name="android" :size="44" />
          <div>
            <h3>Android</h3>
            <p>View your synced bookmarks on the go</p>
          </div>
        </div>
        <div class="dl-stores">
          <a class="store" href="https://play.google.com/store/apps/details?id=org.handmadeideas.floccus">
            <BrandIcon name="googleplay" :size="24" color="#fff" />
            <span><small>Get it on</small>Google Play</span>
          </a>
          <a class="store" href="https://f-droid.org/en/packages/org.handmadeideas.floccus/">
            <BrandIcon name="fdroid" :size="24" color="#fff" />
            <span><small>Get it on</small>F-Droid</span>
          </a>
        </div>
      </div>
      <div class="fl-card dl" :class="{ 'dl-is-current': detected === 'ios' }">
        <span v-if="detected === 'ios'" class="dl-current">Your device</span>
        <div class="dl-head">
          <BrandIcon name="apple" :size="44" />
          <div>
            <h3>iOS</h3>
            <p>For iPhone and iPad</p>
          </div>
        </div>
        <div class="dl-stores">
          <a class="store" href="https://apps.apple.com/us/app/floccus/id1626998357">
            <BrandIcon name="apple" :size="24" color="#fff" />
            <span><small>Download on the</small>App Store</span>
          </a>
        </div>
      </div>
      <div class="fl-card dl">
        <div class="dl-head">
          <BrandIcon name="github" :size="44" />
          <div>
            <h3>Source code</h3>
            <p>Releases and source on GitHub</p>
          </div>
        </div>
        <v-btn outlined block large href="https://github.com/floccusaddon/floccus/releases"
          ><v-icon left>mdi-package-variant</v-icon>View releases</v-btn
        >
      </div>
    </div>

    <div class="dl-help fl-card">
      <v-icon color="primary" size="28">mdi-book-open-outline</v-icon>
      <div>
        <strong>Installed? Set up your first sync.</strong>
        <p>Pick a sync method and follow the step-by-step guide.</p>
      </div>
      <v-btn color="primary" depressed :to="{ name: 'guides' }"
        >Get started<v-icon right>mdi-arrow-right</v-icon></v-btn
      >
    </div>

    <p class="dl-legal">
      How does floccus deal with your personal data?
      <nuxt-link to="/privacy">Privacy policy</nuxt-link> ·
      <nuxt-link to="/license">License</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DownloadPage',
  data() {
    return {
      detected: null,
      browsers: [
        {
          key: 'firefox',
          name: 'Firefox',
          brand: 'firefox',
          sub: 'Firefox add-ons',
          href: 'https://addons.mozilla.org/en-US/firefox/addon/floccus/',
        },
        {
          key: 'chrome',
          name: 'Chrome',
          brand: 'chrome',
          sub: 'Also for Brave, Vivaldi & other Chromium browsers',
          href: 'https://chrome.google.com/webstore/detail/floccus/fnaicdffflnofjppbagibeoednhnbjhg',
        },
        {
          key: 'edge',
          name: 'Edge',
          icon: 'mdi-microsoft-edge',
          color: '#0C78D4',
          sub: 'Microsoft Edge Add-ons',
          href: 'https://microsoftedge.microsoft.com/addons/detail/gjkddcofhiifldbllobcamllmanombji',
        },
      ],
    }
  },
  head: {
    title: 'Download',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find all download links for the different browsers and platforms.' },
      { hid: 'og:title', property: 'og:title', content: 'Download - Floccus bookmarks sync' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Download - Floccus bookmarks sync' },
    ],
  },
  mounted() {
    const ua = navigator.userAgent
    if (/iPhone|iPad|iPod/.test(ua)) this.detected = 'ios'
    else if (/Android/.test(ua)) this.detected = 'android'
    else if (/Edg\//.test(ua)) this.detected = 'edge'
    else if (/Firefox\//.test(ua)) this.detected = 'firefox'
    else if (/Chrome\//.test(ua)) this.detected = 'chrome'
  },
}
</script>

<style>
.dl-group {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fl-muted);
  margin: 44px 0 14px;
}

.dl {
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.dl-is-current {
  border-color: var(--fl-blue);
  box-shadow: 0 0 0 3px var(--fl-blue-soft);
}

.dl-current {
  position: absolute;
  top: -11px;
  left: 20px;
  background: var(--fl-blue);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 999px;
  padding: 3px 10px;
}

.dl > .v-btn {
  flex: 0 0 auto;
}

.dl-head {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.dl-head h3 {
  font-size: 1.25rem;
  font-weight: 700;
}

.dl-head p {
  color: var(--fl-muted);
  font-size: 0.92rem;
  margin: 2px 0 0;
}

.dl-stores {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.store {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 18px 0 14px;
  border-radius: 12px;
  background: var(--fl-ink);
  color: #fff !important;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.1;
  flex: 1;
  min-width: 150px;
  transition: background 0.2s;
}

.store:hover {
  background: #22344f;
}

.store small {
  display: block;
  font-size: 0.68rem;
  font-weight: 500;
  opacity: 0.75;
}

.dl-help {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 26px;
  margin-top: 44px;
  background: var(--fl-soft);
}

.dl-help div {
  flex: 1;
}

.dl-help p {
  margin: 2px 0 0;
  color: var(--fl-muted);
}

@media (max-width: 600px) {
  .dl-help {
    flex-direction: column;
    align-items: flex-start;
  }
}

.dl-legal {
  margin-top: 32px;
  color: var(--fl-muted);
}

.dl-legal a {
  color: var(--fl-blue);
}
</style>
