$(document).ready(function() {
    $('#serviceResult').hide();
    emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    $('#submitContact').click(function(e) {
        e.preventDefault();
        var data = {};
        var $formValues = $('#contactForm').serializeArray();
        $formValues.forEach(function(element) {
            data[element.name] = '';
            if (element.value != '') {
                $('input[name="' + element.name + '"]').parent().removeClass('has-error').addClass('has-noerror');
                if (element.name != 'email') {
                    data[element.name] = element.value;
                }
                if (element.name == "email" && emailReg.test(element.value) == false) {
                    $('input[name="' + element.name + '"]').parent().removeClass('has-noerror').addClass('has-error');
                    $('input[name="' + element.name + '"]').siblings('span').text('Please Enter a Valid Email');
                    data[element.name] = '';
                } else {
                    data[element.name] = element.value;
                }
            } else {
                $('input[name="' + element.name + '"]').parent().removeClass('has-noerror').addClass('has-error');
            }
        });
        if (data.name != '' && data.phone != '' && data.email != '') {
            $("#contactForm")[0].reset();
            $('*').removeClass('has-noerror has-error');
            $.ajax({
                type: 'POST',
                url: $('#contactForm').attr('action'),
                data: data,
                success: function(resp) {
                    $('#serviceResult').show();
                    $('#serviceResult').html('<div class="respSuccess">Thanks for writing us, Will get back to you soon.</div>');
                },
                error: function() {
                    $('#serviceResult').show();
                    $('#serviceResult').html('<div class="respError">Somthing Went Wrong. Pease try again</div>');
                }
            });
        }
    });

    $('#submitBook').click(function(e) {
        e.preventDefault();
        var data = {};
        var $formValues = $('#bookForm').serializeArray();
        $formValues.forEach(function(element) {
            data[element.name] = '';
            if (element.value != '') {
                $('input[name="' + element.name + '"]').parent().removeClass('has-error').addClass('has-noerror');
                if (element.name != 'email') {
                    data[element.name] = element.value;
                }
                if (element.name == "email" && emailReg.test(element.value) == false) {
                    $('input[name="' + element.name + '"]').parent().removeClass('has-noerror').addClass('has-error');
                    $('input[name="' + element.name + '"]').siblings('span').text('Please Enter a Valid Email');
                    data[element.name] = '';
                } else {
                    data[element.name] = element.value;
                }
            } else {
                $('input[name="' + element.name + '"]').parent().removeClass('has-noerror').addClass('has-error');
            }
        });
        if (data.name != '' && data.phone != '' && data.email != '') {
            $("#bookForm")[0].reset();
            $('*').removeClass('has-noerror has-error');
            $.ajax({
                type: 'POST',
                url: $('#bookForm').attr('action'),
                data: data,
                success: function(resp) {
                    $('#serviceResult').show();
                    $('#serviceResult').html('<div class="respSuccess">Thanks for writing us, Will get back to you soon.</div>');
                },
                error: function() {
                    $('#serviceResult').show();
                    $('#serviceResult').html('<div class="respError">Somthing Went Wrong. Pease try again</div>');
                }
            });
        }
    });
});