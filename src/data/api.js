/* API */
const API = "https://spaceflightnewsapi.net/api/v1/articles";
var cantidadNoticias = ""; /* Maximo 10, si quiere dejarlo por defecto coloque solo "" */

/* Envia los datos a Vue */

function pintarDatos(info){
    if(cantidadNoticias===""){
        cantidadNoticias = info.length;
    }
    for(let i=0; i<cantidadNoticias;i++){
        let fecha = new Date(info[i].published_date);

        let fechaFormat = fecha.getDate() + "/"+ (parseInt(fecha.getMonth()) + 1) + "/" + fecha.getFullYear();

        let tag = info[i].tags[1];
        

        app.noticias.push({
            img: info[i].featured_image,
            id : info[i]._id,
            url: info[i].url,
            title: info[i].title,
            public: fechaFormat,
            siteweb: info[i].news_site_long,
            tag: tag,
        });
    }
}

/* Obtiene los datos de la API */

async function buscarDatosAPI(){
    const res = await fetch(API);
    const data = await res.json();

    pintarDatos(data.docs);
}

/* Componente Vue */

Vue.component("Noticia", {
    props: ["img", "url", "title", "public", "siteweb", "tag"],
    template: `
    <div class="col-md-6 card noticia" style="max-width: 540px;">
        <a target="_blank" :href="url" class="textoNoticia">
            <div class="row g-0">

                <div class="col-lg-4 d-flex justify-content-center align-items-lg-center">
                    <img :src="img" alt="Hola Mundo">
                </div>

                <div class="col-lg-8 textoNoticia">
                    <div class="card-body">
                        <small class="card-text sitioNoticia">{{ siteweb }}</small>
                        <h5 class="card-title">{{ title }}</h5>

                        <span class="badge bg-info text-dark">{{ tag }}</span>

                        <p class="card-text"><small class="text-muted">Publicado el {{ public }}</small></p>
                    </div>
                </div>

            </div>
        </a>
    </div>
    `,
});

/* Iniciador de Vue */
const app = new Vue({
    el: "#apinoticias",
    data: {
        noticias: [],
    }
});

/* Iniciar el Api */
buscarDatosAPI();
