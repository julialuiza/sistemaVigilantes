const index = (req, res) => {
  const conteudo = 'Bem vind@!';
  res.render('main/index', {
    conteudo: conteudo,
    layout: 'main',
  });
};

const sobre = (req, res) => {
  const conteudo = 'Sobre';
  res.render('main/sobre', {
    conteudo: conteudo,
    layout: 'main',
  });
};

const game = (req, res) => {
  const conteudo = 'Jogo Vigilantes da Floresta';
  res.render('main/game', {
    conteudo: conteudo,
    layout: 'game',
  });
};

const ui = (req, res) => {
  res.render('main/ui');
};

module.exports = { index, sobre, game, ui };
