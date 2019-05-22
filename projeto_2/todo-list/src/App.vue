<template>
  <div id="app">
    <a-layout>
      <a-layout-content>
        <div style="padding: 10px;">
          <a-row type="flex" justify="center">
            <a-col :span="8">
              <h1>{{ titulo }}</h1>
            </a-col>
          </a-row>

          <app-progress :porcentagem="porcentagem"/>

          <br>

          <app-nova-tarefa @tarefaAdicionada="addTarefa"/>

          <br>

          <app-tarefas :tarefas="tarefas" 
            @tarefaAlterada="alterarTarefa"
            @removerTarefa="removerTarefa"/>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import appProgress from "./components/Progress.vue";
import appNovaTarefa from "./components/NovaTarefa.vue";
import appTarefas from "./components/Tarefas.vue";

export default {
  name: "app",
  components: { appProgress, appNovaTarefa, appTarefas },
  data() {
    return {
      titulo: "Tarefas",
      tarefas: []
    };
  },
  computed: {
    porcentagem() {
      const total = this.tarefas.length;
      const feitas = this.tarefas.filter(t => !t.pendente).length;
      return Math.round((feitas / total) * 100) || 0;
    }
  },
  methods: {
    addTarefa(tarefa) {
      const realmenteNovo =
        this.tarefas.filter(t => t.nome === tarefa.nome).length == 0;
      if (realmenteNovo) {
        this.tarefas.push({
          nome: tarefa.nome,
          pendente: tarefa.pendente || true
        });
      }
    },
    alterarTarefa(index){
      this.tarefas[index].pendente = !this.tarefas[index].pendente;
    },
    removerTarefa(index){
      this.tarefas.splice(index, 1);
    }
  },
  created() {
    const json = localStorage.getItem("tarefas");
    const array = JSON.parse(json);
    this.tarefas = Array.isArray(array) ? array : [];
  },
  watch: {
    tarefas: {
      deep: true,
      handler() {
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
      }
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
