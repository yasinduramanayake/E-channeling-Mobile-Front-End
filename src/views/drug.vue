<template>
  <ion-page>
    <ion-content class="background-image" no-scroll padding>
      <ion-header :translucent="true">
        <ion-toolbar color="tertiary">
          <ion-buttons slot="start">
            <ion-back-button text="" default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Drug delivery</ion-title>
        </ion-toolbar>
      </ion-header>
      <br /><br />
      <Logo />

      <br />
      <br />
      <br />
      <div class="lbl1">
      <ion-label>Drug List</ion-label>
      </div>
      <br /><br />
      <ion-list>
        <ion-item> Acetaminophen 10mg</ion-item>
        <ion-item>Adderall 5mg</ion-item>
        <ion-item>Amitriptyline 100mg</ion-item>
        <ion-item>Amoxicillin 30mg</ion-item>
        <ion-item>Sitagliptin 100mg</ion-item>
        <ion-item>Atorvastatin 10mg</ion-item>
        <ion-item
          ><ion-label class="label"
            >Total Amount : Rs 2500.00</ion-label
          ></ion-item
        >
      </ion-list>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <ion-row>
        <ion-col>
          <center>
            <ion-button
              style="padding-left:60px; padding-right:60px;"
              color="tertiary"
              @click="NextRoute('/success')"
              expand="block"
            >
              Proceed </ion-button
            ><br /><br /><br />
          </center>
        </ion-col>
      </ion-row>
      <ion-toolbar>
        <Footer />
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import Logo from "@/views/components/logo_sm.vue";
import Footer from "@/views/components/footer.vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    Logo,
    Footer,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
  },

  methods: {
    NextRoute() {
      this.$router.push("/success");
    },
  },
};
</script>
<style scoped>
@import "../theme/custom.css";

.label {
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.lbl1 {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
