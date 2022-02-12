var mes = 5
if (mes === 1) {
    console.log('Janeiro')
} else if (mes === 4) {
    console.log('fevereiro')
} else if (mes === 3) {
    console.log('Março')
} else if (mes === 4) {
    console.log('Abril')
} else {
    console.log('O mês não Janeiro, Fevereiro nem Março ou Abril')
}
console.log('============================================================')
switch (mes) {
    case 1:
        console.log('Janeiro')
        break
    case 2:
        console.log('Fevereiro')
        break
    case 3:
        console.log('Março')
        break
    case 4:
        console.log('Abril')
        break
    default:
        console.log('O mês não Janeiro, Fevereiro nem Março ou Abril')
}