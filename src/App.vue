<template>
  <div id="app">
    <Navigation />
    <Banner />
    <div class="container">
      <main>
        <!-- Servicios -->
        <div class="container subTitulo" id="services">
            <h3>Nuestros Servicios de Vuelos Orbitales</h3>
        </div>
        <Services />
      </main>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Services from './components/Services';

export default {
  name: 'App',
  components: {
    Navigation,
    Banner,
    Services
  },
}
</script>

