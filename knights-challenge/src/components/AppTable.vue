<template>
  <div class="container">
    <div class="d-flex align-items-center mb-3">
      <b-form-checkbox class="mr-2" style="border: 1px solid #dc3545; background-color: #f1aeb5;"></b-form-checkbox>
      <span>Heroes</span>
    </div>
    <b-table striped hover :items="processedItems" :fields="fields">
      <template v-slot:cell(actions)="data">
        <b-button variant="primary" @click="handleClick(data.item, 'edit')">Editar</b-button>
        <b-button variant="danger" @click="handleClick(data.item, 'delete')">Deletar</b-button>
      </template>
    </b-table>

    
    <div>
  
</div>

  </div>
</template>

<script>
export default {
  name: 'AppTable',
  data() {
    return {
      items: [],
      fields: [
        { key: 'nome', label: 'Nome' },
        { key: 'apelido' , label: 'Apelido'},
        { key: 'idade', label: 'Idade' },
        { key: 'armas', label: 'Armas' },
        { key: 'atributo', label: 'Atributo' },
        { key: 'ataque', label: 'Ataque' },
        { key: 'exp', label: 'Exp' },
        { key: 'actions', label: 'Ações' }
      ]
    }
  },
  computed: {
    processedItems() {
      return this.items.map(item => {
        if (item.isHeroes === true) {
          return { ...item, _rowVariant: 'danger' };
        }
        return item;
      });
    }
  },
  methods: {
    async deleteKnight(id) {
      try {
        const response = await fetch(`http://localhost:3000/knights/${id}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
        this.getKnights();
      } catch (error) {
        console.error(error);
      }
    },

    async handleClick(item, action) {
      console.log(action, item);

      if (action === 'delete') {
        this.itemToDelete = item._id;
        this.confirmDelete();        
      }

      if (action === 'edit') {
        const newNickname = window.prompt('Digite o novo apelido', item.apelido);
        if (newNickname !== null) {
          await this.editKnight(item._id, newNickname);
        }
      }
      
    },

    async confirmDelete() {
      if (window.confirm('Você tem certeza que deseja excluir este item?')) {
        await this.deleteKnight(this.itemToDelete);
        this.itemToDelete = null;
      }
    },
    async editKnight(id, newNickname) {
      try {
        const response = await fetch(`http://localhost:3000/knights/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nickname: newNickname }),
        });
        const data = await response.json();
        console.log(data);
        this.getKnights();
      } catch (error) {
        console.error(error);
      }
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
<style scoped>
.container {
  margin-bottom: 100px;
  min-height: 250px;
}
.b-form-checkbox {
  width: 20px;
  height: 20px;
}
</style>