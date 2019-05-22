<template>
  <div>
    <template v-if="tarefas.length">
      <a-row :gutter="16">
        <app-tarefa v-for="(tarefa, index) in tarefas" 
        :key="tarefa.nome" 
        :tarefa="tarefa"
        @tarefaAlterada="$emit('tarefaAlterada', index)"
        @removerTarefa="$emit('removerTarefa', index)"
        />
      </a-row>
    </template>
    <a-row v-else :gutter="16" type="flex" justify="center">
      <a-col :span="8">
        <h1>Sua vida está em dia :)</h1>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import appTarefa from "./Tarefa.vue";

export default {
  components: { appTarefa },
  props: {
    tarefas: { type: Array, required: true }
  }
};
</script>