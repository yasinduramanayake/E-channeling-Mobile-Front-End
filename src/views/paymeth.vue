<template>
  <ion-page>
  <ion-content class="background-image" no-scroll padding>
  <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-item>
        <h1 style="padding-left:60px">Payment Methods</h1>
    </ion-item>
      <center>
        <img src="assets/visa4.png" />
      </center>
      <center> 
        <ion-button
          size="medium"
          color="danger"
          @click="NextRoute1()"
          expand="half"
          >Visa
        </ion-button>
      </center>
<br/>
      <center>
        <img src="assets/master4.png" />
      </center>
      <br/>
      <center>
        <ion-button
          size="medium"
          color="danger"
          @click="NextRoute2('')"
          expand="half"
          >Master
        </ion-button>
      </center>
<br/> <br/> 
      <center>
        <ion-button
          size="medium"
          color="danger"
          @click="NextRoute3()"
          expand="medium"
          >Saved Card Details
        </ion-button>
      </center>
    
    <ion-tabs
        @ionTabsWillChange="beforeTabChange"
        @ionTabsDidChange="afterTabChange">
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="speakers" href="/login">
            <ion-icon :icon="homeOutline"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>

    </ion-content>
      
  </ion-page>
</template>
<script>
import { homeOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonTitle,
  IonTabs,

} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonTabs,
  },
  methods: {
    NextRoute1() {
      this.$router.push("");
    },
    NextRoute2() {
      this.$router.push("");
    },

    NextRoute3() {
      this.$router.push("");
    },
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
      afterTabChange,
      homeOutline,
      
    };
  },

};
</script>
<style scoped>
@import "../theme/custom.css";
</style>
