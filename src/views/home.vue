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
    </ion-content>
    <div>
      <ion-button size="large" color="danger" expand="full">Login </ion-button>

      <ion-button size="large" color="danger" expand="full"
        >Register
      </ion-button>
    </div>
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
