<template>
  <div>
    <button class="button z-[9] uppercase">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>
.button {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  outline: 2px solid;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  transition: color 1s;
}

.button:hover {
  color: #fff;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50px;
  width: 150%;
  height: 100%;
  background-color: #333e48;
  transform: scaleX(0) skewX(35deg);
  transform-origin: left;
  z-index: -1;
  transition: transform 1s;
}

.button:hover::before {
  transform: scaleX(1) skewX(35deg);
}
</style>