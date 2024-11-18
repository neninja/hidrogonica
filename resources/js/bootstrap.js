import "../css/bootstrap.css"

import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

Alpine.data('app', function() {
  return {
    init() {
      console.log("foi")
    },
  }
})
