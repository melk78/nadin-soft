<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <v-container>
    <WelcomeItem>
      <template #icon>
<!--        <DocumentationIcon />-->
      </template>
      <template #heading>Documentation</template>

      Vue's
      <v-btn
        variant="text"
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        official documentation
      </v-btn>
      provides you with all information you need to get started.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
<!--        <ToolingIcon />-->
      </template>
      <template #heading>Tooling</template>

      This project is served and bundled with
      <v-btn
        variant="text"
        href="https://vite.dev/guide/features.html"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Vite
      </v-btn>. The
      recommended IDE setup is
      <v-btn
        variant="text"
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        VSCode
      </v-btn>
      +
      <v-btn
        variant="text"
        href="https://github.com/vuejs/language-tools"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Vue - Official
      </v-btn>. If
      you need to test your components and web pages, check out
      <v-btn
        variant="text"
        href="https://vitest.dev/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Vitest
      </v-btn>
      and
      <v-btn
        variant="text"
        href="https://www.cypress.io/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Cypress
      </v-btn>
      /
      <v-btn
        variant="text"
        href="https://playwright.dev/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Playwright
      </v-btn>.

      <v-divider class="my-4"></v-divider>

      More instructions are available in
      <v-btn
        variant="text"
        @click="openReadmeInEditor"
        color="primary"
        density="comfortable"
      >
        <v-icon>mdi-file-document</v-icon> README.md
      </v-btn>.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
<!--        <EcosystemIcon />-->
      </template>
      <template #heading>Ecosystem</template>

      Get official tools and libraries for your project:
      <v-btn
        variant="text"
        href="https://pinia.vuejs.org/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Pinia
      </v-btn>,
      <v-btn
        variant="text"
        href="https://router.vuejs.org/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Vue Router
      </v-btn>,
      <v-btn
        variant="text"
        href="https://test-utils.vuejs.org/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Vue Test Utils
      </v-btn>, and
      <v-btn
        variant="text"
        href="https://github.com/vuejs/devtools"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Vue Dev Tools
      </v-btn>. If
      you need more resources, we suggest paying
      <v-btn
        variant="text"
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Awesome Vue
      </v-btn>
      a visit.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
<!--        <CommunityIcon />-->
      </template>
      <template #heading>Community</template>

      Got stuck? Ask your question on
      <v-btn
        variant="text"
        href="https://chat.vuejs.org"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        Vue Land
      </v-btn>
      (our official Discord server), or
      <v-btn
        variant="text"
        href="https://stackoverflow.com/questions/tagged/vue.js"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        StackOverflow
      </v-btn>. You should also follow the official
      <v-btn
        variant="text"
        href="https://bsky.app/profile/vuejs.org"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        @vuejs.org
      </v-btn>
      Bluesky account or the
      <v-btn
        variant="text"
        href="https://x.com/vuejs"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        @vuejs
      </v-btn>
      X account for latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
<!--        <SupportIcon />-->
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <v-btn
        variant="text"
        href="https://vuejs.org/sponsor/"
        target="_blank"
        rel="noopener"
        color="primary"
        density="comfortable"
      >
        becoming a sponsor
      </v-btn>.
    </WelcomeItem>
  </v-container>
</template>
