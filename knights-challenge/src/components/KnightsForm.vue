<template>
  <div class="container">
    <b-form-group id="labelarma1" label="Classe:" label-for="arma">
      <b-row>
        <b-col v-for="(classe, index) in classesImages" :key="index">
          <b-img
            :src="classe.image"
            width="155"
            height="155"
            rounded
            mr-1
            alt="Image 1"
            @click="selectClassesImage(index)"
            :class="{ 'selected-image': selectedClassesImage === index }"
            class="center-text"
          ></b-img>
          <p class="center-text">{{ classe.name }}</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group id="labelarma1" label="Arma esquerda:" label-for="arma">
            <b-img
              v-for="(image, index) in weaponImages"
              :key="index"
              :src="image"
              width="75"
              height="75"
              rounded
              mr-1
              alt="Image 1"
              @click="selectWeaponEsquerda(index)"
              :class="{ 'selected-image': selectedWeaponEsquerda === index }"
            ></b-img>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group id="labelarma1" label="Arma direita:" label-for="arma">
            <b-img
              v-for="(image, index) in weaponImages"
              :key="index"
              :src="image"
              width="75"
              height="75"
              rounded
              mr-1
              alt="Image 1"
              @click="selectWeaponDireita(index)"
              :class="{ 'selected-image': selectedWeaponDireita === index }"
            ></b-img>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form-group>
    <b-row>
      
      <b-col>
        <AppMessage :msg="msg" v-show="msg"  />
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="labelnome" label="Nome:" label-for="nome">
            <b-form-input
              id="nome"
              v-model="character.name"
              type="text"
              placeholder="Nome do Guerreiro"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="labelapelido" label="Apelido" label-for="apelido">
            <b-form-input
              id="apelido"
              v-model="character.nickname"
              placeholder="Apelido do Guerreiro"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group>
          <b-button type="submit" variant="warning">Submit</b-button>
          &nbsp;
          <b-button type="reset" variant="outline-danger">Reset</b-button>
        </b-form-group>
        </b-form>
      </b-col>
      <b-col>
        <b-list-group>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Nome : {{ character.name }}
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Apelido : {{ character.nickname }}
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Idade : {{ calculateAge(character.birthday) }} anos
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            strength : {{ character.attributes.strength }}
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            dexterity : {{ character.attributes.dexterity }}
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            constitution : {{ character.attributes.constitution }}
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            intelligence : {{ character.attributes.intelligence }}
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            wisdom : {{ character.attributes.wisdom }}
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            charisma : {{ character.attributes.charisma }}
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Atributo Chave : {{ character.keyAttribute }}
          </b-list-group-item>
        </b-list-group>
        
      </b-col>
    </b-row>
  </div>
</template>
  
  <script>
  import AppMessage from "./AppMessage.vue";

export default {
  name: "KnightsForm",
  data() {
    return {
      msg: "",
      character: {
        name: null,
        nickname: null,
        birthday: null,
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        weapons: [],
        keyAttribute: null,
      },

      classesImages: [
        { image: "/img/classes/arqueiro.jpeg", name: "Arqueiro" },
        { image: "/img/classes/barbaro.jpeg", name: "Bárbaro" },
        { image: "/img/classes/curandeiro.jpeg", name: "Curandeiro" },
        { image: "/img/classes/mago.jpeg", name: "Mago" },
        { image: "/img/classes/monge.jpeg", name: "Monge" },
        { image: "/img/classes/crianca.jpeg", name: "Aprendiz"}
      ],
      selectedClassesImage: null,
      weaponImages: [
        "/img/weapons/espada.jpeg",
        "/img/weapons/faca.jpeg",
        "/img/weapons/machado.jpeg",
        "/img/weapons/arco.jpeg",
      ],
      selectedWeaponEsquerda: null,
      selectedWeaponDireita: null,
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  components: {
    AppMessage,
  },
  methods: {
    calculateAge(birthdate) {
      if(birthdate === null) return 0;
      const dob = new Date(birthdate);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      return age;
    },
    selectClassesImage(index) {
      this.selectedClassesImage = index;
      switch (index) {
        case 0: // Arqueiro
          this.character.attributes = {
            strength: 10,
            dexterity: 20,
            constitution: 15,
            intelligence: 10,
            wisdom: 10,
            charisma: 10,
          };
          this.character.birthday = new Date("1990-01-01");
          this.character.keyAttribute = "dexterity";
          break;
        case 1: // Bárbaro
          this.character.attributes = {
            strength: 20,
            dexterity: 10,
            constitution: 20,
            intelligence: 5,
            wisdom: 10,
            charisma: 10,
          };
          this.character.birthday = new Date("1980-11-21");
          this.character.keyAttribute = "strength";
          break;
        case 2: // Curandeiro
          this.character.attributes = {
            strength: 5,
            dexterity: 10,
            constitution: 15,
            intelligence: 15,
            wisdom: 20,
            charisma: 15,
          };
          this.character.birthday = new Date("2000-04-12");
          this.character.keyAttribute = "wisdom";
          break;
        case 3: // Mago
          this.character.attributes = {
            strength: 5,
            dexterity: 10,
            constitution: 10,
            intelligence: 20,
            wisdom: 15,
            charisma: 10,
          };
          this.character.birthday = new Date("1965-05-28");
          this.character.keyAttribute = "intelligence";
          break;
        case 4: // Monge
          this.character.attributes = {
            strength: 15,
            dexterity: 15,
            constitution: 20,
            intelligence: 10,
            wisdom: 15,
            charisma: 10,
          };
          this.character.birthday = new Date("1967-04-07");
          this.character.keyAttribute = "constitution";
          break;
          case 5: // Aprendiz
          this.character.attributes = {
            strength: 2,
            dexterity: 1,
            constitution: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 10,
          };
          this.character.birthday = new Date("2019-06-27");
          this.character.keyAttribute = "charisma";
          break;
        default:
          this.character.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
          };
          this.character.keyAttribute = null;
      }
    },
    selectWeaponEsquerda(index) {
      this.selectedWeaponEsquerda = index;
      switch (index) {
        case 0: // Espada
          this.character.weapons[0] = {
            name: "sword",
            mod: 3,
            attr: "strength",
            equipped: true,
          };
          break;
        case 1: // Faca
          this.character.weapons[0] = {
            name: "knife",
            mod: 2,
            attr: "dexterity",
            equipped: true,
          };
          break;
        case 2: // Machado
          this.character.weapons[0] = {
            name: "axe",
            mod: 4,
            attr: "strength",
            equipped: true,
          };
          break;
        case 3: // Arco
          this.character.weapons[0] = {
            name: "bow",
            mod: 2,
            attr: "dexterity",
            equipped: true,
          };
          break;
        default:
          this.character.weapons[0] = {
            name: "",
            mod: 0,
            attr: "",
            equipped: false,
          };
      }
    },
    selectWeaponDireita(index) {
      this.selectedWeaponDireita = index;
      switch (index) {
        case 0: // Espada
          this.character.weapons[1] = {
            name: "sword",
            mod: 3,
            attr: "strength",
            equipped: true,
          };
          break;
        case 1: // Faca
          this.character.weapons[1] = {
            name: "knife",
            mod: 2,
            attr: "dexterity",
            equipped: true,
          };
          break;
        case 2: // Machado
          this.character.weapons[1] = {
            name: "axe",
            mod: 4,
            attr: "strength",
            equipped: true,
          };
          break;
        case 3: // Arco
          this.character.weapons[1] = {
            name: "bow",
            mod: 2,
            attr: "dexterity",
            equipped: true,
          };
          break;
        default:
          this.character.weapons[1] = {
            name: "",
            mod: 0,
            attr: "",
            equipped: false,
          };
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      const dataJson = JSON.stringify(this.character);

      const req = await fetch("http://localhost:3000/knights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: dataJson,
      });
      const res = await req.json();
      
      this.msg = `Personagem ${res.name}, criado com sucesso `;
      
      setTimeout(() => {
        this.msg = "";
      }, 3000);
        

      this.character = {
        name: null,
        nickname: null,
        birthday: null,
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        weapons: [],
        keyAttribute: null,
      };
      this.selectedClassesImage = null;
      this.selectedWeaponEsquerda = null;
      this.selectedWeaponDireita = null;
    },
    onReset(event) {
      event.preventDefault();
      this.character = {
        name: null,
        nickname: null,
        birthday: null,
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        weapons: [],
        keyAttribute: null,
      };
      this.selectedClassesImage = null;
      this.selectedWeaponEsquerda = null;
      this.selectedWeaponDireita = null;
    },
  },
};
</script>
  <style scoped>
.selected-image {
  border: 6px solid red;
}
img {
  margin: 10px;
  transition: transform .2s ease;
}
img:hover {
  transform: scale(1.1);
}

.center-text {
  text-align: center;
}

.container {
  margin-bottom: 100px;
  min-height: 250px;
}
</style>