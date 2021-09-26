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
        <h1 style="padding-left:80px">Vedio Consultation</h1>
      </ion-item>

      <br />
      <br />
      <br />
      <br />

      <div style="padding-top:50px">
        <ion-item>
          <ion-label position="stacked">Hospital</ion-label>
          <ion-select placeholder="Select One">
            <ion-select-option value="f">Hemas</ion-select-option>
            <ion-select-option value="m">Nawaloka</ion-select-option>
          </ion-select>
        </ion-item>
        <br />
        <br />

        <ion-item>
          <ion-label position="stacked">Doctor</ion-label>
          <ion-select placeholder="Select One">
            <ion-select-option value="f">Dr.Harichchandra</ion-select-option>
            <ion-select-option value="m"
              >Dr.Ranasingha Premadhasa</ion-select-option
            >
          </ion-select>
        </ion-item>
        <br />
        <ion-button
          size="large"
          color="danger"
          @click="() => router.push('/menu')"
          expand="full"
          >Proceed
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
  IonLabel,
  IonItem,
  IonButton,
  IonSelect,
  IonSelectOption,
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
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
<style scoped>
@import "../../theme/custom.css";
</style>
