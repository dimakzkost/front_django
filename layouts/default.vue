<template>
  <v-app dark>
    <my-menu />
    <v-main>
     <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import MyMenu from "~/components/MyMenu";

export default {
  components: {
    MyMenu
  }

}
</script>
