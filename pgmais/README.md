# Validador de mensagens
<p>Este repositório tem o propósito de antender as espectativas do Teste Dev solicitado pela PG Mais</p>
<p>Consiste em uma página <i>web</i> onde é possível relizar upload de um arquivo .txt ou .csv para realizar uma validação dos dados seguindo algumas regras.</p>
<hr>

<h2>Regras</h2>
<ul>
    <li>As mensagens que contenham um <a href="#validacao_telefones">telefone inválido</a> serão bloqueadas;</li>
    <li>Mensagens destinadas a telefones que estão na <a href="#blacklist">BlackList</a> serão bloqueadas;</li>
    <li>Mensagens destinadas a telefones do estado de São Paulo serão bloqueadas;</li>
    <li>Mensagens com horário de agendamento após as 19:59:59 serão bloqueadas;</li>
    <li>Mensagens com mais de 140 caracteres serão bloqueadas</li>
    <li>Caso haja mais de uma mensagem para o mesmo telefone de destino, apenas a mensagem válida com o menor horário de agendamento será considerada;</li>
</ul>
<hr>

<h2 id="validacao_telefones">Validação de telefones</h2>
<p>A validação dos telefones é realizada de acordo com os critérios abaixo:</p>
<ul>
    <li>O DDD deve ser composto por 2 dígitos;</li>
    <li>O DDD deve ser válido (DDDs do Brasil);</li>
    <li>O número do celular deve ser composto por 9 dígitos;</li>
    <li>O número do celular decve começar sempre com o número 9;</li>
    <li>O segundo dígito do número do celular deve ser maior que 6;</li>
</ul>
<hr>

<h2 id="blacklist">BlackList</h2>
<p>A verificação de números em blacklist deve ser realizada atraves de uma api: https://front-test-pg.herokuapp.com/blacklist/:phone</p>
<p>A validação deve ser feita pelo status de retorno, caso seja 200 o número esta em blacklist, do contrário o status será 404</p>