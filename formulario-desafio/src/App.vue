<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" >
        <div class="cabecalho">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->

        <Rotulo nome="Nome">
          <input type="text" v-model="usuario.nome">
        </Rotulo>
        <Rotulo nome="E-mail">
          <input type="text" v-model="usuario.email">
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="usuario.senha">
        </Rotulo>
        <Rotulo nome="Armazenar Dados">
          <span class="mr-4">
            <input type="checkbox" v-model="armazenarDados" value="true"> Sim
          </span>
        </Rotulo>

        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
        <hr>
        <div style="height: 70px;">
          <button @click.prevent="enviar">Enviar</button>
        </div>
        <hr>

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->

        <NomeCompleto v-model="nomeCompleto"/>
      </form>
      <div class="painel" >
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>{{ usuario.nome }}</span>
        </Rotulo>
        <Rotulo nome="E-mail">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ usuario.senha }}</span>
        </Rotulo>
        <Rotulo nome="Armazenar Dados">
          <span>{{ armazenarDados }}</span>
        </Rotulo>
        <Rotulo nome="(Componente) Nome">
          <span>{{ nomeCompleto.nome }}</span>
        </Rotulo>
        <Rotulo nome="(Componente) Sobrenome">
          <span>{{ nomeCompleto.sobrenome }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  methods: {
    enviar() {
      this.enviado = true;
    }
  },
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        senha: ""
      },
      armazenarDados: false,
      enviado: false,
      nomeCompleto: {
        nome: "Lucas",
        sobrenome: "Magno"
      }
    };
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
