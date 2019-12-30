<template>
    <div class="wrapper">
        <navbar></navbar>

        <div class="container-fluid my-15">
            <transition name="fade" mode="out-in">
                <router-view class="view" keep-alive :key="$route.fullPath"></router-view>
            </transition>
        </div>

    </div>
</template>

<script>


    import { mapState } from "vuex";

    export default {
        components: {
            navbar: () => import("./views/navbar.vue")
           
        },

        computed: {

            ...mapState({
                session: state => state.member.session

            })
        },

        created() {
            this.$store.dispatch('REQUEST_AUTH').then(res => {

                if (!this.session && this.$route.meta.auth) {
                    this.$router.push({ path: '/register', query: { next: this.$route.fullPath } });
                }
            });

        }
    }

</script>