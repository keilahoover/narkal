$(document).ready(function() {
  'use strict';

  // eslint-disable-next-line max-statements
  $('#login__btn').submit((event) => {
    event.preventDefault();

    const email_address = $('#login__email').val().trim();
    const password = $('#login__password').val();

    if (!email) {
      return alert('Email must not be blank');
    }

    if (email.indexOf('@') < 0) {
      return alert('Email must be valid');
    }

    const user = {
      "email": email_address,
      "password": password
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify(user),
      dataType: 'json',
      type: 'POST',
      url: '/restaurant-signin'
    }

    $.ajax(options)
      .done(function() {
        window.location.href = "/"
      })
      .fail(($xhr) => {
        alert($xhr.responseText)
      })
  })
