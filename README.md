## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

# MVVM (Model-View-ViewModel) com Next.js

MVVM (Model-View-ViewModel) é um padrão de arquitetura de software que separa a lógica de apresentação da lógica de negócios e dos dados. Ele é amplamente utilizado em aplicações com interfaces de usuário complexas, como as de desktop e mobile, mas também pode ser aplicado em aplicações web.

## Componentes do MVVM

### Model (Dados)
Representa a estrutura dos dados e a lógica de negócios. Ele não tem conhecimento da UI e é responsável por fornecer e manipular os dados.

- **Obter:** chamadas a API
- **Manipular:** gerenciamento de estados (Redux) ou similar

Estrutura de pastas:
```
/models
    /stores (Redux)
    /services (Chamadas a API)
```

### View (Tela)
É a camada de interface do usuário. Ela exibe os dados e permite a interação do usuário, mas não contém lógica de negócios. A View é responsável por exibir a interface do usuário e interagir com o usuário.

Estrutura de pastas:
```
/pages ou /templates
```

### ViewModel (Abstração)
Atua como uma ponte entre o Model e a View. Ele contém a lógica de apresentação e manipula os dados que a View exibe. A ViewModel pode comunicar-se com o Model para buscar ou manipular dados e expô-los de uma forma que a View possa utilizar.

Estrutura de pastas:
```
/view-model
    /hooks
    /utils
    /components
```

### Conceitos Importantes
- A ViewModel pode utilizar vários Models diferentes mas uma view pode chamar um único ViewModel.
- A ideia é separar o código em três partes: Dados, Visão e Abstração.

## Referências
- [Medium - MVVM: Simplificando o Desenvolvimento Mobile para Iniciantes](https://medium.com/orangejuicefc/mvvm-simplificando-o-desenvolvimento-mobile-para-iniciantes-419ade97bc42)
- [GitHub - Next.js Architecture MVVM](https://github.com/GabrielFratelli/nextjs-architecture-mvvm/tree/main)