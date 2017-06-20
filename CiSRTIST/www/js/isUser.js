(function()
{
 "use strict";
Parse.initialize("zUeZFbb365PZ4lHukiUzZVE5lAAbiQdp7QcGvRCG", "argcTXjoqeQ8UCm55egWwjyI2UvD0gqH15MiU15K");	
						var currentUser = Parse.User.current();
									if (currentUser!==null) {
										// do stuff with the user
														window.document.location.href='www/home.html';
													} 
									else {
										// show the signup or login page
														window.document.location.href='www/login.html';
										
									}	
})();