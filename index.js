function mostrar(){
    var a1 = document.getElementById('a')
    var b2 = document.getElementById('b')
    var c3 = document.getElementById('c')
    var a = Number(a1.value)
    var b = Number(b2.value)
    var c = Number(c3.value)
    var res = document.getElementById('resp')
    var d = (b**2) -4*a*c
    var rd = d**0.5
    if (d < 0) {
        window.alert('ERRO! O delta desse numero é menor do que zero')
    } else {
        var x1 = (-b + rd)/(2*a)
        var x2 = (-b - rd)/(2*a)
        res.innerHTML = `x1 é igual a ${x1} e x2 é igual a ${x2}`
    }
}