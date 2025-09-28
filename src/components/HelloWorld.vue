<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <v-container class="greetings">
    <v-row>
      <v-col>
        <v-card flat>
          <v-card-title class="text-h3 text-primary">{{ msg }}</v-card-title>
          <v-card-text class="text-subtitle-1">
            You've successfully created a project with
            <v-btn
              variant="text"
              href="https://vite.dev/"
              target="_blank"
              rel="noopener"
              color="primary"
              density="comfortable"
            >
              Vite
            </v-btn> +
            <v-btn
              variant="text"
              href="https://vuejs.org/"
              target="_blank"
              rel="noopener"
              color="primary"
              density="comfortable"
            >
              Vue 3
            </v-btn>. What's next?
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.greetings {
  margin-top: 2rem;
}

@media (min-width: 1024px) {
  .greetings {
    text-align: left;
  }
}
</style>
