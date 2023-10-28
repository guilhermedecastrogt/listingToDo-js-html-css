document.addEventListener('DOMContentLoaded', function() {

    const EntradaTarefa = document.getElementById('entrada-tarefa')
    const botadoAdicionarTarefa = document.getElementById('adicionar-tarefa-botao')
    const ListaDeTarefas = document.getElementById('lista-de-tarefas')
    
    function AdicionarTarefa(){
        
        const textoTarefa = EntradaTarefa.value

    
        if(textoTarefa.trim() !== ''){ // O .TRIM TIRA ESPAÇOS ANTES E DEPOIS DA STRING. E A CONDIÇÃO VERIFICA SE TEM CONTEÚDO NA STRING, CASO TENHA APENAS ESPAÇOS, A FUNÇÃO NÃO SERÁ EXECUTADA
            
            var itemlista = document.getElementById('lista-de-tarefas').querySelectorAll('li')
            
            if (itemlista.length === 0) {
                
                let itemm = document.createElement('h2')
                itemm.innerHTML = `
                    <h2 id="tituloconcluir">A fazeres:</h2>
                `
                ListaDeTarefas.appendChild(itemm)
                
                // Cria um elemento <h2>
                //var heading = document.createElement('h2');
                //heading.textContent = 'Nenhum item encontrado';
            
                // Adiciona o <h2> à lista
                //document.getElementById('lista-de-tarefas').appendChild(heading);
            }

            //var botaoTestee = document.getElementById('testee')
            //function teestee(){
                //alert('funcionando')
                //var meutitulo = document.getElementById('tituloconcluir')
                //meutitulo.innerHTML = "";
            //}
            //botaoTestee.addEventListener('click', teestee)

            //parte CRIANDO A LISTA
            const ItemTarefa = document.createElement('li') // .createElemente cria um nomo elemento, nesse cado um tipo <li>
            ItemTarefa.classList.add('adicionar-tarefa') // Adicionar um class="adicionar-tarefa" no <li> gerado anteriormente
            ItemTarefa.innerHTML = `
                <span>${textoTarefa}</span>
                <button class="completar">Concluir Tarefa</button>
                <button class="botao-delete">Remover</button>
                <br>
                <br>
            `  //Adicionar um <span> para estilo e um botão para adicionar a função de deletar da lista esse item
            ListaDeTarefas.appendChild(ItemTarefa)
            
    
            
            //Fazer a porra do botao de remover da ItemTarefa funcionar
            const botaoDeletar = ItemTarefa.querySelector('.botao-delete') //usar ponto pq é uma classe, se fosse id seria #
            function deletando(event){
                
                var removerTitulo = document.getElementById('lista-de-tarefas').querySelectorAll('li')
                var removerTituloT = document.getElementById('tituloconcluir')
                var removerBotaoDelete = document.getElementById('limpar')
                var verificarconcluir = document.getElementById('lista-de-tarefas-concluidas').querySelectorAll('li')

                //var query = document.querySelectorAll("#tituloconcluir")
                //query.innerHTML = ""

                if(removerTitulo.length === 1){
                    removerTituloT.remove()
                    if(verificarconcluir.length === 0){
                        removerBotaoDelete.remove()
                    }
                }

                event.stopPropagation()
                ItemTarefa.remove()


            }
            botaoDeletar.addEventListener('click', deletando)
            

            
            // LISTA DE TAREFAS CONCLUÍDAS
            
            
            const botaoConcluirTarefa = ItemTarefa.querySelector('.completar')
            const ListaDeTarefasConcluidas = document.getElementById('lista-de-tarefas-concluidas')
            
            function MarcarComoCompleto (event){

                var itemlistaconcluido = document.getElementById('lista-de-tarefas-concluidas').querySelectorAll('li')

                var removerTitulo = document.getElementById('lista-de-tarefas').querySelectorAll('li')
                var removerTituloT = document.getElementById('tituloconcluir')

                //var query = document.querySelectorAll("#tituloconcluir")
                //query.innerHTML = ""

                if(removerTitulo.length === 1){
                    removerTituloT.remove()
                }

                if(itemlistaconcluido.length === 0){
    
                    var itemmconcluido = document.createElement('h2')
                    itemmconcluido.innerHTML = `
                        <h2 id="agoravai">Concluídas:</h2>
                    `
                    ListaDeTarefasConcluidas.appendChild(itemmconcluido)
                }
        
                event.stopPropagation()
                ItemTarefa.remove()

                const ItemTarefaConcluida = document.createElement('li')
                ItemTarefaConcluida.classList.add('adicionar-tarefa-concluida')
                ItemTarefaConcluida.innerHTML = `
                    <span>${textoTarefa}</span>
                    <span id="finalmenteConcluido"> Tarefa Concluída</span>
                    <button class="botao-delete">Remover</button>
                    <br>
                    <br>
                `
                
                ListaDeTarefasConcluidas.appendChild(ItemTarefaConcluida)


                //Fazer botão da lista de concluídas funcionar
                const botaoDeletarTarefaConcluida = ItemTarefaConcluida.querySelector('.botao-delete')
                function deletandoConcluida(event){

                    var removerTituloC = document.getElementById('lista-de-tarefas-concluidas').querySelectorAll('li')
                    var removerTituloCT = document.getElementById('agoravai')
                    var removerBotaoDelete = document.getElementById('limpar')
                    var Verificarconcluidas = document.getElementById('lista-de-tarefas').querySelectorAll('li')

                    if(removerTituloC.length === 1){
                        removerTituloCT.remove()
                        if(Verificarconcluidas.length === 0){
                            removerBotaoDelete.remove()
                        }
                    }

                    event.stopPropagation()
                    ItemTarefaConcluida.remove()

                }
                botaoDeletarTarefaConcluida.addEventListener('click', deletandoConcluida)

            }
            
            botaoConcluirTarefa.addEventListener('click', MarcarComoCompleto)


            ListaDeTarefas.appendChild(ItemTarefa) //Adicionar a lista de tarefas criadas
            EntradaTarefa.value = ''; //Limpar a barra de adicionar tarefas
                
        }

        var aparecerbotaoconcluir = document.getElementById('lista-de-tarefas').querySelectorAll('li')
        var aparecerbotatoconcluidas = document.getElementById('lista-de-tarefas-concluidas').querySelectorAll('li')

        console.log(aparecerbotaoconcluir.length)

        if(aparecerbotaoconcluir.length === 1 || aparecerbotatoconcluidas === 1){
        
            var containerprincipal = document.getElementById('containerprincipal')

            const botaooLimpar = document.createElement('div')
            botaooLimpar.innerHTML = `
                <button id="limpar">Limpar</button>
            `
            containerprincipal.appendChild(botaooLimpar)


            const botaoLimpar = document.getElementById('limpar')

            function limpezaConcluir(event){
        
                var lista = document.getElementById('lista-de-tarefas')
                var itens = lista.getElementsByTagName('li')
            
                var mytitleconcluir = document.getElementById('tituloconcluir')
                mytitleconcluir.innerHTML = ""
    
    
                while(itens.length > 0){
                    lista.removeChild(itens[0])
                    mytitleconcluir.innerHTML = ""
                }
            
            }

            function limpezaConcluidas(event){
                location.reload()
            }

            function limpezaConcluidass(event){
        
                var listaa = document.getElementById('lista-de-tarefas-concluidas')
                var itenss = document.getElementsByTagName('li')
    
                var mytitleconcluidas = document.getElementById('agoravai')
                    mytitleconcluidas.innerHTML = ""
    
                while(itenss.length > 0){
                    listaa.remove(itenss[0])
                }

                //var removerBotaoDelete = document.getElementById('limpar')
                //removerBotaoDelete.remove()
            
            }

            botaoLimpar.addEventListener('click', limpezaConcluir)
            botaoLimpar.addEventListener('click', limpezaConcluidas)

        } 


        
    }


    botadoAdicionarTarefa.addEventListener('click', AdicionarTarefa)


});