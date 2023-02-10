# ignitetimer

Capítulo 2: Estrutura da aplicação - Configurando ESLint

O ESLint permite que a gente configure diversas regras para padronizar a organização do nosso código.

Isso vai desde como deve ser o comportamento de quebras de linha, ponto-e-vírgula, vírgulas e até mesmo regras para nomeação de variáveis ou plugins que ajudam a gente à não esquecer algumas regras do React.

Nessa aula, veremos como configurar o ESLint utilizando o plugin de padrões que utilizamos na Rocketseat, sem a necessidade de fazer uma série de configurações manuais.

Caso queira ver as configurações utilizadas nesse plugin, você pode acessar o repositório oficial com o código dessas configurações para o React: https://github.com/Rocketseat/eslint-config-rocketseat/blob/main/react.js

O ESLint possui uma enorme lista de rules (regras) que você pode configurar, e todas estão disponíveis através desse link da documentação oficial: https://eslint.org/docs/rules/

Caso queira ver mais sobre como configurar o ESLint manualmente, você pode ver o guia de Getting Started do ESLint disponível no seguinte link: https://eslint.org/docs/user-guide/getting-started


Capitulo 2: Páginas e rotas - React Router DOM

Nessa aula, veremos sobre como configurar a navegação da nossa aplicação para que ela tenha múltiplas páginas.

Para isso, vamos instalar a biblioteca React Router DOM e iremos estruturar a navegação da nossa aplicação.


Capitulo 2: Páginas e rotas - Layout de rotas

Agora vamos ver como criar um Layout padrão para a nossa aplicação, para que possa ser reaproveitado entre as duas páginas que criamos.


Capitulo 2: Páginas e rotas - Estilização do Layout e Componente: Header

Agora vamos ver como organizar o nosso layout e começar a estilização dele para já conseguirmos visualizar como ele ficará na nossa aplicação.

Vamos também estilizar o nosso componente Header e adicionar funcionalidades do react-router para conseguirmos navegar entre as páginas.


Capitulo 2: Páginas e rotas - Página: Home

Agora vamos criar a estrutura base da nossa página Home, adicionando todo o HTML estilizando ela para já dar a cara do nosso Layout do Figma.


Capitulo 2: Páginas e rotas - Finalização da Home

Vamos agora finalizar a estilização da nossa página Home, adicionando estilos ao formulário e botões dessa página.

Capitulo 2: Páginas e rotas - Aprimorando os inputs

Agora para adicionar detalhes finais e aprimorar ainda mais o funcionamento da aplicação, vamos ver alguns elementos especiais do HTML que nos permitem personalizar as recomendações do Input.


Capitulo 2: Páginas e rotas - Página: History

Nessa aula vamos começar a implementar a estrutura e estilização da nossa página de History, criando a tabela com conteúdo fictício e já fazendo a estilização base dela.


Capitulo 2: Páginas e rotas - Componente: Status

Nessa aula vamos estilizar o status da nossa listagem do histórico e aprender algumas funcionalidades mais avançadas do TypeScript para tornar essa funcionalidade mais dinâmica.


Capitulo 3: Formulários - React Hook Form

Para adicionar funcionalidade ao nosso formulário, nós vamos utilizar uma das principais bibliotecas de formulários para o react, a react-hook-form.

Vamos ver como utilizar o hook que a biblioteca provém para que consigamos recuperar os dados dos nossos input ao submit do formulário.


Capitulo 3: Formulários - Validando formulários

Nessa aula vamos ver como configurar e utilizar a biblioteca zod e como integrar ela com o react-hook-form para adicionar mais camadas de validação para nosso formulário.


Capitulo 3: Formulários - TypeScript no formulário, inferindo tipagem com o zod

Vamos ver agora como adicionar uma integração do react-hook-form ao TypeScript, adicionando interfaces para que o TypeScript entenda todos os campos existentes no nosso formulário de uma forma mais automatizada.


Capitulo 3: Formulários - Resetando formulário

Nessa aula iremos ver como resetar os campos do nosso formulário, para que assim que uma task seja criada o formulário seja limpo automaticamente para que o usuário possa criar uma nova task em outro momento.


Capitulo 3: Funcionalidades da aplicação - Ciclo completo

Para também ter o histórico de todos os ciclos que foram completos, vamos agora desenvolver a funcionalidade que vai anotar a data de finalização de um ciclo quando ele chegar ao fim.


Capitulo 4: Funcionalidades da aplicação - Iniciando novo ciclo

Nessa aula, vamos começar a adicionar funcionalidade na nossa aplicação.

Vamos rever alguns conceitos importantes sobre estado, e já entender como será o fluxo para salvar os ciclos na nossa aplicação.



Capitulo 4: Funcionalidades da aplicação - Criando countdown

Agora que conseguimos tornar um ciclo em ativo, vamos criar o código responsável por calcular e exibir em tela o valor restante para finalização do ciclo.



Capitulo 4: Funcionalidades da aplicação - Reduzindo countdown

Vamos agora continuar o desenvolvimento do nosso countdown, criando a lógica responsável por diminuir o contador de tempo, e também adicionar uma funcionalidade que reflete o tempo restante no título da página.



Capitulo 4: Funcionalidades da aplicação - Mudando title da página

Agora que conseguimos reduzir o countdown, percebemos que existem ainda alguns bugs que acontecem quando criamos mais de um ciclo. Nessa aula vamos corrigir esses bugs e também adicionar uma funcionalidade que reflete o tempo restante no título da página


Capitulo 4: Funcionalidades da aplicação - Interromper ciclo

Nessa aula, vamos desenvolver a funcionalidade de interromper um ciclo para cadastrarmos um outro, e também anotar a data para manter um histórico de quando o ciclo foi interrompido.



Capitulo 4: Funcionalidades da aplicação - Separando componentes

Agora vamos começar a criar uma organização melhor para o nosso projeto, para tirar toda a responsabilidade de somente da página Home e separar em diversos componentes que possuem responsabilidades diferentes.


Capitulo 4: Funcionalidades da aplicação - Prop Drilling no React

O Prop Drilling é um termo utilizado para quando temos propriedades que estão se repassando em diversas camadas da nossa árvore de componentes.

Nessa aula, vamos ver como isso pode ser prejudicial e entender melhor o problema.


Capitulo 5: Entendendo contextos

Vamos introduzir nessa aula um novo conceito, chamado de Contextos no React e vamos criar nosso primeiro Contexto para entender seus principais conceitos e forma de utilização.


Capitulo 5: Contexto no React - Convertendo para contexto

Nessa aula vamos alterar o código que criamos com Prop-Drilling para utilizar um Contexto criaremos para compartilhar informações entre os componentes.


Capitulo 5: Contexto no React - Contexto no formulário

Agora que já temos o Contexto funcionando com o nosso Countdown, precisamos também utilizar esse contexto para o formulário de criação de ciclos.

Nessa aula, iremos fazer nossa aplicação voltar funcionar só que utilizando a ContextAPI e também veremos algumas funcionalidades legais do react-hook-form.


Capitulo 5: Contexto no React - Contexto entre rotas

Agora que nos aprofundamos mais no conceito de Contexto, nessa aula iremos aprender como deixar as informações dos Contextos disponíveis para que possam ser usadas em várias rotas da aplicação.


Capitulo 5: Contexto no React - Reset do formulário

Nesta aula iremos criar uma nova função de reset para o formulário para que não seja necessário levar nenhuma biblioteca pra dentro do contexto.


Capítulo 5: Contexto no React - Listagem do histórico

Agora vamos partir pra listagem de todos os dados do Contexto no nosso histórico de forma dinâmica.


Capitulo 5: Contexto no React - Formatação de data

Nesta aula iremos aprender a formatar a data de início utilizando o método formatDaistanceToNow da biblioteca date-fns.

Capitulo 6: Reducers - Criando reducer de ciclos

Agora vamos aprender um novo conceito, chamado de userReducer que serve para armazenar informações mais complexas e que demandam muitas linhas de código para alterá-las.
Nessa aula, iremos aplicar o userReducer nos ciclos da nossa aplicação.


Capitulo 6: Reducers - Salvando um objeto no Reducer

Nessa aula iremos nos aprofundar mais no contexto de reducer e aprender que podemos salvar várias informações nele, inclusive um objeto, sem atrapalhar a sua funcionalidade.
