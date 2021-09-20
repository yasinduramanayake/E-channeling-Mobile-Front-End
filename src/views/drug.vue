<template>
  <ion-page>
    <ion-content class="background-image" no-scroll padding>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <div>Acetaminophen 10mg<br/>
            Adderall 5mg<br/>
            Amitriptyline 100mg<br/>
            Amlodipine 80 mg<br/>
            Amoxicillin 30mg <br/>
            <h1> Total = 2500.00</h1>
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </ion-content>
    <ion-row>
      <ion-col>
        <ion-button
          size="large"
          color="danger"
          @click="() => router.push()"
          expand="full"
          >Proceed
        </ion-button>
      </ion-col>
    </ion-row>
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
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
<style scoped>
@import "../theme/custom.css";
</style>
