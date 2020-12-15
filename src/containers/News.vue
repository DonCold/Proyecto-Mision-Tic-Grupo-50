<template>
  <div class="row">
    <Noticia v-for="noticia in noticias"
          :img = "noticia.img"
          :key = "noticia.id"
          :url = "noticia.url"
          :title = "noticia.title"
          :publico = "noticia.public"
          :siteweb = "noticia.siteweb"
          :tag = "noticia.tag"
      />
  </div>
</template>

<script>

import Noticia from '../components/NewsCard';

export default {
  name: 'News',
  components: {
    Noticia
  },
  data() {
    return {
      noticias: [],
      API: "https://spaceflightnewsapi.net/api/v1/articles",
      cantidadNoticias: 4,
    }
  },
  methods: {
    pintarDatos(info){
        if(this.cantidadNoticias===""){
            this.cantidadNoticias = info.length;
        }
        for(let i=0; i<this.cantidadNoticias;i++){
            let fecha = new Date(info[i].published_date);

            let fechaFormat = fecha.getDate() + "/"+ (parseInt(fecha.getMonth()) + 1) + "/" + fecha.getFullYear();

            try {
                var tag = info[i].tags[0];
                tag = tag.charAt(0).toUpperCase() + tag.slice(1);
            } catch {
                tag = "Not specified";
            }

            this.noticias.push({
                img: info[i].featured_image,
                id : info[i]._id,
                url: info[i].url,
                title: info[i].title,
                public: fechaFormat,
                siteweb: info[i].news_site_long,
                tag: tag,
            });
        }
    },
    async buscarDatosAPI(){
        const res = await fetch(this.API);
        const data = await res.json();

        this.pintarDatos(data.docs);
    }
  },
  created() {
    this.buscarDatosAPI();
  }
}

</script>
