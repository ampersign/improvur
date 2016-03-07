var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: ["*"],
    //Don't rewrite links on imgur.com itself, otherwise stuff like http://imgur.com/random breaks
    exclude: /.*imgur\.com.*/,
    attachTo: ["existing", "top", "frame"],
    contentScriptWhen: "ready",
    contentScriptFile: data.url("improvur.js")
});