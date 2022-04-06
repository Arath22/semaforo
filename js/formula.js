
    function Generar()
    {
        var nume1=parseInt(document.getElementById('num1').value);
        var nume2=parseInt(document.getElementById('num2').value);
        var nume3=parseInt(document.getElementById('num3').value);
        var nume4=parseInt(document.getElementById('num4').value);


        if ((nume1 && nume2 && nume3 && nume4)>= 30 ){
            dur = "70 segundos duración luz verde"
        }else{
            if ((nume1 && nume2 && nume3 && nume4)>= 15 ){
                dur = "50 segundos duración luz verde"
            }else{
                if ((nume1 && nume2 && nume3 && nume4)>= 5 ){
                    dur = "30 segundos duración luz verde"
                }else{
                    dur = "15 segundos duración luz verde"
                }
            }
                
        
        }
            
        
        
        if (nume1>nume2 && nume1>nume3 && nume1>nume4){
            resultado1="Hay más carros en el carril 1 , avance primero"
            alert(`${ resultado1 }    ${ dur } `);
            
        }else{
            if (nume2>nume1 && nume2>nume3 && nume2>nume4){
                resultado1="Hay más carros en el carril 2, avance primero"
                alert(`${ resultado1 }    ${ dur } `);
            
            }else{
                if (nume3>nume1 && nume3>nume2 && nume3>nume4){
                    resultado1="Hay más carros en el carril 3, avance primero"
                    alert(`${ resultado1 }    ${ dur } `);
            
                }else{
                    if (nume4>nume1 && nume4>nume2 && nume4>nume3){
                        resultado1="Hay más carros en el carril 4, avance primero"
                        alert(`${ resultado1 }    ${ dur } `);
            
                    }
                }
            } 
        }
    
    }