<template>
  <q-layout>
    <q-tabs slot="navigation">
      <q-tab hide="icon" route="/" default-tab>Big Year</q-tab>
      <q-tab icon="remove_red_eye" hide="icon" route="/finder" exact replace>Finder</q-tab>
      <q-tab icon="view_day" hide="icon" route="/showcase/layout/toolbar" replace>Toolbar</q-tab>
      <q-tab icon="find_in_page" hide="icon" route="/showcase/layout/tabs" replace>Tabs</q-tab>
      <q-tab icon="input" hide="icon" route="/showcase/layout/drawer" replace>Drawer</q-tab>
    </q-tabs>

    <router-view class="layout-view">
    </router-view>
  </q-layout>
</template>
