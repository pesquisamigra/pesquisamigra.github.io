/* Dados fictícios do protótipo. Nenhum profissional aqui é real. */

window.CONF_PROFISSIONAIS = [
  { slug: 'joana-ribeiro', nome: 'Joana Ribeiro', headline: 'Psicóloga clínica — Terapia Cognitivo-Comportamental',
    crp: 'CRP 06/12345', uf: 'SP', cidade: 'São Paulo', bairro: 'Pinheiros',
    especialidades: ['Ansiedade', 'Depressão'], abordagens: ['TCC'],
    online: true, presencial: true, preco: 'R$ 150–200', aceitando: true, cor: '' },

  { slug: 'marcos-tavares', nome: 'Marcos Tavares', headline: 'Psicanalista — clínica de adultos',
    crp: 'CRP 07/45120', uf: 'RS', cidade: 'Porto Alegre', bairro: 'Bom Fim',
    especialidades: ['Luto', 'Relacionamentos'], abordagens: ['Psicanálise'],
    online: true, presencial: false, preco: 'R$ 100–150', aceitando: true, cor: 'avatar-river' },

  { slug: 'aline-souza-costa', nome: 'Aline Souza Costa', headline: 'Psicóloga infantil e do adolescente',
    crp: 'CRP 04/09877', uf: 'MG', cidade: 'Belo Horizonte', bairro: 'Savassi',
    especialidades: ['Infância', 'TDAH'], abordagens: ['Gestalt-terapia'],
    online: false, presencial: true, preco: 'R$ 150–200', aceitando: true, cor: 'avatar-amber' },

  { slug: 'rafael-nunes', nome: 'Rafael Nunes', headline: 'Psicólogo — saúde do trabalhador e burnout',
    crp: 'CRP 01/33210', uf: 'DF', cidade: 'Brasília', bairro: 'Asa Sul',
    especialidades: ['Burnout', 'Ansiedade'], abordagens: ['TCC', 'ACT'],
    online: true, presencial: true, preco: 'Acima de R$ 200', aceitando: false, cor: '' },

  { slug: 'clara-maranhao', nome: 'Clara Maranhão', headline: 'Psicóloga clínica — abordagem humanista',
    crp: 'CRP 11/07654', uf: 'CE', cidade: 'Fortaleza', bairro: 'Aldeota',
    especialidades: ['Autoestima', 'Relacionamentos'], abordagens: ['Humanista'],
    online: true, presencial: true, preco: 'R$ 100–150', aceitando: true, cor: 'avatar-river' },

  { slug: 'beatriz-lopes', nome: 'Beatriz Lopes', headline: 'Psicóloga — atendimento a mulheres e maternidade',
    crp: 'CRP 06/88431', uf: 'SP', cidade: 'Campinas', bairro: 'Cambuí',
    especialidades: ['Maternidade', 'Depressão'], abordagens: ['Psicanálise'],
    online: true, presencial: true, preco: 'Valor social', aceitando: true, cor: 'avatar-amber' },

  { slug: 'diego-ferraz', nome: 'Diego Ferraz', headline: 'Psicólogo — dependência química e redução de danos',
    crp: 'CRP 02/21109', uf: 'PE', cidade: 'Recife', bairro: 'Boa Viagem',
    especialidades: ['Dependência química'], abordagens: ['TCC'],
    online: false, presencial: true, preco: 'Até R$ 100', aceitando: true, cor: '' },

  { slug: 'helena-vasques', nome: 'Helena Vasques', headline: 'Psicóloga clínica — pessoas idosas e cuidadores',
    crp: 'CRP 05/55023', uf: 'RJ', cidade: 'Rio de Janeiro', bairro: 'Tijuca',
    especialidades: ['Luto', 'Envelhecimento'], abordagens: ['Humanista'],
    online: true, presencial: true, preco: 'R$ 100–150', aceitando: true, cor: 'avatar-river' },

  { slug: 'thiago-almeida', nome: 'Thiago Almeida', headline: 'Psicólogo — população LGBTQIA+',
    crp: 'CRP 06/61200', uf: 'SP', cidade: 'São Paulo', bairro: 'Santa Cecília',
    especialidades: ['Identidade', 'Ansiedade'], abordagens: ['Gestalt-terapia'],
    online: true, presencial: false, preco: 'R$ 150–200', aceitando: true, cor: 'avatar-amber' },

  { slug: 'sofia-benites', nome: 'Sofia Benites', headline: 'Psicóloga — avaliação e neuropsicologia',
    crp: 'CRP 08/13744', uf: 'PR', cidade: 'Curitiba', bairro: 'Batel',
    especialidades: ['TDAH', 'Avaliação psicológica'], abordagens: ['TCC'],
    online: false, presencial: true, preco: 'Acima de R$ 200', aceitando: true, cor: '' },

  { slug: 'paulo-andrade', nome: 'Paulo Andrade', headline: 'Psicólogo clínico — terapia de casal',
    crp: 'CRP 04/30188', uf: 'MG', cidade: 'Belo Horizonte', bairro: 'Funcionários',
    especialidades: ['Relacionamentos'], abordagens: ['Sistêmica'],
    online: true, presencial: true, preco: 'R$ 150–200', aceitando: false, cor: 'avatar-river' },

  { slug: 'nara-siqueira', nome: 'Nara Siqueira', headline: 'Psicóloga — trauma e violência de gênero',
    crp: 'CRP 03/42655', uf: 'BA', cidade: 'Salvador', bairro: 'Rio Vermelho',
    especialidades: ['Trauma', 'Autoestima'], abordagens: ['ACT', 'TCC'],
    online: true, presencial: true, preco: 'Valor social', aceitando: true, cor: 'avatar-amber' }
];

window.CONF_CONTEUDOS = [
  { tipo: 'Artigo', titulo: 'O que a ansiedade tenta dizer antes de virar sintoma', slug: 'ansiedade-antes-do-sintoma',
    autor: 'Joana Ribeiro', autorSlug: 'joana-ribeiro', data: '2026-08-04', estado: 'aprovado',
    resumo: 'Um convite a escutar o corpo antes que ele grite. Sobre sinais precoces e o que fazer com eles.' },
  { tipo: 'Notícia', titulo: 'CFP abre consulta pública sobre atendimento on-line', slug: 'cfp-consulta-publica-online',
    autor: 'Marcos Tavares', autorSlug: 'marcos-tavares', data: '2026-08-01', estado: 'aprovado',
    resumo: 'A consulta segue aberta e aceita contribuições de profissionais registrados.' },
  { tipo: 'Referência', titulo: 'Terapia cognitivo-comportamental em grupo: revisão sistemática', slug: 'tcc-grupo-revisao',
    autor: 'Rafael Nunes', autorSlug: 'rafael-nunes', data: '2026-07-28', estado: 'aprovado',
    resumo: 'SILVA, J.; SANTOS, M. Revista Brasileira de Psicologia, 2024.' },
  { tipo: 'Evento', titulo: 'Roda de conversa: luto e trabalho', slug: 'roda-luto-e-trabalho',
    autor: 'Helena Vasques', autorSlug: 'helena-vasques', data: '2026-09-12', estado: 'aprovado',
    resumo: 'Encontro on-line e gratuito, com inscrição prévia. Vagas limitadas a 60 pessoas.' },
  { tipo: 'Artigo', titulo: 'Primeira sessão: o que perguntar a quem vai te atender', slug: 'primeira-sessao-o-que-perguntar',
    autor: 'Clara Maranhão', autorSlug: 'clara-maranhao', data: '2026-07-19', estado: 'aprovado',
    resumo: 'Escolher profissional também é um direito. Cinco perguntas que ajudam nessa escolha.' },
  { tipo: 'Evento', titulo: 'Supervisão aberta em clínica infantil', slug: 'supervisao-aberta-clinica-infantil',
    autor: 'Aline Souza Costa', autorSlug: 'aline-souza-costa', data: '2026-09-26', estado: 'aprovado',
    resumo: 'Presencial em Belo Horizonte, com contribuição voluntária na entrada.' }
];

window.CONF_ESPECIALIDADES = ['Ansiedade', 'Depressão', 'Luto', 'Relacionamentos', 'Infância', 'TDAH',
  'Burnout', 'Autoestima', 'Maternidade', 'Dependência química', 'Envelhecimento', 'Identidade',
  'Avaliação psicológica', 'Trauma'];

window.CONF_ABORDAGENS = ['TCC', 'Psicanálise', 'Gestalt-terapia', 'Humanista', 'Sistêmica', 'ACT'];

window.CONF_UFS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR',
  'PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
