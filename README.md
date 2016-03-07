# Improvur

Improvur is a Firefox extension that rewrites Imgur links to point directly at the target image file when possible. For example, a link like `http://imgur.com/yeAzeso` will be converted to `https://i.imgur.com/yeAzeso.jpg`. This allows you to view the image file without loading all of Imgur's social content, advertising, etc.

Gallery and album links are left untouched, since they need Imgur's scaffolding to work properly. Also, links on imgur.com itself are not rewritten so that features on that site continue to function as intended.

### Notes

Links are rewritten to use a .jpg extension regardless of the actual image type. This works because Imgur generally ignores file extensions and serves files based on their MIME type instead.

### TODO / Known issues

* When a rewritten link points to an animated GIF, the larger .gif version will be loaded instead of the slimmer .gifv. A future version of Improvur may attempt to sniff the MIME type and handle these better.

### Bug reporting

To report a bug, please visit the <a href="http://improvur.reddit.com/">Improvur subreddit</a>.
