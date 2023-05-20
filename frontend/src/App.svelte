<script>
  import Router from 'svelte-spa-router';
  import Home from './Home.svelte';
  import breath from './breath.svelte';
  import about from './about.svelte';
  import reflect from './reflect.svelte';
</script>

<nav class ="main">
  <a href="/#/">Home</a>
  <a href="/#/breath">Breath</a>
  <a href="/#/reflect">Reflect</a>
  <a href="/#/about">About</a>
</nav>

<Router routes={{
  '/': Home,
  '/breath': breath,
  '/reflect': reflect,
  '/about': about
}} />