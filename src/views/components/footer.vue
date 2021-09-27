<template>
     <ion-tabs
        @ionTabsWillChange="beforeTabChange"
        @ionTabsDidChange="afterTabChange"
      >
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          
          <ion-tab-button tab="speakers" href="/menu">
            <ion-icon :icon="homeSharp"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
</template>
<script>
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon
} from "@ionic/vue";
import { homeSharp } from "ionicons/icons";
export default {
  components: {
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonIcon
  },

   setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    return {
      beforeTabChange,
      homeSharp,
      afterTabChange,
    };
  },
}
</script>