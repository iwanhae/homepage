<script>
	import profileImg from '$lib/images/me.jpg';
</script>

<section>
	<h1>Wanhae Lee | 이완해</h1>
	<div class="about-container">
		<div>
			<p class="about-description">
				He is a research intern at the <a href="https://hcail.uos.ac.kr"
					>Human-Centered Artificial Intelligence Lab (HCAIL)</a
				>
				at the University of Seoul, under the supervision of
				<a href="http://hyunggujung.com/">Prof. Hyunggu Jung.</a>
			</p>
			<p>
				His research focuses on Human-Computer collaboration with Natural Language Processing (NLP).
				He likes making the latest NLP techs more practical to potential users.
			</p>
			<p>
				He has three years of Software Engineer experience developing private Kubernetes as a
				Service. He knows how the CloudNative ecosystem works and is familiar with Kubernetes,
				Golang, Linux, and how to develop applications for cloud environments.
			</p>
		</div>
		<div style="width: 20px;" />
		<img src={profileImg} alt="" class="about-profile" />
	</div>
</section>

<style>
	.about-container {
		display: flex;
		width: 720px;
		margin: auto;
	}
	.about-description {
		width: 400px;
	}
	.about-profile {
		width: 300px;
	}
</style>
