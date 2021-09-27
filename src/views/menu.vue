<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      <ion-title style="padding-left:70px">E-channeling</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background-image" no-scroll padding>
      <ion-item>
        <h1 style="padding-left:100px">Main Menu</h1>
      </ion-item>

      <div>
        <ion-item
          button
          v-for="item in menuarray"
          :key="item.Heading"
          @click="() => router.push(item.Routing)"
          detail=""
        >
          <ion-label>
            <h3>{{ item.Heading }}</h3>
            <p>{{ item.Description }}</p>
          </ion-label>
          <ion-icon
            :icon="item.iconname"
            style="color: #808080;"
            slot="start"
          ></ion-icon>
        </ion-item>
      </div>
    
    <Footer/>
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
  IonIcon,
  IonMenuButton,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import Footer from "@/views/components/footer.vue"
import {
  medkitOutline,
  medkitSharp,
  tvOutline,
  tvSharp,
  bagAddOutline,
  bagAddSharp,
  logInOutline,
  logInSharp,
  logOutOutline,
  logOutSharp,
} from "ionicons/icons";
import { useRouter } from "vue-router";
export default {
  name: "Folder",
  components: {
    Footer,
    IonPage,
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonItem,
    IonLabel,
    IonMenuButton,
  },
  data() {
    return {
      menuarray: [
        {
          Heading: "Login",
          Description: "User can login to App",
          Routing: `/login`,
          iconname: logInSharp,
        },
        {
          Heading: "Private Hospitals",
          Description: "User can channel  Private Hospitals",
          Routing: "/channel1",
          iconname: medkitOutline,
          iconname: medkitSharp,
        },
        {
          Heading: "Ayurvedic Hospitals",
          Description: "User can channel  Ayurvedic Hospitals",
          Routing: "/channel2",
          iconname: medkitOutline,
          iconname: medkitSharp,
        },
        {
          Heading: "Video Consultation",
          Description: "User can channel a doctor Via online",
          Routing: `/vedio`,
          iconname: tvSharp,
        },
        {
          Heading: "Medical lab",
          Description: "User can Delivery drugs etc..",
          Routing: `/medlab`,
          iconname: bagAddSharp,
        },
        {
          Heading: "Logout",
          Description: "User can logout from the application",
          Routing: "",
          iconname: logOutSharp,
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
      medkitOutline,
      medkitSharp,
      tvOutline,
      tvSharp,
      bagAddOutline,
      bagAddSharp,
      logInOutline,
      logInSharp,
      logOutOutline,
      logOutSharp,
    };
  },
};
</script>