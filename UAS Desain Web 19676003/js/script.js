function Proceed(){
	var rupiah=document.getElementById('RP').value;
	var hasil=parseFloat(rupiah)-0.1*parseFloat(rupiah);
	if (!isNaN(hasil)) {
			document.getElementById('Wallet').innerHTML="Wallet yang akan di terima sebesar: "+hasil;
	}
}
