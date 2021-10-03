<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-header :translucent="true">
              <ion-toolbar color="light">
                <ion-buttons slot="start">
                  <ion-back-button text="" default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title> E-Channeling</ion-title>
              </ion-toolbar>
            </ion-header>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <img class="logo" src="assets/echannelling.png" />
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Private Hospital</ion-card-title>
                <ion-card-subtitle>Doctor Channeling</ion-card-subtitle>
                <Br />
              </ion-card-header>

              <ion-card-content>
                <ion-text color="dark">
                  <h2>Doctor:</h2>
                </ion-text>
                <ion-label color="primary">Dr. Ananda Wijewickrama</ion-label
                ><br />
                <Br />
                <ion-list>
                  <ion-text color="dark">
                    <h2>Specialization:</h2>
                    <ion-label color="primary">General Physician</ion-label
                    ><br />
                  </ion-text>
                </ion-list>
                <Br />
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-card>
              <h2>FEEDBACKS</h2>
              <Br />
              <ion-badge color="primary">4.8 / 5</ion-badge>

              <ion-card-content>
                <ion-text color="dark">
                  <h2>A.H. Perera</h2>
                </ion-text>
                <h3>Very Friendly Consultant</h3>
                <br />
                <ion-text color="dark">
                  <h2>N.M. Peiris</h2>
                </ion-text>
                <h3>Recieved a great Consultantation</h3>
                <br />
                <ion-text color="dark">
                  <h2>K.L Silva</h2>
                </ion-text>
                <h3>Perfect Service</h3>
                <br />
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-card>
              <h2>Channel Your Doctor</h2>
              <Br />

              <ion-card-content>
                <ion-text color="dark">
                  <h2>Date</h2>
                </ion-text>

                <br />
                <Br />
                <ion-list>
                  <ion-text color="dark">
                    <h2>Session</h2>
                  </ion-text>
                  <ion-item>
                    <ion-select
                      value="brown"
                      placeholder="Select The Hospital"
                      ok-text="OK"
                      cancel-text="Cancel"
                    >
                      <ion-select-option value="blonde"
                        >Lank Hospital Colombo-05</ion-select-option
                      >
                      <ion-select-option value="blonde"
                        >Asiri Central Hospital</ion-select-option
                      >
                      <ion-select-option value="blonde"
                        >Asiri Surgical Hospital</ion-select-option
                      >
                      <ion-select-option value="blonde"
                        >Asiri Health Hospital</ion-select-option
                      >
                      <ion-select-option value="blonde"
                        >Nawaloka Hospital</ion-select-option
                      >
                      <ion-select-option value="blonde"
                        >Durdans Hospital</ion-select-option
                      >
                      <ion-select-option value="blonde"
                        >Ninewells Hospital</ion-select-option
                      >
                      <ion-select-option value="blonde"
                        >Hemas Hospital- Wattala</ion-select-option
                      >
                      <ion-select-option value="blonde"
                        >Hemas Hospital- Thalawathugoda</ion-select-option
                      >
                    </ion-select>
                  </ion-item>
                </ion-list>
                <BR />

                <ion-button
                  expand="block"
                  @click="() => router.push('/menu')"
                  >Channel</ion-button
                >
                <ion-button expand="block">Channel</ion-button>
                <Br />
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

    <Footer />
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonCol,
  IonRow,
  IonHeader,
  IonCardHeader,
  IonCardSubtitle,
  IonToolbar,
  IonGrid,
  IonCardTitle,
  IonText,
  IonList,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonButton,
} from "@ionic/vue";
import Footer from "@/views/components/footer.vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCol,
    IonCardHeader,
    IonRow,
    IonHeader,
    IonCardSubtitle,
    IonToolbar,
    Footer,
    IonGrid,
    IonCardTitle,
    IonText,
    IonList,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonButton,
  },
};


</script>

<style>
.logo {
  padding-top: 2%;
  margin-left: 32%;
  height: 120px;
  width: 120px;
}

ion-input {
  border-radius: 10px;
  padding-right: 30px;
  padding-left: 30px;
  font-size: 0.9em;
  border: 1px solid #f1f1f1;
  --background: rgb(219, 219, 219);
  /* height: 10%; */
  max-width: 100vw;
  max-height: 10vh;
}
</style>
