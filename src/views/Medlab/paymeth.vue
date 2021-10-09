<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/meddash"></ion-back-button>
        </ion-buttons>
        <ion-title>Payment Methods</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background-image" no-scroll padding>
      <ion-card style="height:230px">
        <ion-card-content>
          <center>
            <img style="width:140px; height:140px;" src="assets/visa4.png" />
          </center>
          <center>
            <ion-button
              color="tertiary"
              @click="NextRoute1('/visa')"
              expand="block"
              >visa
            </ion-button>
          </center>
        </ion-card-content>
      </ion-card>

      <ion-card style="height:230px">
        <ion-card-content>
        <br/>
          <center>
            <img style="width:140px; height:100px;" src="assets/master4.png" />
          </center>
          <br />
          <center>
            <ion-button
              color="tertiary"
              @click="NextRoute2('/master')"
              expand="block"
              >Master
            </ion-button>
          </center>
        </ion-card-content>
      </ion-card>

      <ion-card>
   <ion-card-content>
          <center>
            <ion-button
              color="tertiary"
              @click="NextRoute3('/savecard')"
              expand="block"
              >Saved cards Details
            </ion-button>
          </center>
        </ion-card-content>
      </ion-card>
    </ion-content>

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
  IonCard,
  IonCardContent,
} from "@ionic/vue";

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
    IonCard,
    IonCardContent,
   
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

.btn {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
