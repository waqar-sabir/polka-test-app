<template>
  <div> 
    <v-toolbar
      color="green accent-4"
      dark
      center-active 
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Score</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="date"
          align-with-title
          class="toolbar-tabs"
        >
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab
            v-for="(item, index) in items"
            :key="index"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="date">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <toolbar-items />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>

import ToolbarItems from '@/components/ToolbarItems'

export default {
  name: 'Toolbar',

  components: {
      ToolbarItems,
  },

  mounted(){
      let query = {date: 0 , type: 0};
      this.$store.dispatch('changeTab', query);
  },

  data () {
    return {
        items: ['YESTERDAY', 'TODAY', 'TOMORROW']
    }
  },

  computed: {
    date : {
      get () {
        return this.$store.state.date
      },
      set (value) {
        let query = {date: value , type: this.$store.state.type};
        this.$store.dispatch('changeTab', query);
      }
    }
  }
};
</script>

<style scoped>
  .toolbar-tabs{
    margin-left: 35px !important;
  }
  @media only screen and (max-width: 600px) {
      .toolbar-tabs {
        margin-left: 0px !important;
      }
  }
</style>

