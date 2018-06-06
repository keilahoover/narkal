$(document).ready(function() {
  'use strict';

  // eslint-disable-next-line max-statements
  $('#form__login').submit((event) => {
    event.preventDefault();
    const email_address = $('#login__email').val().trim();
    const password = $('#login__password').val();

    if (!email_address) {
      return alert('Email must not be blank');
    }

    if (email_address.indexOf('@') < 0) {
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

    $.ajax(options).done(function() {
      console.log('oing things');
      window.location.href = "/"
    }).fail(($xhr) => {
      window.location.href = "/restaurant-profile";
      // alert($xhr.responseText)
    })
  })

})
