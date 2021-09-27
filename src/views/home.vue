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
      <br />
      <br />
      <center>
        <img src="assets/logo.png" />
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </ion-content>

    <ion-row>
      <ion-col>
        <ion-button
          size="large"
          color="primary"
          @click="() => router.push('/login')"
          expand="block"
          >Login
        </ion-button>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-button
          size="large"
          color="primary"
          @click="() => router.push('/register')"
          expand="block"
          >Register
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton, IonCol } from "@ionic/vue";
import { useRouter } from "vue-router";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonCol,
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
</style>
