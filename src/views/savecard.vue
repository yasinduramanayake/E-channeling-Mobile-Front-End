<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/paymeth"></ion-back-button>
        </ion-buttons>
        <ion-title style="padding-left:70px">E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-item>
      <h1 style="padding-left:60px">Master Card Details</h1>
    </ion-item>
    <ion-content class="background-image" no-scroll padding>
      <center>
        <div>
          <img src="assets/visa4.png" />
        </div>
      </center>
      <h1>Medical Lab</h1>
      Your Health Companian
      <ion-row>
        <ion-col>
          <ion-button
            size="large"
            color="danger"
            @click="NextRoute('/paymeth')"
            expand="full"
            >Delete
          </ion-button>
        </ion-col>
      </ion-row>
      <center>
        <div>
          <img src="assets/master4.png" />
        </div>
      </center>
      <h1>Medical Lab</h1>
      Your Health Companian
      <br />
      <ion-row>
        <ion-col>
          <ion-button
            size="large"
            color="danger"
            @click="NextRoute('/paymeth')"
            expand="full"
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
