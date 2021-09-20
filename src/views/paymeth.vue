<template>
  <ion-page>
    <ion-content class="background-image" no-scroll padding>
    <ion-item>
        <h1 style="padding-left:60px">Payment Methods</h1>
    </ion-item>
    <br />
      <center>
        <img src="assets/master3.png" />
      </center>
      <center> 
        <ion-button
          size="medium"
          color="danger"
          @click="NextRoute1()"
          expand="half"
          >Visa
        </ion-button>
      </center>

      <center>
        <img src="assets/master3.png" />
      </center>
      <center>
        <ion-button
          size="medium"
          color="danger"
          @click="NextRoute2('')"
          expand="half"
          >Master
        </ion-button>
      </center>
<br/> <br/> <br/> <br/> <br/>
      <center>
        <ion-button
          size="medium"
          color="danger"
          @click="NextRoute3('/drug')"
          expand="full"
          >Saved Card Details
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
      this.$router.push("");
    },
    NextRoute2() {
      this.$router.push("");
    },

    NextRoute3() {
      this.$router.push("");
    },
    
  },
};
</script>
<style scoped>
@import "../theme/custom.css";
</style>
