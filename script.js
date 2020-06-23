//file upload 

document.querySelector('.custom-file-input').addEventListener('change',function(e){
    var fileName = document.getElementById("myInput").files[0].name;
    var nextSibling = e.target.nextElementSibling
    nextSibling.innerText = fileName
  });


// date-picker
var dateToday = new Date();
$("#datepicker").datepicker({
  changeMonth: true,
  minDate: dateToday,
  onSelect: function (selectedDate) {
    instance = $(this).data("datepicker"),
      date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
        selectedDate, instance.settings);
  }
});

//forms validation
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
            $('.modal').modal('hide');
            $('.form-control').val(''); 
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


// removed validation class after submited form
$('.mod-btn').click(function(){
  $('form').removeClass("was-validated");
});