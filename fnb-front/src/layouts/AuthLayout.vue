<template>
  <div
    style="
      background: #222;
      color: white;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    "
  >
    hello from authlayout
    <main style="width: 400px">
      <!-- <slot /> -->
      <RouterView></RouterView>
    </main>
  </div>
</template>
