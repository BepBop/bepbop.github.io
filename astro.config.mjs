import {defineConfig} from 'astro/config';

import react from "@astrojs/react";
import {current_year} from "/Users/gyananjay/Documents/Webstorm/https-bepbop.github.io/src/components/Timeline.jsx";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    redirects:{
        '/{current_year}': '/'
    }
});