<template>
  <div>
    <p>Some default layout content shared across all pages</p>
    <NuxtLink to="/">index page</NuxtLink>
    <br />
    <NuxtLink to="/about">about page</NuxtLink>

    <div>
      <div>
        切换语言
      </div>
      <NuxtLink :to="localePath('/', 'en')">index in en</NuxtLink>
      <br />
      <NuxtLink :to="localePath('/about', 'fr')">about in fr</NuxtLink>
      <br />
      <NuxtLink :to="'www.baidu.com'">baidu</NuxtLink>

      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      <br />
      <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>

      <form>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
        <p>{{ $t("welcome") }}</p>
      </form>
    </div>
    <slot />
  </div>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const about = localePath("/about", "en");

console.log(about, "测试");
</script>
