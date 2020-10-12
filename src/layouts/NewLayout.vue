<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="icons/favicon-32x32.png">
          </q-avatar>
          <strong> Super g</strong>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="right"
      side="right"
      show-if-above
      bordered
      content-class="bg-info"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Opções
        </q-item-label>

        <q-item to="/enderecos">
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="bluetooth" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Endereços</q-item-label>
            <q-item-label caption lines="2">Adiciona/Altera Endereços.</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>1</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>

        <q-item to="/lista">
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="add_shopping_cart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lista</q-item-label>
            <q-item-label caption lines="2">Cria/Altera Lista de compras.</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>2</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/register">
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="bluetooth" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Configurações</q-item-label>
            <q-item-label caption lines="2">Atualiza as configurações.</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      right: false
    }
  }
}
</script>
