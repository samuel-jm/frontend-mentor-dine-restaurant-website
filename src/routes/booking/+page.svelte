<script>
	import Hero from './Hero.svelte';
	import Filler from './Filler.svelte';

	export let data;
</script>

<Hero --horizontal-padding={data.horizontalPadding} />
<Filler />
