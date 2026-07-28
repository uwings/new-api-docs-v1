/**
 * Prebuild Script
 * Generates changelog before build
 */

import { generateChangelog } from './build-changelog';

async function prebuild() {
  console.log('═══════════════════════════════════════════════');
  console.log('🚀 Starting prebuild process...');
  console.log('═══════════════════════════════════════════════\n');

  const startTime = Date.now();

  try {
    // ⚠️ Changelog generation DISABLED — we maintain our own changelog manually
    // The auto-generated upstream release changelog was replaced with our own
    // public welfare station changelog. Do NOT re-enable without updating in sync.
    // await generateChangelog();
    console.log('ℹ Changelog auto-generation disabled. Using manual changelog.');
    console.log('');

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('═══════════════════════════════════════════════');
    console.log(`✅ Prebuild completed! Duration: ${duration}s`);
    console.log('═══════════════════════════════════════════════\n');
  } catch (error) {
    console.error('❌ Prebuild failed:', error);
    // Don't exit process, let the build continue
    console.log('⚠ Build will continue but may use old or missing data\n');
  }
}

// Execute prebuild
prebuild();
