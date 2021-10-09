<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title style="text-align:70px">E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background-image">
    <br/>
      <ion-item>
      <h2 style="padding-left:60px">Delivery Details</h2>
    </ion-item>

      <div style="padding-top:20px">
        <ion-item>
          <ion-label position="stacked">Receiver's Name</ion-label>
          <ion-input placeholder="Receiver's Name"></ion-input>
        </ion-item>
        <br />

        <ion-item>
          <ion-label position="stacked">Address</ion-label>
          <ion-input placeholder="Address"></ion-input>
        </ion-item>
        <br />

        <ion-item>
          <ion-label position="stacked">Mobile</ion-label>
          <ion-input placeholder="mobile"></ion-input>
        </ion-item>
<br/><br/>
        <ion-button
          style="padding-left:60px; padding-right:60px;"
          color="primary"
          @click="NextRoute('/select')"
          expand="block"
          >Select Card
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
  },
  methods: {
    NextRoute() {
      this.$router.push("/select");
    },
  },
};
</script>

<style scoped>

</style>
