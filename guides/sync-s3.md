Floccus can store your bookmarks in a file in an S3 bucket. This works with Amazon S3 as well as any S3-compatible storage, e.g. Cloudflare R2, Backblaze B2, Wasabi, Hetzner Object Storage, MinIO or Garage. S3 sync is available since floccus v5.13.

## Before you start

1. Create a bucket with your storage provider. Floccus will not create the bucket for you, it has to exist already. Don't make the bucket public, floccus doesn't need that. You also don't need to configure CORS for the bucket.
2. Create an access key for floccus. You will get an **access key ID** and a **secret access key**. It's a good idea to create a dedicated key that can only access this one bucket. Floccus needs permission to list the bucket and to read, write and delete objects in it (on Amazon S3 these are `s3:ListBucket`, `s3:GetObject`, `s3:PutObject` and `s3:DeleteObject`).
3. Find out the endpoint URL and the region of your bucket. Here are the values for some common providers:

| Provider | Endpoint URL | Region | Path-style URLs |
|---|---|---|---|
| Amazon S3 | `https://s3.REGION.amazonaws.com` | e.g. `eu-central-1` | on or off |
| Cloudflare R2 | `https://ACCOUNT_ID.r2.cloudflarestorage.com` | `auto` | on |
| Backblaze B2 | `https://s3.REGION.backblazeb2.com` | e.g. `eu-central-003` | on or off |
| Wasabi | `https://s3.REGION.wasabisys.com` | e.g. `eu-central-1` | on or off |
| Hetzner Object Storage | `https://LOCATION.your-objectstorage.com` | e.g. `fsn1` | on or off |
| MinIO, Garage and other selfhosted servers | The URL of your server, e.g. `https://s3.example.com` | The region configured on your server, otherwise `us-east-1` (MinIO) or `garage` (Garage) | on |

## Setting up the profile

1. Create a new profile in the Floccus panel
2. Select S3 bucket as your sync method
3. Enter the **S3 endpoint URL**. This is the URL of your S3 service *without* the bucket name, e.g. `https://s3.eu-central-1.amazonaws.com`. The URL must start with https:// (or http:// for a local server).
4. Enter the **Region** your bucket is in. Use `auto` for Cloudflare R2 and `us-east-1` if your provider doesn't use regions.
5. Enter the name of your **Bucket**. Only enter the name, without any slashes.
6. Choose whether to **Use path-style URLs**. With path-style URLs floccus accesses your bucket at `ENDPOINT/BUCKET`, otherwise at `BUCKET.ENDPOINT`. Most selfhosted S3 servers need path-style URLs, so leave this on if you're unsure.
7. Enter your **Access key ID** and **Secret access key**.
8. If you’d like to encrypt your data before storing it in your bucket, you can set a passphrase here. If you don’t enter anything, it won’t be encrypted.
9. When you click “Continue”, floccus checks that it can reach your bucket with the details you provided. If this fails, see the troubleshooting tips below.
10. Next, you can specify the name of your bookmarks file in the bucket. By default floccus will create a file called bookmarks.xbel in the root of the bucket. You can also put it in a "folder" by entering a path like `personal_stuff/bookmarks.xbel`, but don't start or end it with a slash. You can also choose whether the file should be stored in XBEL or HTML format.
11. Finally, you can choose which bookmarks folder to sync to that file. Click on the folder icon to select a folder in your bookmarks. You will need to pick a folder before you can continue, and it’s a good idea to choose a dedicated folder to avoid syncing something that you don’t want synced.
12. Make sure to disable your native browser bookmark sync service, because it is likely incompatible with floccus. (This can cause frequent duplication of bookmarks.)

On your other devices, set up a profile with the same endpoint, region, bucket, bookmarks file and passphrase.

While syncing, floccus creates a lock file next to your bookmarks file (e.g. `bookmarks.xbel.lock`) to prevent two devices from syncing at the same time. It's deleted again when the sync is finished. Make sure that no lifecycle rules delete or archive your bookmarks file, and don't enable object lock for the bucket, as floccus needs to be able to overwrite and delete its files.

## Troubleshooting

* **The bucket does not exist:** Check the bucket name, the endpoint URL and the region. Also make sure the endpoint URL doesn't contain the bucket name already. If you're using a selfhosted server, try turning on path-style URLs.
* **Authentication failed:** Check your access key ID and secret access key and make sure the key is allowed to access the bucket.
* **The bucket is located in a different region:** Floccus will tell you which region the bucket is in. Enter that region and try again.
* **Network error:** Check that the endpoint URL is correct and reachable from your device. If you're using a selfhosted server with a self-signed certificate, your browser or phone needs to trust that certificate.
