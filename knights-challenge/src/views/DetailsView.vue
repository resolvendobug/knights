<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <b-row>
      <b-col md="6">
        <b-card
          :img-src="character.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card
          tag="article"
          style="max-width: 50rem"
          class="mb-2 d-flex flex-column"
        >
          <b-card-title
            ><b>{{ character.name }}</b></b-card-title
          >
          <b-card-sub-title class="mb-2 text-muted"
            ><b>{{ character.nickname }}</b></b-card-sub-title
          >
          <b-row>
            <b-col>
              <p><b>Atributos:</b></p>
              <ul>
                <li><b>Força:</b> {{ character.attributes.strength }}</li>
                <li><b>Destreza:</b> {{ character.attributes.dexterity }}</li>
                <li>
                  <b>Constituição:</b> {{ character.attributes.constitution }}
                </li>
                <li>
                  <b>Inteligência:</b> {{ character.attributes.intelligence }}
                </li>
                <li><b>Sabedoria:</b> {{ character.attributes.wisdom }}</li>
                <li><b>Carisma:</b> {{ character.attributes.charisma }}</li>
              </ul>
              <p><b>Atributo chave:</b> {{ character.keyAttribute }}</p>
            </b-col>
            <b-col>
              <p>
                <b>Hall of Heroes:</b> {{ character.isHeroes ? "Sim" : "Não" }}
              </p>
              <p><b>Ataque:</b> {{ character.ataque }}</p>
              <p><b>Experiência:</b> {{ character.exp }}</p>
              <p><b>Idade:</b> {{ character.idade }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p><b>Armas:</b></p>
              <ul>
                <li
                  v-for="weapon in character.weapons"
                  :key="weapon._id"
                  :v-if="weapon.equipped"
                >
                  <b>Nome:</b> {{ weapon.name }},<br />
                  <b>Mod:</b> {{ weapon.mod }},<br />
                  <b>Atributo:</b> {{ weapon.attr }}
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<!-- Resto do código -->
<script>
export default {
  name: "DetailsView",
  data() {
    return {
      id: this.$route.params.id,
      character: {
        name: "Emilio",
        nickname: "Zurita",
        birthday: "1965-05-28T00:00:00.000Z",
        weapons: [
          {
            name: "knife",
            mod: 2,
            attr: "dexterity",
            equipped: true,
            _id: "65e3fdabf05069bf4c7b676a",
          },
          {
            name: "knife",
            mod: 2,
            attr: "dexterity",
            equipped: true,
            _id: "65e3fdabf05069bf4c7b676b",
          },
        ],
        attributes: {
          strength: 5,
          dexterity: 10,
          constitution: 10,
          intelligence: 20,
          wisdom: 15,
          charisma: 10,
          _id: "65e3fdabf05069bf4c7b676c",
        },
        keyAttribute: "intelligence",
        isHeroes: true,
        ataque: 19,
        exp: 3271,
        idade: 40,
        image: "/img/classes/arqueiro.jpeg", 
      },
    };
  },
  methods: {
    async getCharacter() {
      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}/knights/${this.id}`
        );
        const data = await response.json();
        this.character = data;
        console.log(this.character);
        if (this.character.classe) {
          this.character.image = `/img/classes/${this.character.classe
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")}.jpeg`;
        } else {
          this.character.image = "/img/classes/perfil_vazio.jpeg";
        }
      } catch (error) {
        this.msg = "Erro ao buscar personagem";
      }
    },
  },
  created() {
    (this.id = this.$route.params.id), this.getCharacter();
  },
};
</script>