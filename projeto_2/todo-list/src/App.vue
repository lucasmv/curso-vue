<template>
  <div id="app">
    <a-layout>
      <a-layout-header>{{ titulo }}</a-layout-header>
      <a-layout-content>
        <div style="background-color: #ececec; padding: 10px;">
          <a-row type="flex" justify="center">
            <a-col :span="8">
              <h1>Tarefas</h1>
            </a-col>
          </a-row>

          <div>
            <a-row type="flex" justify="center">
              <a-col :span="8">
                <a-progress type="circle" :percent="75"/>
              </a-col>
            </a-row>
          </div>

          <a-row type="flex" justify="center">
            <a-col :span="8">
              <a-input placeholder="Nova tarefa?">
                <a-icon slot="addonAfter" type="plus-square"/>
              </a-input>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col v-for="(tarefa, index) in 10" :key="index" class="tarefa" :span="4">
              <a-card :title="'Tarefa ' + tarefa" :bordered="false">
                <p>Tarefa {{tarefa}}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </a-layout-content>
      <a-layout-footer>{{ footer }}</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    //HelloWorld
  },
  data() {
    return {
      titulo: "Tarefas (Todo)",
      footer: "Footer Tarefas (Todo)"
    };
  }
};
</script>

<style>
#app {
  text-align: center;
}
#app .ant-layout-header,
#app .ant-layout-footer {
  background: #000000;
  color: #fff;
}

.tarefa {
  margin-bottom: 5px;
}
</style>
