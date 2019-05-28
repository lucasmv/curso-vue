new Vue({
	el: '#desafio',
	data: {
		destaque: false,
		encolher: true,
		classeCSS: '',
		classeCSS4: '',
		classeCSS4TF: '',
		estiloCSS: '',
		progresso: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.destaque = !this.destaque;
				this.encolher = !this.encolher;
			}, 2000);
		},
		iniciarProgresso() {
			const temporizador = setInterval(() => {
				if (this.progresso < 100)
					this.progresso++;
				else
					clearInterval(temporizador);
			}, 100);
		}
	},
	computed: {
		efeito() {
			return {
				destaque: this.destaque,
				encolher: this.encolher,
			}
		},
		progressoWidth() {
			return `width: ${this.progresso}%;`;
		}
	},
})
