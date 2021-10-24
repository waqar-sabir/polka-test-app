<template>
  <div> 
    <v-toolbar
      color="green accent-4"
      dark
      center-active 
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Scores</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab
            v-for="item in items"
            :key="item"
            @click="changeTab(item)"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab">
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
      let query = {date: 'YESTERDAY' , type: 'All'};
      this.$store.dispatch('changeTab', query);
  },

  methods: {
    changeTab(item) {
        let query = {date: item , type: 'All'};
        this.$store.dispatch('changeTab', query)
    }
  },

  data () {
    return {
        tab: null,
        items: ['YESTERDAY', 'TODAY', 'TOMORROW']
    }
  },
};
</script>

