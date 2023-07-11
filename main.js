$(document).ready(function(){
    
    $('#telefone').mask('(00)00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            telefone:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            cep:{
                required:true
            },
            endereco:{
                required:true
            },
            cpf:{
                required:true,
            }
        },
        messages:{
            nome:'Por favor insira seu nome',
            email:'Por favor insira seu email'
        },
        submitHandler: function(form){
            if($("form").valid()) {
            alert('Cadastro Concluído!')
            $("#nome").val('');
            $("#email").val('');
            $("#telefone").val('');
            $("#cpf").val('');
            $("#endereco").val('');
            $("#cep").val('');
        }
    },
        invalidHandler: function(event,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                if (camposIncorretos === 1){
                    alert(`Há ${camposIncorretos} campo incorreto`);
                } else{
                    alert(`Há ${camposIncorretos} campos incorretos`);
                }
                
            }
        }
    })
    
})