<template>
  <a-col class="tarefa" :span="4">
    <a-card :title="' ' + tarefa.nome" :bordered="false" :class="statusClass">
      <template class="ant-card-actions" slot="actions">
        <a-icon @click="$emit('tarefaAlterada', tarefa)" type="check"/>
        <a-icon @click="$emit('removerTarefa', tarefa)" type="delete"/>
      </template>
    </a-card>
  </a-col>
</template>

<script>
export default {
  props: { tarefa: Object },
  computed: {
    statusClass() {
      return this.tarefa.pendente ? "pendente" : "feita";
    }
  }
};
</script>

<style>
.tarefa {
  margin-bottom: 5px;
}

.pendente {
  background-color: red !important;
}

.feita {
  background-color: green !important;
}
</style>