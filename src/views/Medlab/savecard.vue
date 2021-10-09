<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/paymeth"></ion-back-button>
        </ion-buttons>
        <ion-title style="padding-left:70px">E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-item>
      <h2 style="padding-left:80px">Saved Card Details</h2>
    </ion-item>
    <ion-content class="background-image" no-scroll padding>
     <ion-card style="height:220px"> 
       <div>
          <img style="width:100px; height:80px;" src="assets/visa4.png" />
      <p style="font-size:15px">1234 5678 9112 3469<br/>08/22</p>
       </div>
      <ion-row>
        <ion-col>
          <ion-button
            style="padding-left:60px; padding-right:60px;"
            color="tertiary"
            @click="NextRoute('/paymeth')"
            expand="block"
            >Delete
          </ion-button>
          <br /><br /><br />
        </ion-col>
      </ion-row>
     </ion-card>
     <ion-card style="height:220px">
     <br/>
        <div>
          <img style="width:90px; height:60px" src="assets/master4.png" />
          <br/><br/>
          <p>9854 2659 1452 3625<br/>10/25</p>
        </div>
      <ion-row>
        <ion-col>
          <ion-button
            style="padding-left:60px; padding-right:60px;"
            color="tertiary"
            @click="NextRoute('/paymeth')"
            expand="block"
            >Delete
          </ion-button>
        </ion-col>
      </ion-row>
     </ion-card>
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
  IonCard,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
import Footer from "@/views/components/footer.vue";
export default {
  components: {
    IonPage,
    IonTitle,
    IonContent,
    IonCard,
    IonButton,
    IonHeader,
    IonToolbar,
    IonBackButton,
    Footer,
  },

  methods: {
    NextRoute() {
      this.$router.push("/paymeth");
    },
  },
};
</script>
<style scoped>

</style>
