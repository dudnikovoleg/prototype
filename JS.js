

	function Temp (tempCel, tempFar){
		this.tempCel = tempCel;
		this.tempFar = tempFar;
}

		Temp.prototype.cToF = function (){
		return this.tempCel * 9 / 5 + 32;   
	}

		Temp.prototype.fToC = function (){
		return (this.tempFar - 32) * 5 / 9;
	}

var somTemp = new Temp(100,100);

document.write("Температура с цельсия в фаренгейт " + somTemp.cToF() + "<br/>");
document.write("Температура с фаренгейт в цельсий " + somTemp.fToC() );


