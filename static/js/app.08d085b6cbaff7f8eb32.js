webpackJsonp([1,2],{100:function(e,r,t){t(97);var n=t(3)(t(57),t(109),"data-v-fd542820",null);e.exports=n.exports},101:function(e,r,t){t(94);var n=t(3)(t(58),t(105),"data-v-1d2c2448",null);e.exports=n.exports},102:function(e,r,t){t(95);var n=t(3)(t(59),t(106),"data-v-4026669d",null);e.exports=n.exports},103:function(e,r,t){t(93);var n=t(3)(t(60),t(104),"data-v-19d99fb0",null);e.exports=n.exports},104:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("Seen")]),e._v(" "),e._l(e.birdsSeen,function(r,n){return t("ul",[t("h2",[e._v(e._s(n))]),e._v(" "),e._l(r,function(r){return t("li",[e._v(e._s(r))])})],2)})],2)},staticRenderFns:[]}},105:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",["all"===e.mode?t("div",[t("div",[e._v("Note: only returns one record per species")]),e._v(" "),t("h1",[e._v("Nearby")]),e._v(" "),t("button",{on:{click:function(r){e.getRecentBirds("067","Cobb")}}},[e._v("Get Cobb Birds")]),e._v(" "),t("button",{on:{click:function(r){e.getRecentBirds("089","DeKalb")}}},[e._v("Get DeKalb Birds")]),e._v(" "),t("button",{on:{click:function(r){e.getRecentBirds("121","Fulton")}}},[e._v("Get Fulton Birds")]),e._v(" "),t("button",{on:{click:function(r){e.getRecentBirds("135","Gwinnett")}}},[e._v("Get Gwinnett Birds")]),e._v(" "),t("h1",[e._v("Needed for "+e._s(e.active))]),e._v(" "),t("table",e._l(e.recentNeeded,function(r){return t("tr",[t("td",{on:{click:function(r){e.changeMode("species")}}},[e._v(e._s(r.comName))]),e._v(" "),t("td",{on:{click:function(t){e.changeMode("hotspot",r)}}},[e._v(e._s(r.locName))]),e._v(" "),t("td",[e._v(e._s(r.obsDt))])])}))]):e._e(),e._v(" "),"all"!==e.mode?t("button",{on:{click:function(r){e.changeMode("all")}}},[e._v("Back")]):e._e(),e._v(" "),"species"===e.mode?t("div",[t("button",{on:{click:function(r){e.changeMode("all")}}},[e._v("Back")]),e._v(" "),t("h1",[e._v("Species")])]):e._e(),e._v(" "),"hotspot"===e.mode?t("Hotspot"):e._e()],1)},staticRenderFns:[]}},106:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("Needed for hotspot: "+e._s(e.hotspotName))]),e._v(" "),t("table",e._l(e.hotspotNeeded,function(r){return t("tr",[t("td",{on:{click:function(r){e.changeMode("species")}}},[e._v(e._s(r.comName))]),e._v(" "),t("td",{on:{click:function(t){e.changeMode("hotspot",r,e.active)}}},[e._v(e._s(r.locName))]),e._v(" "),t("td",[e._v(e._s(r.obsDt))])])}))])},staticRenderFns:[]}},107:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",[e._v("\n  Hello world\n")])},staticRenderFns:[]}},108:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]}},109:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"hello"},[t("ul",{class:e.active,on:{click:function(e){e.preventDefault()}}},[t("li",[t("a",{staticClass:"home",attrs:{href:"#"},on:{click:function(r){e.makeActive("home")}}},[e._v("Home")])]),e._v(" "),t("li",[t("a",{staticClass:"seen",attrs:{href:"#"},on:{click:function(r){e.makeActive("seen")}}},[e._v("Birds I've Seen")])]),e._v(" "),t("li",[t("a",{staticClass:"finder",attrs:{href:"#"},on:{click:function(r){e.makeActive("finder")}}},[e._v("Bird Finder")])])]),e._v(" "),t("seen"===e.active?"Seen":"finder"===e.active?"Finder":"Home")],1)},staticRenderFns:[]}},114:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(10),o=t(37),a=t.n(o),i=t(36);n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})},36:function(e,r,t){"use strict";var n=t(10),o=t(110),a=t(100),i=t.n(a);n.a.use(o.a),r.a=new o.a({routes:[{path:"/",name:"Main",component:i.a}]})},37:function(e,r,t){t(96);var n=t(3)(t(56),t(108),null,null);e.exports=n.exports},56:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"app"}},57:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(61),o=t.n(n),a=t(62),i=t.n(a),c=t(99),d=t.n(c),s=t(103),l=t.n(s),u=t(101),p=t.n(u),h=t(10),v=t(112),f=t(38),w=t.n(f);h.a.use(v.a);var m=new v.a.Store({state:{recent:[],recentNeeded:[],activeHotspot:"",hotspotNeeded:[],birdsSeen:{"067":["Canada Goose","Mallard","Cooper's Hawk","Red-shouldered Hawk","Red-tailed Hawk","Mourning Dove","Red-bellied Woodpecker","Downy Woodpecker","Hairy Woodpecker","Eastern Phoebe","Blue-headed Vireo","Blue Jay","American Crow","Carolina Chickadee","Tufted Titmouse","White-breasted Nuthatch","Carolina Wren","Ruby-crowned Kinglet","Eastern Bluebird","Hermit Thrush","Orange-crowned Warbler","Yellow-rumped Warbler","Chipping Sparrow","White-throated Sparrow","Song Sparrow","Northern Cardinal","American Goldfinch","Double-crested Cormorant","Great Blue Heron","Black Vulture","Belted Kingfisher","Red-headed Woodpecker","Golden-crowned Kinglet","Cedar Waxwing","hawk sp.","crow sp.","passerine sp.","warbler sp. (Parulidae sp.)","Sharp-shinned/Cooper's Hawk"],"089":["Snow Goose","Gadwall","Mallard","Turkey Vulture","Red-shouldered Hawk","Belted Kingfisher","Red-bellied Woodpecker","Pileated Woodpecker","Eastern Phoebe","Blue Jay","Carolina Chickadee","Tufted Titmouse","White-breasted Nuthatch","Carolina Wren","Golden-crowned Kinglet","Ruby-crowned Kinglet","Hermit Thrush","American Robin","Northern Mockingbird","Chipping Sparrow","White-throated Sparrow","Song Sparrow","Eastern Towhee","Northern Cardinal","Canada Goose","Hooded Merganser","Great Blue Heron","Red-tailed Hawk","Mourning Dove","Barred Owl","Downy Woodpecker","Northern Flicker","Blue-headed Vireo","American Crow","Brown-headed Nuthatch","Brown Creeper","Yellow-rumped Warbler","American Goldfinch","Wood Duck","Pied-billed Grebe","Yellow-bellied Sapsucker","Eastern Bluebird","Cedar Waxwing","sparrow sp.","Purple Finch","Greater White-fronted Goose","Muscovy Duck (Domestic type)","Pine Warbler","House Finch","Domestic goose sp. (Domestic type)","Killdeer","Orange-crowned Warbler","Dark-eyed Junco","Red-headed Woodpecker","Red-winged Blackbird","Common Grackle","Fish Crow","Brown Thrasher","Cooper's Hawk","Winter Wren","House Sparrow","Black Vulture","hawk sp.","crow sp.","passerine sp.","warbler sp. (Parulidae sp.)","Sharp-shinned/Cooper's Hawk","blackbird sp.","Rock Pigeon"],121:["Rock Pigeon (Feral Pigeon)","Rock Pigeon","Mourning Dove","Blue Jay","American Crow","Carolina Wren","American Robin","Northern Mockingbird","Yellow-rumped Warbler","Song Sparrow","Northern Cardinal","House Sparrow","Downy Woodpecker","sparrow sp.","Muscovy Duck (Domestic type)","Mallard","Red-shouldered Hawk","Red-tailed Hawk","Wilson's Snipe","Eastern Screech-Owl","Red-bellied Woodpecker","Eastern Phoebe","White-breasted Nuthatch","Eastern Bluebird","Brown Thrasher","White-throated Sparrow","Eastern Towhee","Red-winged Blackbird","Common Grackle","Yellow-bellied Sapsucker","Hairy Woodpecker","Carolina Chickadee","Tufted Titmouse","Brown-headed Nuthatch","Golden-crowned Kinglet","Ruby-crowned Kinglet","Pine Warbler","Chipping Sparrow","Swamp Sparrow","House Finch","American Goldfinch","Canada Goose","Great Blue Heron","Belted Kingfisher","Northern Flicker","Winter Wren","European Starling","Orange-crowned Warbler","Rusty Blackbird","blackbird sp.","Double-crested Cormorant","Osprey","Killdeer","Spotted Sandpiper","Red-headed Woodpecker","Black Vulture","Cooper's Hawk","Bald Eagle","Hermit Thrush","Cedar Waxwing","Ring-necked Duck","Brown Creeper","Dark-eyed Junco","Mallard (Domestic type)","Turkey Vulture","Pileated Woodpecker","Fox Sparrow","Fish Crow","Eurasian Collared-Dove","Blue-headed Vireo","Field Sparrow","Palm Warbler","Merlin","Blue-winged Teal","Northern Pintail","hawk sp.","crow sp.","passerine sp.","warbler sp. (Parulidae sp.)","Sharp-shinned/Cooper's Hawk","blackbird sp.","Ring-billed Gull","Great Horned Owl"],135:["Mallard","Great Blue Heron","Black Vulture","Mourning Dove","Belted Kingfisher","Red-bellied Woodpecker","Downy Woodpecker","Eastern Phoebe","Blue-headed Vireo","American Crow","Tufted Titmouse","White-breasted Nuthatch","Brown Creeper","Carolina Wren","Golden-crowned Kinglet","Ruby-crowned Kinglet","American Robin","Yellow-rumped Warbler","Song Sparrow","Northern Cardinal","sparrow sp.","crow sp.","passerine sp.","warbler sp. (Parulidae sp.)"]}},mutations:{SET_RECENT:function(e,r){e.recent=i()({},r.data)},SET_RECENT_NEEDED:function(e,r){e.recentNeeded=[];var t=!0,n=!1,a=void 0;try{for(var i,c=o()(r.data);!(t=(i=c.next()).done);t=!0){var d=i.value;e.birdsSeen[r.countyNumber].includes(d.comName)||e.recentNeeded.push(d)}}catch(e){n=!0,a=e}finally{try{!t&&c.return&&c.return()}finally{if(n)throw a}}},SET_HOTSPOT:function(e,r){e.hotspotNeeded=[],e.activeHotspot=r.hotspot;var t=!0,n=!1,a=void 0;try{for(var i,c=o()(r.data);!(t=(i=c.next()).done);t=!0){var d=i.value;e.birdsSeen[r.countyNumber].includes(d.comName)||e.hotspotNeeded.push(d)}}catch(e){n=!0,a=e}finally{try{!t&&c.return&&c.return()}finally{if(n)throw a}}}},actions:{GET_RECENT:function(e,r){w.a.create({baseURL:"https://ebird.org/ws1.1/data/obs/region/recent"}).get("?rtype=subnational2&fmt=json&back=7&r=US-GA-"+r).then(function(t){e.commit("SET_RECENT",t),t.countyNumber=r,e.commit("SET_RECENT_NEEDED",t)})},GET_HOTSPOT:function(e,r){w.a.create({baseURL:"https://ebird.org/ws1.1/data/obs/hotspot/recent"}).get("?fmt=json&back=7&r="+r.locID).then(function(t){t.countyNumber=r.countyID,t.hotspot=r.locName,e.commit("SET_HOTSPOT",t)})}}});r.default={name:"big-year",components:{Home:d.a,Seen:l.a,Finder:p.a},store:m,data:function(){return{active:"home"}},methods:{makeActive:function(e){this.active=e}}}},58:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(102),o=t.n(n);r.default={name:"finder",components:{Hotspot:o.a},computed:{recentNeeded:function(){return this.$store.state.recentNeeded}},data:function(){return{active:"",activeID:"",mode:"all"}},methods:{getRecentBirds:function(e,r){this.$store.dispatch("GET_RECENT",e),this.active=r,this.activeID=e},changeMode:function(e,r){if(this.mode=e,"hotspot"===e){var t={locID:r.locID,locName:r.locName,countyID:this.activeID};this.$store.dispatch("GET_HOTSPOT",t)}}}}},59:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"hotspot",computed:{hotspotNeeded:function(){return this.$store.state.hotspotNeeded},hotspotName:function(){return this.$store.state.activeHotspot}}}},60:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"seen",computed:{birdsSeen:function(){return this.$store.state.birdsSeen}}}},93:function(e,r){},94:function(e,r){},95:function(e,r){},96:function(e,r){},97:function(e,r){},99:function(e,r,t){var n=t(3)(null,t(107),null,null);e.exports=n.exports}},[114]);
//# sourceMappingURL=app.08d085b6cbaff7f8eb32.js.map