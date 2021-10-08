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
    <ion-content class="background-image" no-scroll padding>
      <Br />
      <Logo />

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
      <br />

      <ion-item>
        <ion-label position="stacked">Re-enter Password</ion-label>
        <ion-input placeholder="Password"></ion-input>
      </ion-item>
      <br />
      <br />
      <br />

      <ion-button
        color="primary"
        @click="() => router.push('/menu')"
        expand="block"
        >Register
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
import { useRouter } from "vue-router";
import Logo from "@/views/components/logo.vue";
export default {
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

  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
