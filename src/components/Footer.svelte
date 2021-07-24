<script context="module">
	import { formatDate } from '@utils';

	export const date = formatDate({ format: 'YYYY' });
	export const version = 'process.env.PACKAGE_VERSION'; // TODO: fix this odd string
</script>

<script>
	import github from '@images/github.svg';
</script>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: calc(128px + env(safe-area-inset-bottom));
		margin-top: calc(var(--section-spacing) / 2);
		padding-bottom: env(safe-area-inset-bottom);
		text-align: center;
	}

	p {
		margin: 0;
	}

	/* This assumes white icons are being used */
	a:focus,
	a:hover {
		filter: brightness(80%);
	}
</style>

<footer class="footer primary-background">
	<a href="https://github.com/afspeirs" target="_blank" rel="noopener noreferrer">
		<img class="img-icon" src={github} alt="github.com/afspeirs" width="32" height="32">
	</a>
	<!-- <p>
		Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms of Use
	</p> -->
	<p title={`v${version}`}>
		&copy; 2017 &ndash; {date} Andy Speirs
	</p>
</footer>
