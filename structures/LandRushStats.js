const ms = require("human-ms");

module.exports = class LandRushStats {

    constructor($){
        
        const stats = $(".player-stats-info").get(9);

        this.points = parseInt(stats.children[5].children[3].children[0].data.split(" ").join("")) || 0;
        this.gameCount = parseInt(stats.children[7].children[3].children[0].data.split(" ").join("")) || 0;
        this.victoryCount = parseInt(stats.children[9].children[3].children[0].data.split(" ").join("")) || 0;
        this.defeatCount = parseInt(stats.children[11].children[3].children[0].data.split(" ").join("")) || 0;
        this.gameTime = ms(stats.children[13].children[3].children[0].data) || 0;
        this.killCount = parseInt(stats.children[15].children[3].children[0].data.split(" ").join("")) || 0;
        this.deathCount = parseInt(stats.children[17].children[3].children[0].data.split(" ").join("")) || 0;
        this.destroyedBedCount = parseInt(stats.children[19].children[3].children[0].data.split(" ").join("")) || 0;

    }
    
    get kd() {
        return (parseFloat(this.killCount / this.deathCount) || 0).toFixed(2);
    }
    
    get wl() {
        return (parseFloat(this.victoryCount / this.defeatCount) || 0).toFixed(2);
    }

};
