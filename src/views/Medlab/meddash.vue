<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title style="padding-left:70px">Medical Lab</ion-title>
      </ion-toolbar>
    </ion-header>
    <br />
    <ion-content class="background-image" no-scroll padding>
      <Logo />
      <ion-card>
        <ion-card-header>
          <Br /><ion-title>Prescription Details</ion-title>
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <center>
                  <div class="img">
                    <img src="assets/presc.jpg" />
                  </div>
                </center>
                <ion-button
                  style="padding-left:60px; padding-right:60px;"
                  color="tertiary"
                  @click="NextRoute1('/prescription')"
                  expand="block"
                  >Add Details
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <Br /><ion-title>Lab Test Details</ion-title>
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <center>
                  <div class="img">
                    <img src="assets/labtest.jpg" />
                  </div>
                </center>
                <ion-button
                  style="padding-left:60px; padding-right:60px;"
                  color="tertiary"
                  @click="NextRoute2('/labtest')"
                  expand="block"
                  >Add Labtest Details
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <Br /><ion-title>Drug Delivery Details</ion-title>
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <center>
                  <div class="img">
                    <img src="assets/dtot.jpg" />
                  </div>
                </center>
                <ion-button
                  style="padding-left:60px; padding-right:60px;"
                  color="tertiary"
                  @click="NextRoute3('/drug')"
                  expand="block"
                  >Drugs to Deliver
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <Br /><ion-title>Payment Details</ion-title>
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <center>
                  <div class="img">
                    <img src="assets/pay.jpg" />
                  </div>
                </center>
                <ion-button
                  style="padding-left:60px; padding-right:60px;"
                  color="tertiary"
                  @click="NextRoute4('/paymeth')"
                  expand="block"
                  >Payment Details
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
      <ion-toolbar>
        <Footer />
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>
<script>
import { homeOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonGrid,
  IonCol,
  IonRow,
  IonTitle,
} from "@ionic/vue";
import Logo from "@/views/components/logo_sm.vue";
import Footer from "@/views/components/footer.vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonGrid,
    IonCol,
    IonRow,
    IonTitle,
    Logo,
    Footer,
  },
  methods: {
    NextRoute1() {
      this.$router.push("/prescription");
    },
    NextRoute2() {
      this.$router.push("/labtest");
    },
    NextRoute3() {
      this.$router.push("/drug");
    },
    NextRoute4() {
      this.$router.push("/paymeth");
    },
  },

  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    const router = useRouter();
    return {
      beforeTabChange,
      afterTabChange,
      homeOutline,
    };
  },
};
</script>
<style scoped>

.img {
  height: 150px;
  width: 150px;
}
</style>
