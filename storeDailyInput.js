var supplier=new Array();
var product=new Array();
var subproduct=new Array();

function open(){
var supplierInput  = document.getElementById("supplier").value;
var productInput   = document.getElementById("products").value;
var subproductInput = document.getElementById("subproduct").value;



supplier[supplier.length]=supplierInput;
product[product.length]=productInput;
	

var content="<b>All Elements of the Arrays :</b><br>";
for(var i = 0; i < supplier.length; i++) {
   content +=supplier[i]+"<br>";
   console.log(supplier[i]);
}
for(var i = 0; i < product.length; i++) {
   content +=product[i]+"<br>";
}


document.getElementById('display').innerHTML = content;
};
