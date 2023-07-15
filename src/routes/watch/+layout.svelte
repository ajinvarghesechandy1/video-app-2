<script>

	import Recommanded from "../../componets/Recommanded.svelte";
	import VideoInfo from "../../componets/VideoInfo.svelte";
import VideoPlayer from "../../componets/VideoPlayer.svelte";
let video = {
    title:"some video is playing",
    thumbnail:"https://i.ytimg.com/an_webp/XRoSBWYMefY/mqdefault_6s.webp?du=3000&sqp=CKTBtKUG&rs=AOn4CLDOfhlA2K2DTqiMOvK_tkHyJWdZyA",
    src:"https://ia601205.us.archive.org/20/items/pyvideo_147___pycon-2009-how-i-distribute-python-applications-on-windows-py2exe-and-innosetup-108/147_pycon-2009-how-i-distribute-python-applications-on-windows-py2exe-and-innosetup-108.mp4",
    description:"some thing good for someone that thing may bad for me." 
   }
</script>
<div class="watch-box">
    <VideoPlayer video={video}/>
    <Recommanded/>
</div>
<div>
    <VideoInfo videoInfo={{title:video.title , description:video.description}}/>
</div>
<slot />

<style>
    .watch-box{
        display: flex;
        justify-content: space-evenly;
    }
</style>