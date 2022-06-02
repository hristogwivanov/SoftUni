function trade(input) {
    //Град	    0 ≤ s ≤ 500	    500 < s ≤ 1 000	    1 000 < s ≤ 10 000	    s > 10 000
    //Sofia	        5%	         7%	                        8%      	    12%
    //Varna	        4.5%	    7.5%	                    10%	            13%
    //Plovdiv	    5.5%	    8%	                        12%         	14.5%
    let city = input[0];
    let sum = Number(input[1])
    let tax = 0;
    if (sum < 0) {console.log('error'); return;}
    switch (city) {
        case 'Sofia':
            if (sum<=500) tax=0.05;
            else if (sum<=1000) tax=0.07;
            else if (sum<=10000) tax=0.08;
            else tax=0.12;
            break; 


        case 'Varna':
            
            if (sum<=500) tax=0.045;
            else if (sum<=1000) tax=0.075;
            else if (sum<=10000) tax=0.10;
            else tax=0.13;
            break; 

        case 'Plovdiv':

        
            if (sum<=500) tax=0.055;
            else if (sum<=1000) tax=0.08;
            else if (sum<=10000) tax=0.12;
            else tax=0.145;
            break; 

        default: console.log('error'); return;


    }
console.log((sum*tax).toFixed(2));


}
trade(["Sofia",
    "1500"])
