const container = document.querySelector('.container');
const busqueda = document.querySelector('.buscados button');
const clima = document.querySelector('.clima');
const climaDetalle = document.querySelector('.climaDetalle');
const error404 = document.querySelector('.noEncontrado');


busqueda.addEventListener('click', () => {

    
    
    const APIkey = 'cf537e6c366c15a880099a12d4fe33f7';
    const ciudad = document.querySelector('.buscados input').value;
    
    if (ciudad=== '')

        return
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {
            
            if(json.cod == '404'){
                container.style.height = '400px';
                clima.style.display = 'none';
                climaDetalle.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                document.body.className = 'original';
                return;
            }

            
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');
            
            const imagen = document.querySelector('.clima img');
            const temperatura = document.querySelector('.clima .temperatura')
            const descripcion = document.querySelector('.clima .descripcion');
            const humedad = document.querySelector('.climaDetalle .humedad span');
            const viento = document.querySelector('.climaDetalle .viento span');

            document.body.classList.remove('sunny', 'cloudy', 'rainy', 'snowy', 'hazy');


            switch (json.weather[0].main) {
                case 'Clear':
                    imagen.src = 'imagenes/clear.png';
                    document.body.classList.add('clear');
                    break;

                case 'Rain':
                    imagen.src = 'imagenes/rain.png';
                    document.body.classList.add('rainy');
                    break;

                case 'Snow':
                    imagen.src = 'imagenes/snow.png';
                    document.body.classList.add('snowy');
                    break;

                case 'Clouds':
                    imagen.src = 'imagenes/cloud.png';
                    document.body.classList.add('cloudy');
                    break;

                case 'Haze':
                    imagen.src = 'imagenes/mist.png';
                    document.body.classList.add('hazy');
                    break;

                default:
                    imagen.src = '';
                    document.body.classList.add('original');
            }

            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            descripcion.innerHTML = `${json.weather[0].description}`;
            humedad.innerHTML = `${json.main.humidity}%`;
            viento.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            
            
            clima.style.display = '';
            climaDetalle.style.display = '';
            clima.classList.add('fadeIn');
            climaDetalle.classList.add('fadeIn');
            container.style.height = '620px';
            
        })
})
            





/*if(json.cod == '404'){
                    container.style.height = '400px';
                    clima.style.display = 'none';
                    climaDetalle.style.display = 'none';
                    error404.style.display = 'block';
                    return;
                }
                
                error404.style.display = 'none';
                
                const imagen = document.querySelector('.clima img');
                const temperatura = document.querySelector('.clima .temperatura')
                */