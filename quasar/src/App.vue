<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recent: [],
    recentNeeded: [],
    activeCounty: '',
    activeHotspot: '',
    hotspotNeeded: [],
    birdsSeen: {
      '067': [ // Cobb
        'Canada Goose', 'Mallard', 'Cooper\'s Hawk', 'Red-shouldered Hawk', 'Red-tailed Hawk', 'Mourning Dove', 'Red-bellied Woodpecker', 'Downy Woodpecker', 'Hairy Woodpecker', 'Eastern Phoebe', 'Blue-headed Vireo', 'Blue Jay', 'American Crow', 'Carolina Chickadee', 'Tufted Titmouse', 'White-breasted Nuthatch', 'Carolina Wren', 'Ruby-crowned Kinglet', 'Eastern Bluebird', 'Hermit Thrush', 'Orange-crowned Warbler', 'Yellow-rumped Warbler', 'Chipping Sparrow', 'White-throated Sparrow', 'Song Sparrow', 'Northern Cardinal', 'American Goldfinch', 'Double-crested Cormorant', 'Great Blue Heron', 'Black Vulture', 'Belted Kingfisher', 'Red-headed Woodpecker', 'Golden-crowned Kinglet', 'Cedar Waxwing', 'hawk sp.', 'crow sp.', 'passerine sp.', 'warbler sp. (Parulidae sp.)', 'Sharp-shinned/Cooper\'s Hawk', 'Common Grackle', 'Red-winged Blackbird', 'Eastern Towhee', 'Pine Warbler', 'Palm Warbler', 'Common Yellowthroat', 'Prothonotary Warbler', 'Brown Thrasher', 'American Robin', 'Blue-gray Gnatcatcher', 'Brown-headed Nuthatch', 'Cliff Swallow', 'Northern Rough-winged Swallow', 'Fish Crow', 'Red-eyed Vireo', 'White-eyed Vireo', 'Spotted Sandpiper', 'Green Heron'
      ],
      '089': [ // DeKalb
        'Snow Goose', 'Gadwall', 'Mallard', 'Turkey Vulture', 'Red-shouldered Hawk', 'Belted Kingfisher', 'Red-bellied Woodpecker', 'Pileated Woodpecker', 'Eastern Phoebe', 'Blue Jay', 'Carolina Chickadee', 'Tufted Titmouse', 'White-breasted Nuthatch', 'Carolina Wren', 'Golden-crowned Kinglet', 'Ruby-crowned Kinglet', 'Hermit Thrush', 'American Robin', 'Northern Mockingbird', 'Chipping Sparrow', 'White-throated Sparrow', 'Song Sparrow', 'Eastern Towhee', 'Northern Cardinal', 'Canada Goose', 'Hooded Merganser', 'Great Blue Heron', 'Red-tailed Hawk', 'Mourning Dove', 'Barred Owl', 'Downy Woodpecker', 'Northern Flicker', 'Blue-headed Vireo', 'American Crow', 'Brown-headed Nuthatch', 'Brown Creeper', 'Yellow-rumped Warbler', 'American Goldfinch', 'Wood Duck', 'Pied-billed Grebe', 'Yellow-bellied Sapsucker', 'Eastern Bluebird', 'Cedar Waxwing', 'sparrow sp.', 'Purple Finch', 'Greater White-fronted Goose', 'Muscovy Duck (Domestic type)', 'Pine Warbler', 'House Finch', 'Domestic goose sp. (Domestic type)', 'Killdeer', 'Orange-crowned Warbler', 'Dark-eyed Junco', 'Red-headed Woodpecker', 'Red-winged Blackbird', 'Common Grackle', 'Fish Crow', 'Brown Thrasher', 'Cooper\'s Hawk', 'Winter Wren', 'House Sparrow', 'Black Vulture', 'hawk sp.', 'crow sp.', 'passerine sp.', 'warbler sp. (Parulidae sp.)', 'Sharp-shinned/Cooper\'s Hawk', 'blackbird sp.', 'Rock Pigeon', 'Blue-gray Gnatcatcher', 'Northern Rough-winged Swallow', 'swallow sp.', 'Blue-winged Teal', 'Double-crested Cormorant', 'Field Sparrow', 'Great Crested Flycatcher', 'Black-and-white Warbler', 'Palm Warbler', 'Gray Catbird', 'Louisiana Waterthrush', 'Northern Waterthrush', 'Nashville Warbler', 'Common Yellowthroat', 'Scarlet Tanager', 'Yellow-crowned Night-Heron', 'European Starling', 'Green Heron', 'Ruby-throated Hummingbird', 'Eastern Kingbird', 'House Wren', 'Brown-headed Cowbird', 'Wood Thrush'
      ],
      '121': [ // Fulton
        'Rock Pigeon (Feral Pigeon)', 'Rock Pigeon', 'Mourning Dove', 'Blue Jay', 'American Crow', 'Carolina Wren', 'American Robin', 'Northern Mockingbird', 'Yellow-rumped Warbler', 'Song Sparrow', 'Northern Cardinal', 'House Sparrow', 'Downy Woodpecker', 'sparrow sp.', 'Muscovy Duck (Domestic type)', 'Mallard', 'Red-shouldered Hawk', 'Red-tailed Hawk', 'Wilson\'s Snipe', 'Eastern Screech-Owl', 'Red-bellied Woodpecker', 'Eastern Phoebe', 'White-breasted Nuthatch', 'Eastern Bluebird', 'Brown Thrasher', 'White-throated Sparrow', 'Eastern Towhee', 'Red-winged Blackbird', 'Common Grackle', 'Yellow-bellied Sapsucker', 'Hairy Woodpecker', 'Carolina Chickadee', 'Tufted Titmouse', 'Brown-headed Nuthatch', 'Golden-crowned Kinglet', 'Ruby-crowned Kinglet', 'Pine Warbler', 'Chipping Sparrow', 'Swamp Sparrow', 'House Finch', 'American Goldfinch', 'Canada Goose', 'Great Blue Heron', 'Belted Kingfisher', 'Northern Flicker', 'Winter Wren', 'European Starling', 'Orange-crowned Warbler', 'Rusty Blackbird', 'blackbird sp.', 'Double-crested Cormorant', 'Osprey', 'Killdeer', 'Spotted Sandpiper', 'Red-headed Woodpecker', 'Black Vulture', 'Cooper\'s Hawk', 'Bald Eagle', 'Hermit Thrush', 'Cedar Waxwing', 'Ring-necked Duck', 'Brown Creeper', 'Dark-eyed Junco', 'Mallard (Domestic type)', 'Turkey Vulture', 'Pileated Woodpecker', 'Fox Sparrow', 'Fish Crow', 'Eurasian Collared-Dove', 'Blue-headed Vireo', 'Field Sparrow', 'Palm Warbler', 'Merlin', 'Blue-winged Teal', 'Northern Pintail', 'hawk sp.', 'crow sp.', 'passerine sp.', 'warbler sp. (Parulidae sp.)', 'Sharp-shinned/Cooper\'s Hawk', 'blackbird sp.', 'Ring-billed Gull', 'Great Horned Owl', 'duck sp.', 'Buteo sp.', 'Northern Rough-winged Swallow', 'swallow sp.', 'Brown-headed Cowbird', 'Barred Owl', 'House Wren', 'Bufflehead', 'Pied-billed Grebe', 'Wood Duck', 'Black-crowned Night-Heron', 'Eastern Meadowlark', 'Vesper Sparrow', 'Common Yellowthroat', 'Blue-gray Gnatcatcher', 'Chimney Swift', 'Northern Shoveler', 'Great Egret', 'Tree Swallow', 'Yellow-crowned Night-Heron', 'Louisiana Waterthrush', 'American Bittern', 'Green Heron', 'American Coot', 'Great Crested Flycatcher', 'Gray Catbird', 'Orchard Oriole', 'Indigo Bunting'
      ],
      '135': [ // Gwinnett
        'Mallard', 'Great Blue Heron', 'Black Vulture', 'Mourning Dove', 'Belted Kingfisher', 'Red-bellied Woodpecker', 'Downy Woodpecker', 'Eastern Phoebe', 'Blue-headed Vireo', 'American Crow', 'Tufted Titmouse', 'White-breasted Nuthatch', 'Brown Creeper', 'Carolina Wren', 'Golden-crowned Kinglet', 'Ruby-crowned Kinglet', 'American Robin', 'Yellow-rumped Warbler', 'Song Sparrow', 'Northern Cardinal', 'sparrow sp.', 'crow sp.', 'passerine sp.', 'warbler sp. (Parulidae sp.)'
      ]
    }
  },
  mutations: {
    SET_HOTSPOT: (state, response) => {
      console.log(response)
      state.hotspotNeeded = []
      state.activeHotspot = response.hotspot
      for (var item of response.data) {
        if (!state.birdsSeen[response.countyNumber].includes(item.comName)) {
          state.hotspotNeeded.push(item)
        }
      }
    },
    SET_RECENT: (state, response) => {
      state.recent = Object.assign({}, response.data)
    },
    SET_RECENT_NEEDED: (state, response) => {
      state.recentNeeded = []
      state.activeCounty = response.countyNumber
      for (var item of response.data) {
        if (!state.birdsSeen[response.countyNumber].includes(item.comName)) {
          state.recentNeeded.push(item)
        }
      }
    },
    SET_SPECIES: (state, response) => {
      state.sightings = Object.assign({}, response.data)
    }
  },
  actions: {
    GET_HOTSPOT: (state, params) => {
      axios.create({
        baseURL: 'https://ebird.org/ws1.1/data/obs/hotspot/recent'
      }).get('?fmt=json&back=7&r=' + params.hotspotID).then(response => {
        response.countyNumber = params.countyID
        state.commit('SET_HOTSPOT', response)
      })
    },
    GET_RECENT: (state, countyNumber) => {
      axios.create({
        baseURL: 'https://ebird.org/ws1.1/data/obs/region/recent'
      }).get('?rtype=subnational2&fmt=json&back=7&r=US-GA-' + countyNumber).then(response => {
        state.commit('SET_RECENT', response)
        response.countyNumber = countyNumber
        state.commit('SET_RECENT_NEEDED', response)
      })
    },
    GET_SPECIES: (state, params) => {
      axios.create({
        baseURL: 'http://ebird.org/ws1.1/data/obs/region_spp/recent'
      }).get('?rtype=subnational2&fmt=json&r=US-GA-' + params.countyNumber + '&sci=' + params.species).then(response => {
        state.commit('SET_SPECIES', response)
      })
    }
  }
})

export default {
  name: 'big-year',
  store
}
</script>

<style>
@media only screen and (min-width: 1281px) {
  .layout-padding {
    margin: inherit;
  }
}
</style>
