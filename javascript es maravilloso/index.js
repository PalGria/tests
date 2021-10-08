let obj = {cantidad: 5};

obj.peras = function () {
    console.log(this);
    console.log(`Soy un grupo de ${this.cantidad} peras`);
}

obj.peras();
console.log(obj);
