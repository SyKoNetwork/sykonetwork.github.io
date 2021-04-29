import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Ads from "vue-google-adsense";

const app = createApp(App);

app.use(router).mount("#app");

App.use(require('vue-script2'))

App.use(Ads.Adsense)
App.use(Ads.InArticleAdsense)
App.use(Ads.InFeedAdsense)