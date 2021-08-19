var imprime = document.querySelector('#imprime');
document.querySelector('#limpiar')
    .addEventListener('click', function(){
        imprime.value = '';
})
document.querySelector('#borrar')
    .addEventListener('click', function(){
        imprime.value = imprime.value.substring(0, (imprime.value.length -1));
})
function addNumeros(value){
    const operationSigns = ['*','+','-','/','.'];
    imprime.value += value;
    if (operationSigns.includes(value)){
        var valorAnterior = imprime.value.length - 2;
        if (operationSigns.includes(imprime.value[valorAnterior])){
            imprime.value = imprime.value.substring(0, (imprime.value.length - 2));
            imprime.value = imprime.value + value;
        }
    }
    switch (imprime.value[0]){
        case '*':
            imprime.value = '';
        case '/':
            imprime.value = '';
        case '.':
            imprime.value = '';
    }
}
function result(){
    imprime.value = eval(imprime.value);
}