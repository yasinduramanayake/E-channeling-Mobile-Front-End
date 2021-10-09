<template>
  <ion-page>
   <br/>
      <Logo />
    <ion-content class="background-image" no-scroll padding>
      <br />
      <br />
      <br />
      <br />
      <center>
        <div>
          <img src="assets/success.png" />
        </div>
      </center>
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
     <ion-toolbar>
      <Footer />
    </ion-toolbar>
  </ion-page>
</template>
<script>
import { 
  IonPage, 
  IonContent, 
  IonButton, 
  IonCol, 
  IonRow,
  IonToolbar,
} from "@ionic/vue";
import Logo from "@/views/components/logo_sm.vue";
import Footer from "@/views/components/footer.vue";
export default {
  components: {
    IonPage,
    IonCol,
    IonRow,
    IonContent,
    IonButton,
    IonToolbar,
    Logo,
    Footer,
  },

  methods: {
    NextRoute() {
      this.$router.push("/meddash");
    },
  },
};
</script>
<style scoped>
</style>
