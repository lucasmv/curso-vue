<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário <strong>{{ idade }}</strong> </p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="idadeBentoFn">Alterar Idade (Callback)</button>
    </div>
</template>

<script>
export default {
    props: ['idade', 'idadeBentoFn'],
    methods:{
        alterarIdade(){
            this.$emit('idadeMudou', 30);
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
