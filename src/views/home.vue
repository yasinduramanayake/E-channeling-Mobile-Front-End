<template>
  <ion-page>
<<<<<<< HEAD
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
        <img src="assets/download.png" />
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
          @click="() => router.push('/login')"
          expand="full"
          >Login
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button 
        size="large" 
        color="danger" 
        expand="full"
        @click="() => router.push('/register')"
          >Register
        </ion-button>
      </ion-col>
    </ion-row>
=======
    <ion-content>
     <ion-grid>
      <ion-row>
        <ion-col>
          <img class="logo" src="assets/echannelling.png" />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
            <ion-button class = "loginBtn" expand="block">Login</ion-button>
        </ion-col>
        <ion-col>
           <ion-button class = "regBtn" expand="block">Sign Up</ion-button>
        </ion-col>
        
      </ion-row>
      </ion-grid> 
      </ion-Content>   
      
    
>>>>>>> madura
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton,IonCol } from "@ionic/vue";
import { useRouter } from "vue-router";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonCol
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style>

.loginBtn{

margin-top:5%;
height:50px;
}

.regBtn{
width:100%;
margin-top:3%;

height:50px;
}

.logo{
  padding-top:30%;
  padding-left:10%;
  padding-bottom:18%;
}

</style>
