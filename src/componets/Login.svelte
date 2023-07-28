<script>
	import {auth , onAuthStateChanged , createUserWithEmailAndPassword , signInAnonymously} from '../lib/firbase'
	let email
	let password
  const handleLogin = ()=>{
	

	
 
	
  }
</script>

<div class="signup-box">
	<form  >
		<label for="email">
			Email <br />
			<input type="email" bind:value={email} placeholder="example@gmail.com"  required/>
		</label>
		<br />
		<label for="email">
			Password <br />
			<input type="password" bind:value={password} placeholder="***********" required/>
		</label>
		<input  type="submit" value="Login" class="login-btn" />
		<button on:click={()=> signInAnonymously(auth)} >anoymus</button>

	</form>
</div>

<style>
	.signup-box {
		display: block;
		margin: auto;
		width: 500px;
		height: auto;
		background-color: rgba(128, 128, 128, 0.459);
		border-radius: 15px;
	}
	.signup-box:hover {
		transition: all 0.5s;
		border-radius: 0px;
	}
	form {
		display: grid;
		align-items: center;
		place-items: center;
		padding: 20px;
	}
	input {
		width: 400px;
		height: 50px;
		color: black;
		font-size: large;
	}
	.login-btn {
		border: 2px solid white;
		margin-top: 40px;
		color: white;
		font-size: xx-large;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
		font-weight: 900;
	}
	.login-btn:hover {
		background-color: aliceblue;
		color: blue;
		transition: all 0.3s;
		transform: scale(1.1);
	}
	label{
		font-size: x-large;
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
</style>
