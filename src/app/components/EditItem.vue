<template>
    <div>
        <h3>Actualizar un Item</h3>
        <form v-on:submit.prevent="updateItem" class="card col-md-6">
            <div class="card-body">
                <div class="form-group">
                    <input type="text" v-model="item.name" placeholder="Nombre" class="form-control">
                </div>
                <div class="form-group">
                    <input type="number" v-model="item.price" placeholder="Precio" class="form-control">
                </div>
                <button type="submit" class="btn btn-info">Actualizar</button>
                <button type="" class="btn btn-danger">Cancelar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            item:{

            }
        }
    },
    created(){
        this.getItem();
    },
    methods:{
        getItem(){
            this.axios.get('/item/' + this.$route.params.id)
                .then(res => {
                    this.item = res.data;
                    //console.log(this.item);
                })
        },
        updateItem(){
            this.axios.put('/item/' + this.$route.params.id, this.item)
                .then(res =>{
                    //console.log(res);
                    this.$router.replace({name:'DisplayItem'});
                })
        }
    }
}
</script>