//Imgur URL pattern for non-direct image links
var imgurl = "http(s)?:\/\/((m|www)\.)?imgur\.com\/([a-zA-Z0-9]{1,9})\/?$";

for(var i=0, j=document.links.length; i<j; i++) {

    var matched = new RegExp(imgurl).exec(document.links[i].href);

    //Skip links containing /gallery/ or /a/
    if (matched && !/gallery/.test(document.links[i].href) && !/\/a\//.test(document.links[i].href)) {
        document.links[i].href = "https://i.imgur.com/" + matched[4] + ".jpg";
    }
}
