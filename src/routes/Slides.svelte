<script>
	import { fly, fade } from 'svelte/transition';

	import Button from './Button.svelte';

	const slides = [
		{
			title: 'Family Gathering',
			description:
				"We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
			image: '/homepage/family-gathering-desktop@2x.jpg',
			alt: 'Family eating dinner at a large Table'
		},
		{
			title: 'Special Events',
			description:
				"Whether it's a romantic dinner or a special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
			image: '/homepage/special-events-desktop@2x.jpg',
			alt: 'Family gathered around a large dinner table, smiling at the camera while holding up their drinks'
		},
		{
			title: 'Social Events',
			description:
				"Are you looking to have a large social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
			image: '/homepage/social-events-desktop@2x.jpg',
			alt: 'Wine glasses on a white table with people in the background'
		}
	];

	let selected = 0;
</script>

<section>
	{#each slides as slide, i}
		{#if i === selected}
			<div class="slide" in:fly={{ x: 1000, duration: 500 }} out:fly={{ x: -1000, duration: 500 }}>
				<img id="pattern-tr" src="/patterns/pattern-curve-top-right.svg" alt="" />
				<img id="slide-image" src={slide.image} alt={slide.alt} />
				<img id="pattern-lines" src="/patterns/pattern-lines.svg" alt="" />
				<div class="text-content">
					<div class="text-group">
						<h2>{slide.title}</h2>
						<p>{slide.description}</p>
					</div>
					<div id="button-wrapper">
						<Button --bg="var(--colour-cod-gray)" text="BOOK A TABLE" redirect={'/booking'} />
					</div>
					<ul>
						{#each slides as slide, i}
							<li>
								<input
									id="slide-{i}"
									type="button"
									value={slide.title.toUpperCase()}
									on:click={() => {
										selected = i;
									}}
									selected={selected === i}
								/>
								{#if i === selected}
									<div id="slide-line"></div>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	{/each}
</section>

<style lang="scss">
	section {
		display: grid;
	}

	.slide {
		grid-row: 1;
		grid-column: 1;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 50px;

		transition: visibility 500ms ease-in-out;

		min-height: 920px;
	}

	#pattern-tr,
	#pattern-lines {
		position: absolute;

		width: auto;
	}

	#pattern-tr {
		left: calc(-350px - var(--horizontal-padding));
		top: 0;
	}

	#pattern-lines {
		left: -40px;
		top: 122px;
	}

	#slide-image {
		position: relative;
		align-self: flex-start;

		min-width: 0;

		box-shadow: var(--box-shadow);
		max-width: 540px;
		margin-top: 160px;
	}

	.text-content {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		min-height: 468px;
		min-width: 360px;

		& > .text-group {
			max-width: 49.2ch;

			& > h2,
			& > p {
				color: var(--colour-cod-gray);

				font-family: 'League Spartan';
			}

			& > h2 {
				margin-bottom: 19px;

				font-size: var(--size-2xl);
				font-weight: var(--weight-bold);
				letter-spacing: var(--letter-spacing-xs);
				line-height: var(--line-height-xl);
			}

			& > p {
				font-size: var(--size-l);
				font-weight: var(--weight-regular);
				letter-spacing: var(--letter-spacing-zero);
				line-height: var(--line-height-m);
			}
		}

		& > #button-wrapper {
			position: absolute;
			top: 217px;
		}

		& > ul {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;

			& > li {
				list-style: none;

				& > input {
					border: none;

					background-color: white;

					font-size: var(--size-m);
					font-weight: var(--weight-semi-bold);
					letter-spacing: var(--letter-spacing-2xl);
					line-height: var(--line-height-s);

					cursor: pointer;
					color: #a6a6a6;

					&:hover,
					&[selected='true'] {
						color: #4c4c4c;
					}
				}

				& > #slide-line {
					position: relative;
					top: -0.875em;
					left: -132px;
					z-index: -1;

					width: 100px;
					border-bottom: 1px solid var(--colour-beaver);
				}
			}
		}
	}
</style>
