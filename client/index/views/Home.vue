<template>
    <div>
        <div class="content home">
            it's home page
            <div v-for="item in list">{{item}}</div>
            <button @click="addOne">add a 233</button>
            <comp-a></comp-a>
        </div>
    </div>
</template>

<script>
import compA from '../components/compA.vue'
export default {
    data () {
        return {
            list: ['test', '233']
        }
    },
    components: {
        compA
    },
    preFetch () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('just test')
                resolve()
            }, 1000)
        })
    },
    methods: {
        addOne () {
            this.list.push('233')
        }
    }
}
</script>
