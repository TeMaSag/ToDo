
// добавление списка
$(document).ready(function () {

  $('#button').on('click', function () {

    let a = $("input").val();

    $('#list').prepend("<div>" + a + " <a id='but1' class='knopka'>+</a></div>");

    $('input').val("");

    $('#result').empty();
  }
  )

//обработчик клавиши Enter
  $("#InpFrm1").keyup(function (event) {

    if (event.keyCode == 13) {

      const a = $(this).val();

      console.log(a);

      if (a.trim()) {

        $("#button").click();

        $(this).val('');

      } else { alert("Пустое поле") }

    }

  });

//обработчик клавиш '+'
  $('div').on('click', '.knopka', function () {

    console.log('this1', $(this));
    // $("body").html('<div></div>')\
    // const a = $('<div>')
    console.log('this2', this);
    

    $(".knopka").addClass('disabled');

    let a = $("input").val();

    $(this).wrap("<div class='speed'>" + a + "</div>")

    $('input').val("");

    $('#result').empty();

    $($(this).parent()).before("<a class='knopka disabled'>+</a>");

  })

  //копия
  $("input").keyup(function () {

    const a = $(this).val()

    if (a.trim()) { $(".knopka").removeClass('disabled') }

    else {

      $('#button').click(function () { $(".knopka").addClass('disabled'); })

    }    

    $("#result").text(a);

  });
  //


})









// " + (+new Date()) + "











