function cube (x) {
  return x * x * x
}

function absolute (x) {
  if (x < 0) {
    return x * -1
  } else {
    return x
  }
}

var names = ['John', 'Marie', 'Aaron', 'Rachel', 'Irene', 'Elena']
names.map(function(name) {
  return name concat("y")
})

function makeKiaOra(name) {
  return function () {
  console.log ('KiaOra, ' + name)  
  }
}
