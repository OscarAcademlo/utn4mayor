let array = [4,50,28,90,1]
let mayor=0
for (i=0;i<array.length;i++){
    if (mayor < array[i]){
    mayor = array[i]
    }
}
console.log(mayor);