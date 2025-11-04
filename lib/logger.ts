export type LogLevel = 'info' | 'warn' | 'error';

export interface LogEntry {
  runId: string;
  stage: string;
  level: LogLevel;
  ts: string;
  message?: string;
  data?: Record<string, unknown>;
}

export interface LoggerOptions {
  consoleOutput?: boolean; // default true
  truncateAt?: number; // default 300 chars for large strings
}

function truncateValue(value: unknown, limit: number): unknown {
  if (typeof value === 'string') {
    if (value.length > limit) return value.slice(0, limit) + `...(+${value.length - limit})`;
    return value;
  }
  return value;
}

function truncateDeep(obj: Record<string, unknown>, limit: number): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(obj || {})) {
    if (typeof val === 'string') out[key] = truncateValue(val, limit);
    else if (Array.isArray(val)) out[key] = val.slice(0, 100).map((v) => truncateValue(v as unknown, limit));
    else if (val && typeof val === 'object') out[key] = truncateDeep(val as Record<string, unknown>, limit);
    else out[key] = val as unknown;
  }
  return out;
}

export function createLogger(runId: string, options?: LoggerOptions) {
  const logs: LogEntry[] = [];
  const consoleOutput = options?.consoleOutput !== false;
  const truncateAt = options?.truncateAt ?? 300;

  function log(stage: string, data?: Record<string, unknown>, level: LogLevel = 'info', message?: string) {
    const entry: LogEntry = {
      runId,
      stage,
      level,
      ts: new Date().toISOString(),
      message,
      data: data ? truncateDeep(data, truncateAt) : undefined
    };
    logs.push(entry);
    if (consoleOutput) {
      const prefix = `[run:${runId}] [${stage}]`;
      if (level === 'error') console.error(prefix, message || '', entry.data || {});
      else if (level === 'warn') console.warn(prefix, message || '', entry.data || {});
      else console.log(prefix, message || '', entry.data || {});
    }
  }

  function getLogs() {
    return logs;
  }

  return { log, getLogs };
}


