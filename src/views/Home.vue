<template>
    <v-container>
        <h1>Desafio Front-end tets</h1>

        <p>Funcionalidades que devem ser implementadas na aplicação:</p>

        <ul>
            <li>
                Um formulário de cadastro que faça as seguintes validações e
                funcionalidades. Ao finalizar o preenchimento e clicar no botão
                “submit”, ele deve apresentar as informações cadastradas em uma
                nova página ou modal, devidamente organizadas:

                <ul>
                    <li>
                        Data de nascimento - campo em formato data brasileiro:
                        máxima 65 anos, mínima 18 anos
                    </li>
                    <li>Nome completo: ao menos 2 palavras</li>
                    <li>CPF: obrigatório e válido segundo a regra oficial</li>
                    <li>
                        Espécie do pet - select obrigatório: opções “cão” ou
                        “gato”
                    </li>
                    <li>
                        Raça do pet - select obrigatório: 5 raças quaisquer de
                        “cão”, e mais 5 raças quaisquer de “gato”. O campo deve
                        listar somente as raças adequadas dependendo do valor
                        selecionado no campo anterior. Uma sexta opção em ambas
                        as listas deve se chamar “outro”
                    </li>
                    <li>
                        Outro: caso selecionado no campo anterior, deverá
                        aparecer um campo de texto obrigatório, do contrário ele
                        não deverá aparecer e nem ser validado
                    </li>
                    <li>
                        Renda mensal - somente números e com um prepend de “R$”:
                        valor mínimo de R$ 1000,00
                    </li>
                    <li>
                        CEP - obrigatório e formatado corretamente: implementar
                        um buscador de CEP para trazer o endereço completo do
                        CEP fornecido, para ser distribuído nos campos abaixo
                        <ul>
                            <li>Rua: obrigatório</li>
                            <li>Bairro: obrigatório</li>
                            <li>Cidade: obrigatório</li>
                            <li>
                                Estado: obrigatório, somente 2 letras maiúsculas
                            </li>
                        </ul>
                    </li>
                    <li>
                        Caso qualquer informação esteja incorreta ou incompleta,
                        o formulário deverá mostrar para o usuário o que falta e
                        onde.
                    </li>
                </ul>
            </li>
            <li>
                Um botão que chama a API e traz dados sobre o Brasil, mostrando
                em tela todos os dados que ela disponibiliza
            </li>
            <li>
                Consultando a API, uma lista de blocos regionais. Quando o
                usuário clicar em um dos itens dessa lista, a aplicação deve
                carregar os nomes dos países que pertencem ao bloco selecionado
                e suas respectivas coordenadas geográficas
            </li>
            <li>
                Uma função de busca por país. O usuário deve poder digitar o
                nome de um país em um campo de texto, e a aplicação deve
                conseguir encontrar o país em questão ou qualquer país de nome
                similar, mostrando em tela seu nome correto e quais são seus
                idiomas oficiais
                <ul>
                    <li>
                        Ao clicar em um dos idiomas na tela, apresentado pela
                        função anterior, a aplicação deve listar os nomes de
                        todos os países que possuem o idioma em comum
                    </li>
                </ul>
            </li>
        </ul>

        <p>O código fonte da solução deve ser disponibilizado em um repositório do Github ou equivalente para a nossa análise, e um link para o mesmo deve ser entregue dentro do prazo estabelecido, contendo um readme mínimo sobre como executar a aplicação, caso seja aplicável.</p>

        <p>Disponibilizar a aplicação online para navegação é um diferencial.</p>
        <p>Prazo de envio: 20/10</p>
    </v-container>
</template>

<script>
</script>
