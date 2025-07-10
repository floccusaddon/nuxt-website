Floccus supports unidirectional, one-way sync as well two-directional “merge” sync.

## Merge

> Set floccus' Sync strategy to 'Always merge local changes with changes from other browsers'.

In merge mode, changes from your local browser are merged with changes from other browsers.

## One-way sync

> Set floccus' Sync strategy to 'Always undo local changes and download changes from other browsers' or 'Always upload local changes and undo changes from other browsers'.

Sometimes you want to have one device as a main device and other devices only as listeners. For this scenario you can set the main device to 'Always upload local changes and undo changes from other browsers' and all others to 'Always undo local changes and download changes from other browsers' to override their changes with the changes from the main device.

## Temporary one-way

Occasionally you only want to temporarily override changes from other devices. For this you can use 'Push up once' in the floccus dropdown.
In order to undo local changes you can do use 'Pull down once' in the floccus dropdown to revert all your local changes with the latest server state.
