<template>
  <q-page class="flex flex-center text-accent">
    <div class="text-h5 q-ma-md text-accent">
      <q-btn color="primary" icon="navigate_before" label="" to="/" />
    </div>
    <q-img class="card-image"
      src='https://image.freepik.com/free-vector/man-driving-motorcycle-g-p-s-map-smart-phone-delivery-service_211621-33.jpg'
      basic>
    </q-img>
  </q-page>
</template>

<script>

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
  }
}
</script>

<style lang="sass" scoped>
.card-image
  max-width: 80%

#div_form
  padding-bottom: 80px;

#submit_btn
    position: fixed;
    bottom: 0;
    padding: 5px 20px 5px 20px;
    background-color: red;
</style>
