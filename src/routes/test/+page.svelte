<script>
	import ProgressBar from "../../Ui/ProgressBar.svelte";
    $: progress = 60
    setInterval(()=>{
        progress+=10
    },1000)
</script>
 <ProgressBar  progress={progress}/>
 <ProgressBar progress={progress}/>