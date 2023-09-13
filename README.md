# Projeto de TCC focado numa aplicação web para auxiliar na escolha do padrão de interface

## Instalação das tecnologias utilizadas no ambiente
```sh
apt install nodejs npm
```

```sh
npm install pm2 -g
```

## Dentro da pasta projeto
### Instalar das dependências 
```sh
npm install
```

### Criar build do projeto
```sh
npm run build
```

### Iniciar aplicação em produção
```sh
pm2 start server.js