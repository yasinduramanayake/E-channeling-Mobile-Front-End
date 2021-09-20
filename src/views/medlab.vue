<template>
  <ion-page>
    <ion-content class="background-image" no-scroll padding>
      <br />
      <br />
      <br />
      <br />
      <center>
      <div>
        <img src="assets/medlab.jpg" />
      </div>
      </center>
      <br />
      <br />
      <br />
      <h1> Medical Lab </h1>
      <br />
      Your Health Companian
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    
    <ion-row>
      <ion-col>
        <ion-button
          size="large"
          color="danger"
          @click="NextRoute('/meddash')"
          expand="full"
          >See More
        </ion-button>
      </ion-col>
    </ion-row>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
export default {
  components: {
    IonPage,

    IonContent,
    IonButton,
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
