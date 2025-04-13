# 🧩 Hackathon Clinic Plus - Shell (Host Application)

Este projeto é a aplicação principal do Hackathon **Clinic Plus**, que utiliza **Angular 19** com **Module Federation nativa** para integrar múltiplos Micro Frontends (MFEs).

## 📦 Tecnologias Utilizadas

- Angular 19
- Native Module Federation com `@angular/core/federation`
- Esbuild (bundler agnóstico)
- Standalone Components
- Lazy Loading via Module Federation

## 🏗️ Estrutura

Este projeto atua como **Shell**, ou seja, o container principal que carrega outros MFEs como **módulos remotos**, de forma desacoplada.

## 📁 Organização

```
hackathon-clinic-plus-shell/
├── src/
│   ├── app/
│   │   └── app.routes.ts
│   └── main.ts
├── federation.config.ts
├── angular.json
```

## 🚀 Como Rodar

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar o Shell (porta 4200)

```bash
ng serve --port 4200
```

Acesse [http://localhost:4200](http://localhost:4200)

---

## 🔗 Módulos Remotos Conectados

- `hackathon-clinic-plus-mfe` (rodando em `http://localhost:4201`)

---

## 🛠️ Como adicionar um novo MFE

1. Declare o remote em `federation.config.ts`
2. Adicione rota dinâmica em `app.routes.ts` usando `loadComponent` ou `loadChildren`

---

## 💬 Comunidade

Dúvidas? Poste no canal do Hackathon ou abra uma Issue.
