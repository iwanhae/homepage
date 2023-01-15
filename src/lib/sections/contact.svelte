<script>
	import profileImg from '$lib/images/me.jpg';
</script>

<section>
	<h1>Contact</h1>
	<div class="container">
		<p><b>Email (Personal)</b>: iwanhae [at] gmail [dot] com</p>
		<p><b>Email (Academic)</b>: iwanhae [at] uos [dot] ac [dot] kr</p>
		<p><b>Email (Kakao)</b>: scotty.scott [at] kakaocorp [dot] com</p>
		<p>
			<b>KakaoTalk</b>: iwanhae
		</p>
		<p>
			<b>LinkedIn</b>:
			<a href="https://www.linkedin.com/in/iwanhae/">https://www.linkedin.com/in/iwanhae/</a>
		</p>
		<p>
			<b>Twitter</b>:
			<a href="https://twitter.com/i_wanhae">https://twitter.com/i_wanhae</a>
		</p>
	</div>
</section>

<style>
	section {
		margin: auto;
	}
	.container {
		display: grid;
		width: 720px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (max-width: 768px) {
		.container {
			display: grid;
			width: 720px;
			grid-template-columns: repeat(1, 1fr);
		}
	}
	p {
		overflow: auto;
	}
</style>
