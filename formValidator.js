     
function check(form)
{
	   if(form.username.value == "admin" && form.password.value == "admin")
	   {
	     window.open('m-r-foods.html');
	   }
	  else
	  {
	    alert("Error Password or Username");
	    window.open('login.html')
	    
	   }
};

