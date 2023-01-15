<script>
	import { toMonthString } from '$lib/TimelineEvent';
	import PersonalEvents from '$lib/PersonalEvent';
	import PersonalExperiences from '$lib/PersonalExperience';
</script>

<section>
	<h1>[WORK IN PROGRESS]</h1>
</section>

<section>
	<h1>Experiences</h1>
	{#each PersonalExperiences as evt}
		<div class="container">
			<div class="date">
				<div class="line">
					<h2>{evt.title}</h2>
					<p>{', ' + evt.subtitle}</p>
				</div>
				<div>
					{toMonthString(evt.startDate)}-{evt.endDate ? toMonthString(evt.endDate) : 'Present'}
				</div>
			</div>
			<p><i>{evt.organization}</i></p>
			<p>{evt.description}</p>
		</div>
	{/each}
</section>

<section>
	<h1>Publications</h1>
</section>

<section>
	<h1>Extracurricular Activities</h1>
</section>

<section>
	<h1>Honors & Awards</h1>
</section>

<style>
	section {
		margin: auto;
	}
	h2 {
		font-weight: bolder;
		font-size: larger;
		margin: 0;
	}

	p {
		margin: 0;
	}

	.line {
		display: flex;
		flex-wrap: wrap;
	}

	.date {
		display: grid;
		width: 720px;
		grid-template-columns: auto auto;
		justify-content: space-between;
	}
	.container {
		margin-bottom: 10px;
	}
</style>
