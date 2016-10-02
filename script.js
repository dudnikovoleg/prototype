

	function Temp (tempCel, tempFar){
		this.tempCel = tempCel;
		this.tempFar = tempFar;


		Temp.prototype.cToF = function (){
		 this.tempCel = tempCel * 9 / 5 + 32; 
		 return this;  
	}

		Temp.prototype.fToC = function (){
		 this.tempFar = (tempFar - 32) * 5 / 9;
		 return this;
	}}

var somTemp = new Temp(100,100);
somTemp.cToF().fToC();
console.log(somTemp)



