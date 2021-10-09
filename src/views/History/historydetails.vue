<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/history"></ion-back-button>
        </ion-buttons>
        <ion-title>Details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-row>
        <ion-col>
          <Logo />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-text class="txt" color="medium">Details</ion-text>
          <ion-card>
            <ion-row>
              <ion-col size="4">
                <ion-avatar style="height:70px; width:70px"
                  ><img src="assets/d2.jpg"
                /></ion-avatar>
              </ion-col>
              <ion-col size="8">
                <h4>{{ position }}}</h4>
                <b> {{ name }}</b>
              </ion-col>
            </ion-row>
          </ion-card>
          <br /><br /><br />

          <ion-card>
            <div style="padding-left:2%">
              <p>
                Channeled Purpose : <b>{{ purpose }}</b>
              </p>
              <p>
                Channeled Hospital : <b>{{ hospital }}</b>
              </p>
              <p>
                Channeled Date : <b>{{ date }}</b>
              </p>
            </div>
          </ion-card>
        </ion-col>
      </ion-row>

      <Footer></Footer>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonToolbar,
  IonAvatar,
  IonCard,
  IonHeader,
  IonTitle,
  IonText,
  IonBackButton,
} from "@ionic/vue";

import Logo from "@/views/components/logo_sm.vue";
import Footer from "@/views/components/footer.vue";
export default defineComponent({
  components: {
    IonPage,
    IonCard,
    IonContent,
    IonAvatar,
    IonRow,
    IonCol,
    IonToolbar,
    IonHeader,
    IonTitle,

    Logo,

    IonText,
    Footer,
    IonBackButton,
  },
  data() {
    return {
      name: this.$route.params.name,
      date: this.$route.params.date,
      hospital: this.$route.params.hospital,
      purpose: this.$route.params.purpose,
      position: this.$route.params.position,
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>

<style>
.btn {
  padding-left: 5%;
  width: 65px;
  margin-top: 60%;
}

.txt {
  margin-left: 8%;
  font-size: 1.2rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
}
</style>
