<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col text-center items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            Ресурс находится в процессе разработки
          </div>
          <h1 class="text-3xl text-6xl font-black">
            Краткий курс гармонии
          </h1>
        </div>
        <p class="font-medium lg:text-3xl">
          Для любителей музыки и начинающих профессионалов
        </p>
        <h2 class="text-4xl uppercase">
          А. Должанский
        </h2>

        <div class="flex justify-center mt-8">
          <g-link
            to="/docs/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Начало
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = 'Краткий курс гармонии';
    const description = 'Краткий курс гармонии';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
