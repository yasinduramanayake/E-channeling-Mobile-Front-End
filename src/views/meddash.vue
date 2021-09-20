<template>
  <ion-page>
    <ion-content class="background-image" no-scroll padding>
    <ion-item>
        <h1 style="padding-left:60px">Medical Lab Dashboard</h1>
      </ion-item>
      <br/>
      <center>
        <img src="assets/presc.jpg" />
      </center>

      <center>
        <ion-button
          size="small"
          color="danger"
          @click="NextRoute1('/prescription')"
          expand="medium"
          >Add Prescription Details
        </ion-button>
      </center>

      <center>
        <img src="assets/labtest.jpg" />
      </center>
      <center>
        <ion-button
          size="small"
          color="danger"
          @click="NextRoute2('/labtest')"
          expand="medium"
          >Add Labtest Details
        </ion-button>
      </center>

    <center>
        <img src="assets/dtot.jpg" />
      </center>
      <center>
        <ion-button
          size="small"
          color="danger"
          @click="NextRoute3('/drug')"
          expand="medium"
          >Drugs to Deliver
        </ion-button>
      </center>
    
    <center>
        <img src="assets/pay.jpg" />
      </center>
      <center>
        <ion-button 
          size="small"
          color="danger"
          @click="NextRoute4('/paymeth')"
          expand="medium"
          >Payment Methods
        </ion-button>
      </center>

    </ion-content>
      
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { useRouter } from "vue-router";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
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
};
</script>
<style scoped>
@import "../theme/custom.css";
</style>
