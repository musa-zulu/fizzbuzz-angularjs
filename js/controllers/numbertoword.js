app.controller('NumberToWordController', ['$scope', function($scope) {

$scope.numberToWord = function(inputNumber)
{  
    var singleDigits = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    var doubleDigits = ['ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    var multiplesOfTen = ['', 'ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];

	var str = new String(inputNumber)
    var splt_str = str.split("");
    var splt_rev = splt_str.reverse();
	
    numLength = splt_rev.length;
    var word = new Array();
    var index = 0;

    for (var k = 0; k < numLength; k++) {
	
		if(k == 0)
		{
			if ((splt_rev[k] == 0) || (splt_rev[k + 1] == 1)) word[index] = ''; 
            else word[index] = '' + singleDigits[splt_rev[k]]; 
               
         word[index] = word[index]; 
		}		
		else if (k == 1)
		{
			bigNumbers();
		}
		else if (k == 2)
		{
			if (splt_rev[k] == 0) word[index] = ''; 
            else if ((splt_rev[k - 1] == 0) || (splt_rev[k - 2] == 0)) word[index] = singleDigits[splt_rev[k]] + " hundred ";
            else word[index] = singleDigits[splt_rev[k]] + " hundred and"; 
		}
		else if (k == 3)
		{
			if (splt_rev[k] == 0 || splt_rev[k + 1] == 1) word[index] = ''; 
			else word[index] = singleDigits[splt_rev[k]];
			if ((splt_rev[k + 1] != 0) || (splt_rev[k] > 0)) word[index] = word[index] + " thousand"; 
		}
		else if (k == 4)
		{
			bigNumbers();
		}
		else if (k == 5)
		{
			if ((splt_rev[k] == 0) || (splt_rev[k + 1] == 1)) word[index] = ''; 
            else word[index] = singleDigits[splt_rev[k]]; 
            if (splt_rev[k + 1] !== '0' || splt_rev[k] > '0') word[index] = word[index] + " lakh";
		}
		else if(k == 6)
		{
			bigNumbers();
		}
		else if (k == 7)
		{
		    if ((splt_rev[k] == 0) || (splt_rev[k + 1] == 1))  word[index] = '';
			else word[index] = singleDigits[splt_rev[k]];
			if (splt_rev[k + 1] !== '0' || splt_rev[k] > '0') word[index] = word[index] + " crore"; 
		}
		else 
		{
			bigNumbers();
		}
        index++;
    }

    function bigNumbers() {
        if (splt_rev[k] == 0) { word[index] = ''; }
        else if (splt_rev[k] == 1) { word[index] = doubleDigits[splt_rev[k - 1]]; }
        else { word[index] = multiplesOfTen[splt_rev[k]]; }
    }

    word.reverse();
    $scope.output = '';
    for (var k = 0; k < numLength; k++) {
        $scope.output = $scope.output + word[k];
    }
}
}]);
  