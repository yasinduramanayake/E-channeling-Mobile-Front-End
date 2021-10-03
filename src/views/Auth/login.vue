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
    <ion-content>
      <ion-row>
        <Logo />
      </ion-row>

      <br />

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
      <ion-text class="txt_forgot_password" color="dark"
        >Forgotten Password?</ion-text
      >
      <br />
      <br />
      <br />

      <ion-button
        class="btn"
        color="primary"
        @click="NextRoute1('/menu')"
        expand="block"
        >SIGN IN
      </ion-button>

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
      <br />
      <br />

      <ion-text class="signup" color="dark"
        >Don't Have an Account ? SIGN UP</ion-text
      >
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
  IonText,
  IonRow,
} from "@ionic/vue";
import login from "@/router/modules/login";
import { useRouter } from "vue-router";
import Logo from "@/views/components/logo_sm.vue";
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
    IonText,
    Logo,
    IonRow,
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

<style scoped>
.btn {
  padding-left: 5%;
  padding-right: 5%;
  font-weight: bold;
}
.txt_forgot_password {
  margin-top: 2%;
  padding-left: 55%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: medium;
}

.signup {
  padding-left: 14%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: medium;
  font-weight: bold;
}
</style>
