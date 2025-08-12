<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <h1 class="headline">Frequently Asked Questions</h1>
        <v-text-field
          append-icon="mdi-magnify"
          class="mt-2 mb-4"
          v-model="searchQuery"
          label="Search questions..."/>
        <div v-for="faq in filteredFaqs" :key="faq.question" class="mt-5">
          <v-card class="mb-5 mr-5" rounded>
            <v-card-title
              style="cursor: pointer"
              @click="faq.show = !faq.show"
            >{{ faq.question }}
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>{{
                    faq.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                  }}</v-icon>
              </v-btn>
            </v-card-title>
            <v-expand-transition>
              <div v-show="faq.show">
                <v-divider></v-divider>
                <v-card-text v-html="$md.render(faq.answer)" />
              </div>
            </v-expand-transition>
          </v-card>
        </div>
        <div v-if="filteredFaqs.length === 0">
          <h2>No FAQs found for your search query</h2>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <p>
          Have a problem with floccus that isn't covered here?
          <a href="https://github.com/floccusaddon/floccus/issues">File an issue on GitHub</a>
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
  name: 'DownloadPage',
  data() {
    const ret = {
      searchQuery: '',
      faqs: [
        {
          question: 'Which browsers are supported by floccus?',
          answer:
            'Currently floccus supports Chromium, Google Chrome, Mozilla Firefox, Opera, Brave, Vivaldi and Microsoft Edge.',
        },
        {
          question: 'How can I access my bookmarks on my Android phone?',
          answer: `A Floccus Android app is available in an open beta [from the Downloads page](/download)

The only mobile browser to support extensions that interact with bookmarks is currently the free Kiwi browser.`,
        },
        {
          question: 'When will floccus be available for Firefox on Android?',
          answer: `Firefox for Android is making strides to support more addons. Floccus requires specific bookmarks APIs, however, which have not been implemented in Firefox for Android yet. So, we still wait, but the waiting won't be long.`,
        },
        {
          question: 'Does floccus sync my bookmarks with end-to-end encryption?',
          answer: `Floccus offers multiple sync methods. Only the WebDAV and the Google Drive option allow setting an encryption password to sync with end-to-end encryption. Syncing via Nextcloud Bookmarks or Git is not possible in end-to-end encrypted fashion with floccus.`,
        },
        {
          question: 'Does floccus support bookmarks tags in Firefox?',
          answer:
            'Unfortunately not, Mozilla has not yet added an API for interacting with native tags. However, floccus will not touch your tags.',
        },

        {
          question: 'Does floccus support separators in Firefox?',
          answer:
            'Yes. Separators are synced even to Browsers that don\'t support them natively using bookmarks as substitutes. When using Nextcloud Bookmarks you currently can only have one separator per folder.',
        },

        {
          question: 'How are browser-internal URLs treated?',
          answer:
            'Browser-internal URLs like `chrome://` URLs are only synced with WebDAV or Google Drive and only with chrome-based browsers.',
        },
        {
          question: 'How are non-HTTP URLs treated?',
          answer:
            'Since Nextcloud Bookmarks currently only supports HTTP links, URLs with any other schemes are ignored and left alone, when syncing via Nextcloud Bookmarks.\n' +
            '\n' +
            'When syncing via WebDAV or Google Drive, `http(s):`, `ftp:`, `data:`, `chrome:` and `javascript:` bookmarks are supported.',
        },
        {
          question: 'Does floccus track usage data at all?',
          answer:
            "No. Floccus does not track you in any way. The only network traffic initiated by floccus is syncing your bookmarks to the server of your choosing. That's it.",
        },
        {
          question: 'How does floccus treat my cloud credentials?',
          answer: `As Floccus uses OAuth to connect to your Google Drive, it doesn't know and doesn't record your Google password. Instead, floccus stores an authentication token which can only be used to create new files and change the files created with the same token in your Google Drive. Not even floccus can access any other data stored in your Google services.

For Nextcloud you have the option to use your normal account password, or create a dedicated app token that you can revoke at any time.

For WebDAV, only a normal password can be used.

Floccus only stores the data you provide in your browser and doesn't send them anywhere. The aforementioned access credentials are thus as secure as your browser, by default.`,
        },
        {
          question:
            'I am currently using a different tool to sync my browser data. Can I use this with floccus?',
          answer:
            'No, any other sync tool affecting your browser bookmarks will lead to duplication and possibly corrupt data. Please disable any active browser syncing tool before using floccus.',
        },
        {
          question:
            'Some of my topmost folders are missing in one of my browsers. How can I avoid this?',
          answer: `Browsers usually do not allow you to create items in the toplevel root folder (/), that space is reserved for special folders like Mobile bookmarks, Bookmarks bar, Other bookmarks. Any attempts by floccus to create items inside the root folder (whether in Kiwi or on any other Browser) will fail. The intention is that the built-in Sync mechanism of the browser vendor or some other native browser process will create and manage these folders, so it's by design that extensions are not able to write to it.

If you are missing some toplevel folders on a browser, try setting a different local folder to sync to in the floccus settings. E.g. instead of syncing to the absolute root folder, sync to a folder one level deeper, like Bookmarks Bar on Desktop or Mobile Bookmarks on mobile.`,
        },
        {
          question:
            "Floccus suddenly shows status as 'Scheduled' and tells me to wait without doing anything. What can I do?",
          answer: `Floccus employs a locking mechanism to avoid manipulating data on the server from two browsers at the same time. Sometimes, when closing a browser while floccus is syncing, this lock is not removed. On the next browser start floccus will then wait for the lock to be released and will tell you to wait while it's doing nothing.

After two hours of trying floccus should override the lock and finally start syncing again. If this doesn't happen for you, please have a look at the issues section on the floccus github repository and perhaps file a new issue there.`,
        },
        {
          question: "I'm seeing 'Failed to map parentId' errors. What can I do?",
          answer: `This error indicates that something went wrong during the sync. The developers are aware of these errors and are working on fixing all instances of them. In the meantime you can try to trigger a sync from scratch in the settings of the profile that errored. Make sure you have a backup of your bookmarks before you do this, and check your bookmarks for deleted bookmarks that may have come back. You can be sure that nothing will be deleted in this step, though.`,
        },
        {
          question: "I'm seeing 'E035: Failed to create bookmark on the server' errors . What can I do?",
          answer: `This error can happen with older versions of Nextcloud Bookmarks. An update to the latest version should fix this. If it doesn't, please file an issue on the floccus or Nextcloud Bookmarks github repositories.`,
        },
        {
          question: "I'm seeing 'E034: Remote bookmarks file is unreadable.' errors . What can I do?",
          answer: `This error can happen e.g. after you have shutdown your computer while floccus was running. Sometimes that leads to only parts of the bookmarks file getting uploaded, which floccus notices and stops the sync. You can remedy this situation by deleting the file on the server and triggering a sync with floccus, ideally on the device that you last made changes on. Floccus will then re-upload the whole file.`,
        },
      ].map(faq => ({...faq, show: false})),
    }
    ret.filteredFaqs = ret.faqs
    return ret
  },
  watch: {
    searchQuery() {
      if (this.searchQuery.trim() === '') {
        this.filteredFaqs = this.faqs
        return
      }
      const queries = this.searchQuery.split(' ')
      this.filteredFaqs = this.faqs.filter(faq => queries.every(query => faq.question.includes(query)) || queries.every(query => faq.answer.includes(query)))
    }
  },
  head: {
    title: 'Frequently Asked Questions',
    meta: [
      { hid: 'description', name: 'description', content: 'Floccus offers seamless cross-browser bookmarks syncing, here you can find all the answers to your questions.' },
      { hid: 'og:title', property: 'og:title', content: 'Frequently Asked Questions - Floccus bookmarks sync' },
      { hid: "twitter:title", name: "twitter:title", content: 'Frequently Asked Questions - Floccus bookmarks sync' },
    ],
  },
}
</script>
