/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { DateTimePicker } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

// Internal modules.
import { CountDown } from './countdown';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const [date, setDate] = useState();
	const blockProps = useBlockProps();

	useEffect(() => {
		if (
			!('expire_date' in attributes) ||
			('string' !== date.expire_date &&
				!(date.expire_date instanceof String))
		) {
			setDate(new Date());
		} else {
			setDate(attributes.expire_date);
		}
	}, []);

	const onChangeDateTime = (dateTime) => {
		setAttributes({ expire_time: dateTime });
		setDate(dateTime);
	};

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<div id="cwr-countdown-timer-controls">
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Expire Date and Time', 'cwr-countdown-timer')}
						</legend>
						<DateTimePicker
							currentDate={date}
							onChange={onChangeDateTime}
						/>
					</fieldset>
				</div>
			</InspectorControls>
			<CountDown {...attributes} />
		</div>
	);
}
