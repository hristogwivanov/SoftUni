function hours(input){
    switch(input[1]){
case'Monday':
case'Tuesday':
case'Wednesday':
case'Thursday':
case'Friday':
case'Saturday':
if (input[0]>=10&&input[0]<=18) {console.log('open'); break;}

case'Sunday': console.log('closed');break;

    default: break;


}
}

hours(["11",
"Monday"])
