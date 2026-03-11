/// <reference types="vite/client" />

declare module 'react-github-calendar' {
  import { FC } from 'react';
  export interface Props {
    username: string;
    theme?: any;
    blockSize?: number;
    blockMargin?: number;
    fontSize?: number;
    hideColorLegend?: boolean;
    // tambahkan props lain jika perlu
  }
  export const GitHubCalendar: FC<Props>;
}