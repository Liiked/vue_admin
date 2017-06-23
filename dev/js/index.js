console.log('object');

// 登陆
var login = new Vue({
    el: '#login',
    data: {
        name: 'hahaha',
        pass: '32412',
        show: true
    },
    methods: {
        submit: function() {
            var sendData = {
                name: this.name,
                pass: this.pass
            }
            console.log(sendData);
            var that = this
            this.$http.post('/login',
                    JSON.stringify(sendData), { emulateJSON: true }
                )
                .then(function(res) {
                    var body = res.body
                    if (body.status == 200) {
                        that.show = false
                    }
                })
        }
    }
})

// 侧边栏组件
Vue.component('sidebar', {
    template: '<div><router-link to="/">Go to Foo</router-link><router-link to="/bar">Go to Bar</router-link></div>'
        // 选项
})

var sidebar = new Vue({
    el: '#sidebar'
})

// 加载router

$('head').append('<script src="https://cdn.bootcss.com/vue-router/2.6.0/vue-router.js"></script>')

var Foo = {
    template: '#main',
    data() {
        return {
            text: 'hahah',
            title: 'hahahahahahah'
        }
    },
    beforeCreate() {
        this.$http.get('/main').then(function(res) {
            var data = res.body
            this.text = data.text
            this.title = data.title
        })
    }
}
var Bar = { template: '#jumbotron' }

var routes = [{
        path: '/',
        components: {
            main: Foo,
        }
    },
    {
        path: '/bar',
        components: {
            default: Bar
        }
    },
]


setTimeout(function() {
    var router = new VueRouter({
        routes: routes // （缩写）相当于 routes: routes
    })

    var app = new Vue({
        router
    }).$mount('#app')
}, 1000)