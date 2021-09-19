<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background-image" no-scroll padding>
      <ion-item>
        <h1 style="padding-left:120px">Main Menu</h1>
      </ion-item>

      <div>
        <ion-item
          button
          v-for="item in menuarray"
          :key="item.Heading"
          @click="() => router.push(item.Routing)"
          detail=""
        >
          <ion-label>
            <h1>{{ item.Heading }}</h1>
            <p>{{ item.Description }}</p>
          </ion-label>
          <ion-icon
            :icon="item.icon_name"
            style="color: #808080;"
            slot="start"
          ></ion-icon>
        </ion-item>
      </div>
      <ion-tabs
        @ionTabsWillChange="beforeTabChange"
        @ionTabsDidChange="afterTabChange"
      >
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="speakers" href="/menu">
            <ion-icon :icon="homeOutline"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenuButton,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import {
  medkitOutline,
  medkitSharp,
  tvOutline,
  tvSharp,
  bagAddOutline,
  bagAddSharp,
  logInOutline,
  logInSharp,
  logOutOutline,
  logOutSharp,
} from "ionicons/icons";

import { homeOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
export default {
  name: "Folder",
  components: {
    IonPage,
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,

    IonItem,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonMenuButton,
  },

  data() {
    return {
      menuarray: [
        {
          Heading: "Login",
          Description: "User can login to App",
          Routing: `/login`,
          icon_name: logInOutline,
        },
        {
          Heading: "Private Hospitals",
          Description: "User can channel  Private Hospitals",
          Routing: "",
          icon_name: medkitOutline,
        },
        {
          Heading: "Ayurvedic Hospitals",
          Description: "User can channel  Ayurvedic Hospitals",
          Routing: "",
          icon_name: medkitOutline,
        },
        {
          Heading: "Vedio Consultation",
          Description: "User can channel a doctor Via online",
          Routing: "",
          icon_name: tvOutline,
        },
        {
          Heading: "Medic lab",
          Description: "User can Delivery drugs etc..",
          Routing: "",
          icon_name: bagAddOutline,
        },
        {
          Heading: "Logout",
          Description: "User can logout from the application",
          Routing: "",
          icon_name: logOutOutline,
        },
      ],
    };
  },

  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    const router = useRouter();
    return {
      beforeTabChange,
      homeOutline,
      afterTabChange,
      router,
      medkitOutline,
      medkitSharp,
      tvOutline,
      tvSharp,
      bagAddOutline,
      bagAddSharp,
      logInOutline,
      logInSharp,
      logOutOutline,
      logOutSharp,
    };
  },
};
</script>
<style scoped>
@import "../theme/custom.css";
</style>
