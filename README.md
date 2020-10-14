# Getnet51 (VueJS App)
**Super get v1.50** - Hackaton Getnet 2020 - Team 51


Os comando abaixo consideram que você já tem instalado o NodeJS e o Yarn, ambos em última versões. Pois não iremos entrar em detalhes desse.


## Instale as dependências após ter clonado/baixado o código
```bash
yarn
```

### Caso queira, inicie o aplicativo no modo de desenvolvimento (_recarregamento de hot-code, relatório de erros, etc._)
```bash
quasar dev -m pwa
```

### Lint os arquivos
```bash
yarn run lint
```

### Crie o aplicativo para produção
```bash
quasar build -m pwa
```

> ##### Dica: 
>    Os arquivos criados em "dist/pwa" devem ser servidos atravez de um servidor HTTP.
>    Abrir o "index.html" sobre direto no navegador não funcionará!

> ##### Dica: 
>    Você pode usar o comando abaixo para criar um servidor web, tanto para teste ou produção.
>    Se você estiver usando o modo "histórico" do Vue Router, não se esqueça de especifique o parâmetro "--history".

### Iniciando a aplicação atravez servidor próprio
```bash
quasar serve dist/pwa -s -o
```

### Personalize e/ou configure
Veja [Configurando quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).



---
### Autores
|: _Vitor Botelho_ |: [vitor@botpet.net](mailto:vitor@botpet.net) |: [Github](https://github.com/Homunculo) |
|---|---|---|
| _Carine Zanotto_ | [camensagem@gmail.com](mailto:camensagem@gmail.com) |   |
| _Andréia Bujnicki_ | [andreabujnickivieira@gmail.com](mailto:andreabujnickivieira@gmail.com) |   |
| _Guilherme Miranda_ | [guilherme@mobiler.com.br](mailto:guilherme@mobiler.com.br) |   |
| _Cláudio Souza_ | [claudio.jcas@gmail.com](mailto:claudio.jcas@gmail.com) | [Github](https://github.com/claudiojcas) |

