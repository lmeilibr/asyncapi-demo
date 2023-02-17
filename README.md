# asyncapi-demo

## Gerando Código
```
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
source ~/.profile
npm install -g @asyncapi/generator
```
## Gerando Documentação
```
ag asyncapi.yaml @asyncapi/html-template -o docs
```
## Gerando o código
```
ag asyncapi.yaml @asyncapi/nodejs-ws-template --force-write -p server=dev 
```
