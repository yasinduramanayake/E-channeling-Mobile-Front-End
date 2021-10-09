<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title style="padding-left:70px">Mdeical Lab</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background-image">
      <Logo />
      <div>
        <img src="assets/medlab.jpg" />
      </div>

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
      <ion-row>
        <ion-col>
          <ion-button expand="block" color="tertiary" @click="NextRoute1()">CONTINUE</ion-button>
        </ion-col>
      </ion-row>

     
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
  IonButtons,
  IonButton,
  IonCol,
  IonText,
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
    IonContent,
    IonButtons,
    IonButton,
    IonCol,
    IonText,
    IonRow,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    Logo,
    Footer,
  },

  methods: {
    NextRoute1() {
      this.$router.push("/meddash");
    },
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