
function viewPrompt(){
                var promptMessage = prompt();
                var html_promptMessage = document.getElementById("promptMessage");
                html_promptMessage.innerHTML = promptMessage;
                console.log(promptMessage);
            }


$('#change').click(function() { 
    
    $('#yubi').text('👆じゃんけん特設サイトで、コンピュータと勝負してみよう');
    
    $('#game1').fadeToggle();
});
                      
$('#answer').click(function(){
    $('#answer').append('たくしー');
    
})


