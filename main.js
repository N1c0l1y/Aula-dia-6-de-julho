document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. Controle do Menu Mobile (Hambúrguer)
    // ==========================================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        // Previne o scroll da página atrás do menu quando ele estiver aberto no mobile
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em qualquer item de link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    // ==========================================================================
    // 2. Sistema de Animação Baseada em Scroll
    // ==========================================================================
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.85; // Dispara a animação quando o elemento chega a 85% da tela

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('animated');
            }
        });
    };

    // Executa uma vez na carga para exibir elementos da viewport inicial (Hero)
    checkScroll();
    window.addEventListener('scroll', checkScroll);


    // ==========================================================================
    // 3. Simulação de Desconexão Analógica (Recurso Interativo)
    // ==========================================================================
    const simularBtn = document.getElementById('simular-btn');
    const offlineOverlay = document.getElementById('offline-overlay');
    const simulationText = document.getElementById('simulation-text');
    const body = document.body;

    simularBtn.addEventListener('click', () => {
        // Exibe o overlay de queda de conexão
        offlineOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Estágio 1: Simulação do corte
        setTimeout(() => {
            simulationText.textContent = "Mudando para frequências de rádio locais...";
        }, 1000);

        // Estágio 2: Remove o painel estático de erro e aplica o filtro vintage geral
        setTimeout(() => {
            offlineOverlay.classList.add('hidden');
            body.classList.add('simulacao-analogica');
            document.body.style.overflow = 'auto';
            
            // Modifica o texto do botão para indicar o estado
            simularBtn.innerHTML = `<i class="fa-solid fa-radio"></i> Modo Analógico Ativo`;
            simularBtn.style.borderColor = "var(--accent)";
            
            alert("A internet caiu! O site agora está em modo analógico (preto e branco). Explore os impactos físicos da falta de rede abaixo.");
        }, 2500);
    });


    // ==========================================================================
    // 4. Recurso Interativo Divertido no Rodapé
    // ==========================================================================
    const fakeShare = document.getElementById('fake-share');
    fakeShare.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Sem internet disponível! Por favor, pegue papel, caneta, escreva a URL deste site e envie para o seu amigo via Correios. ✉️");
    });
});
