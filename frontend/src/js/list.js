Vue.component('planet-list-elt', {
  props: ['params'],
  template: `
    <li class="collection-item black-text">
    <div>{{ params["# name"] }}
    <a v-bind:href="'/remix.html?planetid=' + params.id" class="secondary-content"><i class="material-icons">edit</i></a><br></div>
    </li>
    `
})

new Vue({
  el: '#planet-listing',
  data: {
    items: [{
        mass: 1,
        name: 'Planeta X'
      },
      {
        mass: 2,
        name: 'Ojejku'
      },
    ]
  },
  created: function () {
    // Alias the component instance as `vm`, so that we  
    // can access it inside the promise function
    var vm = this
    // Fetch our array of posts from an API
    console.log("AAAA")
    fetch('http://localhost:8080/planets')
      .then(function (response) {

        return response.json()
      })
      .then(function (data) {
        console.log(data.data)
        vm.items = data.data
        console.log(vm.items)
      })
  }
})