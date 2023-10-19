<template>
  <NuxtLayout name="custom">
    <div>
      <h1>Index page</h1>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>
