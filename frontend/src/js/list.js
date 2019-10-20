Vue.component('planet-list-elt', {
    props: ['params'],
    template: `
    <li class="collection-item">
    <div>{{ params.name }}
    <a href="/remix.html?planetid={{ params.id }}" class="secondary-content"><i class="material-icons">edit</i></a></div>
    </li>
    `
  })

  new Vue({
    el: '#planet-listing',
    data: {
      items: [
        { mass: 1, name: 'Planeta X' },
        { mass: 2, name: 'Ojejku' },
      ]
    }
  })