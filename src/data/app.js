var equipo = JSON.parse(equipo)

const appEquipo = new Vue({
    el: "#containerEquipo",
    data:{ 
        nom1 : equipo[0].nombre,
        nom2 : equipo[1].nombre,
        nom3 : equipo[2].nombre,
        nom4 : equipo[3].nombre,
        nom5 : equipo[4].nombre,

        rol1 : equipo[0].rol,
        rol2 : equipo[1].rol,
        rol3 : equipo[2].rol,
        rol4 : equipo[3].rol,
        rol5 : equipo[4].rol,

        carac1 : equipo[0].carac,
        carac2 : equipo[1].carac,
        carac3 : equipo[2].carac,
        carac4 : equipo[3].carac,
        carac5 : equipo[4].carac,

        dom1 : equipo[0].dom,
        dom2 : equipo[1].dom,
        dom3 : equipo[2].dom,
        dom4 : equipo[3].dom,
        dom5 : equipo[4].dom,

        foto1 : equipo[0].fot,
        foto2 : equipo[1].fot,
        foto3 : equipo[2].fot,
        foto4 : equipo[3].fot,
        foto5 : equipo[4].fot,

    },
});