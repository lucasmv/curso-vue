new Vue({
    el: '#app',
    data: {
        jogoIniciado: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        logs: []
    },
    methods: {
        iniciarJogo() {
            this.jogoIniciado = true;
            this.vidaJogador = 100;
            this.vidaMonstro = 100;
            this.logs = []
        },
        desistir() {
            this.jogoIniciado = false;
            this.vidaJogador = 100;
            this.vidaMonstro = 100;
            this.logs = []
        },
        ataque(especial) {
            this.machucar('vidaMonstro', 5, 10, especial, 'Jogador', 'Monstro', 'alert-success');
            this.machucar('vidaJogador', 7, 12, false, 'Monstro', 'Jogador', 'alert-danger');
        },
        machucar(prop, min, max, especial, source, target, cls) {
            const mais = especial ? 5 : 0;
            const hurt = this.getRandom(min + mais, max + mais);
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registrarLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        curar() {
            const heal = this.getRandom(10, 15)
            this.vidaJogador = Math.min(this.vidaJogador + heal, 100)
            this.registrarLog(`Jogador ganhou força de ${heal}.`, 'alert-success')
            this.machucar('vidaJogador', 7, 12, false, 'Monstro', 'Jogador', 'alert-danger');
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value);
        },
        registrarLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    computed: {
        temResultado(){
            return this.vidaJogador == 0 || this.vidaMonstro == 0
        }
    },
    watch: {
        temResultado(value) {
            if (value) this.jogoIniciado = false
        }
    }
});