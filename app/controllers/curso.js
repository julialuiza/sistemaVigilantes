const models = require('../models/index');
const Curso = models.Curso;

const index = async (req, res) => {
  const cursos = await Curso.findAll();
  res.render('curso/index', {
    cursos: cursos.map((curso) => curso.toJSON()),
  });
};

async function read(req, res) {
  const curso = await Curso.findOne({
    where: { id: req.params.id },
    include: models.Area,
  });
  res.render('curso/read', {
    curso: curso.toJSON(),
  });
}

async function create(req, res) {
  if (req.route.methods.get) {
    res.render('curso/create', {
      csrf: req.csrfToken(),
    });
  } else {
    try {
      await Curso.create(req.body);
      res.redirect('/curso');
    } catch (error) {
      res.render('curso/create', {
        curso: req.body,
        errors: error.errors,
        csrf: req.csrfToken(),
      });
    }
  }
}

async function update(req, res) {
  const curso = await Curso.findOne({ where: { id: req.params.id } });
  if (req.route.methods.get) {
    res.render('curso/update', {
      curso: curso.toJSON(),
      csrf: req.csrfToken(),
    });
  } else {
    try {
      await Curso.update(
        {
          sigla: req.body.sigla,
          nome: req.body.nome,
          descricao: req.body.descricao,
          areaId: req.body.areaId,
        },
        { where: { id: req.params.id } },
      );
      res.redirect('/curso/' + req.params.id);
    } catch (error) {
      res.render('curso/update', {
        curso: req.body,
        errors: error.errors,
        csrf: req.csrfToken(),
      });
    }
  }
}

async function remove(req, res) {
  const curso = await Curso.findOne({ where: { id: req.params.id } });
  await curso.destroy();
  res.redirect('/curso/');
}

module.exports = { index, read, create, update, remove };
