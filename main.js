$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<span>${novaTarefa}</span>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');
        
        $('li').click(function() {
            $(this).addClass("finalizada");
        });
    })
})