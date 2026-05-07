/**
 * ============================================
 * FUNDAMENTOS DA PROGRAMAÇÃO WEB - PORTFÓLIO
 * JAVASCRIPT PURO (SEM FRAMEWORKS)
 * Autor: Cosmo Izidoro dos Santos Junior
 * ============================================
 * 
 * Funcionalidades implementadas:
 * 1. Validação de formulário de contato
 * 2. Simulação de envio com modal de confirmação
 * 3. Alternância de tema (claro/escuro)
 * 4. Menu responsivo (hamburguer para mobile)
 * 5. Smooth scroll para navegação por âncoras
 * 6. Destaque do menu ativo durante rolagem
 */

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 1. MENU RESPONSIVO (HAMBURGUER) =====
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // ===== 2. SMOOTH SCROLL PARA ÂNCORAS =====
    // Seleciona todos os links de navegação que começam com #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verifica se é um link de âncora válido
            if (href && href !== '#') {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Fecha o menu mobile se estiver aberto
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // ===== 3. DESTAQUE DO MENU ATIVO DURANTE ROLAGEM =====
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightActiveSection() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Offset para melhor detecção
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Chama uma vez ao carregar
    
    // ===== 4. ALTERNÂNCIA DE TEMA (CLARO/ESCURO) =====
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;
    const iconTheme = themeSwitcher.querySelector('i');
    
    // Verifica preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        iconTheme.classList.remove('fa-moon');
        iconTheme.classList.add('fa-sun');
    }
    
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            iconTheme.classList.remove('fa-moon');
            iconTheme.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            iconTheme.classList.remove('fa-sun');
            iconTheme.classList.add('fa-moon');
        }
    }
    
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleTheme);
    }
    
    // ===== 5. VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====
    const form = document.getElementById('contactForm');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const nomeError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const mensagemError = document.getElementById('mensagemError');
    
    // Função para validar e-mail com regex
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Função para validar um campo específico
    function validateField(field) {
        const value = field.value.trim();
        
        switch(field.id) {
            case 'nome':
                if (value === '') {
                    nomeError.textContent = 'O nome é obrigatório';
                    return false;
                } else if (value.length < 2) {
                    nomeError.textContent = 'Nome deve ter pelo menos 2 caracteres';
                    return false;
                } else {
                    nomeError.textContent = '';
                    return true;
                }
                
            case 'email':
                if (value === '') {
                    emailError.textContent = 'O e-mail é obrigatório';
                    return false;
                } else if (!validateEmail(value)) {
                    emailError.textContent = 'Digite um e-mail válido (exemplo: usuario@dominio.com)';
                    return false;
                } else {
                    emailError.textContent = '';
                    return true;
                }
                
            case 'mensagem':
                if (value === '') {
                    mensagemError.textContent = 'A mensagem é obrigatória';
                    return false;
                } else if (value.length < 10) {
                    mensagemError.textContent = 'Mensagem deve ter pelo menos 10 caracteres';
                    return false;
                } else {
                    mensagemError.textContent = '';
                    return true;
                }
                
            default:
                return true;
        }
    }
    
    // Adiciona eventos de validação em tempo real (blur)
    if (nomeInput) {
        nomeInput.addEventListener('blur', () => validateField(nomeInput));
    }
    if (emailInput) {
        emailInput.addEventListener('blur', () => validateField(emailInput));
    }
    if (mensagemInput) {
        mensagemInput.addEventListener('blur', () => validateField(mensagemInput));
    }
    
    // ===== 6. MODAL DE CONFIRMAÇÃO =====
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalCloseBtn = document.querySelector('.modal-btn');
    
    function showModal() {
        modal.style.display = 'flex';
    }
    
    function hideModal() {
        modal.style.display = 'none';
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideModal);
    }
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', hideModal);
    }
    
    // Fecha modal ao clicar fora do conteúdo
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // ===== 7. SUBMISSÃO DO FORMULÁRIO E SIMULAÇÃO DE ENVIO =====
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Valida todos os campos antes de enviar
            const isNomeValid = validateField(nomeInput);
            const isEmailValid = validateField(emailInput);
            const isMensagemValid = validateField(mensagemInput);
            
            if (isNomeValid && isEmailValid && isMensagemValid) {
                // Simulação de envio bem-sucedido
                
                // Limpa os campos do formulário
                form.reset();
                
                // Limpa mensagens de erro
                nomeError.textContent = '';
                emailError.textContent = '';
                mensagemError.textContent = '';
                
                // Exibe modal de confirmação
                showModal();
            } else {
                // Exibe alerta de erro caso a validação falhe
                alert('Por favor, preencha todos os campos corretamente antes de enviar.');
            }
        });
    }
    
    // ===== 8. INTERAÇÃO ADICIONAL: Botão "Ver projeto" do Portfólio =====
    const viewPortfolioBtn = document.getElementById('viewPortfolioBtn');
    if (viewPortfolioBtn) {
        viewPortfolioBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Este portfólio está disponível no GitHub! Em breve mais projetos serão adicionados.');
        });
    }
    
    // ===== 9. FUNCIONALIDADE ADICIONAL: Menu ativo com estilo =====
    // Adiciona classe CSS para o link ativo
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--accent-color) !important;
            border-bottom: 2px solid var(--accent-color);
        }
        
        .nav-link {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Pequeno atraso para garantir que as seções foram carregadas
    setTimeout(() => {
        highlightActiveSection();
    }, 100);
});

// ===== COMENTÁRIOS EXPLICATIVOS =====
/**
 * Funcionalidades implementadas neste JavaScript:
 * 
 * 1. Menu Responsivo:
 *    - Menu hamburguer que aparece em dispositivos móveis
 *    - Alterna visibilidade da navegação ao clicar no botão
 * 
 * 2. Smooth Scroll:
 *    - Rolagem suave ao clicar nos links de navegação
 *    - Funciona com as âncoras (#sobre, #formacao, etc.)
 * 
 * 3. Destaque do Menu Ativo:
 *    - Detecta qual seção está visível na tela
 *    - Aplica classe 'active' ao link correspondente
 * 
 * 4. Tema Claro/Escuro:
 *    - Alterna entre temas utilizando classes CSS
 *    - Persiste a preferência no localStorage
 *    - Ícone muda entre lua e sol
 * 
 * 5. Validação de Formulário:
 *    - Valida nome (não vazio e mínimo 2 caracteres)
 *    - Valida e-mail (formato válido com regex)
 *    - Valida mensagem (não vazia e mínimo 10 caracteres)
 *    - Validação em tempo real (evento blur)
 * 
 * 6. Modal de Confirmação:
 *    - Exibe modal após envio bem-sucedido
 *    - Pode ser fechado de múltiplas formas
 * 
 * 7. Simulação de Envio:
 *    - Previne envio real (e.preventDefault)
 *    - Limpa formulário após validação
 *    - Exibe mensagem de sucesso
 * 
 * NENHUM FRAMEWORK OU BIBLIOTECA FOI UTILIZADO.
 * Todo o código é JavaScript puro (Vanilla JS).
 */