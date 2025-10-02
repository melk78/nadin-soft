<script setup>
import { ref } from "vue";
import {useDataUserStore} from "@/stores/user.js";
// import {useI18n} from "vue-i18n";

const store = useDataUserStore();
const todos = store.todos;
// const {t}= useI18n();
const newTodo = ref("");
const isInput =ref(false);

// add
const addTodo = () => {
  store.addTodo(newTodo.value);
  newTodo.value = "";
  isInput.value = false;
};

// deleted
const removeTodo = (id) => {
  store.removeTodo(id);
};

// edit
const startEdit = (todo) => {
  store.startEdit(todo);
};

const saveEdit = (todo) => {
  store.saveEdit(todo, todo.text);
};
</script>

<template>
    <v-card outlined style="padding: 10px 16px">
      <!-- title -->
      <v-row flex="flex" align="center" justify="space-between" style="padding: 8px 16px 16px">
        <v-card-title class="justify-center">{{$t('todo.title')}}</v-card-title>
        <v-btn icon="icon-plus" size="small" color="primary" @click="isInput = true"></v-btn>
      </v-row>

      <v-divider></v-divider>
      <!-- list -->
      <v-list>
        <v-list-item
            v-for="todo in todos"
            :key="todo.id"
            flex="flex"
            style="padding:0;"
        >
          <!-- text -->
          <template v-if="!todo.editing">
            <v-row flex="flex" align="center" justify="space-between" style="padding:16px">
              <v-list-item-title class="font-weight-bold">
                {{ todo.text }}
              </v-list-item-title>

              <v-list-item-action>
                <v-btn icon="icon-pen-clip" class="mr-2" variant="tonal" size="x-small" color="success" @click="startEdit(todo)"/>
                <v-btn icon="icon-trash-can" variant="tonal" size="x-small" color="red" @click="removeTodo(todo.id)"/>
              </v-list-item-action>
            </v-row>

          </template>
                    <!-- edit -->
          <template v-else>
            <v-row flex="flex" align="center" justify="space-between" style="padding:16px">
              <v-text-field
                  v-model="todo.text"
                  :placeholder="$t('todo.taskPlaceholder')"
                  dense
                  hide-details
                  variant="outlined"
                  density="compact"
                  @keyup.enter="saveEdit(todo)"
                  class="pr-3"
              />
              <v-btn
                  icon="icon-check"
                  variant="flat"
                  size="small"
                  rounded color="success"
                  @click="saveEdit(todo)"
              >
              </v-btn>
            </v-row>
          </template>
        </v-list-item>
      </v-list>
      <!-- add -->
      <v-card-actions v-if="isInput" class="pt-10">
        <v-text-field
            v-model="newTodo"
            :placeholder="$t('todo.taskPlaceholder')"
            dense
            hide-details
            variant="outlined"
            @keyup.enter="addTodo"
        />
        <v-btn icon="icon-location-arrow" variant="flat" size="large" rounded color="primary" @click="addTodo"></v-btn>
      </v-card-actions>
    </v-card>
</template>


