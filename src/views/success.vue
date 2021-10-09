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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <ion-row>
        <ion-col>
          <ion-button
            color="primary"
            @click="NextRoute('/meddash')"
            expand="block"
            >Go Back To Home
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>
<script>
import { 
  IonPage, 
  IonContent, 
  IonButton, 
  IonCol, 
  IonRow,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonCol,
    IonRow,
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
