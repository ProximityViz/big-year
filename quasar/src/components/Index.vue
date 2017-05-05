<template>
  <q-layout>
    <q-tabs slot="navigation">
      <q-tab hide="icon" route="/" default-tab>Big Year</q-tab>
      <q-tab icon="remove_red_eye" hide="icon" route="/finder" replace>Finder</q-tab>
    </q-tabs>

    <router-view class="layout-view">
    </router-view>
  </q-layout>
</template>
