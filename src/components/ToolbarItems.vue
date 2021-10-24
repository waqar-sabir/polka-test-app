<template>
  <div class="container">
    <v-tabs
      v-model="type"
      background-color="#fff"
      color="black"
      class="toolbar-items"
    >
      <v-tabs-slider color="green"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="type">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <items />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
  
</template>

<script>

import Items from '@/components/Items'

export default {
    name: 'ToolbarItems',

    components: {
      Items,
    },

    data () {
        return {
          items: ['All', 'Live', 'Favorites'] 
        }
    },

    computed: {
      type : {
        get () {
          return this.$store.state.type
        },
        set (value) {
          let query = {date: this.$store.state.date , type: value};
          this.$store.dispatch('changeTab', query);
        }
      }
    }
};
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
      .toolbar-items {
        margin-left: 50px !important;
      }
  }
</style>
