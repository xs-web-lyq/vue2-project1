<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Brand />
  </div>

</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Brand from './Brand'
import Floor from './Floor'
export default {
    name:'Home',
    components:{ListContainer,Recommend,Rank,Like,Brand,Floor}
}
</script>

<style>

</style>