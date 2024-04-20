import {defineConfig} from 'astro/config';

import react from "@astrojs/react";
import {current_year} from "./src/layouts/Timeline.jsx";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    redirects:{
        '/{current_year}': '/',
        '/2023':'/'
    }
});