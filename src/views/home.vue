<template>
  <ion-page>
    <ion-content>
     <ion-grid>
      <ion-row>
        <ion-col>
          <img class="logo" src="assets/echannelling.png" />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
            <ion-button class = "loginBtn"  @click="() => router.push('/login')" expand="block">Login</ion-button>
        </ion-col>
        <ion-col>
           <ion-button class = "regBtn"    @click="() => router.push('/register')" expand="block">Sign Up</ion-button>
        </ion-col>
        
      </ion-row>
      </ion-grid> 
      </ion-Content>   
      
    
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

<style>
.loginBtn{
margin-top:3%;
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