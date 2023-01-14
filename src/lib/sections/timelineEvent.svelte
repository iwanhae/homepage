<script lang="ts">
	import type { PersonalEvent } from '../history';
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	export let event: PersonalEvent;
	let showDetail = false;
</script>

<div class="one line">
	<i class="gray">
		{monthNames[event.date.getMonth()]}, {event.date.getFullYear()}
	</i>
	{#each event.tags as tag}
		<div class="tag">{tag}</div>
	{/each}
</div>
<div class="line">
	<h2>
		{event.title}
	</h2>
	{#if event.subtitle != undefined}
		<i class="gray">
			{event.subtitle}
		</i>
	{/if}
</div>

{#if event.description != undefined}
	<button
		class="button"
		on:click={() => {
			showDetail = !showDetail;
		}}
	>
		{#if !showDetail}
			show more
		{:else}
			less
		{/if}
	</button>
{/if}
{#if showDetail}
	<i>{event.description}</i>
{/if}

<style>
	/* CUSTOM */
	.one {
		display: flex;
	}
	.line {
		margin-bottom: 10px;
	}
	.line > * {
		margin: auto 0;
	}
	.tag {
		margin-left: 10px;
		padding: 2px 5px;
		background-color: var(--oc-cyan-5);
		color: white;
		border-radius: 5px;
	}
	h2 {
		margin: 0;
		font-weight: 700;
	}
	.gray {
		color: darkgray;
	}
	.button {
		-webkit-transition: border-color 0.4s, color 0.4s;
		transition: border-color 0.4s, color 0.4s;

		display: block;
		border: none;
		z-index: 1;
		-moz-osx-font-smoothing: grayscale;
		padding: 2px 10px;
		margin: auto;
		color: var(--oc-gray-7);
		background: var(--oc-gray-2);
		border-radius: 10px;
		cursor: pointer;
	}
	.button:focus {
		outline: none;
	}
	.button:hover {
		color: var(--oc-gray-1);
		background: var(--oc-gray-7);
	}
</style>
