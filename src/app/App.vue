<template lang="html">
    <div>
        <header><br></header>
        <div class="container">
            <router-view></router-view>
        </div>
        <br>
        <div class="container">
            <router-link :to="{name:'CreateItem'}" class="btn btn-primary">
                Crear Item
            </router-link>
        </div> 
        
    </div>
</template>
<script>
export default {

}
</script>


