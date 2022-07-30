const btnForm = document.querySelector('.btn');
const count_box = document.querySelector(".count_box");
const restart_btn = document.querySelector(".btn_restart");
const countBody = document.querySelector("body");
const eInput = document.querySelector("input");
const error_text = document.querySelector(".error_txt");
const complete_text = document.querySelector(".complete_text");


btnForm.addEventListener('click',function(e){
    e.preventDefault();
    const inputDate = document.querySelector('#date').value;
    if(inputDate == ''){
        //Erro caso o campo date e hora esteja vazio
        eInput.classList.add("error"); 
        error_text.classList.add("showErrorTxt");
    }else{
        //Mostrar Countdown
            count_box.classList.add("activeCount");
            countBody.classList.add("showBodyCount");
            complete_text.classList.remove("showCompleteText");
            checkDateHour();
            // Date
            const countDownDate = new Date(inputDate).getTime();
            // Funcao para calculo da date e hora
            const count = setInterval(function(){
        
            const now = new Date().getTime();
            let distance = countDownDate - now;
        
            const d = Math.floor(distance/(1000*60*60*24));
            const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
            const m = Math.floor((distance%(1000*60*60))/(1000*60));
            const s = Math.floor((distance%(1000*60))/1000);
            
            days=(d < 10) ? "0" + d:d;
            hours=(h < 10) ? "0"+ h:h;
            minutes=(m < 10) ?"0"+ m:m;
            seconds=(s < 10) ?"0"+ s:s;

            document.getElementById('day').innerHTML = days;
            document.getElementById('hour').innerHTML = hours;
            document.getElementById('minute').innerHTML = minutes;
            document.getElementById('second').innerHTML = seconds;

          

            if(distance < 0){
                clearInterval(count);
                complete_text.classList.add("showCompleteText");
                document.getElementById('day').innerHTML = '00';
                document.getElementById('hour').innerHTML = '00';
                document.getElementById('minute').innerHTML = '00';
                document.getElementById('second').innerHTML = '00';
            }
        },1000);
    } 
    
    // Animacao no texto de informacao
    complete_text.animate([
        {transform: 'translateX(0px)'},
        {transform: 'translateX(10px)'}
    ],{
        duration:1500,
        easing:'ease-in-out',
        direction:'alternate',
        iterations:Infinity
    });
    
    // Verificar erro
    eInput.onfocus = ()=>{checkDateHour();}
    function checkDateHour(){
        // Remover erro
        eInput.classList.remove("error"); 
        error_text.classList.remove("showErrorTxt");
    } 
});
//Reload 
restart_btn.addEventListener('click',function(){
    count_box.classList.remove("activeCount");
    window.location.reload();
});