Instead of syncing a local bookmarks folder, Floccus can optionally sync your open browser tabs.

1. Create a new profile with the sync method of your choice
2. In the profile settings, select Tabs instead of a local folder to sync

By default, floccus' sync strategy is set to "Always merge local changes with changes of other browsers". This feature is still slightly experimental as it sometimes causes tabs to duplicate. Changing the strategy may alleviate these issues, as shown below.

## Auto-push

You can enable Auto-sync but set sync strategy to "Always upload local changes and undo changes from other browser". This will automatically push your currently open tabs to the server. Whenever you need the tabs on a different browser, or after a crash, you can click "Pull down once" to get the tabs back.

## Manual up- and download

Auto-push can sometimes cause surprises when you have it enabled on multiple devices or when an empty session is pushed after a browser crash, overriding the previously stored session. This is why you can also turn off auto-sync and push and pull your tabs manually, i.e. when you want to switch to a different device upload your open tabs once on device A and download once on device B – et voila, all your tabs are now on the new device.

## Mixing tabs and bookmarks

You can use a subpath on your server to manage tabs, while syncing the root path to your browser bookmarks. This will make available your tabs as bookmarks as well.
Note however, that, depending on which server you use, this can cause issues. Some of these are:

- Sites that you open without explicitly bookmarking them will automatically appear as bookmarked after some seconds, because the tabs are synced to your bookmarks automatically. This may not be ideal, because you don't know if the site is actually bookmarked or just in your synced tabs.
- Nextcloud Bookmarks will show sites that you have in your tabs but that are also bookmarked as duplicates
