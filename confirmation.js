    function getConfirmation(){
    	
    
    	var val=document.getElementById('products').value;
    	var val2=document.getElementById('sub-product').value;
    	var val3=document.getElementById('unit').value;
    	var val4=document.getElementById('Qty').value;
    	var val5=document.getElementById('Unit-Rate').value;
    	var val6=document.getElementById('amount').value;
    	
    };
    	
    
    
    function getUrlVars() {
    	
    	
    	var vars = {};
    	
    	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    	vars[key] = value;
    	});
    	
    	return vars;

    	}
   
    var first = getUrlVars()["product"];
    var second = getUrlVars()["sub-product"];
    var third = getUrlVars()["unit"];
    var fourth = getUrlVars()["Qty"];
    var fifth = getUrlVars()["Unit-Rate"];
    var sixth = getUrlVars()["amount"];
   
    document.getElementById("one").innerHTML = "Product: "+first;
    document.getElementById("two").innerHTML = "Sub-Product: "+second;
    document.getElementById("three").innerHTML = "Unit: "+third;
    document.getElementById("four").innerHTML = "Qty: "+fourth;
    document.getElementById("five").innerHTML ="Unit-Rate: "+fifth;
    document.getElementById("six").innerHTML = "Amount: "+sixth;
   
   
   
    console.log(first);
    console.log(second);
    
    
   function  mouseDown(){
	   console.log("ghdhvjbfdjkv");
	   document.getElementById("widthh").value="S101";
	   document.getElementById("widthhh").value="P101";
   }
    
    
    