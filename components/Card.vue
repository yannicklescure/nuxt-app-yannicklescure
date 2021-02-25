<template>
  <div :class="['card w-100 my-2', item.name]">
    <div class="card-body text-center">
      <a :href="item.url" target="_blank" class="p-2 stretched-link text-decoration-none">{{ item.content }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['item']
}
</script>
