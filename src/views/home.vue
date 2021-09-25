<template>
  <ion-page>
  <span class="border border-danger"></span>
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
          color="danger"
          @click="() => router.push('/login')"
          expand="full"
          >Login
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button 
        size="large" 
        color="danger" 
        expand="full"
        @click="() => router.push('/register')"
          >Register
        </ion-button>
      </ion-col>
    </ion-row>
    
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