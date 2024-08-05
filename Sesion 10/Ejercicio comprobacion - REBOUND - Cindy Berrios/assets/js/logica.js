$(document).ready(function() {
    // Obtener referencias a los elementos para mejorar la eficiencia
    const $text1 = $("#text1");
    const $text2 = $("#text2");
    const $img = $("#img");
    const $caja3 = $("#caja3");
  
    // Mostrar y ocultar texto
    $text1.hover(
      () => $text2.show(),
      () => $text2.hide()
    );
  
    // Agrandar y reducir imagen
    $img.on({
      click: () => $img.css("transform", "scale(2)"),
      mouseout: () => $img.css("transform", "scale(1)")
    });
  
    // Agrandar texto
    $caja3.dblclick(() => $caja3.find("p").toggleClass("agrandado"));
  });
  