Floccus supports unidirectional, one-way sync as well two-directional “merge” sync.

## Merge

> Set floccus' Sync strategy to 'Always merge local changes with changes from other browsers'.

In merge mode, changes from your local browser are merged with changes from other browsers.

## One-way sync

> Set floccus' Sync strategy to 'Always undo local changes and download changes from other browsers' or 'Always upload local changes and undo changes from other browsers'.

Sometimes you want to have one device as a main device and other devices only as listeners. For this scenario you can set the main device to 'Always upload local changes and undo changes from other browsers' and all others to 'Always undo local changes and download changes from other browsers' to override their changes with the changes from the main device.

## Temporary one-way

Occasionally you only want to temporarily override changes from other devices. For this you can use 'Push up once' in the floccus dropdown.
In order to undo local changes you can use 'Pull down once' in the floccus dropdown to revert all your local changes with the latest server state.

## Only notify me about changes

> Enable 'Only notify me about changes' in the sync behavior settings of your profile.

If you'd rather decide yourself when to sync, you can let floccus only tell you about changes. The usual triggers (changes to your local bookmarks, browser startup and the sync interval) will then only check whether there is anything to sync, instead of syncing right away.
When there are changes waiting, the profile shows "Needs sync" along with how many changes are waiting to come from the server and to go to the server, and the floccus icon gets a yellow exclamation mark badge. You can then start the sync from the floccus panel whenever it suits you.
If you also enable 'Show a notification', floccus will show a system notification when the profile has changes to sync. Your browser will ask you for permission to show notifications the first time you enable this.

This option is available in the browser extension for all sync methods, but not in the floccus app for Android and iOS.
