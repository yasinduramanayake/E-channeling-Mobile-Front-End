<template>
  <ion-page>
  <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/meddash"></ion-back-button>
        </ion-buttons>
        <ion-title>E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>  
    <ion-content class="background-image" no-scroll padding>
    <ion-item>
        <h1 style="padding-left:60px">Payment Methods</h1>
      </ion-item>
      <br/>
      <br/>
      <center>
        <img src="assets/visa4.png" />
      </center>
      <center>
        <ion-button
          size="small"
          color="danger"
          @click="NextRoute1('/visa')"
          expand="full"
          >visa
        </ion-button>
      </center>
<br/>
      <center>
        <img src="assets/master4.png" />
      </center>
      <br/> <br/>
      <center>
        <ion-button
          size="small"
          color="danger"
          @click="NextRoute2('/master')"
          expand="full"
          >Master
        </ion-button>
      </center>

    <br/> <br/>
      <center>
        <ion-button
          size="small"
          color="danger"
          @click="NextRoute3('/savecard')"
          expand="full"
          >Saved cards Details
        </ion-button>
      </center>
    
    </ion-content>

    <ion-tabs
        @ionTabsWillChange="beforeTabChange"
        @ionTabsDidChange="afterTabChange">
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="speakers" href="/menu">
            <ion-icon :icon="homeOutline"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
      
  </ion-page>
</template>
<script>
import { homeOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { 
  IonPage, 
  IonContent, 
  IonButton,
  IonTabBar,
  IonTabButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonItem,
  
}from "@ionic/vue";
  
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonTabBar,
    IonTabButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonItem,

  },
  methods: {
    NextRoute1() {
      this.$router.push("/visa");
    },
    NextRoute2() {
      this.$router.push("/master");
    },
    NextRoute3() {
      this.$router.push("/savecard");
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
