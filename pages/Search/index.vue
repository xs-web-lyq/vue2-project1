<template>
  <div>
    <h3>{{$route.query.k}}========</h3>
    <h3>{{$route.params.keyWord}}====</h3>
  </div>
</template>

<script>
export default {
    name:'Search',
    // props:['keyWord','k','a','b']
}
</script>

<style>

</style>