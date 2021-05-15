var res = window.document.getElementById('msg')
function calcular(){
    var str = window.document.getElementById('txtn')
    var s = String(str.value)
    var n = Number.parseInt(str.value)
    var sel1 = window.document.getElementById('sel1')
    var sel2 = window.document.getElementById('sel2')
    var selec1 = String(sel1.value)
    var selec2 = String(sel2.value)
    if(s.length == 0 || selec1 == 's1' || selec2 == 's2'){
        alert('Verifique se tudo foi preenchido corretamente')
    }else{
        if(selec1 == 'dec1'){
            if(selec2 == 'dec2'){
                alert('Verifique se tudo está preenchido corretamente')
                res.innerHTML = ''
            }else if(selec2 == 'bin2'){
                //Decimal para Binário
                var numBin = n.toString(2)
                if(numBin == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em binário é: ${numBin}`
                }
            }else if(selec2 == 'hex2'){
                //Decimal para Hexadecimal
                var numHex = n.toString(16)
                if(numHex == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em hexadecimal é: ${numHex.toUpperCase()}`
                }  
            }else if(selec2 == 'oct2'){
                //Decimal para Octal
                var numOct = n.toString(8)
                if(numOct == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em octal é: ${numOct}`
                }  
            }
        }else if(selec1 == 'bin1'){
            if(selec2 == 'bin2'){
                    alert('Verifique se tudo está preenchido corretamente')
                    res.innerHTML = ''
            }else if(selec2 == 'dec2'){
                    //Binário para Decimal
                    var numDec = Number.parseInt(s,2)
                    let verif = numDec.toString()
                    if(verif == 'NaN'){
                        alert('Corrija a caixa de texto')
                        res.innerHTML = ''
                    }else{
                        res.innerHTML = `Seu resultado em decimal é: ${numDec}`
                    }
            }else if(selec2 == 'hex2'){
                    //Binário para Hexadecimal
                    var numDec = Number.parseInt(s,2)
                    var numHex = numDec.toString(16)
                    if(numHex == 'NaN'){
                        alert('Corrija a caixa de texto')
                        res.innerHTML = ''
                    }else{
                        res.innerHTML = `Seu resultado em hexadecimal é: ${numHex.toUpperCase()}`
                    }
            }else if(selec2 == 'oct2'){
                    //Binário para Octal
                    var numDec = Number.parseInt(s,2)
                    var numOct = numDec.toString(8)
                    if(numOct == 'NaN'){
                        alert('Corrija a caixa de texto')
                        res.innerHTML = ''
                    }else{
                        res.innerHTML = `Seu resultado em octal é: ${numOct}`
                    }
            }
            
        }else if(selec1 == 'hex1'){
            if(selec2 == 'hex2'){
                alert('Verifique se tudo está preenchido corretamente')
                res.innerHTML = ''
            }else if(selec2 == 'dec2'){
                //Hexadecimal para Decimal
                var numDec = Number.parseInt(s,16)
                let verif = numDec.toString()
                if(verif == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em decimal é: ${numDec}`
                }
            }else if(selec2 == 'bin2'){
                //Hexadecimal para Binário
                var numDec = Number.parseInt(s,16)
                var numBin = numDec.toString(2)
                if(numBin == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em binário é: ${numBin}`
                }
            }else if(selec2 == 'oct2'){
                //Hexadecimal para Octal
                var numDec = Number.parseInt(s,16)
                var numOct = numDec.toString(8)
                if(numOct == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em octal é: ${numOct}`
                }
            }
        }else if(selec1 == 'oct1'){
            if(selec2 == 'oct2'){
                alert('Verifique se tudo está preenchido corretamente')
                res.innerHTML = ''
            }else if(selec2 == 'dec2'){
                //Octal para Decimal
                var numDec = Number.parseInt(s,8)
                let verif = numDec.toString()
                if(verif == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em decimal é: ${numDec}`
                }
            }else if(selec2 == 'bin2'){
                //Octal para Binário
                var numDec = Number.parseInt(s,8)
                var numBin = numDec.toString(2)
                if(numBin == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em binário é: ${numBin}`
                }
            }else if(selec2 == 'hex2'){
                //Octal para Hexadecimal
                var numDec = Number.parseInt(s,8)
                var numHex = numDec.toString(16)
                if(numHex == 'NaN'){
                    alert('Corrija a caixa de texto')
                    res.innerHTML = ''
                }else{
                    res.innerHTML = `Seu resultado em hexadecimal é: ${numHex.toUpperCase()}`
                }
            }
        }
        
    }
}


