<template>
  <div class="container">
    <AppMessage :msg="msg" v-show="msg"  />
    <div class="d-flex align-items-center mb-3">
      <b-form-checkbox v-model="isHeroesChecked" class="mr-2" style="border: 1px solid #dc3545; background-color: #f1aeb5;"></b-form-checkbox>
      <span>Hall of Heroes</span>
    </div>
    <b-table striped hover :items="processedItems" :fields="fields">
      <template v-slot:cell(actions)="data">
        <b-button variant="warning" @click="handleClick(data.item, 'edit')">Alterar Apelido</b-button>
        &nbsp;
        <b-button v-show="!data.item.isHeroes" variant="outline-danger" @click="handleClick(data.item, 'delete')">Hall of Heroes</b-button>
        &nbsp;
        <b-button @click="goToDetails(data.item._id)">Detalhes</b-button>
      </template>
    </b-table>

    
    <div>
  
</div>

  </div>
</template>

<script>
import AppMessage from './AppMessage.vue';
export default {
  name: 'AppTable',
  data() {
    return {
      msg: "",
      urlApi: process.env.VUE_APP_API_URL,
      items: [],
      isHeroesChecked: false,
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
  watch: {
    isHeroesChecked() {
      this.getKnights();
    },
  },
  methods: {
   goToDetails(id) {
    this.$router.push({ name: 'Details', params: { id: id } });
    },
    async deleteKnight(id) {
      try {
        const response = await fetch(`${this.urlApi}/knights/${id}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        
        if (data.error) {
          this.msg = data.error;
          return;
        }

        this.msg = "Knight foi para o Hall of Heroes com sucesso!";

        setTimeout(() => {
          this.msg = null;
        }, 3000);

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
      if (window.confirm('Você tem certeza que deseja entrar para o Hall of Heroes?')) {
        await this.deleteKnight(this.itemToDelete);
        this.itemToDelete = null;
      }
    },
    async editKnight(id, newNickname) {
      try {
        
        const response = await fetch(`${this.urlApi}/knights/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nickname: newNickname }),
        });
        const data = await response.json();
        
        if (data.error) {
          this.msg = data.error;
          return;
        }

        this.msg = "Apelido alterado com sucesso!";

        setTimeout(() => {
          this.msg = null;
        }, 3000);

        this.getKnights();
      } catch (error) {
        console.error(error);
      }
    },
    async getKnights() {
      try {
        const url = this.isHeroesChecked ? 
        `${this.urlApi}/knights?filter=heroes` : `${this.urlApi}/knights`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.items = data;

      } catch (error) {
        console.error(error);
      }
    }
  },
  components: {
    AppMessage
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