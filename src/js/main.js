$("form :input").focus(function() {
    $("label[for='" + this.id + "']").addClass("labelfocus");
  }).blur(function() {
  
      if( $(this).val().length === 0 ) {
            $("label[for='" + this.id + "']").fadeIn().removeClass("labelfocus");
      } else {
            $("label[for='" + this.id + "']").hide();
      }
  
  });