$(".form-horizontal").validate({

rules: {
usernamename: "required",
password: {
required: true,
minlength: 6
}
},
 
messages: {
usernamename: "First Name field cannot be blank!",
},
password: {
required: "Password field cannot be blank!",
minlength: "Your password must be at least 6 characters long"
},


 
submitHandler: function(form)
{
form.submit();
}
 
});