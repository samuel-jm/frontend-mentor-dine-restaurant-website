<script>
	import Hero from './Hero.svelte';
	import Overview from './Overview.svelte';
	import Highlights from './Highlights.svelte';
	import Slides from './Slides.svelte';
	import Cta from './Cta.svelte';

	const minPadding = 35;
	const maxPadding = 165;
	const minWidth = 600;
	const maxWidth = 1000;
	const slope = (maxPadding - minPadding) / (maxWidth - minWidth);
	const intercept = minPadding - minWidth * slope;
	const horizontalPadding = `max(0px, min(${maxPadding}px, calc(${100 * slope}vw + ${intercept}px)))`;
	console.log(horizontalPadding);
</script>

<Hero />
<Overview />
<Highlights />
<Slides />
<Cta />
