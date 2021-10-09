<template>
  <ion-page>
<<<<<<< HEAD
  <span class="border border-danger"></span>
=======
>>>>>>> main
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
<<<<<<< HEAD
    
=======
    </ion-content>

>>>>>>> main
    <ion-row>
      <ion-col>
        <ion-button
          color="tertiary"
          @click="() => router.push('/login')"
          expand="block"
          >Login
        </ion-button>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-button
          color="tertiary"
          @click="() => router.push('/register')"
          expand="block"
          >Register
        </ion-button>
      </ion-col>
    </ion-row>
<<<<<<< HEAD
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
=======
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton, IonCol } from "@ionic/vue";
>>>>>>> main
import { useRouter } from "vue-router";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
<<<<<<< HEAD
=======
    IonCol,
>>>>>>> main
  },

  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
<<<<<<< HEAD
=======
<style scoped>
@import "../theme/custom.css";
</style>



>>>>>>> main
