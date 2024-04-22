<script>
	const highlights = [
		{
			title: 'Seared salmon fillet',
			description: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
			image: '/homepage/salmon-desktop-tablet@2x.jpg',
			alt: 'A seared salmon dish'
		},
		{
			title: 'Rosemary filet mignon',
			description: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
			image: '/homepage/beef-desktop-tablet@2x.jpg',
			alt: 'A fried circular cut of beef with rosemary on top'
		},
		{
			title: 'Summer Fruit Chocolate Mousse',
			description: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
			image: '/homepage/chocolate-desktop-tablet@2x.jpg',
			alt: 'Two glasses of chocolate mousse'
		}
	];
</script>

<section>
	<div class="text-group" id="highlights">
		<img src="/patterns/pattern-divide.svg" alt="" />
		<h2>A few highlights from our menu</h2>
		<p>
			We cater for all dietary requirements, but here's a glimpse at some of our diner's
			favourites.Our menu is revamped every season.
		</p>
	</div>
	<ul>
		{#each highlights as highlight, i}
			<li>
				<img src={highlight.image} alt={highlight.alt} />
				<div class="text-group">
					<h3>
						<div id="line"></div>
						{highlight.title}
					</h3>
					<p>{highlight.description}</p>
				</div>
			</li>
			{#if i < highlights.length - 1}
				<li id="li-divider"></li>
			{/if}
		{/each}
	</ul>
</section>

<style lang="scss">
	section {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 125px;

		min-height: 761px;

		background-color: var(--colour-cod-gray);
	}

	h2,
	h3,
	p {
		color: white;

		font-family: 'League Spartan';
	}

	#highlights {
		max-width: 50ch;

		margin-top: 190px;

		& > h2 {
			margin-top: 55px;
			margin-bottom: 27px;

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

	ul {
		display: flex;
		flex-direction: column;

		margin-top: 255px;

		& li {
			display: flex;
			gap: 62px;

			& > img {
				max-width: 128px;
			}

			& h3 {
				font-size: var(--size-l);
				font-weight: var(--weight-bold);
				letter-spacing: var(--letter-spacing-m);
				line-height: var(--line-height-2xs);
			}

			& p {
				font-size: var(--size-s);
				font-weight: var(--weight-regular);
				letter-spacing: var(--letter-spacing-zero);
				line-height: var(--line-height-xs);
			}

			&#li-divider {
				border-bottom: 1px solid #343434;
				margin-top: 24px;
				margin-bottom: 24px;
			}
		}
	}
</style>
