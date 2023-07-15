<script>
	import VideoCard from "../../componets/VideoCard.svelte";

</script>
<div class="box">
	<div class="upload">
		<div class="left">
            <input type="text" name="title" id="">
            <input type="file" name="video" id="">
        </div>
		<div class="right"> 
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
    input{
        color: black;
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
</style>
