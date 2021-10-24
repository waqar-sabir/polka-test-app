<template>
  <div class="container">
    <v-tabs
      v-model="tab"
      background-color="#fff"
      color="black"
    >
      <v-tabs-slider color="green"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
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
          tab: null,
          items: ['All', 'Live', 'Favorites'] 
        }
    },
};
</script>
