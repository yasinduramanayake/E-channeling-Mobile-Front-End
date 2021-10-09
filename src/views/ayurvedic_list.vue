<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title> Ayurvedic Channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <Logo />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text class="txt" color="medium">Dermatologist</ion-text>

            <br /><br />
            <ion-list>
              <ion-item
                button
                v-for="data in lists"
                @click="
                  () =>
                    router.push(
                      '/profile'
                    )
                "
                :key="data.name"
              >
                <ion-label>
                  <ion-row>
                    <ion-col size="4">
                      <ion-thumbnail item-start style="height:50px; width:70px">
                        <img src="assets/d3.jpg" />
                      </ion-thumbnail>
                    </ion-col>
                    <ion-col size="8" size-lg>
                      <p>{{ data.name }}</p>
                      <ion-text color="medium">{{ data.position }}</ion-text>
                    </ion-col>
                  </ion-row>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-toolbar>
        <Footer />
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonList,
  IonItem,
  IonThumbnail,
  IonText,
  IonBackButton,
} from "@ionic/vue";

import Logo from "@/views/components/logo_sm.vue";
import Footer from "@/views/components/footer.vue";
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonList,
    Logo,
    IonItem,
    IonThumbnail,
    IonText,
    Footer,
    IonBackButton,
  },
  data() {
    return {
      lists: [
        {
          name: "Dr. K.Sudaasinghe",
          position: "MBBS.(Col), M.D",
        },
        {
          name: "Dr. A.R.D.Y.Y.Ramanayake",
          position: "MBBS.(Col), M.D",
        },
        {
          name: "Dr. W.P.C.Rathnayake",
          position: "MBBS.(Col), M.D",
         
        },
        {
          name: "Dr. Arumugam Ballaji",
          position: "MBBS.(Col), P.D",
          
        },
        {
          name: "Dr. Yapa Senawirathna",
          position: "MBBS.(Col), M.D",
          
        },
        {
          name: "Dr. Apa Bandara",
          position: "MBBS.(Col), M.D",
          
        },
        {
          name: "Dr. Yasindu Ramanayake",
          position: "MBBS.(Col), M.D",
          
        },
        {
          name: "Dr. Pubudi Athmaja",
          position: "MBBS.(Col), M.D",
          
        },
        {
          name: "Dr. Madura Prasad",
          position: "MBBS.(Col), M.D",
          
        },
      ],
    };
  },
  methods: {},

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
