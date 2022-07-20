<template>
  
  <main class="w-full h-full flex flex-row justify-center items-center">
    <Button label="Click Me" class="m-auto" />
    <Button icon="pi pi-check" class="m-auto" />
  </main>

</template>
  
<script>
  export default {
    name: 'App',
    setup() {
      
    }
  }
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body, #app {
    width: 100vw;
    height: 100vh;
  }
</style>
