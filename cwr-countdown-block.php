<?php
/**
 * Plugin Name:       Countdown Block
 * Description:       A Gutenberg block for a simple countdown timer
 * Version:           0.99.1
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author:            Chris Richardson
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cwr-countdown-block
 *
 * @package           cwr-countdown-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_cwr_countdown_block_block_init() {
	register_block_type( __DIR__ . '/build',
		array(
			'render_callback' => 'cwr_countdown_block_render_placeholder'
		)
	);
}
add_action( 'init', 'create_block_cwr_countdown_block_block_init' );

/**
 * There's no native way to pass the attributes to the front-end script,
 * so we hide them in a `<pre>` elemnt and pull them from there.
 */
function cwr_countdown_block_render_placeholder($attributes) {
	ob_start(); ?>
	<div class="cwr-countdown-block-placeholder">
		<pre style="display: none;">
			<?php echo wp_json_encode($attributes) ?>
		</pre>
	</div>
	<?php return ob_get_clean();
}
