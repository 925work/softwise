jQuery("#submit").prop('disabled', true);

var toValidate = jQuery('#number-input, #date-input'),
    valid = false;
toValidate.change(function () {
    if (jQuery(this).val().length > 0) {
        jQuery(this).data('valid', true);
    } else {
        jQuery(this).data('valid', false);
    }
    toValidate.each(function () {
        if (jQuery(this).data('valid') == true) {
            valid = true;
        } else {
            valid = false;
        }
    });
    if (valid === true) {
        jQuery("#submit").prop('disabled', false);
    } else {
        jQuery("#submit").prop('disabled', true);
    }
});

window.onload = function(){
    document.getElementById('submit').onclick = function(e){
        alert('Successfully submitted.\nSSN Last 4: ' + document.getElementById("number-input").value + '\n' +'Date of Birth: '+document.getElementById("date-input").value);
        $('#number-input').val('');
        $('#date-input').val('');
        return false;
    }
 }
