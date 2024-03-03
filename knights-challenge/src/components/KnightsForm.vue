<template>
  <div class="container">
    <b-form-group id="labelarma1" label="Classe:" label-for="arma">
      <b-img
        v-for="(image, index) in classesImages"
        :key="index"
        :src="image"
        width="155"
        height="155"
        rounded
        mr-1
        alt="Image 1"
        @click="selectClassesImage(index)"
        :class="{ 'selected-image': selectedClassesImage === index }"
      ></b-img>
    </b-form-group>
    <b-row>
      <b-col
        ><b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="labelnome" label="Nome:" label-for="nome">
            <b-form-input
              id="nome"
              v-model="form.nome"
              type="text"
              placeholder="Nome do Guerreiro"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="labelapelido" label="Apelido" label-for="apelido">
            <b-form-input
              id="apelido"
              v-model="form.apelido"
              placeholder="Apelido do Guerreiro"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="labelarma1" label="Arma:" label-for="arma">
            <b-img
              v-for="(image, index) in weaponImages"
              :key="index"
              :src="image"
              width="75"
              height="75"
              rounded
              mr-1
              alt="Image 1"
              @click="selectWeaponImage(index)"
              :class="{ 'selected-image': selectedWeaponImage === index }"
            ></b-img>
          </b-form-group>

          <b-form-checkbox> </b-form-checkbox>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form></b-col
      >
      <b-col> {{ character }}</b-col>
    </b-row>
  </div>
</template>
  
  <script>
export default {
  name: "KnightsForm",
  data() {
    return {
      character: {
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        keyAttribute: null,
      },

      classesImages: [
        "/img/classes/arqueiro.jpeg",
        "/img/classes/barbaro.jpeg",
        "/img/classes/curandeiro.jpeg",
        "/img/classes/mago.jpeg",
        "/img/classes/monge.jpeg",
      ],
      selectedClassesImage: null,
      weaponImages: [
        "/img/weapons/espada.jpeg",
        "/img/weapons/faca.jpeg",
        "/img/weapons/machado.jpeg",
        "/img/weapons/arco.jpeg",
      ],
      selectedWeaponImage: null,
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
  methods: {
    selectClassesImage(index) {
      this.selectedClassesImage = index;
      switch (index) {
        case 0: // Arqueiro
          this.character.keyAttribute = 'dexterity';
          break;
        case 1: // Bárbaro
          this.character.keyAttribute = 'strength';
          break;
        case 2: // Curandeiro
          this.character.keyAttribute = 'wisdom';
          break;
        case 3: // Mago
          this.character.keyAttribute = 'intelligence';
          break;
        case 4: // Monge
          this.character.keyAttribute = 'constitution';
          break;
        default:
          this.character.keyAttribute = null;
      }
    },
    selectWeaponImage(index) {
      this.selectedWeaponImage = index;
      //alert(this.selectedImage);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
  <style scoped>
.selected-image {
  border: 2px solid red;
}
img {
  margin: 50px;
}
</style>