<template>
  <div>This is home page</div>
  <div>i18n test: {{ $t("test") }}</div>
  <button @click="locale = 'zh'">Language To : zh</button>
  <button @click="locale = 'en'">Language To : en</button>

  <div class="text-[3rem] p-10 text-red-400">Tailwind Test</div>

  <button @click="apiTest()">API Testing1</button>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { testing1 } from "@/api/testAPI/apiTesting1";

const { locale } = useI18n();
const apiTest = async () => {
  await testing1();
};
</script>

<style scoped></style>
