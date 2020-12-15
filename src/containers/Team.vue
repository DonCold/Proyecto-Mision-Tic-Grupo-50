<template>
  <div class="row d-flex justify-content-center">
    <TeamCard v-for="miembro in miembros"
      :key = "miembro.id"
      :nombre = "miembro.nombre"
      :rol = "miembro.rol"
      :descrip = "miembro.descrip"
      :dom = "miembro.dom"
      :foto = "miembro.foto"
    />
  </div>
</template>

<script>
import TeamCard from '../components/TeamCard';
import data from '../assets/equipo';

export default {
  name: 'Team',
  components: {
    TeamCard
  },
  data() {
    return {
      miembros: []
    }
  },
  methods: {
    separarMiembros(){
      for(let i=0;i<data.length;i++){
        this.miembros.push({
          id: data[i].id,
          nombre: data[i].nombre,
          rol: data[i].rol,
          descrip: data[i].descrip,
          dom: data[i].dom,
          foto: data[i].foto
        });
      }
      console.log(this.miembros);
    }
  },
  created() {
    this.separarMiembros();
  }
}

</script>
