<template>
  <nav class="level has-background-primary has-text-white">
    <div class="level-item has-text-centered">
      <figure class="image is-128x128">
        <img class="is-rounded" :src="headerImage" />
      </figure>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title">{{ mydata.name }}</p>
        <p class="heading">{{ mydata.age }}</p>
        <p class="heading">{{ mydata.status }}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title">Contact</p>
        <b-button
          type="is-info"
          icon-pack="fab"
          size="is-small"
          icon-left="github"
          @click="openLinkTab(contact.github)"
          rounded
        />
        <b-button
          type="is-info"
          icon-pack="fab"
          size="is-small"
          icon-left="linkedin"
          @click="openLinkTab(contact.linkedin)"
          rounded
        />
        <b-button
          type="is-info"
          icon-pack="fas"
          size="is-small"
          icon-left="at"
          @click="openLinkTab(contact.email)"
          rounded
        />
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title">About me</p>
        <span class="heading">
          <vue-fontawesome :icon="['fas', 'graduation-cap']" />
          {{ mydata.uni }}
        </span>
        <span class="heading">
          <vue-fontawesome :icon="['fas', 'map-marker']" />
          {{ mydata.home }}
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      mydata: {
        name: "Racim RIGHI",
        age: "21 ans",
        uni: "Université CY Cergy Paris",
        home: "Paris 75019, France",
        status: "Looking for an internship",
      },
      contact: {
        email: "racim458@gmail.com",
        linkedin: "https://www.linkedin.com/in/racim-righi/",
        github: "https://github.com/RacimRgh",
      },
      headerImage: require("../assets/me.png"),
    };
  },
  methods: {
    openLinkTab(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
