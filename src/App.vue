<template>
  <v-app>
    <v-app-bar app color="teal lighten-3" style="text-align: right">
      <div>Hamilton Rental Properties</div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <v-footer padless>
        <v-col class="text-center" cols="12"><strong><a href="http://github.com/CaraHamilton/CreativeLab3">Creative Lab 3 GitHub Repository</a></strong> </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
