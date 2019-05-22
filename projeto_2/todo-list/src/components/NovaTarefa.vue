<template>
  <a-row type="flex" justify="center">
    <a-col :span="8">
      <a-input placeholder="Nova tarefa?" v-model="nome" @keyup.enter="addTarefa">
        <a-icon slot="addonAfter" type="plus-square" @click="addTarefa"/>
      </a-input>
    </a-col>
  </a-row>
</template>

<script>
export default {
    data() {
        return {
            nome: ''
        }
    },
    methods: {
        addTarefa(){
            this.$emit('tarefaAdicionada', { nome: this.nome });
            this.nome = ''
        }
    },
};
</script>
