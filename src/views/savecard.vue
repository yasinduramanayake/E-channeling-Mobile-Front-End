<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/paymeth"></ion-back-button>
        </ion-buttons>
        <ion-title>E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-item>
      <h2 style="padding-left:60px">Master Card Details</h2>
    </ion-item>
    <ion-content class="background-image" no-scroll padding>
      <center>
        <div>
          <img src="assets/visa4.png" />
        </div>
      </center>
      <ion-row>
        <ion-col>
          <ion-button
            style="padding-left:60px; padding-right:60px;"
            color="tertiary"
            @click="NextRoute('/paymeth')"
            expand="block"
            >Delete
          </ion-button>
          <br /><br /><br />
        </ion-col>
      </ion-row>
      <center>
        <div>
          <img src="assets/master4.png" />
        </div>
      </center>
      <br />
      <ion-row>
        <ion-col>
          <ion-button
            style="padding-left:60px; padding-right:60px;"
            color="tertiary"
            @click="NextRoute('/paymeth')"
            expand="block"
            >Delete
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonTitle,
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonBackButton,
  },

  methods: {
    NextRoute() {
      this.$router.push("/paymeth");
    },
  },
};
</script>
<style scoped>
@import "../theme/custom.css";
</style>
