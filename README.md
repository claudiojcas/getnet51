# Getnet51 (VueJS App)

**Super get v1.50** - Hackaton Getnet 2020 - Team 51

Os comando abaixo consideram que você já tem instalado o NodeJS e o Yarn, ambos em última versões. Pois não iremos entrar em detalhes desse.


## Instale as dependências após ter clonado/baixado o código.
```bash
yarn
```

### Inicie o aplicativo no modo de desenvolvimento (recarregamento de hot-code, relatório de erros etc.)
```bash
quasar dev -m pwa
```

### Lint os arquivos
```bash
yarn run lint
```

### Crie o aplicativo para produção
```bash
quasar build -m wpa
```
Depois de gerado é só utlizar o conteudo do diretório **dist/wpa** em qualquer servidor de Web, Recomendamos o NgInx.

### Testando o aplicativo
```bash
quasar serve dist/pwa -o
```

### Personalize e/ou configure
Veja [Configurando quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
