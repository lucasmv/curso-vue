new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibeAlerta: function () {
            alert('clicou');
        },
        alterarValor: function (event) {
            this.valor = event.target.value;
        }
    },
})