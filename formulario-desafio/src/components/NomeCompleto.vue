<template>
  <div>
    <Rotulo nome="(Componente) Nome">
      <input type="text" :value="value.nome" @input="update('nome', $event.target.value)">
    </Rotulo>
    <Rotulo nome="(Componente) Sobrenome">
      <input type="text" :value="value.sobrenome" @input="update('sobrenome', $event.target.value)">
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
  components: { Rotulo },
  props: {
    value: {
      value: Object,
      required: true
    }
  },
  methods: {
    update(key, value) {
      this.value[key] = value;
      this.$emit("input", this.value);
    }
  }
};
</script>

<style>
</style>
