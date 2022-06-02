function aquarium(input){
volume = Number(input[0])*Number(input[1])*Number(input[2])/1000
result = volume-volume*Number(input[3])/100
console.log(result)



}



aquarium(["85","75","47","17"])