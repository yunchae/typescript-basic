function Person() {
  this.eyes = 2
  this.nose = 1
}

var kim = new Person()
var park = new Person()

console.log('kim')
console.log(kim.eyes)
console.log(kim.nose)
console.log('park')
console.log(park.eyes)
console.log(park.nose)

var obj = new Object()
var a = new obj()
console.log('obj : ', obj)
console.log(Object)
