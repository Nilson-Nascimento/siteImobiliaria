$(document).ready(function(){

    // alert('olá mundo')

    $('#telefone').mask('(00)0000-00000')

    $('form').validate({
        rules:{
            name:{
                required:true
            },
            telefone:{
                required:false
            },
            email:{
                required:true,
                email:true
            },
            mensagem:{
                required:true
            },
        },
        messages:{
            mensagem:'Por favor, deixe sua mensagem.'
        }
    })
})