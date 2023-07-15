<script>
	import VideoCard from './VideoCard.svelte';
</script>

<div class="box">
	<div class="info">
		<div class="profile-top">
			<div class="profile-pic">
				<img
					src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
					alt="profile"
				/>
			</div>
			<div class="change-profile-pic">
				<input type="file" />
			</div>
		</div>
		<div class="profile-bottom">
			<div class="username">
				<input type="text" value="username" />
			</div>
			<div class="bio">
				<textarea name="bio" id="" cols="30" rows="5">bio </textarea>
			</div>
			<div class="update">
				<button class="update-btn">update</button>
			</div>
		</div>
	</div>
	<div class="your-videos">
		<h1>Your videos</h1>
		<div class="video">
			<VideoCard cardType={'recommended-card'} /> 
            
		</div>
        <div class="video">
			<VideoCard cardType={'recommended-card'} />
		</div>
        <div class="video">
			<VideoCard cardType={'recommended-card'} />
		</div>
        <div class="video">
			<VideoCard cardType={'recommended-card'} />
		</div>
	</div>
</div>

<style>
	.update-btn {
		width: 100%;
		height: 50px;
		border: 2px solid lightblue;
		margin-top: 40px;
	}
	.update-btn:hover {
		background-color: rgba(158, 154, 154, 0.614);
	}
	* {
		background-color: black;
	}
	.box {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 80vh;
		border: 3px solid white;
	}
	.change-profile-pic {
		display: grid;
		place-items: center;
	}
	.username > input {
		width: 100%;
	}
	.profile-pic > img {
		width: 150px;
		height: 150px;
		aspect-ratio: 1/1;
		border: 2px solid white;
		border-radius: 50%;
	}
	.info {
		width: 100%;
		height: 100%;
	}
	.bio > textarea {
		width: 100%;
		margin-top: 30px;
	}
	.profile-top {
		display: flex;
		justify-content: space-around;
		margin-top: 20px;
	}
	.profile-bottom {
		display: grid;
		margin-top: 30px;
		padding: 20px;
	}
	.your-videos {
		width: 100%;
		height: 100%;
		overflow: scroll;
	}
	.your-videos > h1 {
		text-align: center;
		font-size: x-large;
		font-family: monospace;
		color: rgba(255, 255, 255, 0.641);
		position: static;
	}
    .your-videos div{
        margin-top: 20px;
    }
</style>
