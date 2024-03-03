<template>
  <div class="container">
    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(actions)="data">
        <b-button variant="primary" @click="handleClick(data.item, 'edit')">Editar</b-button>
        <b-button variant="danger" @click="handleClick(data.item, 'delete')">Deletar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'AppTable',
  data() {
    return {
      items: [
      
      ],
      fields: [
        { key: 'idade', label: 'Idade' },
        { key: 'nome', label: 'Nome' },
        { key: 'armas', label: 'Armas' },
        { key: 'atributo', label: 'Atributo' },
        { key: 'ataque', label: 'Ataque' },
        { key: 'exp', label: 'Exp' },
        { key: 'actions', label: 'Ações' }
      ]
    }
  },
  methods: {
    handleClick(item, action) {
      console.log(action, item);
      // Aqui você pode adicionar a lógica para lidar com a ação do botão
    },
    async getKnights() {
      try {
        const response = await fetch('http://localhost:3000/knights');
        const data = await response.json();
        console.log(data);
        this.items = data;

      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getKnights();
  }
}
</script>