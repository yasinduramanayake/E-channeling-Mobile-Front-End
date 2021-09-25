<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col> </ion-col>
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
                <h2>Channeling Details</h2>
                <Br />
              </ion-card-header>

              <ion-card-content>
                <ion-text color="dark">
                  <h2>Doctor's Name</h2>
                  <ion-label color="primary">Dr.Anada Wijewickrama</ion-label>
                </ion-text>
                <Br />
                <ion-text color="dark">
                  <h2>Hospital</h2>
                  <ion-label color="primary"
                    >LAnka Hospital - Colombo 05</ion-label
                  > </ion-text
                ><Br />
                <ion-text color="dark">
                  <h2>Date</h2>
                  <ion-label color="primary">25/09/2021</ion-label>
                </ion-text>
                <ion-text color="dark">
                  <h2>Time</h2>
                  <ion-label color="primary">6.45 P.M</ion-label>
                </ion-text>

                <BR />
                <Br />
                <h1>Payment Details</h1>
                <Br />
                <ion-text color="dark">
                  <h2>Doctor Fee</h2>
                  <ion-label color="primary"
                    >Rs 1500.00</ion-label
                  > </ion-text
                ><Br />

                <ion-text color="dark">
                  <h2>Hospital Fee</h2>
                  <ion-label color="primary">Rs 750.00</ion-label>
                </ion-text><Br />
                <ion-text color="dark">
                  <h2>Tax</h2>
                  <ion-label color="primary">Rs 250.00</ion-label>

                  <ion-text color="dark">
                  <h2>Total</h2>
                  <ion-label color="primary">Rs 2500.00</ion-label>
                </ion-text><Br />
                </ion-text><Br />
                <BR />
                <Br />

                <ion-button expand="block">Channel</ion-button>
                <BR />
                <Br />
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonCard,
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
