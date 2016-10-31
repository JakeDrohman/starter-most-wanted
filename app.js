var dataArray = [ 
	{
	  "PersonId": "272822514",
	  "firstName": "Billy",
	  "lastName": "Bob",
	  "gender": "male",
	  "dob": "1/18/1949",
	  "height": 71,
	  "weight": 175,
	  "eyeColor": "brown",
	  "occupation": "programmer",
	  "parents": [],
	  "currentSpouse": 401222887 },
	{
	  "PersonId": "401222887",
	  "firstName": "Uma",
	  "lastName": "Bob",
	  "gender": "female",
	  "dob": "4/1/1947",
	  "height": 65,
	  "weight": 162,
	  "eyeColor": "brown",
	  "occupation": "assistant",
	  "parents": [],
	  "currentSpouse": 272822514 },
	{
	  "PersonId": "409574486",
	  "firstName": "Michael",
	  "lastName": "Walkens",
	  "gender": "male",
	  "dob": "5/9/1951",
	  "height": 76,
	  "weight": 250,
	  "eyeColor": "brown",
	  "occupation": "landscaper",
	  "parents": [],
	  "currentSpouse": 260451248 },
	{
	  "PersonId": "260451248",
	  "firstName": "Jon",
	  "lastName": "Walkens",
	  "gender": "male",
	  "dob": "9/6/1945",
	  "height": 62,
	  "weight": 115,
	  "eyeColor": "brown",
	  "occupation": "assistant",
	  "parents": [],
	  "currentSpouse": 409574486 },
	{
	  "PersonId": "629807187",
	  "firstName": "Jack",
	  "lastName": "Pafoy",
	  "gender": "male",
	  "dob": "3/16/1938",
	  "height": 70,
	  "weight": 207,
	  "eyeColor": "black",
	  "occupation": "nurse",
	  "parents": [],
	  "currentSpouse": 464142841 },
	{
	  "PersonId": "464142841",
	  "firstName": "Jen",
	  "lastName": "Pafoy",
	  "gender": "female",
	  "dob": "4/10/1940",
	  "height": 72,
	  "weight": 256,
	  "eyeColor": "black",
	  "occupation": "student",
	  "parents": [],
	  "currentSpouse": 629807187 },
	{
	  "PersonId": "982411429",
	  "firstName": "Mister",
	  "lastName": "Potatoo",
	  "gender": "male",
	  "dob": "12/18/1952",
	  "height": 66,
	  "weight": 170,
	  "eyeColor": "hazel",
	  "occupation": "architect",
	  "parents": [],
	  "currentSpouse": 595767575 },
	{
	  "PersonId": "595767575",
	  "firstName": "Missuz",
	  "lastName": "Potatoo",
	  "gender": "female",
	  "dob": "10/28/1948",
	  "height": 59,
	  "weight": 137,
	  "eyeColor": "blue",
	  "occupation": "architect",
	  "parents": [],
	  "currentSpouse": 982411429 },
	{
	  "PersonId": "693243224",
	  "firstName": "Joy",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "4/20/1939",
	  "height": 69,
	  "weight": 199,
	  "eyeColor": "hazel",
	  "occupation": "doctor",
	  "parents": [],
	  "currentSpouse": 888201200 },
	{
	  "PersonId": "888201200",
	  "firstName": "Mader",
	  "lastName": "Madden",
	  "gender": "male",
	  "dob": "5/6/1937",
	  "height": 76,
	  "weight": 205,
	  "eyeColor": "black",
	  "occupation": "landscaper",
	  "parents": [],
	  "currentSpouse": 693243224 },
	{
	  "PersonId": "878013758",
	  "firstName": "Jill",
	  "lastName": "Pafoy",
	  "gender": "Bob",
	  "dob": "2/8/1972",
	  "height": 74,
	  "weight": 118,
	  "eyeColor": "brown",
	  "occupation": "programmer",
	  "parents": [401222887,272822514],
	  "currentSpouse": 294874671 },
	{
	  "PersonId": "951747547",
	  "firstName": "Ralph",
	  "lastName": "Bob",
	  "gender": "male",
	  "dob": "12/23/1969",
	  "height": 66,
	  "weight": 179,
	  "eyeColor": "blue",
	  "occupation": "nurse",
	  "parents": [401222887,272822514],
	  "currentSpouse": 159819275 },
	{
	  "PersonId": "159819275",
	  "firstName": "Jasmine",
	  "lastName": "Bob",
	  "gender": "female",
	  "dob": "12/18/1969",
	  "height": 58,
	  "weight": 156,
	  "eyeColor": "blue",
	  "occupation": "assistant",
	  "parents": [409574486,260451248],
	  "currentSpouse": 951747547 },
	{
	  "PersonId": "348457184",
	  "firstName": "Annie",
	  "lastName": "Pafoy",
	  "gender": "female",
	  "dob": "11/4/1970",
	  "height": 62,
	  "weight": 235,
	  "eyeColor": "hazel",
	  "occupation": "landscaper",
	  "parents": [629807187,464142841],
	  "currentSpouse": null },
	{
	  "PersonId": "294874671",
	  "firstName": "Dave",
	  "lastName": "Pafoy",
	  "gender": "male",
	  "dob": "8/5/1967",
	  "height": 61,
	  "weight": 112,
	  "eyeColor": "green",
	  "occupation": "doctor",
	  "parents": [629807187,464142841],
	  "currentSpouse": 878013758 },
	{
	  "PersonId": "931247228",
	  "firstName": "Amii",
	  "lastName": "Pafoy",
	  "gender": "female",
	  "dob": "3/13/1963",
	  "height": 74,
	  "weight": 184,
	  "eyeColor": "brown",
	  "occupation": "landscaper",
	  "parents": [629807187,464142841],
	  "currentSpouse": null },
	{
	  "PersonId": "822843554",
	  "firstName": "Regina",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "7/26/1959",
	  "height": 71,
	  "weight": 249,
	  "eyeColor": "brown",
	  "occupation": "nurse",
	  "parents": [693243224, 888201200],
	  "currentSpouse": null },
	{
	  "PersonId": "819168108",
	  "firstName": "Hana",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "10/7/1953",
	  "height": 70,
	  "weight": 187,
	  "eyeColor": "brown",
	  "occupation": "politician",
	  "parents": [693243224, 888201200],
	  "currentSpouse": null },
	{
	  "PersonId": "969837479",
	  "firstName": "Eloise",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "12/11/1961",
	  "height": 63,
	  "weight": 241,
	  "eyeColor": "brown",
	  "occupation": "assistant",
	  "parents": [693243224, 888201200],
	  "currentSpouse": null },
	{
	  "PersonId": "313207561",
	  "firstName": "Mattias",
	  "lastName": "Madden",
	  "gender": "male",
	  "dob": "2/19/1966",
	  "height": 70,
	  "weight": 110,
	  "eyeColor": "blue",
	  "occupation": "assistant",
	  "parents": [693243224, 888201200],
	  "currentSpouse": 313997561 },
	{
	  "PersonId": "313997561",
	  "firstName": "Ellen",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "2/19/1970",
	  "height": 67,
	  "weight": 100,
	  "eyeColor": "blue",
	  "occupation": "doctor",
	  "parents": [],
	  "currentSpouse": 313207561 },
	{
	  "PersonId": "313998000",
	  "firstName": "Joey",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "2/02/1987",
	  "height": 67,
	  "weight": 100,
	  "eyeColor": "blue",
	  "occupation": "doctor",
	  "parents": [313207561,313997561],
	  "currentSpouse": null }
];


function searchMenu(){
	var menuItem=prompt("What would you like to search by?\n--firstname--\n--lastname--\n--fullname--\n--gender--\n--dateofbirth--\n--height--\n--weight--\n--eyecolor--\n--occupation--")
	menuItem=menuItem.toLowerCase();
	menuItem=menuItem.replace(" ","")
	switch(menuItem){
		case "firstname":
			var searchItem=prompt("Please enter the person\'s first name")
			var searchArray=searchByFirstName(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		case "lastname":
			var searchItem=prompt("Please enter the person\'s last name")
			var searchArray=searchByFullName(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		case "fullname":
			var searchItem=prompt("Please enter the person\'s full name seperated by commas")
			var searchArray=searchByFullName(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		case "gender":
			var searchItem=prompt("Please enter the person\'s gender")
			var searchArray=searchByGender(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		case "dateofbirth":
			var searchItem=prompt("Please enter the person\'s date of birth")
			var searchArray=searchByDateOfBirth(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		case "height":
			var searchItem=prompt("Please enter the person\'s height")
			var searchArray=searchByHeight(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		case "weight":
			var searchItem=prompt("Please enter the person\'s weight")
			var searchArray=searchByWeight(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		case "eyecolor":
			var searchItem=prompt("Please enter the person\'s eye color")
			var searchArray=searchByEyeColor(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		case "occupation":
			var searchItem=prompt("Please enter the person\'s occupation")
			var searchArray=searchByOccupation(searchItem)
			var outputString=writeAllInformation(searchArray)
			return outputString
			break;
		default:
			alert("Invalid Input. Please input your answer with no spaces and all lowercase")
			searchMenu()
			break;
	}
}
function findDescendants(person){
	var outputArray=[]
	for(descendantIndex in dataArray){
		for(i=0;i<dataArray[descendantIndex].parents.length;i++){
			if(dataArray[descendantIndex].parents[i]==person.PersonId){
				var descendant=dataArray[descendantIndex]
				outputArray.push(descendant)
				outputArray=outputArray.concat(findDescendants(descendant))
			}
		}
	}
	return outputArray
}
function findImmediateFamily(person){
	var outputArray=[]
	//Spouse
	var Spouse=searchById(person.currentSpouse)
	outputArray.push(Spouse)
	//Parents
	outputArray=outputArray.concat(findParents(person))
	//Siblings
	outputArray=outputArray.concat(findSiblings(person))
	//children
	outputArray=outputArray.concat(findChildren(person))
	return outputArray
}
function findNextOfKin(person){
	//spouse
	if (person.currentSpouse!=null) {
		var spouse=searchById(person.currentSpouse)
		return spouse
	}
	//eldest child
	var childrenArray=findChildren(person)
	if(childrenArray.length!=0){
		var eldestChild=findEldest(childrenArray)
		return eldestChild
	}
	//eldest parent
	var parentArray=findParents(person)
	if(parentArray.length!=0){
		var eldestParent=findEldest(parentArray)
		return eldestParent
	}
	//eldest sibling
	var siblingArray=findSiblings(person)
	if(siblingArray.length!=0){
		var eldestSibling=findEldest(siblingArray)
		return eldestSibling
	}
	else{
		alert("This person does not have a next of kin")
	}
}
function filterByAttributes(inputArray){
	var resultArray=dataArray
	if(inputArray[0]!=""){
		resultArray=resultArray.filter(hasAge,inputArray[0])
	}
	if(inputArray[1]!=""){
		resultArray=resultArray.filter(withinAgeRange,inputArray[1])
	}
	if(inputArray[2]!=""){
		resultArray=resultArray.filter(hasHeight,inputArray[2])
	}
	if(inputArray[3]!=""){
		resultArray=resultArray.filter(hasWeight,inputArray[3])
	}
	if(inputArray[4]!=""){
		resultArray=resultArray.filter(hasOccupation,inputArray[4])
	}
	if(inputArray[5]!=""){
		resultArray=resultArray.filter(hasEyeColor,inputArray[5])
	}
	return resultArray
}


function findPersonByFullName(){
	var fullname=prompt("Please enter the person\'s full name seperated by commas")
	var nameArray=fullname.split(",");
	for(personIndex in dataArray){
		if (dataArray[personIndex].firstName===nameArray[0]&&dataArray[personIndex].lastName===nameArray[1]) {
			var person=dataArray[personIndex]
			}
	}
	if(person!=null){
		return person
	}
	alert("This name produced no matches")
	return findPersonByFullName()
}
function findAge(person){
	var birthday = +new Date(person.dob);
	var age=((Date.now() - birthday) / (31557600000));
	age=Math.floor(age)
	return age
}
function findChildren(person){
	var outputArray=[]
	for(childIndex in dataArray){
		for(i=0;i<dataArray[childIndex].parents.length;i++){
			if(dataArray[childIndex].parents[i]==person.PersonId){
				var child=dataArray[childIndex]
				outputArray.push(child)
			}
		}
	}
	return outputArray
}
function findSiblings(person){
	var outputArray=[]
	var hasSameParents=0
	for(personIndex in dataArray){
		for(firstParentIndex in dataArray[personIndex].parents){
			for(secondParentIndex in person.parents){
				if(dataArray[personIndex].parents[firstParentIndex]==person.parents[secondParentIndex]){
					hasSameParents++
				}
			}
		}
		if(hasSameParents===2){
			var sibling=dataArray[personIndex]
			outputArray.push(sibling)
		}
		hasSameParents=0
	}
	return outputArray
}
function findParents(person){
	var outputArray=[]
	for(parent in person.parents){
		var parentObject=searchById(person.parents[parent])
		outputArray.push(parentObject)
	}
	return outputArray
}
function findEldest(peopleArray){
	var sortedArray=peopleArray.sort(function(a,b){return findAge(b)-findAge(a)})
	var eldestPerson=sortedArray[0]
	return eldestPerson
}
function validateFilterInput(inputString){
	var stringWithoutSpaces=inputString.replace(/\s/g,'')
	var rejExp=/(\d*|)[,](\d*[-]\d*|)[,](\d[']\d+["]|)[,](\d+[l][b][s]|)[,](\D*|)[,](\D*|)/
	if(!rejExp.test(stringWithoutSpaces)){
		var newInputString=prompt("you did it wrong, please check yourself\nPlease enter all of your search criteria seperated by commas\nAge, Age Range(\#\-\#), Height(#\'#\"), Weight(#lbs), Occupation, Eye Color\nIf you don\'t want to filter by one or more of the criteria\, then just leave it blank")
		return validateFilterInput(newInputString)
	}
	var inputArray=stringWithoutSpaces.split(",")
	return inputArray
}
function convertToInches(heightString){
	var heightArray=heightString.split('\'')
	var heightInInches=((heightArray[0]*12)+heightArray[1])
	return heightInInches
}


function searchById(Id){
	for(personIndex in dataArray){
		if (dataArray[personIndex].PersonId==Id) {
			var person=dataArray[personIndex]
		}
	}
	return person
}
function searchByFirstName(firstname){
	var outputArray=[]
	for(personIndex in dataArray){
		if (dataArray[personIndex].firstName===firstname) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}
function searchByLastName(lastname){
	var outputArray=[]
	for(personIndex in dataArray){
		if (dataArray[personIndex].lastName===lastname) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}
function searchByFullName(fullname){
	var outputArray=[]
	var nameArray=fullname.split(",");
	for(personIndex in dataArray){
		if (dataArray[personIndex].firstName===nameArray[0]&&dataArray[personIndex].lastName===nameArray[1]) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}
function searchByGender(gender){
	var outputArray=[]
	for(personIndex in dataArray){
		if (dataArray[personIndex].gender===gender) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}
function searchByDateOfBirth(dob){
	var outputArray=[]
	for(personIndex in dataArray){
		if (dataArray[personIndex].dob===dob) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}
function searchByHeight(height){
	var outputArray=[]
	for(personIndex in dataArray){
		if (dataArray[personIndex].height==height) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}
function searchByWeight(weight){
	var outputArray=[]
	for(personIndex in dataArray){
		if (dataArray[personIndex].weight==weight) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}
function searchByEyeColor(eyecolor){
	var outputArray=[]
	for(personIndex in dataArray){
		if (dataArray[personIndex].eyeColor===eyecolor) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}
function searchByOccupation(occupation){
	var outputArray=[]
	for(personIndex in dataArray){
		if (dataArray[personIndex].occupation===occupation) {
			var person=dataArray[personIndex]
			outputArray.push(person)}
	}
	return outputArray
}



function writeAllInformation(outputArray){
	var stringOutput=""
	for (item in outputArray){
			stringOutput+=outputArray[item].firstName+" "
			stringOutput+=outputArray[item].lastName+"\n"
			stringOutput+="Gender: "+outputArray[item].gender+"\n"
			stringOutput+="Date of Birth: "+outputArray[item].dob+"\n"
			stringOutput+="Height: "+outputArray[item].height+"\n"
			stringOutput+="Weight: "+outputArray[item].weight+"\n"
			stringOutput+="Eye Color: "+outputArray[item].eyeColor+"\n"
			stringOutput+="Occupation: "+outputArray[item].occupation+"\n\n\n"
	}
	alert(stringOutput)
}
function writeNames(outputArray){
	//takes in specific objects and writes them
	var result=""
	for(item in outputArray){
		result+=(outputArray[item].firstName+" "+outputArray[item].lastName+"\n")
	}
	alert(result)
}
function writeNameofPerson(person){
	var output=(person.firstName+" "+person.lastName+"\n")
	alert(output)
}


function initSearch(){
	var menuInput=prompt("What would you like to do?\n--search--\n--descendants--\n--immediatefamily--\n--nextofkin--\n--filter--")
	switch(menuInput){
		case "search":
			searchMenu()
			break;
		case "descendants":
			var person=findPersonByFullName()
			var descendantArray=findDescendants(person)
			writeNames(descendantArray)
			break;
		case "immediatefamily":
			var person=findPersonByFullName()
			var immediateFamilyArray=findImmediateFamily(person)
			writeNames(immediateFamilyArray)
			break;
		case "nextofkin":
			var person=findPersonByFullName()
			var nextOfKin=findNextOfKin(person)
			writeNameofPerson(nextOfKin)
			break;
		case "filter":
			var inputString=prompt("Please enter all of your search criteria seperated by commas\nAge, Age Range(\#\-\#), Height(#\'#\"), Weight(#lbs), Occupation, Eye Color\nIf you don\'t want to filter by one or more of the criteria\, then just leave it blank")
			var validatedInput=validateFilterInput(inputString)
			var resultArray=filterByAttributes(validatedInput)
			writeAllInformation(resultArray)
			break;
		default:
			alert("please select a valid option")
			initSearch()
			break;
	}
}

function hasOccupation(person){
	if(person.occupation==this){
		return true
	}
	return false
}
function hasEyeColor(person){
	if(person.eyeColor==this){
		return true
	}
	return false
}
function hasEyeColorOrOccupation(person){
	if(hasOccupation(person)||hasEyeColor(person)){
		return true
	}
	return false
}
function hasAge(person){
	var age=findAge(person)
	if(this==age){
		return true
	}
	return false
}
function withinAgeRange(person){
	var ageRangeArray=this.split('-')
	var age=findAge(person)
	if (age>=ageRangeArray[0]&&age<=ageRangeArray[1]) {
		return true
	}
	return false
}
function hasHeight(person){
	var heightInInches=convertToInches(this)
	if (heightInInches===person.height) {
		return true
	}
	return false
}
function hasWeight(person){
	let weightTarget=Number(this.slice(0,-4))
	if(weightTarget===person.weight){
		return true
	}
	return false
}

initSearch()
//.close(); // exit window as the end of the session -- you may remove this