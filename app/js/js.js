// $("#phone").on('click', function() {
//     $("#phone").mask("+7 (XXX

$(document).ready(function(){
    $('#btn').on('click', function(){
        var phone = $('#phone').val();

        if (phone.length == 18) {
            $('#messege').html('Ваша заявка успешно отправлена');
            $('#messege').removeClass('error');
            $('#messege').addClass('success');
            $('#messege').css({
                'text-align': 'left',
                'color': '#9b9b9b'
            });
            $('.form').css({
                'display': 'none'
            });
            $.ajax ({
                type: 'POST',
                url: 'send-form.php',
                data: 'Phone=' + phone,
                error: function(error) {
                    // $('#error').css({'display': 'block'});
                    },
                success: function(data){
                    if (data == 1) {
                        $('#messege').html('Ваша заявка успешно отправлена');
                        $('#messege').removeClass('error');
                        $('#messege').addClass('success');
                        $('#messege').css({
                            'text-align': 'left',
                            'color': '#9b9b9b'
                        });
                    } else {

                    }
                }
            });
        } else {
            $('#messege').html('Кажется, вы ошиблись при вводе телефона');
            $('#messege').addClass('error');
        }
    })

    $(function() {
        $("#phone").mask("+7 (XXX) XXX XX XX");
    })
});