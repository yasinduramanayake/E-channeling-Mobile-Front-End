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
        <h1 style="padding-left:60px">Visa Card Details</h1>
      </ion-item>
      <center>
        <img src="assets/visa4.png" />
      </center>
      <div style="padding-top:50px">
        <ion-item>
          <ion-input placeholder="Card Number"></ion-input>
        </ion-item>
        <br />

        <ion-item> 
          <ion-input placeholder="Card Holder"></ion-input>
        </ion-item>
        <br />
      
        <ion-item>
          <ion-input placeholder="Expiry Date"></ion-input>
        </ion-item>
        <br />

        <ion-item>
          <ion-input placeholder="CVV"></ion-input>
        </ion-item>
        <br />
<center>
        <ion-button
          size="large"
          color="danger"
          @click="NextRoute('/savecard')"
          expand="medium"
          >Add
        </ion-button>
        
</center>
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
    IonItem,
  },
  methods: {
    NextRoute() {
      this.$router.push("/savecard");
    },
  },
};
</script>

<style scoped>
@import "../theme/custom.css";
</style>
