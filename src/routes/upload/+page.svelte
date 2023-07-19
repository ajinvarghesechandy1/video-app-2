<script>
	import VideoCard from "../../componets/VideoCard.svelte";

</script>


<svelte:head>
	<title>
		upload
	</title>
</svelte:head>

<div class="box">
	<div class="upload">
		<div class="left">
            <input placeholder="title here.." type="text" name="title" id="">
            <h1>upload video file here</h1>
            <input type="file" name="video" id="" >
            <h1>upload thumbnail file here</h1>
            <input type="file" name="thumbnail">
        </div>
		<div class="right">
            <h1 style="text-align: center; font-family: 'Courier New', Courier, monospace;">preview</h1> 
            <div class="preview">
              
                <VideoCard cardType={'home-card'}/>
            </div>
        </div>
	</div>
	<div class="upload-action-box">
		<button class="upload-btn">Upload</button>
	</div>
</div>

<style>
    h1{
        color: blue;
        width: 100%;
        font-size: 30px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    input{
        background-color: black;
        color: white;
        width: 100%;
        font-size: xx-large;
    }
	.box {
		margin: 0%;
		width: 100%;
		height: 80vh;
		border: 3px solid white;
		padding: 10px;
		overflow: scroll;
		scroll-behavior: smooth;
	}
	.upload {
		width: 100%;
        height: 60vh;
		display: flex;
		justify-content: space-between;
	}
    .upload .left{
        display: grid;
        place-items: center;
    }
	.upload-btn {
		width: 100%;
		height: 50px;
		border: 2px solid lightblue;
		margin-top: 40px;
	}
	.upload-btn:hover {
		background-color: rgba(158, 154, 154, 0.614);
	}
    .right{
        width: 30%;
        border: 3px solid white;
        display: grid;
        place-items: center;
    }
</style>
