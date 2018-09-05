const BF = new Vue({
    el: '#BF',
    data: {
        countdown: 5,
        redirect_url: 'https://www.e1.ru/award/votes/fitness/'
    },
    created() {
        this.initTicker();
    },
    methods: {
        initTicker: function() {
            let self = this;
            setInterval(() => {self.tick();}, 1000);
        },
        tick: function() {
            if(this.countdown >= 0){
                this.countdown--;
            }else{
                document.location.href = this.redirect_url;
            }
        }
    }
});