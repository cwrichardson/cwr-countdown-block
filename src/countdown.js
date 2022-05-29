import { render } from '@wordpress/element';
import Countdown from 'react-countdown';

const placeholders = document.getElementsByClassName(
	'cwr-countdown-block-placeholder'
);

for (const placeholder of placeholders) {
	const data = JSON.parse(placeholder.querySelector('pre').innerText);
	render(<CountDown {...data} />, placeholder);
}

export function CountDown(data) {
	return (
		<div className="cwr-countdown">
			<Countdown date={data.expire_time} />
		</div>
	);
}
