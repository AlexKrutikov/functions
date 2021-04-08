Vue.createApp({
  data: () => ({
    myHtml: '<h1>Vue 3 App</h1>',
    title: 'Я есть ГРУТ!',
    person: {
      firstName: 'Alexander',
      lastName: 'Krutikov',
      age: 37
    },
    items: [1, 2, 3, 4, 5, 6]
  })
}).mount('#app')
