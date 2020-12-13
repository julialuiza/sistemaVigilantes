const showError = function (errors, field) {
  let mensagem;
  if (typeof errors != 'undefined') {
    errors.forEach(function (error) {
      if (error.path == field) {
        mensagem = error.message;
      }
    });
    return mensagem;
  }
};

function checked(currentValue, value) {
  if (currentValue == value) {
    return 'checked';
  } else {
    return '';
  }
}

module.exports = { showError, checked };
