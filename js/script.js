// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".posts").html(posts['posts'][0]['content']);
    $(".posts2").html(posts['posts'][1]['content']);
    $(".posts3").html(posts['posts'][2]['content']);
    $(".posts4").html(posts['posts'][3]['content']);
    $(".posts5").html(posts['posts'][4]['content']);
    $(".posts6").html(posts['posts'][5]['content']);
  });
});
//************************Boton***************************
    $(document).ready(function() {
    $('.boton').click(function() {
    	$('.posts_originales').toggle("slide");
    	$('.posts_tito').toggle("slow");



        //$('.Tema1').toggle("slide");
        //$('.INFO').toggle("slide");
        //$('.posts').hide("slide");
        //$('.messages1').toggle("slide");
        //$('#boton_comentario1').hide("slide");
        //$('#primero').hide("slide");
        //$('.Tema2').toggle("slide");
        //$('.INFO2').toggle("slide");
        //$('.posts2').hide("slide");
        //$('.messages2').toggle("slide");
        //$('#boton_comentario2').hide("slide");
        //$('#segundo').hide("slide");
        //$('.Tema3').toggle("slide");
        //$('.INFO3').toggle("slide");
        //$('.posts3').hide("slide");
        //$('.messages').toggle("slide");
        //$('#boton_comentario').hide("slide");
        //$('#tercer').hide("slide");
        //$('.Tema4').toggle("slide");
        //$('.INFO4').toggle("slide");
        //$('.posts4').hide("slide");
        //$('.messages4').toggle("slide");
        //$('#boton_comentario4').show("slide");
        //$('#cuarto').hide("slide");
        //$('.Tema5').toggle("slide");
        //$('.INFO5').toggle("slide");
        //$('.posts5').hide("slide");
        //$('.messages5').show("slide");
        //$('#boton_comentario5').hide("slide");
        //$('#quinto').hide("slide");
        //$('.Tema6').toggle("slide");
        //$('.INFO6').toggle("slide");
        //$('.posts6').hide("slide");
       // $('.messages6').show("slide");
     //   $('#sexto').hide("slide");
    //    $('#boton_comentario6').hide("slide");
       // $('ocultar2').show('slow');
       //$('.ocultar').toggle("show");
    });
});
//********************************************************
//**********************Primer Documento******************
    $(document).ready(function() {
    $('.Tema1').click(function() {
        $('#id').toggle("show");
        $('#boton_comentario1').toggle("slide");
        $('#primero').toggle("slide  ");
    });
});
//********************************************************
//*********************Segundo Documento******************
    $(document).ready(function() {
    $('.Tema2').click(function() {
        $('#id2').toggle("show");
        $('#boton_comentario2').toggle("slide")
        $('#segundo').toggle("slide");
    });
});
//********************************************************
//*********************Tercer Documento*******************
    $(document).ready(function() {
    $('.Tema3').click(function() {
        $('#id3').toggle("show");
        $('#boton_comentario').toggle("slide");
        $('#tercer').toggle("slide");
    });
});
//********************************************************
//*********************Cuarto Documento*******************
    $(document).ready(function() {
    $('.Tema4').click(function() {
        $('#id4').toggle("show");
        $('#boton_comentario4').toggle("slide");
        $('#cuarto').toggle("slide");
    });
});
//********************************************************
//*********************Quinto Documento*******************
    $(document).ready(function() {
    $('.Tema5').click(function() {
        $('#id5').toggle("show");
        $('#boton_comentario5').toggle("slide")
        $('#quinto').toggle("slide");
    });
});
//********************************************************
//*********************Sexto Documento********************
    $(document).ready(function() {
    $('.Tema6').click(function() {
        $('#id6').toggle("show");
        $('#boton_comentario6').toggle("slide")
        $('#sexto').toggle("slide");
    });
});

//********************************************************
//*************Buscar(efecto-botón)***********************
    $(document).ready(function() {
    $('.Second_title').click(function() {
        $('#target').toggle('slide');
        
    });
});
//*********************************************************
//*************Mostrar comentario3*************************
$(document).ready(function() {
    $('#boton_comentario').click(function() {
      var toAdd = $("input[name=message]").val();
        $('.messages').append("<p>"+toAdd+"</p>");
    });
});
//*********************************************************
//*************Mostrar comentario1*************************
$(document).ready(function() {
    $('#boton_comentario1').click(function() {
      var toAdd = $("input[name=message1]").val();
        $('.messages1').append("<p>"+toAdd+"</p>");
    });
});
//*********************************************************
//*************Mostrar comentario2*************************
$(document).ready(function() {
    $('#boton_comentario2').click(function() {
      var toAdd = $("input[name=message2]").val();
        $('.messages2').append("<p>"+toAdd+"</p>");
    });
});
//*********************************************************
//*************Mostrar comentario4*************************
$(document).ready(function() {
    $('#boton_comentario4').click(function() {
      var toAdd = $("input[name=message4]").val();
        $('.messages4').append("<p>"+toAdd+"</p>");
    });
});
//*********************************************************
//*************Mostrar comentario5*************************
$(document).ready(function() {
    $('#boton_comentario5').click(function() {
      var toAdd = $("input[name=message5]").val();
        $('.messages5').append("<p>"+toAdd+"</p>");
    });
});
//*********************************************************
//*************Mostrar comentario6*************************
$(document).ready(function() {
    $('#boton_comentario6').click(function() {
      var toAdd = $("input[name=message6]").val();
        $('.messages6').append("<p>"+toAdd+"</p>");
    });
});
//***************Buscar palabra en un texto****************
$.expr[':'].icontains = function(obj, index, meta, stack){
    return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
    $(document).ready(function(){  
        $('#target').keyup(function(){
                     buscar = $(this).val();
                     $('#lista p').removeClass('resaltar');
                            if(jQuery.trim(buscar) != ''){
                               $("#lista p:icontains('" + buscar + "')").addClass('resaltar');
                            }
            });
    });   
//*********************************************************
//**********************Animaciones************************

//$(document).ready(function(){  
//  $("#target").keypress(function(e) {
//      if(e.which == 13) {
//          alert('You pressed enter!');
//          var data = $(this).val()
//          alert(data);
//      }
//  });
//});
//**