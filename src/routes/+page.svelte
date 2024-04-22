<script>
	import Hero from './Hero.svelte';
	import Overview from './Overview.svelte';
	import Highlights from './Highlights.svelte';
	import Slides from './Slides.svelte';
	import Cta from './Cta.svelte';

	export let data;
</script>

<Hero --horizontal-padding={data.horizontalPadding} />
<Overview --horizontal-padding={data.horizontalPadding} />
<Highlights --horizontal-padding={data.horizontalPadding} />
<Slides --horizontal-padding={data.horizontalPadding} />
<Cta --horizontal-padding={data.horizontalPadding} />
