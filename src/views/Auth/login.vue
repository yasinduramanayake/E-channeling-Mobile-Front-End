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
        <h1 style="padding-left:150px">Login</h1>
      </ion-item>

      <br />
      <br />
      <br />
      <br />

      <div style="padding-top:50px">
        <ion-item>
          <ion-label position="stacked">E-mail</ion-label>
          <ion-input placeholder="E-mail"></ion-input>
        </ion-item>
        <br />
        <br />

        <ion-item>
          <ion-label position="stacked">Password</ion-label>
          <ion-input placeholder="Password"></ion-input>
        </ion-item>
        <br />
        <ion-button size="large" color="danger" expand="full"
          >Login
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
import login from "@/router/modules/login";
export default {
  name: login,
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
};
</script>
<style scoped>
@import "../../theme/custom.css";
</style>
