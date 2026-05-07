[README.txt](https://github.com/user-attachments/files/27461308/README.txt)

## ✨ Funcionalidades Implementadas

### 1. Navegação por Âncoras (Single Page)
- Todo o conteúdo está em uma única página
- Menu navega para as seções: Sobre, Formação, Portfólio e Contato
- Rolagem suave ao clicar nos links

### 2. Seções Obrigatórias
- **Sobre mim**: Informações pessoais, hobbies e objetivos
- **Formação**: Cursos, idiomas e formação educacional
- **Portfólio**: Links para trabalhos (simulação de projetos)
- **Contato**: Formulário com validação em JavaScript

### 3. Validação de Formulário
- Campo Nome: obrigatório, mínimo 2 caracteres
- Campo E-mail: obrigatório, formato válido (regex)
- Campo Mensagem: obrigatório, mínimo 10 caracteres
- Validação em tempo real (evento blur)

### 4. Simulação de Envio
- Previne envio real do formulário
- Limpa os campos após validação bem-sucedida
- Exibe modal de confirmação "Mensagem enviada com sucesso!"

### 5. Tema Claro/Escuro
- Botão flutuante para alternar entre temas
- Persiste a preferência no localStorage
- Ícone muda entre lua (escuro) e sol (claro)

### 6. Menu Responsivo
- Menu hamburguer em dispositivos móveis
- Fecha automaticamente ao clicar em um link

### 7. Destaque do Menu Ativo
- Detecta seção visível na tela durante a rolagem
- Aplica estilo diferenciado no link correspondente

## 🎨 Design e Layout

- Design responsivo (adaptado para desktop, tablet e mobile)
- Cores baseadas em variáveis CSS para fácil manutenção
- Cards com sombras e animações suaves
- Ícones da biblioteca Font Awesome (apenas para ícones, não é framework)

## 📱 Responsividade

- **Desktop**: Menu horizontal, layout em grid
- **Tablet**: Ajustes de padding e espaçamento
- **Mobile**: Menu hamburguer, elementos em coluna

## 🔧 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/Juncos01/site_portifolio/
