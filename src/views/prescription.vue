<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title style="padding-left:70px">E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background-image">
      <Logo />

      <div style="padding-top:20px">
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
          style="padding-left:60px; padding-right:60px;"
          color="primary"
          @click="NextRoute('/meddash')"
          expand="block"
          >Add
        </ion-button>
      </div>
    </ion-content>
    <ion-toolbar>
      <Footer />
    </ion-toolbar>
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
import Footer from "@/views/components/footer.vue";
import Logo from "@/views/components/logo_sm.vue";
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
    Footer,
    Logo,
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
