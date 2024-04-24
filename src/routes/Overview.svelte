<section>
	<img id="pattern-tr" src="/patterns/pattern-curve-top-right.svg" alt="" />
	<img id="pattern-tl" src="/patterns/pattern-curve-top-left.svg" alt="" />
	<img id="pattern-lines" src="/patterns/pattern-lines.svg" alt="" />
	<div class="crop">
		<img
			id="enjoyable-place-img"
			src="/homepage/enjoyable-place-desktop@2x.jpg"
			alt="Hilly farmland with a snaking shallow creek through the middle and some stone houses"
		/>
	</div>
	<img
		id="locally-sourced-img"
		src="/homepage/locally-sourced-desktop@2x.jpg"
		alt="A chef holding a sausepan in his left hand and drizzling sause over a dish with a spoon"
	/>
	<div class="text-group" id="enjoyable-place-text">
		<img src="/patterns/pattern-divide.svg" alt="" />
		<h2>Enjoyable place for all the family</h2>
		<p>
			Our relaxed surroundings make dining with us a great experience for everyone. We can even
			arrange a tour of the farm before your meal.
		</p>
	</div>
	<div class="text-group" id="locally-sourced-text">
		<img src="/patterns/pattern-divide.svg" alt="" />
		<h2>The most locally sourced food</h2>
		<p>
			All our ingredients come directly from our farm or local fishery. So you can be sure that
			you're eating the freshest, most sustainable food.
		</p>
	</div>
</section>

<style lang="scss">
	#pattern-tr,
	#pattern-tl,
	#pattern-lines {
		position: absolute;

		height: auto;
		width: auto;
	}

	#pattern-tr {
		left: 0;
		top: 252px;
	}

	#pattern-tl {
		bottom: 0;
		right: 0;
	}

	#pattern-lines {
		bottom: 282px;
		right: 51px;
	}

	section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-template-areas:
			'enjoyable-place-img enjoyable-place-text'
			'locally-sourced-text locally-sourced-img';

		height: 1411px;
	}

	.crop {
		box-shadow: var(--box-shadow);
		grid-area: enjoyable-place-img;
		overflow: hidden;
		justify-self: start;
		align-self: center;
		position: absolute;
		transform: translateY(-63px);

		aspect-ratio: 540 / 720;
		width: min(540px, 100%);
	}

	#enjoyable-place-img {
		position: absolute;

		width: 955px;
	}

	#locally-sourced-img {
		justify-self: end;
		align-self: center;
		transform: translateY(71px);
		grid-area: locally-sourced-img;
		position: absolute;

		width: min(540px, 100%);
	}

	#enjoyable-place-text {
		align-self: center;
		grid-area: enjoyable-place-text;
		justify-self: end;
		transform: translateY(-45px);

		margin-left: 120px;
		max-width: 48ch;
	}

	#locally-sourced-text {
		align-self: center;
		grid-area: locally-sourced-text;
		justify-self: start;
		transform: translateY(48px);

		margin-right: 120px;
		max-width: 45ch;
	}

	h2,
	p {
		color: var(--colour-ebony-clay);

		font-family: 'League Spartan';
	}

	h2 {
		margin-top: 55px;
		margin-bottom: 27px;

		font-size: var(--size-2xl);
		font-weight: var(--weight-bold);
		letter-spacing: var(--letter-spacing-xs);
		line-height: var(--line-height-xl);
	}

	p {
		font-size: var(--size-l);
		font-weight: var(--weight-regular);
		letter-spacing: var(--letter-spacing-zero);
		line-height: var(--line-height-m);
	}

	@media (max-width: 0px) {
	}

	@media (max-width: 1000px) {
		#pattern-tr {
			left: -517px;
			top: 100px;
		}

		#pattern-tl {
			right: -511px;
		}

		#pattern-lines {
			bottom: 489px;
			right: 40px;

			z-index: 1;
		}

		section {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(4, 1fr);
			grid-template-areas:
				'enjoyable-place-img'
				'enjoyable-place-text'
				'locally-sourced-img'
				'locally-sourced-text';

			height: 1490px;
		}

		.crop {
			place-self: center;
			transform: translateY(0px);

			position: relative;

			aspect-ratio: 573 / 360;
			width: min(573px, 100%);
			margin-bottom: -10px;
		}

		.crop,
		#enjoyable-place-text {
			transform: translateY(-112px);
		}

		#enjoyable-place-img {
			position: static;

			content: url('/homepage/enjoyable-place-tablet@2x.jpg');
			width: 100%;
			height: auto;
		}

		#enjoyable-place-text {
			place-self: center;

			margin-left: 0;
			max-width: 48ch;

			text-align: center;
		}

		#locally-sourced-img,
		#locally-sourced-text {
			transform: translateY(-62px);
		}

		#locally-sourced-img {
			place-self: center;
			position: relative;

			content: url('/homepage/locally-sourced-tablet@2x.jpg');
			width: min(573px, 100%);

			margin-bottom: -10px;
		}

		#locally-sourced-text {
			place-self: center;
			grid-area: locally-sourced-text;

			margin-right: 0;
			max-width: 45ch;

			text-align: center;
		}

		h2,
		p {
			color: var(--colour-ebony-clay);

			font-family: 'League Spartan';
		}

		h2 {
			margin-top: 39px;
			margin-bottom: 27px;

			font-size: var(--size-2xl);
			font-weight: var(--weight-bold);
			letter-spacing: var(--letter-spacing-xs);
			line-height: var(--line-height-xl);
		}

		p {
			font-size: var(--size-l);
			font-weight: var(--weight-regular);
			letter-spacing: var(--letter-spacing-zero);
			line-height: var(--line-height-m);
		}
	}
</style>
