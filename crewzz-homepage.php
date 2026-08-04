<?php
/**
 * Template Name: Crewzz Cinematic Homepage
 * Template Post Type: page
 *
 * Keep index.html beside this template. The standalone preview is also the
 * canonical markup source, preventing the WordPress version from drifting.
 */
defined('ABSPATH') || exit;
$crewzz_file = __DIR__ . '/index.html';
if (!is_readable($crewzz_file)) {
    status_header(500);
    echo 'Crewzz homepage source is unavailable.';
    exit;
}
$crewzz_html = file_get_contents($crewzz_file);
$crewzz_base = trailingslashit(get_stylesheet_directory_uri()) . 'crewzz-wordpress-homepage/';
$crewzz_html = str_replace('assets/images/', esc_url($crewzz_base . 'assets/images/'), $crewzz_html);
$crewzz_html = str_replace('href="how-crewzz-works.html"', 'href="' . esc_url(home_url('/how-crewzz-works/')) . '"', $crewzz_html);
$crewzz_html = str_replace('href="design.html"', 'href="' . esc_url(home_url('/design-different/')) . '"', $crewzz_html);
$crewzz_html = str_replace('href="build.html"', 'href="' . esc_url(home_url('/build-different/')) . '"', $crewzz_html);
$crewzz_html = str_replace('href="estates.html#wellness"', 'href="' . esc_url(home_url('/estates/#wellness')) . '"', $crewzz_html);
$crewzz_html = str_replace('href="estates.html#security"', 'href="' . esc_url(home_url('/estates/#security')) . '"', $crewzz_html);
$crewzz_html = str_replace('href="resource-center.html"', 'href="' . esc_url(home_url('/resources/')) . '"', $crewzz_html);
echo $crewzz_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- reviewed complete HTML template.
