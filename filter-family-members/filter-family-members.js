// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
	// pass the test for all object of the object family tree  
	// so using recursion to execute the same test for a family member in a familyTree. 
	var arr=[];
	if(truthTest){
		for(var key in familyTree){

		// result is an array 
		var result = filterFamilyMembers(key,truthTest){
			// test if the family member pass the test passed 
		};
		var fresult = arr.concat(result);
		
		}
	}

	return fresult;

  
};


// var familyMember = function (firstName,lastName,location,children){
// 	return {
// 		firstName : firstName,
// 		lastName : lastName,
// 		location : location,
// 		children : children 
// 	};

// };
// var location = function (familyMember) {
//    return familyMember.location ;
// };

// var getchildren = function (familyMember) {
//   return familyMember.children ;
//  };
// var fullName = function(familyMember){
// 	return familyMember.firstName + " " + familyMember.lastName ;
// }
