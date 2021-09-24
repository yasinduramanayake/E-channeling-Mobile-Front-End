<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background-image" no-scroll padding>
      <ion-item>
        <h1 style="padding-left:60px">Prescription Details</h1>
      </ion-item>

      <br />

      <div style="padding-top:50px">
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
          <ion-label position="stacked">Pharmacy Name</ion-label>
          <ion-input placeholder="Pharmacy Name"></ion-input>
        </ion-item>
        <br />

        <ion-item>
          <ion-label position="stacked">Mobile</ion-label>
          <ion-input placeholder="mobile"></ion-input>
        </ion-item>
        <br />
        <ion-item>
          <ion-label position="stacked">Prescription Details</ion-label>
          <ion-input placeholder="details"></ion-input>
        </ion-item>
        <br />

        <ion-button
          size="large"
          color="danger"
          @click="NextRoute('/meddash')"
          expand="full"
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
  IonButton,
} from "@ionic/vue";
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
</style>
