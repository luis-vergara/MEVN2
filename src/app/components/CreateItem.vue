<template>
    <div class="">
        <h4>Agregar un Item</h4>
        <form v-on:submit.prevent="addItem" class="card col-md-8">
            <div class="card-body">
                <div class="form-group">
                    <input type="text" v-model="item.name" placeholder="Nombre" class="form-control">
                </div>
                <div class="form-group">
                    <input type="number" v-model="item.price" placeholder="Precio" class="form-control">
                </div>
                <button type="submit" class="btn btn-success">
                    Agregar
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            item:{}
        }
    },
    created(){

    },
    methods:{
        addItem(){
            this.axios.post('/item',this.item)
             .then(res => {
                 this.$router.replace({name :'DisplayItem'});
             })
             .catch(err => console.log(err))
        }
    }
}
</script>

