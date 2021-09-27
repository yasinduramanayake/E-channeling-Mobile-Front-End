<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
       <ion-title style="padding-left:70px">E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content >
         
      <ion-item>
        <h1 style="padding-left:130px">Login</h1>
      </ion-item>


     <Logo/>

      
        <ion-item>
          <ion-label position="stacked">E-mail</ion-label>
          <ion-input placeholder="E-mail"></ion-input>
        </ion-item>
        <br />
        <br />

        <ion-item>
          <ion-label position="stacked">Password</ion-label>
          <ion-input placeholder="Password"></ion-input>
        </ion-item>
        <br />
        <ion-button
          size="large"
          color="primary"
          @click="NextRoute1('/menu')"
          expand="block"
          >Login
        </ion-button>
<br/>

        <ion-button
          size="Medium"
          color="secondary"
          @click="NextRoute2()"
          expand="full"
          >Forgotten Password
        </ion-button>
      
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
} from "@ionic/vue";
import login from "@/router/modules/login";
import { useRouter } from "vue-router";
import Logo from '@/views/components/logo.vue';
export default {
  name: login,
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonBackButton,
    IonInput,
    IonLabel,
    IonItem,
    Logo,
  },
  methods: {
    NextRoute1() {
      this.$router.push("/menu");
    },
    NextRoute2() {
      this.$router.push("");
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

