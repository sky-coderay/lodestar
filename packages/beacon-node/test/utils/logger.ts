import {getEnvLogLevel} from "@lodestar/logger/env";
import {LoggerNode, LoggerNodeOpts, getNodeLogger} from "@lodestar/logger/node";
import {LogLevel} from "@lodestar/utils";
export {LogLevel};

export type TestLoggerOpts = LoggerNodeOpts;

/**
 * Run the test with ENVs to control log level:
 * ```
 * LOG_LEVEL=debug vitest .ts
 * DEBUG=1 vitest .ts
 * VERBOSE=1 vitest .ts
 * ```
 */
export const testLogger = (module?: string, opts?: TestLoggerOpts): LoggerNode => {
  if (opts == null) {
    opts = {} as LoggerNodeOpts;
  }
  if (module) {
    opts.module = module;
  }
  const level = getEnvLogLevel();
  opts.level = level ?? opts.level ?? LogLevel.info;
  return getNodeLogger(opts);
};
