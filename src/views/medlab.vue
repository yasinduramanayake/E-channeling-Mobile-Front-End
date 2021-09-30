<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Medical Lab</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background-image">
      <Logo />
      <center>
        <div>
          <img src="assets/medlab.jpg" />
        </div>
      </center>

      <br />
      <div class="txt1">
        <ion-text>MEDICAL LABORATORY</ion-text>
      </div>

      <div class="txt2">
        <ion-text>"Your Health Companian"</ion-text>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ion-row>
        <ion-col>
          <ion-button
            class="btn"
            color="primary"
            @click="() => router.push('/meddash')"
            expand="block"
            >CONTINUE
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-content>
    <Footer />
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonCol,
  IonRow,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
} from "@ionic/vue";

import Logo from "@/views/components/logo_sm.vue";
import Footer from "@/views/components/footer.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    IonPage,
    IonCol,
    IonRow,
    IonContent,
    IonButton,
    Logo,
    Footer,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
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
@import "../theme/custom.css";

.txt1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
}
.txt2 {
  margin-top: 1%;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  font-size: 1.2rem;
  font-style: italic;
}
.btn {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  padding-left: 2%;
  padding-right: 2%;
}
</style>
