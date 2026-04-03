// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'biography/:id',
    renderMode: RenderMode.Client // This skips prerendering for this route
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];