/* ============================================================
   Plataforma Confluências — script do protótipo
   Injeta a estrutura compartilhada (cabeçalho, rodapé, painel
   lateral e ficha técnica) e liga as interações de demonstração.
   Nada aqui vai para produção: é um protótipo de referência.
   ============================================================ */

(function () {
  'use strict';

  var body = document.body;
  var d = body.dataset;

  /* ---------- utilidades ---------- */
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function iniciais(nome) {
    return nome.trim().split(/\s+/).filter(function (p) { return p.length > 2; })
      .slice(0, 2).map(function (p) { return p[0].toUpperCase(); }).join('');
  }
  window.confIniciais = iniciais;

  window.confToast = function (texto) {
    var area = document.querySelector('.toast-area');
    if (!area) { area = el('<div class="toast-area" aria-live="polite"></div>'); document.body.appendChild(area); }
    var t = el('<div class="toast"></div>');
    t.textContent = texto;
    area.appendChild(t);
    setTimeout(function () { t.remove(); }, 3200);
  };

  var MARCA = '<svg class="brand-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M3 3c0 7 4 9 9 9s9 2 9 9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>' +
    '<path d="M3 21c0-7 4-9 9-9" stroke="#B87A14" stroke-width="1.7" stroke-linecap="round"/>' +
    '</svg>';

  /* ---------- barra de protótipo ---------- */
  function barraProto() {
    return '<div class="proto-bar">Protótipo de referência — dados fictícios, nenhuma ação é real. ' +
      '<a href="index.html">Ver todas as telas</a></div>';
  }

  /* ---------- cabeçalho público ---------- */
  function cabecalhoPublico(rota) {
    var itens = [
      ['profissionais.html', 'Profissionais', '/profissionais'],
      ['artigo.html', 'Artigos', '/artigos'],
      ['eventos.html', 'Eventos', '/eventos'],
      ['apoie.html', 'Apoie', '/apoie']
    ];
    var nav = itens.map(function (i) {
      var atual = rota && rota.indexOf(i[2]) === 0 ? ' aria-current="page"' : '';
      return '<a href="' + i[0] + '"' + atual + '>' + i[1] + '</a>';
    }).join('');

    return '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="home.html">' + MARCA + '<span class="brand-name">Confluências</span></a>' +
      '<nav class="site-nav" aria-label="Navegação principal">' + nav + '</nav>' +
      '<div class="header-actions">' +
      '<a class="btn btn-quiet" href="login.html">Entrar</a>' +
      '<a class="btn btn-primary btn-sm" href="cadastro.html">Criar conta</a>' +
      '</div></div></header>';
  }

  /* ---------- rodapé público ---------- */
  function rodape() {
    return '<footer class="site-footer"><div class="wrap">' +
      '<div class="grid g-4">' +
      '<div><a class="brand" href="home.html" style="color:#fff">' + MARCA +
      '<span class="brand-name">Confluências</span></a>' +
      '<p class="small" style="color:#93A8A2;margin-top:12px;max-width:26ch">Um diretório mantido por quem acredita que cuidado em saúde mental precisa ser encontrável.</p></div>' +
      '<div><h4>Plataforma</h4><ul>' +
      '<li><a href="profissionais.html">Profissionais</a></li>' +
      '<li><a href="artigo.html">Artigos</a></li>' +
      '<li><a href="eventos.html">Eventos</a></li>' +
      '<li><a href="apoie.html">Apoiadores</a></li></ul></div>' +
      '<div><h4>Movimento</h4><ul>' +
      '<li><a href="home.html#sobre">Sobre</a></li>' +
      '<li><a href="home.html#como-funciona">Como funciona</a></li>' +
      '<li><a href="apoie.html">Apoie</a></li>' +
      '<li><a href="cadastro.html">Assine um perfil</a></li></ul></div>' +
      '<div><h4>Legal</h4><ul>' +
      '<li><a href="#">Termos de uso</a></li>' +
      '<li><a href="#">Política de privacidade</a></li>' +
      '<li><a href="#">Política de cookies</a></li>' +
      '<li><a href="#">Fale com a gente</a></li></ul></div>' +
      '</div>' +
      '<div class="footer-bottom">Protótipo de referência · Documento de Especificação v1.0 · Conteúdo fictício</div>' +
      '</div></footer>';
  }

  /* ---------- painel lateral ---------- */
  var MENU_PAINEL = [
    ['Profissional', [
      ['painel.html', 'Início', '/painel'],
      ['painel-perfil.html', 'Meu perfil', '/painel/perfil'],
      ['painel-conteudos.html', 'Meus conteúdos', '/painel/conteudos'],
      ['painel-contatos.html', 'Contatos', '/painel/contatos'],
      ['painel-assinatura.html', 'Minha assinatura', '/painel/assinatura']
    ]]
  ];
  var MENU_ADMIN = [
    ['Administração', [
      ['admin.html', 'Início', '/admin'],
      ['admin-moderacao.html', 'Moderação', '/admin/moderacao'],
      ['#', 'Usuários', '/admin/usuarios'],
      ['#', 'Assinaturas', '/admin/assinaturas'],
      ['#', 'Configurações', '/admin/configuracoes']
    ]]
  ];

  function menuLateral(grupos, rota, usuario, papel) {
    var html = '<aside class="sidebar"><a class="brand" href="home.html">' + MARCA +
      '<span class="brand-name">Confluências</span></a>';
    grupos.forEach(function (g) {
      html += '<div class="side-group">' + g[0] + '</div>';
      g[1].forEach(function (i) {
        var atual = rota === i[2] || (rota && i[2] !== '#' && rota.indexOf(i[2]) === 0 && i[2].length > 8)
          ? ' aria-current="page"' : '';
        html += '<a class="side-link" href="' + i[0] + '"' + atual + '>' + i[1] + '</a>';
      });
    });
    html += '<div class="side-foot"><div class="row" style="gap:10px">' +
      '<span class="avatar avatar-sm">' + iniciais(usuario) + '</span>' +
      '<span><b style="color:#fff;font-weight:500;display:block;font-size:.88rem">' + usuario + '</b>' +
      '<span style="font-size:.76rem;color:#7E948E">' + papel + '</span></span></div>' +
      '<a class="side-link" href="home.html" style="margin-top:10px">Sair</a></div>';
    html += '</aside>';
    return html;
  }

  /* ---------- ficha técnica (elemento-assinatura) ---------- */
  var FLUXOS = {
    visitante: ['home.html', 'profissionais.html', 'perfil.html', 'artigo.html', 'eventos.html'],
    assinatura: ['cadastro.html', 'onboarding.html', 'checkout.html', 'painel.html', 'painel-perfil.html'],
    publicacao: ['painel-conteudos.html', 'painel-conteudo-novo.html', 'admin-moderacao.html', 'artigo.html'],
    admin: ['admin.html', 'admin-moderacao.html'],
    apoio: ['apoie.html']
  };

  function fichaTecnica() {
    if (!d.route) return '';

    function bloco(titulo, conteudo) {
      if (!conteudo) return '';
      return '<div class="ft-block"><h5>' + titulo + '</h5>' + conteudo + '</div>';
    }

    var api = (d.api || '').split('|').filter(Boolean).map(function (linha) {
      var partes = linha.trim().split(/\s+(.+)/);
      return '<li><span class="ft-verb">' + partes[0] + '</span>' + (partes[1] || '') + '</li>';
    }).join('');

    var hist = (d.stories || '').split(',').filter(Boolean).map(function (s) {
      return '<li>' + s.trim() + '</li>';
    }).join('');

    var estados = (d.states || '').split('|').filter(Boolean).map(function (s) {
      return '<li>' + s.trim() + '</li>';
    }).join('');

    /* navegação dentro do fluxo a que a tela pertence */
    var nav = '';
    var arquivo = location.pathname.split('/').pop() || 'index.html';
    var fluxo = FLUXOS[d.flow] || [];
    var i = fluxo.indexOf(arquivo);
    if (i > -1) {
      nav = '<div class="ft-nav">' +
        (i > 0 ? '<a href="' + fluxo[i - 1] + '">← anterior</a>' : '<a href="index.html">índice</a>') +
        (i < fluxo.length - 1 ? '<a href="' + fluxo[i + 1] + '">próxima →</a>' : '<a href="index.html">índice</a>') +
        '</div>';
    }

    return '<div class="ft">' +
      '<div class="ft-panel" id="ft-panel" hidden>' +
      bloco('Tela', '<div style="color:#fff;font-family:var(--font-ui);font-size:.98rem;margin-bottom:4px">' + (d.screen || '') + '</div><div class="ft-route">' + d.route + '</div>') +
      bloco('Histórias', hist ? '<ul class="ft-list">' + hist + '</ul>' : '') +
      bloco('Endpoints', api ? '<ul class="ft-list">' + api + '</ul>' : '') +
      bloco('Estados a prever', estados ? '<ul class="ft-list">' + estados + '</ul>' : '') +
      bloco('Fluxo', nav || '<a href="index.html">Voltar ao índice</a>') +
      '</div>' +
      '<button class="ft-toggle" id="ft-toggle" aria-expanded="false" aria-controls="ft-panel">' +
      '<span class="dot"></span> Ficha técnica</button></div>';
  }

  /* ---------- montagem da casca ---------- */
  function montar() {
    var shell = d.shell || 'public';
    var conteudo = Array.prototype.slice.call(body.children);

    if (shell === 'none') {
      // página índice: sem casca
    } else if (shell === 'painel' || shell === 'admin') {
      var app = el('<div class="app"></div>');
      app.innerHTML = menuLateral(
        shell === 'admin' ? MENU_ADMIN : MENU_PAINEL,
        d.route,
        shell === 'admin' ? 'Equipe Confluências' : 'Joana Ribeiro',
        shell === 'admin' ? 'Administração' : 'Perfil no diretório'
      );
      var main = el('<div class="app-main"></div>');
      conteudo.forEach(function (n) { main.appendChild(n); });
      app.appendChild(main);
      body.appendChild(el(barraProto()));
      body.appendChild(app);
    } else {
      var frag = document.createDocumentFragment();
      conteudo.forEach(function (n) { frag.appendChild(n); });
      body.appendChild(el(barraProto()));
      body.appendChild(el(cabecalhoPublico(d.route)));
      var m = el('<main id="conteudo"></main>');
      m.appendChild(frag);
      body.appendChild(m);
      body.appendChild(el(rodape()));
    }

    var ft = fichaTecnica();
    if (ft) {
      body.appendChild(el(ft));
      var btn = document.getElementById('ft-toggle');
      var panel = document.getElementById('ft-panel');
      btn.addEventListener('click', function () {
        var aberto = panel.hidden;
        panel.hidden = !aberto;
        btn.setAttribute('aria-expanded', String(aberto));
      });
    }
  }

  /* ---------- interações de demonstração ---------- */
  function ligarInteracoes() {

    /* abas */
    document.querySelectorAll('[data-tabs]').forEach(function (grupo) {
      var abas = grupo.querySelectorAll('[role="tab"]');
      abas.forEach(function (aba) {
        aba.addEventListener('click', function () {
          abas.forEach(function (a) {
            a.setAttribute('aria-selected', 'false');
            var p = document.getElementById(a.getAttribute('aria-controls'));
            if (p) p.hidden = true;
          });
          aba.setAttribute('aria-selected', 'true');
          var alvo = document.getElementById(aba.getAttribute('aria-controls'));
          if (alvo) alvo.hidden = false;
        });
      });
    });

    /* opções em cartão (rádio) */
    document.querySelectorAll('.option input[type="radio"]').forEach(function (r) {
      r.addEventListener('change', function () {
        document.querySelectorAll('.option input[name="' + r.name + '"]').forEach(function (o) {
          o.closest('.option').classList.toggle('is-on', o.checked);
        });
        document.querySelectorAll('[data-mostrar-se]').forEach(function (bloco) {
          bloco.hidden = bloco.dataset.mostrarSe !== r.value;
        });
      });
      if (r.checked) r.dispatchEvent(new Event('change'));
    });

    /* contador de caracteres */
    document.querySelectorAll('[data-contar]').forEach(function (campo) {
      var alvo = document.getElementById(campo.dataset.contar);
      if (!alvo) return;
      var max = campo.getAttribute('maxlength') || campo.dataset.max || '';
      function att() { alvo.textContent = campo.value.length + (max ? '/' + max : ''); }
      campo.addEventListener('input', att); att();
    });

    /* validação de demonstração */
    document.querySelectorAll('[data-validar]').forEach(function (form) {
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var ok = true;
        form.querySelectorAll('[data-erro]').forEach(function (campo) {
          var msg = document.getElementById(campo.dataset.erro);
          var vazio = !campo.value || (campo.type === 'checkbox' && !campo.checked);
          var invalido = vazio || (campo.dataset.regex && !new RegExp(campo.dataset.regex).test(campo.value));
          campo.classList.toggle('input-error', invalido);
          if (msg) msg.classList.toggle('is-on', invalido);
          if (invalido) ok = false;
        });
        if (!ok) {
          var primeiro = form.querySelector('.input-error');
          if (primeiro) primeiro.focus();
          window.confToast('Revise os campos destacados.');
          return;
        }
        var destino = form.dataset.irPara;
        window.confToast(form.dataset.sucesso || 'Tudo certo.');
        if (destino) setTimeout(function () { location.href = destino; }, 700);
      });
      form.querySelectorAll('[data-erro]').forEach(function (campo) {
        campo.addEventListener('input', function () {
          campo.classList.remove('input-error');
          var msg = document.getElementById(campo.dataset.erro);
          if (msg) msg.classList.remove('is-on');
        });
      });
    });

    /* botões apenas ilustrativos */
    document.querySelectorAll('[data-toast]').forEach(function (b) {
      b.addEventListener('click', function (ev) {
        if (b.tagName === 'A' && b.getAttribute('href') === '#') ev.preventDefault();
        window.confToast(b.dataset.toast);
      });
    });
  }

  montar();
  ligarInteracoes();
  if (window.confPagina) window.confPagina();
})();
