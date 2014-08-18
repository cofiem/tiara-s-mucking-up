var user = prompt("Are you a CITIZEN, PERMANENT RESIDENT, or BRIDGING VISA holder?").toUpperCase();
switch(user) {
    case 'CITIZEN':
        
        var citizenship = prompt("Were you BORN here, your PARENTS citizens, or you have to APPLY?");
        
        if (citizenship="BORN") {
            var citiBorn = true;
        }
        else if (citizenship="PARENTS") {
        var citiParents = true;
        }
        else {
            var citiApply = true;
        }
        
        if (citiBorn || citiParents) {
            console.log("Hello, our child!");
        }
        
        else {
            console.log("Congratulations for passing the test!");
        }
        break;
        case 'PERMANENT RESIDENT':
        console.log("Welcome to our country!");
        break;
        case 'BRIDGING VISA':
            var bridging = prompt("How many years have you waited?");
            if (bridging >= 5) {
                var bridgingYears = true;
            } else {
                var bridgingYears = false;
            }
            var bridgingJob = prompt("Do you have a job yet? YES or NO").toUpperCase();
            if (bridgingJob = 'YES') {
                var bridgingHired = true;
            } else {
                var bridgingHired = false;
            }
        if (bridgingYears && bridgingHired) {
            console.log('You will make a fine citizen one day!');
        } else {
            console.log('Stop being a layabout!');
        }
            break;
            default:
            console.log("I don't have that in our files");
}