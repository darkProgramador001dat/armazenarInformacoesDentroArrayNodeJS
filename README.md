[Manual do backend]


Aqui construimos 3(três) exemplos de como utilizar Arrays, no backend. Para realizar a verificação do administrador do sistema.
Com arrays podemos armazenar objetos chave e valor, podendo fazer uma verificação vindo do frontend.
Neste codigos foi utilizado arrays para armazenar nome e senha, Se as credencias do usuario for igual do arrays. Podemos permitir
o acesso, ou restringir.

Descrição de cada codigo do repositorio aqui. 
1. Codigo adicionar(PUSH) um usuario/senha vindo do frontend dentro do Array. (pushServer.js)
2. Comparar um usuario/senha do array vindo do formulario frontend, formulario JSON. (conditionalServer.js)
3. Comparar um usuario/senha do array criptografado vindo do formulario frontend. (HashArrayServer.js)

Possiveis vulnerabilidades no codigo.
1. Ataques de força bruta GET ou POST tambem podera revelar as credencias contida no Array.
2. Um usuario acessando a maquina manualmente, podera ler o codigo fonte e roubar as credencias. Mesmo criptografada.
3. Um usuario acessando a maquina manualmente podera adicionar 1(um) novo usuario, assim ele podera ter o acesso administrativo,
com seu usuario criado. Manter o codigo-fonte apenas para os de confiança.

Ops, porém o estudo sobre Array para sistemas localhost, e muito bom. Com arrays e possivel fazer varias brincadeira e formas de 
desenvolver, lembre-se em uso profissional não utilize Arrays.
