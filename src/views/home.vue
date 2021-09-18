<template>
  <ion-page>
    <ion-content>

     <IonGrid>
      <IonRow>
        <IonCol>
          <img class="logo" src="assets/echannelling.png" />
        </IonCol>

        <IonCol>
            <IonButton expand="block">Login</IonButton>
        </IonCol>

        <IonCol>
           <IonButton expand="block">Sign Up</IonButton>
        </IonCol>
        
      </IonRow>
      </IonGrid>    
      
    </ion-content>

  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
  },
};
</script>
<Style>
.logo{
  align:
}
</style>