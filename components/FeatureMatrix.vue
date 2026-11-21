<template>
  <div>
    <div class="fm-scroll" tabindex="0" aria-label="Feature matrix">
      <table class="fm">
        <thead>
          <tr>
            <th class="fm-sticky">Sync method</th>
            <th>Storage</th>
            <th>Since</th>
            <th v-for="col in cols" :key="col.key" :title="col.hint">
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.name">
            <th class="fm-sticky" scope="row">{{ row.name }}</th>
            <td class="fm-muted">{{ row.storage }}</td>
            <td>
              <a
                v-if="row.since"
                :href="`https://github.com/floccusaddon/floccus/releases/tag/${row.since}`"
                >{{ row.since }}</a
              >
              <span v-else class="fm-planned">Planned</span>
            </td>
            <td v-for="(val, i) in row.values" :key="i" class="fm-cell">
              <v-icon v-if="val === 'y'" color="success" small
                >mdi-check-circle</v-icon
              >
              <v-icon
                v-else-if="val === 'o'"
                color="primary"
                small
                title="Optional"
                >mdi-lock</v-icon
              >
              <span v-else-if="val === 'n'" class="fm-no" aria-label="No"
                >–</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="fm-legend">
      <span
        ><v-icon color="success" small>mdi-check-circle</v-icon> Supported</span
      >
      <span
        ><v-icon color="primary" small>mdi-lock</v-icon> Optional end-to-end
        encryption</span
      >
      <span><span class="fm-no">–</span> Not supported</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureMatrix',
  data() {
    return {
      cols: [
        { key: 'http', label: 'http(s) links', hint: 'http / https bookmarks' },
        { key: 'ftp', label: 'ftp(s) links', hint: 'ftp / ftps bookmarks' },
        { key: 'js', label: 'javascript:', hint: 'javascript: bookmarklets' },
        { key: 'data', label: 'data:', hint: 'data: bookmarks' },
        { key: 'file', label: 'file:', hint: 'file: bookmarks' },
        { key: 'e2ee', label: 'E2EE', hint: 'End-to-end encryption' },
        { key: 'order', label: 'Keeps order', hint: 'Keeps the order of your bookmarks' },
        { key: 'mobile', label: 'Mobile app', hint: 'Available in the floccus mobile app' },
      ],
      rows: [
        { name: 'Nextcloud Bookmarks', storage: 'App', since: 'v3.1.0', values: ['y', 'y', 'y', 'n', 'n', 'n', 'y', 'y'] },
        { name: 'Linkwarden', storage: 'App', since: 'v5.3.0', values: ['y', 'y', 'y', 'n', 'n', 'n', 'y', 'y'] },
        { name: 'Karakeep', storage: 'App', since: 'v5.6.0', values: ['y', 'n', 'n', 'n', 'n', 'n', 'n', 'y'] },
        { name: 'WebDAV', storage: 'XBEL, HTML', since: 'v3.0.0', values: ['y', 'y', 'y', 'y', 'y', 'o', 'y', 'y'] },
        { name: 'S3 bucket', storage: 'XBEL, HTML', since: 'v5.13.0', values: ['y', 'y', 'y', 'y', 'y', 'o', 'y', 'y'] },
        { name: 'Git over HTTPS', storage: 'XBEL, HTML', since: 'v5.1.0', values: ['y', 'y', 'y', 'y', 'y', 'n', 'y', 'y'] },
        { name: 'Google Drive', storage: 'XBEL, HTML', since: 'v4.6.0', values: ['y', 'y', 'y', 'y', 'y', 'o', 'y', 'y'] },
        { name: 'Dropbox', storage: 'XBEL, HTML', since: 'v5.9.0', values: ['y', 'y', 'y', 'y', 'y', 'o', 'y', 'y'] },
        { name: 'OneDrive', storage: '', since: null, values: ['', '', '', '', '', '', '', ''] },
      ],
    }
  },
}
</script>

<style>
.fm-scroll {
  overflow-x: auto;
  border: 1px solid var(--fl-border);
  border-radius: 18px;
  background: #fff;
}

.fm {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  min-width: 780px;
  font-size: 0.92rem;
}

.fm th,
.fm td {
  padding: 13px 10px;
  text-align: center;
  border-bottom: 1px solid #edf1f6;
  white-space: nowrap;
}

.fm thead th {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fl-muted);
  background: var(--fl-soft);
  cursor: help;
  white-space: normal;
  line-height: 1.3;
  vertical-align: bottom;
}

.fm tbody tr:last-child th,
.fm tbody tr:last-child td {
  border-bottom: 0;
}

.fm tbody tr:hover td,
.fm tbody tr:hover th {
  background: #f8fbff;
}

.fm .fm-sticky {
  position: sticky;
  left: 0;
  z-index: 1;
  text-align: left;
  background: #fff;
  font-weight: 700;
  box-shadow: 1px 0 0 #edf1f6;
}

.fm thead .fm-sticky {
  background: var(--fl-soft);
  cursor: default;
}

.fm .fm-muted {
  color: var(--fl-muted);
  font-size: 0.85rem;
}

.fm a {
  color: var(--fl-blue);
  text-decoration: none;
  font-variant-numeric: tabular-nums;
}

.fm-no {
  color: #b4c0d0;
  font-weight: 700;
}

.fm-planned {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--fl-muted);
  background: var(--fl-soft);
  border-radius: 999px;
  padding: 3px 10px;
}

.fm-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  margin-top: 14px;
  font-size: 0.9rem;
  color: var(--fl-muted);
}
</style>
