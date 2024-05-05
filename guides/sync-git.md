1. Create a new profile in the Floccus panel
2. Select Git over HTTP as your sync method
3. The following screens show the profile settings.
4. First you will need to enter your Git repository URL. Make sure to use the HTTPS URL instead of the SSH URL if you have the choice.
5. Then enter your username and password for your Git hosting provider. Note, that if you have 2-factor authentication enabled for your account, you will need to use some sort of device token here instead of your actual password.  
6. You can then enter a path and filename for the bookmarks file inside your Git repository. The easiest is to just store it in the root.
7. Finally, you can choose which bookmarks folder to sync to that file. By default floccus will create a new folder for you, to avoid syncing something that you don’t want synced. However, with a click on the folder icon you can select any other folder in your bookmarks. Selecting the topmost “untitled” folder will sync everything.
8. Make sure to disable your native browser bookmark sync service, because it is likely incompatible with floccus
