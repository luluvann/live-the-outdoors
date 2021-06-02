const { Trail } = require("../models");
const traildata = [
  {
    name: "Storm Haven to Overhanging Point Loop",
    difficulty_level: "moderate",
    location: "Bruce Peninsula National Park",
    directions:
      "https://www.google.com/maps/dir/Current+Location/45.23684,-81.52299?ref=trail-action-menu-directions",
    description:
      "This is the best hike for the outdoor lovers visiting Bruce Peninsula National Park. Hiking along the cliffs and shoreline into The Limestone rich clear waters of Georgian Bay, this route takes users from the main Cypress Lake Trailhead, onto the double wide well maintained Horse Lake Trail. Here, users walk past Horse Lake and through the woods until reaching the shoreline of Georgian Bay. The trail continues to the right and follows the Main Bruce Trail to Storm Haven Campground. This path is through the woods with minor elevation changes, and a few unique view opportunities of the rugged shoreline. From this point the trail heads down to the shoreline and follows it to the Caves. This section is not marked, risky and dangerous. If users struggle over a few sections, they should stop and turn around. After visiting the caves, the route makes a scenic journey to Overhanging Point with a million photo opportunities, bouldering, and sun absorbing stops. The trail then uses the return portion to the Marr Lake Trail. This entire hike is relatively easy, minus - the cave section.",
    length: 9.8,
    elevation_gain: 277,
    est_time: "1h52",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/13668156/extra_large_1c1d4a5835a06244cf10857270b91486.jpg",
  },
  {
    name: "The Riverain and the Rapids",
    difficulty_level: "moderate",
    location: "Hautes-Gorges-de-la-Rivière-Malbaie",
    directions:
      "https://www.google.com/maps/dir/Current+Location/47.89157,-70.47633?ref=trail-action-menu-directions",
    description:
      "The Riverain and the Rapids is a 16.3 kilometer moderately trafficked loop trail located near Mont-Élie, Quebec, Canada that features a river and is rated as moderate. The trail is primarily used for hiking and walking.",
    length: 16.3,
    elevation_gain: 358,
    est_time: "1h52",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/19633305/large_a36e4143aaec10393188d0d5f363c2ef.jpg",
  },
  {
    name: "Lake Agnes Trail",
    difficulty_level: "moderate",
    location: "Banff National Park",
    directions:
      "https://www.google.com/maps/dir/Current+Location/51.41661,-116.21414?ref=trail-action-menu-directions",
    description:
      "Lake Agnes Trail is a 7.4 kilometer heavily trafficked out and back trail located near Lake Louise, Alberta, Canada that features a waterfall and is rated as moderate. The trail offers a number of activity options and is accessible year-round.",
    length: 7.4,
    elevation_gain: 435,
    est_time: "1h52",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/10431946/extra_large_66cefed5534e530f9aa7ca946842c040.jpg",
  },

  {
    name: "Upper Grassi Lakes Trail Loop",
    difficulty_level: "easy",
    location: "Canmore Nordic Centre Provincial Park",
    directions:
      "https://www.google.com/maps/dir/Montr%C3%A9al,+Qu%C3%A9bec/51.08105,-115.39472/@45.5544617,-112.3632398,4z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x4cc91a541c64b70d:0x654e3138211fefef!2m2!1d-73.567256!2d45.5016889!1m0",
    description:
      "Upper Grassi Lakes Trail Loop is a 4.3 kilometer heavily trafficked loop trail located near Canmore, Alberta, Canada that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
    length: 4.3,
    elevation_gain: 233,
    est_time: "1h44",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/28422883/extra_large_2753a95f5829fc101cbe36b33f8f73f2.jpg",
  },

  {
    name: "Johnston Canyon to Ink Pots",
    difficulty_level: "moderate",
    location: "Banff National Park",
    directions:
      "https://www.google.com/maps/dir/Current+Location/51.24589,-115.84007?ref=trail-action-menu-directions",
    description:
      "Johnston Canyon to Ink Pots is a 11.7 kilometer heavily trafficked out and back trail located near Banff, Alberta, Canada that features a waterfall and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
    length: 11.7,
    elevation_gain: 608,
    est_time: "4h17",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/20454759/extra_large_db38614f1c4511a33cc1ce771f0b36e7.jpg",
  },

  {
    name: "Green Mountain Loop",
    difficulty_level: "moderate",
    location: "Mont-Tremblant National Park",
    directions:
      "https://www.google.com/maps/dir/Current+Location/46.25091,-74.68276?ref=trail-action-menu-directions",
    description:
      "Green Mountain Loop is a 4.8 kilometer moderately trafficked loop trail located near Labelle, Quebec, Canada that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.",
    length: 4.8,
    elevation_gain: 235,
    est_time: "1h44",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/28321912/large_0d32736e8e304b6504d18644d5c1d6fe.jpg",
  },

  {
    name: "Olmsted Road Multi-Use Trail",
    difficulty_level: "easy",
    location: "Parc du Mont-Royal",
    directions:
      "https://www.google.com/maps/dir/Current+Location/45.51459,-73.58491?ref=trail-action-menu-directions",
    description:
      "Olmsted Road Multi-Use Trail is a 6.6 kilometer heavily trafficked point-to-point trail located near Montréal, Quebec, Canada that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is best used from March until November. Dogs are also able to use this trail but must be kept on leash.",
    length: 6.6,
    elevation_gain: 235,
    est_time: "2h",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/20949974/extra_large_c31ffe2f5b9df810b8c872b4df7d1ed9.jpg",
  },
  {
    name: "Wolf Trail 62 Loop",
    difficulty_level: "moderate",
    location: "Parc de la Gatineau",
    directions:
      "https://www.google.com/maps/dir/Current+Location/45.54342,-75.90958?ref=trail-action-menu-directions",
    description:
      "Wolf Trail 62 Loop is a 7.9 kilometer heavily trafficked loop trail located near Chelsea, Quebec, Canada that features a river and is rated as moderate. The trail is primarily used for hiking, running, and snowshoeing and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
    length: 7.9,
    elevation_gain: 294,
    est_time: "2h47m",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/27021220/large_22effb3b9411c8cec3261ab76859f5e7.jpg",
  },
  {
    name: "Round Top and Lake Spruce Loop",
    difficulty_level: "moderate",
    location: "Parc d'environnement naturel de Sutton(PENS)",
    directions:
      "https://www.google.com/maps/dir/Brampton,+Ontario/45.09691,-72.54888/@44.1064119,-80.6798851,6z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "Round Top and Lake Spruce Loop is a 7.1 kilometer heavily trafficked loop trail located near Sutton, Quebec, Canada that features a lake and is rated as moderate. The trail is primarily used for hiking, running, bird watching, and snowshoeing.",
    length: 7.1,
    elevation_gain: 441,
    est_time: "2h45m",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/30824591/large_5101c12ae1c5d766beee2ca8052277ea.jpg",
  },
  {
    name: "Le Pioui and Mont du Lac des Cygnes Loop ",
    difficulty_level: "hard",
    location: "Grands-Jardins National Park",
    directions:
      "google.com/maps/dir/Brampton,+Ontario/47.66605,-70.62765/@45.5646571,-79.6264422,6z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "Le Pioui and Mont du Lac des Cygnes Loop is a 11.1 kilometer heavily trafficked loop trail located near Saint-Urbain, Quebec, Canada that features a lake and is rated as difficult. The trail is primarily used for hiking, nature trips, and snowshoeing and is best used from June until September.",
    length: 11.1,
    elevation_gain: 613,
    est_time: "4h8m",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/11914242/extra_large_2c66c665961a597373f4755d4b90d6e8.jpg",
  },
  {
    name: "Mont Chauve Trail",
    difficulty_level: "moderate",
    location: "Mont-Orford National Park",
    directions:
      "https://www.google.com/maps/dir/Brampton,+Ontario/45.3605,-72.23038/@44.1064119,-80.499803,6z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "Mont Chauve Trail is a 10.9 kilometer heavily trafficked loop trail located near Orford, Quebec, Canada that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.",
    length: 10.9,
    elevation_gain: 370,
    est_time: "2h19m",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/28320321/large_947ea60520df7268498aab5fff248421.jpg",
  },
  {
    name: "Rouge Valley Loop via Vista Trail",
    difficulty_level: "easy",
    location: "Rouge National Urban Park",
    directions:
      "https://www.google.com/maps/dir/Brampton,+Ontario/43.81905,-79.17161/@43.7286865,-79.7465085,10z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "Rouge Valley Loop via Vista Trail is a 9.0 kilometer loop trail located near Toronto, Ontario, Canada that features a river and is good for all skill levels. The trail is primarily used for hiking, running, nature trips, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
    length: 9.0,
    elevation_gain: 145,
    est_time: "2h34m",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/21543904/large_a8ca98c144e3bee14a04a62417e3410e.jpg",
  },
  {
    name: "Humber River Recreation Trail",
    difficulty_level: "moderate",
    location: "Ettiene Brule Park",
    directions:
      "https://www.google.com/maps/dir/Brampton,+Ontario/43.65216,-79.49125/@43.6851887,-79.7486376,11z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "Humber River Recreation Trail is a 8.2 kilometer heavily trafficked out and back trail located near Toronto, Ontario, Canada that features a river and is rated as moderate. The trail is primarily used for hiking, walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
    length: 8.2,
    elevation_gain: 66,
    est_time: "2h12m",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/19242012/large_fca0222028200ff1b51bf68936e1b9c3.jpg",
  },
  {
    name: "The Big Beehive Trail",
    difficulty_level: "hard",
    location: "Banff National Park",
    directions:
      "https://www.google.com/maps/dir/Brampton,+Ontario/51.41679,-116.21217/@45.6871914,-115.7563907,4z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "The Big Beehive Trail is a 10.9 kilometer heavily trafficked loop trail located near Lake Louise, Alberta, Canada that features a lake and is rated as difficult. The trail offers a number of activity options and is best used from June until September. Dogs are also able to use this trail but must be kept on leash.",
    length: 10.9,
    elevation_gain: 776,
    est_time: "3h45m",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/28700106/extra_large_58e87e40f4579a8c905b13cb7ac693fa.jpg",
  },
  {
    name: "Parker Ridge Trail",
    difficulty_level: "moderate",
    location: "Banff National Park",
    directions:
      "https://www.google.com/maps/dir/Brampton,+Ontario/52.19162,-117.11576/@46.0744103,-116.2014255,4z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "Parker Ridge Trail is a 5.1 kilometer heavily trafficked out and back trail located near Improvement District No. 9, Alberta, Canada that features a waterfall and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and snowshoeing and is best used from June until October. Dogs are also able to use this trail but must be kept on leash.",
    length: 5.1,
    elevation_gain: 269,
    est_time: "1h53",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/28527379/large_8c90f1dcedc9d7eeb3cd4f4d590ee873.jpg",
  },
  {
    name: "Mount Reine-Malouin",
    difficulty_level: "moderate",
    location: "Quebec City, Quebec",
    directions:
      "https://www.google.com/maps/dir/Brampton,+Ontario/46.89262,-71.26152/@45.177805,-80.0022623,6z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "Mount Reine-Malouin is a 4.8 kilometer lightly trafficked loop trail located near Quebec City, Quebec, Canada that features a great forest setting. The trail is rated as moderate and is primarily used for hiking and running. Dogs are also able to use this trail.",
    length: 4.8,
    elevation_gain: 170,
    est_time: "1h35m",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/19696324/large_ddacfbad48a32ca102c35745e02974d8.jpg",
  },
  {
    name: "Quebec Walking Tour",
    difficulty_level: "easy",
    location: "Quebec City, Quebec",
    directions:
      "https://www.google.com/maps/dir/Brampton,+Ontario/46.80021,-71.22332/@45.1319488,-79.983185,6z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x882b15eaa5d05abf:0x352d31667cc38677!2m2!1d-79.7624177!2d43.7315479!1m0",
    description:
      "Walk through the city with the richest history in Canada. Exploring the history of Quebec City can be a consuming and rewarding pastime. The walk described below takes you through a fair bit of it, but staying on a route would be a mistake. The old town is full of small detours and welcoming alleys. Don't bother resisting them.",
    length: 6.8,
    elevation_gain: 137,
    est_time: "2h",
    image_link:
      "https://cdn-assets.alltrails.com/uploads/photo/image/13773397/large_22aa79d62d97ad08a85a04b794affddc.jpg",
  }
];

const seedTrails = (id) => {
  let newTrailData = traildata.map((trail) => {
    return { ...trail, user_id: id };
  });
  return Trail.bulkCreate(newTrailData, { individualHooks: true });
};

module.exports = seedTrails;
