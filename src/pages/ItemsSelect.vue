<template>
  <q-page class="flex flex-center text-accent">
    <div class="text-h5 q-ma-md text-accent">
      <q-btn color="primary" icon="navigate_before" label="" to="/storeselect" />
    </div>

      <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
    <div class="flex flex-center" id="div_form" >
      <q-card padding class="my-card q-ma-sm">
        <q-img class="card-image"
          src= "https://comps.canstockphoto.it/drink-0-energetico-alluminio-mockup-vettore-clipart_csp48455406.jpg"
          basic
        >
          <div class="absolute-bottom text-h6">
            {{ nome_1 }}
          </div>
        </q-img>

        <q-card-section>
          {{ descricao_1 }}
        </q-card-section>
        <q-card-actions vertical>
          <q-input
        filled
        type="number"
        v-model="qnt_1"
        label="Quantidade"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Insira um valor acima de 0.',
          val => val > 0 && val < 30 || 'Demasiados itens! Insira um valor menor'
        ]"
      />
        </q-card-actions>
      </q-card>

      <q-card padding class="my-card q-ma-sm">
        <q-img class="card-image"
          src= "https://comps.canstockphoto.com.br/biscoito-clip-arte_csp4758892.jpg"
          basic
        >
          <div class="absolute-bottom text-h6">
            {{ nome_2 }}
          </div>
        </q-img>

        <q-card-section>
          {{ descricao_2 }}
        </q-card-section>
        <q-card-actions vertical>
          <q-input
        filled
        type="number"
        v-model="qnt_2"
        label="Quantidade"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Insira um valor acima de 0.',
          val => val > 0 && val < 30 || 'Demasiados itens! Insira um valor menor'
        ]"
      />
        </q-card-actions>
      </q-card>
      <div id = "submit_btn">
        <q-btn label="Registrar" type="submit" flat color="accent"/>
      </div>
    </div>
    </q-form>
  </q-page>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/database'
// Add the Firebase products that you want to use

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCyvW-xFjePtUpo6mT4-gegJhU9b0MWw1o',
  authDomain: 'hackaton-getnet.firebaseapp.com',
  databaseURL: 'https://hackaton-getnet.firebaseio.com',
  projectId: 'hackaton-getnet',
  storageBucket: 'hackaton-getnet.appspot.com',
  messagingSenderId: '198677758463',
  appId: '1:198677758463:web:4ede45bb76903d7bbee7ca',
  measurementId: 'G-5MGXLC50Y'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default {
  data () {
    return {
      nome_1: 'Refrigerante',
      descricao_1: 'RefriVerde sem Açúcar Lata 220ml',
      qnt_1: 0,
      nome_2: 'Biscoito',
      descricao_2: 'Biscoito CrocanteRoxo 80g',
      qnt_2: 0
    }
  },

  methods: {
    onSubmit () {
      console.log(this.qnt_1)
      console.log(this.qnt_2)

      var IdOrdem = Math.random().toString(36).substring(7)
      firebase.database().ref('ordens/' + IdOrdem).set({
        status: 'Consolidação do pedido'
      })
      firebase.database().ref('ordens/' + IdOrdem + '/' + this.descricao_1).set({
        quantidade: this.qnt_1
      })
      firebase.database().ref('ordens/' + IdOrdem + '/' + this.descricao_2).set({
        quantidade: this.qnt_2
      })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%;
  max-width: 250px;

.card-image
  height: 150px;

#div_form
  padding-bottom: 80px;

#submit_btn
    position: fixed;
    bottom: 0;
    padding: 5px 20px 5px 20px;
    border-radius: 25px;
    background-color: red;
</style>
