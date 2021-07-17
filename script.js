const posts = [
    {
      id: 1,
      title: "About Me",
      body: `Hello there this is a test content`,
    }
  ];
  
  Vue.createApp({
    data() {
      return {
        name: "Rahul Janak",
        links: ["home", "contact me"],
      };
    },
  }).mount("header");
  Vue.createApp({
    data() {
      return {
        posts,
      };
    },
  }).mount("#blog");
  