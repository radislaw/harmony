<template>
  <button @click="handleClick" aria-label="Тёмная тема" title="Тёмная тема">
    <slot :dark="isDarkMode" />
  </button>
</template>

<script>
export const LIGHTS_OUT = 'lights-out';

export default {
  data() {
    return {
      isDarkMode: false
    }
  },

  methods: {
    handleClick() {
      const hasDarkMode = document.documentElement.hasAttribute(LIGHTS_OUT);

      // Toggle dark mode on click.
      return this.toggleDarkMode(! hasDarkMode);
    },

    toggleDarkMode(shouldBeDark) {
      document.documentElement.toggleAttribute(LIGHTS_OUT, shouldBeDark);

      this.isDarkMode = shouldBeDark;

      this.writeToStorage(shouldBeDark);

      return shouldBeDark;
    },

    detectPrefered() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    hasInStorage() {
      const check = localStorage.getItem(LIGHTS_OUT);

      return check !== null;
    },

    writeToStorage(prefersDark) {
      localStorage.setItem(LIGHTS_OUT, prefersDark);
    },

    getFromStorage() {
      return localStorage.getItem(LIGHTS_OUT) === 'true';
    }
  },

  mounted() {
    if (this.hasInStorage()) {
      this.toggleDarkMode(
        this.getFromStorage()
      );
    } else if (process.isClient && window.matchMedia) {
      this.toggleDarkMode(
        this.detectPrefered()
      );
    }
  }
};
</script>
