console.log('object');

var login = new Vue({
    el: '#login',
    data: {
        name: 'hahaha',
        pass: '32412'
    },
    methods: {
        submit: function() {
            alert('fffff')
            console.log('object');
            this.$http.post(
                '/submit',
                this.data, { emulateJSON: true },
                function(param) {
                    console.log(param)
                })
        }
    }
})