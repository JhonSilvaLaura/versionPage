/* ScrollReveal().reveal('.ods'); */
window.sr = ScrollReveal()

    sr.reveal('.navbar',{ // revela nos permite seleccionar los elementos 
        duration:2000,//duracion 
        delay:5500,
        interval:5000, // Intervalo de tiempo entre elementos, en este caso no aplica porque solo hay uno.
        origin: 'bottom',// hacia k parte va a salir
        distance:'-150%', //distancia para el efecto
        reset:false, //para ver si el efecto de repite una y otra vez
        opacity:0, //para k cominece transparente
    });
    sr.reveal('.portada',{
        duration:2000,
        delay:4500,
        interval:200,
        origin: 'left',
        distance:'50px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.ods1',{
        duration:2000,
        interval:200,
        delay:500,
        origin: 'left',
        distance:'20px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.que-es',{
        duration:2000,
        interval:200,
        delay:500,
        origin: 'right',
        distance:'20px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.titulo',{
        duration:2000,
        interval:200,
        delay:500,
        origin: 'bottom',
        distance:'30px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.carta1',{
        duration:2000,
        interval:200,
        easing:'ease-in-out', //controla la aceleracion (mejor dicho la velocidad)
        delay:500,
        origin: 'bottom',
        distance:'50px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.carta2',{
        duration:2000,
        interval:200,
        easing:'ease-in-out',
        delay:500,
        origin: 'left',
        distance:'50px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.carta3',{
        duration:2000,
        interval:200,
        easing:'ease-in-out',
        delay:500, //el retraso antes de que la animacion comience
        origin: 'right',
        distance:'50px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.carta4',{
        duration:2000,
        interval:200,
        easing:'ease-in-out',
        delay:500,
        origin: 'top',
        distance:'50px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.carta5',{
        duration:2000,
        interval:200,
        easing:'ease-in-out',
        delay:500,
        origin: 'left',
        distance:'50px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.ipo',{
        duration:2000,
        interval:200,
        easing:'ease-in-out',
        delay:500,
        origin: 'left',
        distance:'50px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.historia',{
        duration:2000,
        interval:200,
        easing:'ease-in-out',
        delay:500,
        origin: 'right',
        distance:'50px',
        reset:false,
        opacity:0,
    });
    sr.reveal('.importancia',{
        duration:2000,
        interval:200,
        easing:'ease-in-out',
        delay:500,
        origin: 'right',
        distance:'50px',
        reset:false,
        opacity:0,
    });