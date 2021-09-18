<template>
  <ion-page>
    <ion-content class="background-image" no-scroll padding>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <img src="assets/download.png" />
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style="padding-left:80px;padding-right:80px">
        <ion-button size="large" expand="full">Login </ion-button>
        <br />
        <ion-button size="large" expand="full">Register </ion-button>
      </div>
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
};
</script>
<style scoped>
@import "../theme/custom.css";
</style>
