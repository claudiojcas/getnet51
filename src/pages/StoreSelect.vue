<template>
  <q-page padding class="flex flex-center">

    <div class="text-h5 q-ma-md text-accent">
      <q-btn color="primary" icon="navigate_before" label="" to="/" />
    </div>
    <div class="flex flex-center">

      <q-card padding class="my-card q-ma-sm">
        <q-img class="card-image"
          src="https://media.gettyimages.com/photos/irish-supermarket-picture-id888221022?s=612x612"
          basic
        >
          <div class="absolute-bottom text-h6">
            Novo Mundo
          </div>
        </q-img>

        <q-card-section>
          {{ endereco_1 }}
          {{ distancia_1 }}
        </q-card-section>
        <q-card-actions vertical>
          <q-btn color="primary" to="/selection">Selecionar</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card q-ma-sm">
        <q-img class="card-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHWscpv_jSBYqwgzAPJSakYOGYKT_4vshOLQ&usqp=CAU"
          basic
        >
          <div class="absolute-bottom text-h6">
            Minibox Bom de Preço
          </div>
        </q-img>

        <q-card-section>
          {{ endereco_2 }}
          {{ distancia_2 }}
        </q-card-section>
        <q-card-actions vertical>
          <q-btn color="primary" to="/selection">Selecionar</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card q-ma-sm">
        <q-img class="card-image"
          src="https://media.gettyimages.com/photos/grocery-store-in-queens-on-a-rainy-night-picture-id985033040?s=612x612"
          basic
        >
          <div class="absolute-bottom text-h6">
            Mercantil Souza
          </div>
        </q-img>

        <q-card-section>
          {{ endereco_3 }}
          {{ distancia_3 }}
        </q-card-section>
        <q-card-actions vertical>
          <q-btn color="primary" to="/selection">Selecionar</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card q-ma-sm">
        <q-img class="card-image"
          src="https://c8.alamy.com/compes/dkjw65/una-fachada-abierta-comun-supermercado-local-en-la-avenida-nossa-senhora-de-copacabana-en-rio-de-janeiro-brasil-dkjw65.jpg"
          basic
        >
          <div class="absolute-bottom text-h6">
            Compercial Pereira
          </div>
        </q-img>

        <q-card-section>
          {{ endereco_4 }}
          {{ distancia_4 }}
        </q-card-section>
        <q-card-actions vertical>
          <q-btn color="primary" to="/selection">Selecionar</q-btn>
        </q-card-actions>
      </q-card>

    </div>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      endereco_1: 'Rua Orvalho 94, Passo Fundo, RS',
      distancia_1: '7,4km de você',
      endereco_2: 'Rua Vidro 33, Passo Fundo, RS',
      distancia_2: '2,1km de você',
      endereco_3: 'Rua Alvorecer 52, Passo Fundo, RS',
      distancia_3: '3,5km de você',
      endereco_4: 'Rua Andorian 88, Passo Fundo, RS',
      distancia_4: '11,4km de você'
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
</style>
