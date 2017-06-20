(function()
{
 "use strict";
	Parse.initialize("2s9HFWU9kOc03tWjyssw2WrXIqFXVReVdcTpO6on", "JWtd3VgWz6eNoTtmtF4OrYLAL2RFwkboqle3oZ7J");
	
	/*var currentUser = Parse.User.current();
	if(!currentUser)
	{
		window.document.location.href='index.html';	
	}
	*/
 function register_event_handlers()
 {   

        /* button  Register */
    $(document).on("click", ".uib_w_18", function(evt)
    {
        /* your code goes here */
		
		var name,email,username,password,cpassword,fname,phone,mobile,address,dob,yoj,bgroup,school,college,resp,qua,village,mandal,district,pincode;
		name = document.getElementById('name').value;
		email= document.getElementById('email').value;
		username= document.getElementById('username').value;
		password= document.getElementById('password').value;
		cpassword= document.getElementById('cpassword').value;
		fname= document.getElementById('fname').value;
		phone= document.getElementById('phone').value;
		mobile= document.getElementById('mobile').value;
		address= document.getElementById('address').value;
		dob= document.getElementById('dob').value;
		yoj= document.getElementById('yoj').value;
		bgroup= document.getElementById('bgroup').value;
		school= document.getElementById('school').value;
		college= document.getElementById('college').value;
		resp= document.getElementById('resp').value;
		qua= document.getElementById('qua').value;
		village= document.getElementById('village').value;
		mandal= document.getElementById('mandal').value;
		district= document.getElementById('district').value;
		pincode= document.getElementById('pincode').value;
		
		
		if(username===''||password!=cpassword||email===""||phone==="")
		{
			alert("please enter correct user name, Password,email & phone ");
		}
		else
		{
			var user = new Parse.User();
			user.set('username', username);
			user.set('password', password);
			user.set('email', email);
			user.set('phone',phone);
			user.set('name',name);
			user.set('fname',fname);
			user.set('mobile',mobile);
			user.set('address',address);
			user.set('dob', dob);
			user.set('yoj',yoj);
			user.set('bgroup',bgroup);
			user.set('school',school);
			user.set('college',college);
			user.set('resp',resp);
			user.set('qua',qua);
			user.set('village',village);
			user.set('mandal',mandal);
			user.set('district',district);
			user.set('pincode',pincode);
			user.signUp(null, {  										
			success: function(user) { alert("Success visit "+email+" and confirm the link to login ");},
  			error: function(user, error) {alert("Error: "+ error.code + " = "+ error.message);}});
		}
		
		         activate_page("#login_page"); 
	});
    
	 
        /* button  search */
    $(document).on("click", ".uib_w_47", function(evt)
    {
        /* your code goes here */ 

	/*	var iin,ffor,object,msg;
		iin=document.getElementById('iin').value;
		ffor=document.getElementById('ffor').value;
		
		var llist = Parse.Object.extend("_User");
		var query = new Parse.Query(llist);
		query.equalTo(ffor, iin);
		query.find({
				success: function(results) {
    								alert("Found " + results.length + " members");
    								// Do something with the returned Parse.Object values
    								for (var i = 0; i < results.length; i++) { 
									{
									object = results[i];
      								msg=object.get('name') + ' - ' + object.get('mobile')+'\n';
									}
										alert("msg");
    																	}
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

	*/
		var msg="";
		var q2 =new Parse.Query(Parse.User);
		q2.find({success:function(items){
			alert(items.length);
			$.each(items,function(i,item){
				msg= msg+i+":"+JSON.stringify(item)+'\n';
			});
			}});
		alert(msg);
	
	});
    
        /* button  Forget Password */
    $(document).on("click", ".uib_w_39", function(evt)
    {
         activate_subpage("#forget"); 
    });
    
        /* button  Login */
    $(document).on("click", ".uib_w_10", function(evt)
    {
        /* your code goes here */ 
   
	var lrnoo,lpasss;
		lrnoo=document.getElementById('uusername').value;
		lpasss=document.getElementById('upassword').value;
		
		
		
		if((lpasss==="")||(lrnoo===""))
		{
			alert("username or Password is Wrong");
		}
		
		else
		{
		
			Parse.User.logIn(lrnoo , lpasss,{
						success: function(user){
							// Do stuff after successful login.
							var currentUser = Parse.User.current();
									if (currentUser) {
    													// do stuff with the user
														activate_subpage("#home");
													} 
									else {
    													// show the signup or login page
													window.document.location.href='index.html';	
									}																		
						},
				error: function(user, error) {
					// The login failed. Check error to see why.
													alert(error.message);
				}
							});
		}
		
	
	
	
	});
    
        /* button  Send Mail */
    $(document).on("click", ".uib_w_42", function(evt)
    {
        /* your code goes here */ 
    	var femail;
			femail=document.getElementById("femail").value;
		if(femail==="")
		{
			alert("emter a correct mail id");
		}
		else
		{
			Parse.User.requestPasswordReset(femail, {
  			success: function() {
			alert("Visit "+femail+" for rest of the process");},
			error: function(error) {alert("Error: " + error.code + " " + error.message);}
			});
		}
		activate_page("login_page");
	});
    
        /* button  search */
    $(document).on("click", ".uib_w_46", function(evt)
    {
        /* your code goes here */ 
		/*
		iin=document.getElementById('iin').value;
		ffor=document.getElementById('ffor').value;
		
		var llist = Parse.Object.extend("_User");
		var query = new Parse.Query(llist);
		query.equalTo(ffor, iin);
		query.find({
				success: function(results) {
    								alert("Found " + results.length + " members");
    								// Do something with the returned Parse.Object values
    								for (var i = 0; i < results.length; i++) { 
									{
									object = results[i];
      								msg=object.get('name') + ' - ' + object.get('mobile')+'\n';
									}
										alert("msg");
    																	}
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});*/
		var iin,ffor;
		iin=document.getElementById('iin').value;
		ffor=document.getElementById('ffor').value;
		// alert(iin+"   "+ffor);
	var msg="",object;
		var q2 =new Parse.Query(Parse.User);
		q2.find({success:function(items){
			// alert(items.length);
			for (var i = 0; i < items.length; i++){
				object=items[i];
				
				if(object.get(iin)===ffor)
				{
				msg= msg+ object.get('name') + ' - ' + object.get('mobile')+'\n' ;
				}
			}
			alert(msg);
			}});
	
		
    });
    
    
        /* listitem  Help */
    $(document).on("click", ".uib_w_49", function(evt)
    {
        /* your code goes here */ 
		alert("Contact ABVP office Nalgonda for assistance");
    });
    
    
        /* listitem  About */
    $(document).on("click", ".uib_w_52", function(evt)
    {
        /* your code goes here */ 
		alert("Contact Developer Lokeshwar Reddy Kasarla @ 11141a0542@gmail.com");
    });
    
        /* listitem  Emergency */
    $(document).on("click", ".uib_w_53", function(evt)
    {
        /* your code goes here */ 
		alert("Dail 100 for Police\n 108 for medical emergency");
    });
    
        /* listitem  Logout */
    $(document).on("click", ".uib_w_54", function(evt)
    {
        /* your code goes here */ 
		
		Parse.User.logOut();
		var currentUser = Parse.User.current();
		window.document.location.href="index.html";
		
    });
    
        /* button  back */
    $(document).on("click", ".uib_w_55", function(evt)
    {
        /* your code goes here */ 
		activate_subpage("#home");
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
