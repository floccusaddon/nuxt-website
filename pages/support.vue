<template>
  <div class="fl-page fl-narrow">
    <h1 class="fl-page-title">Support</h1>
    <p class="fl-lead">Stuck or found a bug? Here's where to get help.</p>

    <div class="fl-grid fl-grid-2 mt-8">
      <component
        :is="o.to ? 'nuxt-link' : 'a'"
        v-for="o in options"
        :key="o.title"
        :to="o.to"
        :href="o.href"
        :target="o.href ? '_blank' : null"
        class="fl-card support-opt"
      >
        <span class="support-opt-icon">
          <BrandIcon v-if="o.brand" :name="o.brand" :size="24" />
          <v-icon v-else color="primary" size="24">{{ o.icon }}</v-icon>
        </span>
        <span>
          <strong>{{ o.title }}</strong>
          <span class="support-opt-text">{{ o.text }}</span>
        </span>
      </component>
    </div>

    <p class="support-legal">
      How does floccus deal with your personal data?
      <nuxt-link to="/privacy">Privacy policy</nuxt-link> ·
      <nuxt-link to="/license">License</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SupportPage',
  data() {
    return {
      options: [
        {
          title: 'Read the guides',
          icon: 'mdi-book-open-outline',
          to: { name: 'guides' },
          text: 'Step-by-step setup for every sync method.',
        },
        {
          title: 'Browse the FAQ',
          icon: 'mdi-help-circle-outline',
          to: { name: 'faq' },
          text: 'Answers to the most common questions.',
        },
        {
          title: 'Submit an issue on GitHub',
          brand: 'github',
          href: 'https://github.com/floccusaddon/floccus/issues',
          text: 'Report a bug or request a feature.',
        },
        {
          title: 'Ask the community',
          brand: 'reddit',
          href: 'https://reddit.com/r/floccus',
          text: 'Get help from other floccus users on r/floccus.',
        },
      ],
    }
  },
  head: {
    title: 'Support',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find more details about where you can find support for floccus.' },
      { hid: 'og:title', property: 'og:title', content: 'Floccus Support - Floccus bookmarks sync' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Floccus Support - Floccus bookmarks sync' },
    ],
  },
}
</script>

<style>
.support-opt {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
}

.support-opt-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--fl-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.support-opt strong {
  display: block;
  font-size: 1.05rem;
}

.support-opt-text {
  display: block;
  color: var(--fl-muted);
  margin-top: 2px;
}

.support-legal {
  margin-top: 40px;
  color: var(--fl-muted);
}

.support-legal a {
  color: var(--fl-blue);
}
</style>
