
const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];


function showManagmentStructure (users){
  //want it to print out the names, compile pieces of the obj into one --> .reduce
    console.log(users.reduce((struct, obj)=>{
      //start by finding the "boss" who has no managerId
        if (obj.managerId === undefined){
            //add the boss to the accumulator --> struct
            struct += `${obj.name}\n`
        } else {
          //move to those who fall next in line (i.e. those who report to the boss --> 1)
            if (obj.managerId%2 !== 0){
                struct += `  - ${obj.name}\n`
            } else {
              //everyone else
               struct +=`         - ${obj.name}\n`
            }   
        } 
        //return the final hierarchy structure
        return struct;
    // "" in order to print moe bc of undefined above
    },""))
}

showManagmentStructure(users)
