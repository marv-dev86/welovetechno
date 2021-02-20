$(function(){

    loadcontent()
})


function loadcontent(){
     
    $('#home').click(function(e){
        e.preventDefault()
        $('#contenido').fadeOut(1000,function(){
                $('#radio').removeClass('activo')
                $('#events').removeClass('activo')
                $('#shows').removeClass('activo')
                $('#gallery').removeClass('activo')
            
            $(this).load('htmls/home.html', function(){
                $('#home').addClass('activo')
                $(this).fadeIn(1000)
            })
        })
        
    })


        $('#radio').click(function(e){
            e.preventDefault()
            $('#contenido').fadeOut(1000,function(){
                    $('#home').removeClass('activo')
                    $('#events').removeClass('activo')
                    $('#shows').removeClass('activo')
                    $('#gallery').removeClass('activo')
                
                $(this).load('htmls/radio.html', function(){
                    $('#radio').addClass('activo')
                    $(this).fadeIn(1000)
                })
            })
            
        })

        $('#events').click(function(e){
            e.preventDefault()
            $('#contenido').fadeOut(1000,function(){

                    $('#home').removeClass('activo')
                    $('#radio').removeClass('activo')
                    $('#shows').removeClass('activo')
                    $('#gallery').removeClass('activo')
                    
                $(this).load('htmls/events.html', function(){
                    $('#events').addClass('activo')
                    $(this).fadeIn(1000)
                })
            })
            
        })
        


}