$(document).ready(() => {
	
    $('#documentacao').on('click', () => {
        $('#pagina').load('documentacao.html')
    })

    $('#suporte').on('click', () => {
        $('#pagina').load('suporte.html')
    })


    //Implementando AJAX
    $('#competencia').on('change', e => {
        
        let competencia = $(e.target).val()
        


        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`,
            dataType: 'json',
            success: dados => 
                {
                   $('#numeroVendas').html(dados.numeroVendas)
                   $('#totalVendas').html(dados.totalVendas)
                   //------------------------------------------------//
                   $('#clientesAtivos').html(dados.clientesAtivos)
                   $('#clientesInativos').html(dados.clientesInativos)
                   $('#totalReclamacao').html(dados.totalRecl)
                   $('#totalElogios').html(dados.totalElog)
                   $('#totalSugestao').html(dados.totalSuges)
                   $('#totalDespesas').html(dados.totalDesp)
                    console.log(dados)
                },
            error: erro => { console.log(erro)}
        })

        //Metodo, url, dados, sucesso, erro.
    })

})