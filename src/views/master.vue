<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Master Card Details</ion-title>
      </ion-toolbar>
    </ion-header>  
    <ion-content class="background-image" no-scroll padding>
<Br />
      <center>
        <img src="assets/master4.png" />
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
        <ion-button class='btn'
          color="primary"
          @click="NextRoute('/savecard')"
          expand="block"
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

.btn{

  padding-left: 5%;
  padding-right: 5%;
}
</style>
