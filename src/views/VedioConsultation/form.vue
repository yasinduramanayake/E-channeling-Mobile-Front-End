<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title style="padding-left:70px">Video Consultation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content
      ><Br />
      <Logo />
                  <div class="img">
                    <img src="assets/video.png" />
                  </div>
                  <br />
                  <br /><br />
      
      <ion-item>
        <ion-label position="stacked">Select The Hospital</ion-label>
        <ion-select placeholder="Select One">
          <ion-select-option value="blonde"
            >Lank Hospital Colombo-05</ion-select-option
          >
          <ion-select-option value="blonde"
            >Asiri Central Hospital</ion-select-option
          >
          <ion-select-option value="blonde"
            >Asiri Surgical Hospital</ion-select-option
          >
          <ion-select-option value="blonde"
            >Asiri Health Hospital</ion-select-option
          >
          <ion-select-option value="blonde"
            >Nawaloka Hospital</ion-select-option
          >
          <ion-select-option value="blonde">Durdans Hospital</ion-select-option>
          <ion-select-option value="blonde"
            >Ninewells Hospital</ion-select-option
          >
          <ion-select-option value="blonde"
            >Hemas Hospital- Wattala</ion-select-option
          >
          <ion-select-option value="blonde"
            >Hemas Hospital- Thalawathugoda</ion-select-option
          >
        </ion-select>
      </ion-item>
      <br />
      <br />

      <ion-item>
        <ion-label position="stacked">Doctor</ion-label>
        <ion-select placeholder="Select One">
          <ion-select-option value="f">Dr.Harichchandra</ion-select-option>
          <ion-select-option value="m">Dr.A.M Ranasingha</ion-select-option>
          <ion-select-option value="f">Dr.A.S. Atigala</ion-select-option>
          <ion-select-option value="f">Dr.L.M Lasantha</ion-select-option>
          <ion-select-option value="f">Dr.K.N Gunasekara</ion-select-option>
          <ion-select-option value="f">Dr.J.M Gunawaradena</ion-select-option>
        </ion-select>
      </ion-item>
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <ion-button
        class="btn"
        color="tertiary"
        @click="() => router.push('/menu')"
        expand="block"
        >Proceed
      </ion-button>
      <br /><br /><br /><br />

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
import Logo from "@/views/components/logo_sm.vue";
import { useRouter } from "vue-router";
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
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    Footer,
    Logo,
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
.btn {
  padding-left: 5%;
  padding-right: 5%;
}
.img {
  padding-left: 15%;
  padding-right: 15%;
}
</style>
