new Vue({
    el: '#desafio',
    data: {
        nome: 'Lucas Magno',
        idade: 29,
        url: 'https://www.creative-tim.com/assets/icon-vue-07c12f3b6806d585dc73052653b82f21153ffc6ebb94806aadc3b7ce951ae970.jpg'
    },
    methods: {
        idadeMultiplicada: function () {
            return this.idade * 3;
        },
        numeroRandom: () => {
            return Math.random();
        },
    },
});