const calculo = {

    cal1: 0,
    cal2: 0,
    escolha: 0,
    resultado: 0,
    iniciar: function(v1 = 0, v2 = 0, op = 0) {
        this.cal1 = parseInt(v1);
        this.cal2 = parseInt(v2);
        this.escolha = parseInt(op);
    },
    calcularValores: function() {
        var cal6 = this.cal1 + this.cal2;
        var cal5 = this.cal1 * this.cal2;
        var cal3 = this.cal1 / this.cal2;
        var cal4 = this.cal1 - this.cal2;
        if (this.escolha == 1) {
            this.resultado = cal6;
        } else if (this.escolha == 2) {
            this.resultado = cal5;
        } else if (this.escolha == 3) {
            this.resultado = cal3;
        } else if (this.escolha == 4) {
            this.resultado = cal4;
        }
        return this.resultado;
    }
};

function saida(texto = "") {
    document.querySelector("#saida").innerHTML = texto;
};