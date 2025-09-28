<template>
  <v-card class="item my-4" flat>
    <v-row no-gutters>
      <v-col cols="auto" class="icon-container">
        <v-avatar
          color="surface"
          class="icon-wrapper"
          size="50"
        >
          <slot name="icon"></slot>
        </v-avatar>
      </v-col>
      <v-col>
        <v-card-title class="text-h5 font-weight-medium">
          <slot name="heading"></slot>
        </v-card-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.item {
  position: relative;
  border-left: 1px solid transparent;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(60, 60, 60, 0.12);
}

@media (min-width: 1024px) {
  .item {
    padding-left: 40px;
    border-left: 1px solid rgba(60, 60, 60, 0.12);
  }

  .item:first-of-type {
    border-left-color: transparent;
  }

  .item:last-of-type {
    border-left-color: transparent;
  }

  .icon-container {
    position: absolute;
    left: -25px;
    top: 0;
    height: 100%;
  }
}
</style>
