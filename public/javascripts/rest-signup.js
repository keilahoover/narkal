$(document).ready(function() {
  'use strict';

  // eslint-disable-next-line max-statements
  $('#form__signup').submit((event) => {
    event.preventDefault();
    var user = {}

    const firstName = $('#signup__first-name').val().trim()
    const lastName = $('#signup__last-name').val().trim()
    const email = $('#signup__email').val().trim()
    const password = $('#signup__password').val()

    user = {
      "first_name": firstName,
      "last_name": lastName,
      "email_address": email,
      "password": password,
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify(user),
      dataType: 'json',
      type: 'POST',
      url: '/restaurant-signup'
    }

    $.ajax(options)
      .done(function() {
        window.location.href="/"
      })
      .fail(($xhr) => {
        window.location.href = "/restaurant-info";
      })
  })
})
