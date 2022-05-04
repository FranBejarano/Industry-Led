<?php

#Include HTML static file login.hmtl
include('includes/login.html');

$page_title = 'Register';

# Check form submitted.
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
{
  # Connect to the database.
  require ('includes/connect_db.php'); 
  
  # Initialize an error array.
  $errors = array();

  # Check for a first name.
  if ( empty( $_POST[ 'first_name' ] ) )
  { $errors[] = 'Enter your first name.' ; }
  else
  { $fn = mysqli_real_escape_string( $link, trim( $_POST[ 'first_name' ] ) ) ; }

  # Check for a last name.
  if (empty( $_POST[ 'last_name' ] ) )
  { $errors[] = 'Enter your last name.' ; }
  else
  { $ln = mysqli_real_escape_string( $link, trim( $_POST[ 'last_name' ] ) ) ; }

  # Check for an email address:
  if ( empty( $_POST[ 'email' ] ) )
  { $errors[] = 'Enter your email address.'; }
  else
  { $e = mysqli_real_escape_string( $link, trim( $_POST[ 'email' ] ) ) ; }

  # Check for a password and matching input passwords.
  if ( !empty($_POST[ 'pass1' ] ) )
  {
    if ( $_POST[ 'pass1' ] != $_POST[ 'pass2' ] )
    { $errors[] = 'Passwords do not match.' ; }
    else
    { $p = mysqli_real_escape_string( $link, trim( $_POST[ 'pass1' ] ) ) ; }
  }
  else { $errors[] = 'Enter your password.' ; }
  
  # Check if email address already registered.
  if ( empty( $errors ) )
  {
    $q = "SELECT user_id FROM users WHERE email='$e'" ;
    $r = @mysqli_query ( $link, $q ) ;
    if ( mysqli_num_rows( $r ) != 0 ) $errors[] = 'Email address already registered. <a class="alert-link" href="login.php">Sign In Now</a>' ;
  }
  
  # Check for a card number.
  if (empty( $_POST[ 'card_number' ] ) )
  { $errors[] = 'Enter your card_number.' ; }
  else
  { $cn = mysqli_real_escape_string( $link, trim( $_POST[ 'card_number' ] ) ) ; }
  
  # Check for expiry month.
  if (empty( $_POST[ 'exp_month' ] ) )
  { $errors[] = 'Enter card expiry month.' ; }
  else
  { $exp_m = mysqli_real_escape_string( $link, trim( $_POST[ 'exp_month' ] ) ) ; }
  
  
  # Check for a expiry year.
  if (empty( $_POST[ 'exp_year' ] ) )
  { $errors[] = 'Enter your expiry year.' ; }
  else
  { $exp_y = mysqli_real_escape_string( $link, trim( $_POST[ 'exp_year' ] ) ) ; }

# Check for a security.
  if (empty( $_POST[ 'cvv' ] ) )
  { $errors[] = 'Enter your security on back of card.' ; }
  else
  { $cvv = mysqli_real_escape_string( $link, trim( $_POST[ 'cvv' ] ) ) ; }


  # On success register user inserting into 'users' database table.
  if ( empty( $errors ) ) 
  {
    $q = "INSERT INTO users (first_name, last_name, email, pass, card_number, exp_month, exp_year, cvv, reg_date) VALUES ('$fn', '$ln', '$e', SHA2('$p',256), $cn, $exp_m, $exp_y, $cvv, NOW() )";
    $r = @mysqli_query ( $link, $q ) ;
    if ($r)
    { echo '
		<div class="alert alert-light">
			<p id="sucs_msg"><h1>Registered!</h1>
				You are now registered.
				<a class="alert-link" href="login.php">Login</a>
			</p>
		</div>'; }
  
    # Close database connection.
    mysqli_close($link); 

    exit();
  }
  # Or report errors.
  else 
  {
    echo '
		<div class="alert alert-light">
			<p id="err_msg"><h1>The following error(s) occurred:</h1>' ;
		
				foreach ( $errors as $msg )
					{ echo " - $msg<br>" ; }
				echo 'or please <a class="alert-link" href="register.php">try again</a>.
			</p>
		</div>';
    # Close database connection.
    mysqli_close( $link );
  }  
}
?>

<!doctype html>
<html lang="en">
	
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no">
		<!-- Bootstrap CSS -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

		<title>discovery one cinema - register</title>		
	</head>
	
	<body>
		<div class="acordion" id="createAccount">
			<div class="row justify-content-center">
			<div class="col-sm-3">
				</div>
				<form action = "register.php" class="needs-validation" method = "post" novalidate>

					<div class="col-sm align-self-center">
						<div class="card bg-light mb-3">
							<div class="card-header bg-danger" id="personalDetails">
								<button class="btn btn-block bg-danger btn-outline-ligh text-left text-white" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<b>Create Account</b>
								</button>
							</div>
							<div id="collapseOne" class="collapse show" aria-labelledby="personalDetails" data-parent="#createAccount">
								<div class="card-body">								
									<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text">
												First and Last Name
											</span>										
										</div>
										<input type = "text" id = "firstName" name = "first_name" class="form-control" value = "<?php if(isset($_POST['first_name']))
											echo $_POST['first_name'];?>" required>
										<input type = "text" id = "surName" name = "last_name" class="form-control" value = "<?php if(isset($_POST['last_name']))
											echo $_POST['last_name'];?>" required>	
									</div>
									<br>
									<div class="form-group">
										<input type = "email" name = "email" class="form-control" placeholder="Email" value = "<?php if(isset($_POST['email']))
											echo $_POST['email'];?>" required>
										<small id="emailHelp" class="form-text text-muted">
											We'll never share your email with anyone else.
										</small>
									</div>
									<div class="form-group">
										<input type = "password" name = "pass1" class="form-control" placeholder="Create New Password" value = "<?php if(isset($_POST['pass1']))
											echo $_POST['pass1'];?>" required>
									</div>
									<div class="form-group">
										<input type = "password" name = "pass2" class="form-control" placeholder="Confirm Password" value = "<?php if(isset($_POST['pass2']))
											echo $_POST['pass2'];?>" required>
									</div>							
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm align-self-center">
						<div class="card bg-light mb-3">
							<div class="card-header bg-danger" id="cardDetails">
								<button class="btn btn-block bg-danger btn-outline-ligh text-left text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									<b>Add Payment Card</b>
								</button>
							</div>
							<div id="collapseTwo" class="collapse" aria-labelledby="cardDetails" data-parent="#createAccount">
								<div class="card-body">							
									<div class="form-group">
										<input type = "text" name = "card_number" class="form-control" placeholder="Card Number" value = "<?php if(isset($_POST['card_number']))
										echo $_POST['card_number'];?>" required>
									</div>
									<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text">
												Card Expiry Date
											</span>
										</div>
										<input type = "text" name = "exp_month" class="form-control" placeholder="MM" value = "<?php if(isset($_POST['exp_month']))
											echo $_POST['exp_month'];?>" required>
										<input type = "text" name = "exp_year" class="form-control" placeholder="YY" value = "<?php if(isset($_POST['exp_year']))
											echo $_POST['exp_year'];?>" required>
									</div>
									<br>
									<div class="form-group">
										<input type = "text" name = "cvv" class="form-control" placeholder="CVV (3 digits securty code)" value = "<?php if(isset($_POST['cvv']))
											echo $_POST['cvv'];?>" required>
									</div>							
									<input type = "submit" class="btn btn-danger btn-lg btn-block" value = "Submit">
								</div>
							</div>
						</div>
					</div>
				</form>
			<?php
				include('includes/footer.html');
			?>
			
			<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
			<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
			</div>
		</div>
	</body>
</html>