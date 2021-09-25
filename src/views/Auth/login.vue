<template>
  <ion-page>
    <ion-content class="background-image" no-scroll padding> </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import login from "@/router/modules/login";
export default {
  name: login,
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
