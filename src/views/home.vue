<template>
  <ion-page>
    <ion-content class="background-image" no-scroll padding> </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
  },
};
</script>
<style scoped>
ion-content {
  --background: #03fede;
}
</style>
