$(document).ready(function() {
  'use strict';

  // eslint-disable-next-line max-statements
  $('#basic-info').submit((event) => {
    event.preventDefault();
    var rest = {}

    const restName = $('#basic-info__name').val().trim()
    const email = $('#basic-info__email').val().trim()
    const hoursOperation = $('#basic-info__hours').val().trim()
    const streetAddress = $('#basic-info__address').val().trim()
    const city = $('#basic-info__city').val().trim()
    const state = $('#basic-info__state').val().trim()
    const zip = $('#basic-info__zipcode').val().trim()
    const phone = $('#basic-info__phone').val().trim()
    const facebook = $('#basic-info__facebook').val().trim()
    const instagram = $('#basic-info__instagram').val().trim()
    const twitter = $('#basic-info__twitter').val().trim()
    const profileImg = $('#profile-img__file').val().trim()
    const menuImg = $('#menu__file').val().trim()
    const expense_1 = $('#expense__1').val()
    const expense_2 = $('#expense__2').val()
    const expense_3 = $('#expense__3').val()
    const expense_4 = $('#expense__4').val()


    rest = {
      "restName": restName,
      "email": email,
      "hoursOperation": hoursOperation,
      "streetAddress": streetAddress,
      "city": city,
      "state": state,
      "zip": zip,
      "phone": phone,
      "facebook": facebook,
      "instagram": instagram,
      "twitter": twitter,
      "profileImg": profileImg,
      "menuImg": menuImg,
      "expense_1": expense_1,
      "expense_2": expense_2,
      "expense_3": expense_3,
      "expense_4": expense_4

    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify(rest),
      dataType: 'json',
      type: 'POST',
      url: '/restaurant-info'
    }

    $.ajax(options)
      .done(function(resp) {
        window.location.href = "/restaurant-type"
      })
      .fail(($xhr) => {
        window.location.href = "/restaurant-type"
      })
  })
})
