<template>
  <q-page class="flex flex-center text-accent">
  <div class="q-pa-md" style="max-width: 600px">
    <h3 class="text-center">Cadastre-se</h3>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Seu nome *"
        hint="Nome e Sobrenome."
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Este campo é obrogatório!']"
      />

      <q-input
        filled
        type="number"
        v-model="cpf"
        label="Seu CPF *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'É obrigatório informar o CPF.',
          val => val > 0 && val < 99999999999 || 'O CPF é invĺido!'
        ]"
      />

      <q-input
        filled
        type="phone"
        v-model="phone"
        label="Seu Telefone *"
        hint="Informe o seu Telefone."
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Este campo é obrogatório!']"
      />

      <q-input
        filled
        type="email"
        v-model="email"
        label="Seu e-mail *"
        hint="Informe seu endereço de e-mail."
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Este campo é obrogatório!']"
      />

      <q-toggle v-model="accept" label="Eu aceito a licença e os termos" />

      <div>
        <q-btn label="Registrar" type="submit" color="primary"/>
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" to="/"/>
      </div>
    </q-form>

  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      cpf: null,
      phone: null,
      email: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Você precisa aceitar a licença e os termos primeiro'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Enviado'
        })
      }
    },

    onReset () {
      this.name = null
      this.phone = null
      this.cpf = null
      this.email = null
      this.accept = false
    }
  }
}
</script>
