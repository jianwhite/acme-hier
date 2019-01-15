const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];


function showManagmentStructure (users){
  //want it to print out the names of the users in order of hierarchy, compile pieces of the obj into one --> .reduce
    console.log(users.reduce((struct, users)=>{
      //start by finding the "boss" who has no managerId
        if (users.managerId === undefined){
            //add the boss to the accumulator --> struct
            struct += `${users.name}\n`
        } else {
          //move to those who fall next in line (i.e. those who report to the boss --> 1(odd num))
            if (users.managerId%2 !== 0){
                struct += `  - ${users.name}\n`
            } else {
              //everyone else
               struct +=`         - ${users.name}\n`
            }   
        } 
        //return the final hierarchy structure
        return struct;
    // "" in order to print moe bc of undefined above
    },""))
}

showManagmentStructure(users)
