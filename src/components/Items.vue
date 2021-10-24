<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12" v-if="score && score.leagues && score.leagues.length">
            <v-card elevation="2" v-for="(item, index)  in score.leagues" class="mb-2" :key="index">
                <div class="d-flex justify-content-between align-items-center p-3">
                    <div>{{item.league_name}}</div>
                    <div>
                        <svg width="24" height="24" fill="#00C853" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/>
                        </svg>
                    </div>
                </div>
                <div  v-for="(event, index) in item.events" :key="index" class="event p-3">
                    <div class="match-row">
                        <span class="event-name">{{event.event_name}}</span>
                        <div class="team">
                            <div class="top-name"><b>{{event.team1.team_name}}</b></div>
                            <div class="bottom-name">{{event.team2.team_name}}</div>
                        </div>
                        <div class="team-score">
                            <div>{{event.team1.score}}</div>
                            <div>{{event.team2.score}}</div>
                        </div>
                    </div>
                </div>
            </v-card>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Items',

    data () {
        return {
          items: ['All', 'Live', 'Favorites'] 
        }
    },
    computed: {
        score () {
            return this.$store.state.score;
        }
    }
};
</script>

<style scoped>
    .event{
        color: #aaa;
        cursor: default;
        padding-bottom: 5px;
        position: relative;
    }
    .match-row{
        display: flex;
        align-items: center;
        font-size: 14px;
        position: relative;
        padding: 10px 0;
        flex: 1 1;
        text-decoration: none;
        color: hsl(0, 0%, 67%);
        border-radius: 7.5px;
        margin: 0 10px;
    }
    .event-name{
        flex: 0 0 45px;
        display: flex;
        flex-direction: column;
        position: relative;
        color: #aaa;
        padding: 4px 0 0;
        font-size: 11px;
        justify-content: space-between;
        height: 40px;
        justify-content: center;
    }
    .team{
        flex: 1 1;
    }
    .team .top-name{
        color: #000;
    }
    .team .bottom-name{
        color: #000;
    }
    .team-score{
        color: #000;
        display: flex;
        flex: 0 0 30px;
        flex-direction: column;
        font-weight: 500;
        position: relative;
        margin-right: 13px;
    }
</style>
