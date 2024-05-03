<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
        <h1 class="headline">Frequently Asked Questions</h1>
        <div v-for="faq in faqs" :key="faq.question" class="mt-5">
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
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8">
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
    return {
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

Floccus only stores the data you provide in your browser and doesn't send them anywhere. The aforementioned access credentials are thus as secure as your browser, by default. If even that is not enough for you, you can encrypt your credentials entered into floccus with a passphrase that you will have to enter on every browser start.`,
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
          answer: `Floccus employs a locking mechanism to avoid manipulating data on the server from two browsers at the same time. Sometimes, when closing a browser while floccus is syncing,
this lock is not removed. On the next browser start floccus will then wait for the lock to be released and will tell you to wait while it'S doing nothing.

After two hours of trying floccus should override the lock and finally start syncing again. If this doesn't happen for you, please have a look at the issues section on the floccus github repository and perhaps file a new issue there.`,
        },
      ].map(faq => ({...faq, show: false})),
    }
  },
  head: {
    title: 'FAQ',
  },
}
</script>
