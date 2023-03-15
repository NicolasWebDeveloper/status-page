<template>
  <div class="base__card">
    <slot></slot>
  </div>
</template>

<style>
.base__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25rem;
  height: 15rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #252c48;
  color: #71778f;
}
</style>
