import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import App from "./App.vue";
require("@/assets/main.scss");

import { library } from "@fortawesome/fontawesome-svg-core";
// internal icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {
  faFontAwesome,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(faUserSecret, faGithub, faLinkedin);
library.add(faFontAwesome);
Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
  customIconPacks: {
    fas: {
      sizes: {
        default: "lg",
        "is-small": "2x",
        "is-medium": "3x",
        "is-large": "4x",
      },
      iconPrefix: "",
    },
    fab: {
      sizes: {
        default: "lg",
        "is-small": "2x",
        "is-medium": "3x",
        "is-large": "4x",
      },
      iconPrefix: "",
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
