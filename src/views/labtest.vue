<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Lab Test</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row> </ion-row>
        <ion-row>
          <br />
          <img class="img" src="assets/lab.jpg" />
        </ion-row>
      </ion-grid>

      <div>
        <ion-item>
          <ion-label position="stacked">Patient Name</ion-label>
          <ion-input placeholder="Patient Name"></ion-input>
        </ion-item>
        <br />

        <ion-item>
          <ion-label position="stacked">Your Area</ion-label>
          <ion-input placeholder="Your Area"></ion-input>
        </ion-item>
        <br />

        <ion-item>
          <ion-label position="stacked">Laboratory Name</ion-label>
          <ion-input placeholder="Laboratory Name"></ion-input>
        </ion-item>
        <br />

        <ion-item>
          <ion-label position="stacked">Mobile</ion-label>
          <ion-input placeholder="mobile"></ion-input>
        </ion-item>
        <br />
        <ion-item>
          <ion-label position="stacked">Lab Test Details</ion-label>
          <ion-input placeholder="details"></ion-input>
        </ion-item>
        <br />

        <ion-button
          class="btn"
          color="primary"
          @click="NextRoute('/meddash')"
          expand="block"
          >Add
        </ion-button>
      </div>
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
  IonBackButton,
  IonInput,
  IonLabel,
  IonItem,
  IonGrid,
  IonRow,
  IonButton,
} from "@ionic/vue";

import { useRouter } from "vue-router";
export default {
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonBackButton,
    IonInput,
    IonLabel,
    IonItem,
    IonGrid,
    IonRow,
  },
  methods: {
    NextRoute() {
      this.$router.push("/meddash");
    },
  },
};
</script>

<style scoped>
@import "../theme/custom.css";

.btn {
  padding-left: 5%;
  padding-right: 5%;
}
.img {
  padding-right: 8%;
  padding-left: 8%;
  height: 180px;
  width: 400px;
}
</style>
