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
      <br />
      <br />
      <br />
      <br />
      <div style="padding-top:70px">
        <ion-item
          button
          v-for="item in menuarray"
          :key="item.Heading"
          @click="() => router.push(item.Routing)"
          detail=""
        >
          <ion-label>
            <h2>{{ item.Heading }}</h2>
          </ion-label>
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
        { Heading: "Login", Routing: `/login` },
        { Heading: "Private Hospitals", Routing: "" },
        { Heading: "Ayurvedic Hospitals", Routing: "" },
        { Heading: "Vedio Consultation", Routing: "" },
        { Heading: "Medic lab", Routing: "" },
        { Heading: "Logout", Routing: "" },
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
    };
  },
};
</script>
<style scoped>
@import "../theme/custom.css";
</style>
