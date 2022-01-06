// http://kb.mozillazine.org/Knowledge_Base
// With the help of: "https://github.com/pyllyukko/user.js"

user_pref("accessibility.typeaheadfind.flashBar", 0);

// Disable Shield/Heartbeat/Normandy (Mozilla user rating telemetry)
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);

// Disable "beacon" asynchronous HTTP transfers (used for analytics)
user_pref("beacon.enabled", false);

// Do not download URLs for the offline cache
// http://kb.mozillazine.org/Browser.cache.offline.enable
user_pref("browser.cache.offline.enable",	false);

// Set Browser Privacy setting to "Strict"
user_pref("browser.contentblocking.category", "strict");

// Disable Firefox to make personalized extension recommendations
user_pref("browser.discovery.enabled", false);

// Always ask the user where to download
user_pref("browser.download.useDownloadDir", false);

// Disable form autofill, don't save information entered in web page forms and the Search Bar
user_pref("browser.formfill.enable", false);

// Disable Extension recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable additional activity-stream options
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);

// Disable the "new tab page" feature and show a blank tab instead
user_pref("browser.newtabpage.enabled", false);

// Mark the rights notification as shown
user_pref("browser.rights.3.shown", true);

// Search optimizations
user_pref("browser.search.hiddenOneOffs", "Google,Yahoo,Bing,Amazon.com,Amazon.de,eBay,Yandex,Twitter,Wikipedia (en)");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.region", "CH");
user_pref("browser.search.countryCode", "CH");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.update", false);
user_pref("browser.search.selectedEngine", "DuckDuckGo");
user_pref("browser.search.defaultenginename", "DuckDuckGo");

// Startup settings
user_pref("browser.startup.homepage", "https://netflix.com");
user_pref("browser.startup.firstrunSkipsHomepage", false);
user_pref("browser.startup.page", 1);
user_pref("startup.homepage_welcome_url", "https://netflix.com");
user_pref("startup.homepage_override_url", "https://netflix.com");

// UI customization
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"customizableui-special-spring1\",\"urlbar-container\",\"fullscreen-button\",\"customizableui-special-spring2\",\"preferences-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"personal-bookmarks\"]},\"seen\":[\"developer-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"toolbar-menubar\",\"TabsToolbar\",\"PersonalToolbar\"],\"currentVersion\":16,\"newElementCount\":3}");
user_pref("browser.uidensity", 1);
user_pref("browser.urlbar.placeholderName", "DoNotUseThis");
user_pref("browser.urlbar.placeholderName.private", "DoNotUseThis");
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");

// Disable collection/sending of the health report (healthreport.sqlite*)
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable battery API
user_pref("dom.battery.enabled", false);

// Disable telephony API
user_pref("dom.telephony.enabled", false);

// Disable Location-Aware Browsing (geolocation)
user_pref("geo.enabled", false);

// Required to play Netflix content
user_pref("media.eme.enabled", true);

// Cookies expires at the end of the session (when the browser closes)
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.predictor.cleaned-up", true);

// Block new requests asking for permissions to devices
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2);

// Disable browsing history
user_pref("places.history.enabled", false);

// Clear history when Firefox closes (with exceptions to keep Netflix session alive)
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.siteSettings", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// Enable Do Not Track
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// Disable settings about Autofill feature
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
