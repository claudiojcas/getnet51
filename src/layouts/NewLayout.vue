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
        </q-item-label>

        <q-item to="/storeselect">
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="add_shopping_cart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Comprar</q-item-label>
            <q-item-label caption lines="2">Realize suas compras</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/register">
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="group_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastro</q-item-label>
            <q-item-label caption lines="2">Crie seu usuário na Super GetNet</q-item-label>
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
