import { createLogger, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const logger = createLogger();
const postcssFromWarning = 'A PostCSS plugin did not pass the `from` option to `postcss.parse`';
const loggerWarn = logger.warn;
const loggerWarnOnce = logger.warnOnce;

logger.warn = (message, options) => {
  if (message.includes(postcssFromWarning)) return;
  loggerWarn(message, options);
};

logger.warnOnce = (message, options) => {
  if (message.includes(postcssFromWarning)) return;
  loggerWarnOnce(message, options);
};

export default defineConfig({
  customLogger: logger,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001,
    strictPort: true,
    host: true,
    allowedHosts: true,
  }
});
