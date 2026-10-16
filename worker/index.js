var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/unenv/dist/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(PerformanceEntry, "PerformanceEntry");
    PerformanceMark = /* @__PURE__ */ __name(class PerformanceMark2 extends PerformanceEntry {
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    }, "PerformanceMark");
    PerformanceMeasure = class extends PerformanceEntry {
      entryType = "measure";
    };
    __name(PerformanceMeasure, "PerformanceMeasure");
    PerformanceResourceTiming = class extends PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    __name(PerformanceResourceTiming, "PerformanceResourceTiming");
    PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    __name(PerformanceObserverEntryList, "PerformanceObserverEntryList");
    Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    __name(Performance, "Performance");
    PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    __name(PerformanceObserver, "PerformanceObserver");
    __publicField(PerformanceObserver, "supportedEntryTypes", []);
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
import { Socket } from "node:net";
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class extends Socket {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      isRaw = false;
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
      isTTY = false;
    };
    __name(ReadStream, "ReadStream");
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
import { Socket as Socket2 } from "node:net";
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class extends Socket2 {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      columns = 80;
      rows = 24;
      isTTY = false;
    };
    __name(WriteStream, "WriteStream");
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    Process = class extends EventEmitter {
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return "";
      }
      get versions() {
        return {};
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: () => 0 });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    __name(Process, "Process");
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// src/worker/utils/crypto.ts
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + PASSWORD_SALT);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
var PASSWORD_SALT;
var init_crypto = __esm({
  "src/worker/utils/crypto.ts"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    PASSWORD_SALT = "cf_im_chat_salt_2026";
    __name(hashPassword, "hashPassword");
  }
});

// src/worker/db/auth.ts
var auth_exports = {};
__export(auth_exports, {
  createAgent: () => createAgent,
  deleteAgent: () => deleteAgent,
  ensureDefaultAdmin: () => ensureDefaultAdmin,
  findLeastLoadedOnlineAgent: () => findLeastLoadedOnlineAgent,
  getAgentById: () => getAgentById,
  getAllAgents: () => getAllAgents,
  getOnlineAgents: () => getOnlineAgents,
  updateAgent: () => updateAgent,
  updateAgentStatus: () => updateAgentStatus,
  updateCurrentProfile: () => updateCurrentProfile,
  verifyAgent: () => verifyAgent
});
async function ensureDefaultAdmin(db) {
  const countRes = await db.prepare("SELECT COUNT(*) as count FROM agents").first();
  if (countRes && countRes.count === 0) {
    const adminId = "agent_" + crypto.randomUUID().slice(0, 8);
    const pwdHash = await hashPassword("admin123");
    await db.prepare(
      `INSERT INTO agents (id, username, password_hash, display_name, role, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      adminId,
      "admin",
      pwdHash,
      "\u8D85\u7EA7\u7BA1\u7406\u5458",
      "admin",
      "online",
      Date.now()
    ).run();
  }
}
async function verifyAgent(db, username, password) {
  await ensureDefaultAdmin(db);
  const agent = await db.prepare("SELECT * FROM agents WHERE username = ?").bind(username).first();
  if (!agent)
    return null;
  const inputHash = await hashPassword(password);
  if (agent.password_hash === inputHash) {
    return agent;
  }
  return null;
}
async function getAgentById(db, id) {
  return await db.prepare("SELECT * FROM agents WHERE id = ?").bind(id).first();
}
async function getAllAgents(db) {
  const res = await db.prepare(
    "SELECT id, username, display_name, avatar_url, role, status, created_at FROM agents ORDER BY created_at ASC"
  ).all();
  return res.results || [];
}
async function createAgent(db, data) {
  const existing = await db.prepare("SELECT id FROM agents WHERE username = ?").bind(data.username).first();
  if (existing) {
    throw new Error("\u7528\u6237\u540D\u5DF2\u88AB\u5360\u7528\uFF0C\u8BF7\u66F4\u6362");
  }
  const id = "agent_" + crypto.randomUUID().slice(0, 8);
  const pwdHash = await hashPassword(data.password);
  await db.prepare(
    `INSERT INTO agents (id, username, password_hash, display_name, role, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    id,
    data.username,
    pwdHash,
    data.display_name,
    data.role || "agent",
    "offline",
    Date.now()
  ).run();
}
async function updateAgent(db, id, data) {
  if (data.password) {
    const pwdHash = await hashPassword(data.password);
    await db.prepare("UPDATE agents SET password_hash = ? WHERE id = ?").bind(pwdHash, id).run();
  }
  if (data.display_name) {
    await db.prepare("UPDATE agents SET display_name = ? WHERE id = ?").bind(data.display_name, id).run();
  }
  if (data.role) {
    await db.prepare("UPDATE agents SET role = ? WHERE id = ?").bind(data.role, id).run();
  }
}
async function deleteAgent(db, id) {
  const agent = await getAgentById(db, id);
  if (!agent)
    throw new Error("\u5BA2\u670D\u4E0D\u5B58\u5728");
  if (agent.username === "admin") {
    throw new Error("\u9ED8\u8BA4\u8D85\u7EA7\u7BA1\u7406\u5458\u4E0D\u53EF\u5220\u9664");
  }
  await db.prepare("DELETE FROM agents WHERE id = ?").bind(id).run();
}
async function updateCurrentProfile(db, id, data) {
  const current = await getAgentById(db, id);
  if (!current)
    throw new Error("\u8D26\u53F7\u4E0D\u5B58\u5728");
  if (data.new_password) {
    if (!data.old_password) {
      throw new Error("\u4FEE\u6539\u5BC6\u7801\u5FC5\u987B\u8F93\u5165\u539F\u5BC6\u7801");
    }
    const oldHash = await hashPassword(data.old_password);
    if (current.password_hash !== oldHash) {
      throw new Error("\u539F\u5BC6\u7801\u9519\u8BEF");
    }
    const newHash = await hashPassword(data.new_password);
    await db.prepare("UPDATE agents SET password_hash = ? WHERE id = ?").bind(newHash, id).run();
  }
  if (data.username !== current.username) {
    const conflict = await db.prepare("SELECT id FROM agents WHERE username = ? AND id != ?").bind(data.username, id).first();
    if (conflict) {
      throw new Error("\u7528\u6237\u540D\u5DF2\u88AB\u5360\u7528");
    }
  }
  await db.prepare("UPDATE agents SET username = ?, display_name = ? WHERE id = ?").bind(data.username, data.display_name, id).run();
  return await getAgentById(db, id);
}
async function updateAgentStatus(db, id, status) {
  await db.prepare("UPDATE agents SET status = ? WHERE id = ?").bind(status, id).run();
}
async function getOnlineAgents(db) {
  const res = await db.prepare("SELECT * FROM agents WHERE status != 'offline'").all();
  return res.results || [];
}
async function findLeastLoadedOnlineAgent(db) {
  await ensureDefaultAdmin(db);
  let candidates = await db.prepare(
    "SELECT id, username, display_name FROM agents WHERE status = 'online'"
  ).all();
  let list = candidates.results || [];
  if (list.length === 0) {
    const adminRes = await db.prepare(
      "SELECT id, username, display_name FROM agents WHERE role = 'admin' LIMIT 1"
    ).all();
    list = adminRes.results || [];
  }
  if (list.length === 0)
    return null;
  if (list.length === 1)
    return { id: list[0].id, name: list[0].display_name, username: list[0].username };
  const loadRes = await db.prepare(
    "SELECT assigned_agent_id, COUNT(*) as active_count FROM conversations WHERE status = 'active' AND assigned_agent_id IS NOT NULL GROUP BY assigned_agent_id"
  ).all();
  const loadMap = /* @__PURE__ */ new Map();
  for (const r of loadRes.results || []) {
    loadMap.set(r.assigned_agent_id, r.active_count);
  }
  list.sort((a, b) => (loadMap.get(a.id) || 0) - (loadMap.get(b.id) || 0));
  return { id: list[0].id, name: list[0].display_name, username: list[0].username };
}
var init_auth = __esm({
  "src/worker/db/auth.ts"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_crypto();
    __name(ensureDefaultAdmin, "ensureDefaultAdmin");
    __name(verifyAgent, "verifyAgent");
    __name(getAgentById, "getAgentById");
    __name(getAllAgents, "getAllAgents");
    __name(createAgent, "createAgent");
    __name(updateAgent, "updateAgent");
    __name(deleteAgent, "deleteAgent");
    __name(updateCurrentProfile, "updateCurrentProfile");
    __name(updateAgentStatus, "updateAgentStatus");
    __name(getOnlineAgents, "getOnlineAgents");
    __name(findLeastLoadedOnlineAgent, "findLeastLoadedOnlineAgent");
  }
});

// src/worker/db/settings.ts
async function getSystemSettings(db) {
  const res = await db.prepare("SELECT key, value FROM settings").all();
  const result = {
    widget_title: "\u5728\u7EBF\u4E13\u5C5E\u5BA2\u670D",
    welcome_message: "\u60A8\u597D\uFF01\u5F88\u9AD8\u5174\u4E3A\u60A8\u670D\u52A1\uFF0C\u8BF7\u95EE\u6709\u4EC0\u4E48\u53EF\u4EE5\u534F\u52A9\u60A8\u7684\uFF1F",
    offline_message: "\u5F53\u524D\u5750\u5E2D\u6682\u672A\u5728\u7EBF\uFF0C\u8BF7\u76F4\u63A5\u7559\u8A00\uFF0C\u6211\u4EEC\u7A0D\u540E\u5C06\u56DE\u590D\u60A8\u3002",
    auto_reply_enabled: "true",
    widget_brand_color: "#07c160",
    widget_position: "bottom-right"
  };
  if (res.results) {
    for (const row of res.results) {
      result[row.key] = row.value;
    }
  }
  return result;
}
async function getSystemSetting(db, key) {
  const row = await db.prepare("SELECT value FROM settings WHERE key = ?").bind(key).first();
  return row?.value || null;
}
async function updateSystemSettings(db, settings) {
  for (const [key, value] of Object.entries(settings)) {
    await db.prepare(
      "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value"
    ).bind(key, value).run();
  }
}
var init_settings = __esm({
  "src/worker/db/settings.ts"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(getSystemSettings, "getSystemSettings");
    __name(getSystemSetting, "getSystemSetting");
    __name(updateSystemSettings, "updateSystemSettings");
  }
});

// src/shared/langSettings.ts
function settingKeyCandidates(baseKey, langCode) {
  const code = (langCode || "").trim();
  if (!code)
    return [baseKey];
  const lower = code.toLowerCase();
  const underscored = lower.replace(/-/g, "_");
  const dashed = underscored.replace(/_/g, "-");
  const primary = lower.split(/[-_]/)[0];
  const keys = [
    `${baseKey}_${code}`,
    `${baseKey}_${lower}`,
    `${baseKey}_${underscored}`,
    `${baseKey}_${dashed}`,
    `${baseKey}_${primary}`
  ];
  return [...new Set(keys)];
}
function getSettingForLang(settings, baseKey, langCode, fallback = "") {
  for (const key of settingKeyCandidates(baseKey, langCode)) {
    const val = settings[key];
    if (val != null && String(val).trim() !== "")
      return String(val);
  }
  const bare = settings[baseKey];
  if (bare != null && String(bare).trim() !== "")
    return String(bare);
  return fallback;
}
var DEFAULT_WELCOME_ZH;
var init_langSettings = __esm({
  "src/shared/langSettings.ts"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(settingKeyCandidates, "settingKeyCandidates");
    __name(getSettingForLang, "getSettingForLang");
    DEFAULT_WELCOME_ZH = "\u60A8\u597D\uFF01\u6B22\u8FCE\u4F7F\u7528\u5728\u7EBF\u5BA2\u670D\u7CFB\u7EDF\uFF0C\u8BF7\u95EE\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u60A8\uFF1F";
  }
});

// src/worker/db/conversations.ts
var conversations_exports = {};
__export(conversations_exports, {
  batchCleanupConversations: () => batchCleanupConversations,
  countConversationMedia: () => countConversationMedia,
  deleteConversation: () => deleteConversation,
  deleteConversationMediaFromR2: () => deleteConversationMediaFromR2,
  getConversations: () => getConversations,
  getOrCreateConversation: () => getOrCreateConversation,
  getOrCreateWhatsAppConversation: () => getOrCreateWhatsAppConversation,
  getVisitorJourneyLogs: () => getVisitorJourneyLogs,
  insertWhatsAppMessage: () => insertWhatsAppMessage,
  listConversationMediaKeys: () => listConversationMediaKeys,
  updateConversationContext: () => updateConversationContext,
  updateConversationTag: () => updateConversationTag
});
async function getOrCreateConversation(db, visitorId, visitorName, visitorLang, geo, contextData) {
  try {
    await db.prepare("ALTER TABLE conversations ADD COLUMN ip TEXT DEFAULT NULL").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN country TEXT DEFAULT NULL").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN city TEXT DEFAULT NULL").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN assigned_agent_name TEXT DEFAULT NULL").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN platform TEXT DEFAULT 'web'").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN page_context TEXT DEFAULT NULL").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN product_snapshot TEXT DEFAULT NULL").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN device_info TEXT DEFAULT NULL").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN isp TEXT DEFAULT NULL").run();
    await db.prepare("ALTER TABLE conversations ADD COLUMN timezone TEXT DEFAULT NULL").run();
    await db.prepare(`CREATE TABLE IF NOT EXISTS visitor_journey_logs (
      id TEXT PRIMARY KEY,
      conversation_id TEXT NOT NULL,
      visitor_id TEXT NOT NULL,
      page_title TEXT,
      page_url TEXT NOT NULL,
      stay_seconds INTEGER DEFAULT 0,
      created_at INTEGER NOT NULL
    )`).run();
  } catch (e) {
  }
  const pageContextJson = contextData?.page_context ? JSON.stringify(contextData.page_context) : null;
  const productSnapshotJson = contextData?.product_snapshot ? JSON.stringify(contextData.product_snapshot) : null;
  const deviceInfoJson = contextData?.device_info ? JSON.stringify(contextData.device_info) : null;
  let conv = await db.prepare(
    "SELECT * FROM conversations WHERE visitor_id = ?"
  ).bind(visitorId).first();
  if (conv) {
    if (!conv.assigned_agent_id) {
      const allocated2 = await findLeastLoadedOnlineAgent(db);
      if (allocated2) {
        try {
          await db.prepare("UPDATE conversations SET assigned_agent_id = ?, assigned_agent_name = ? WHERE id = ?").bind(allocated2.id, allocated2.name, conv.id).run();
          conv.assigned_agent_id = allocated2.id;
          conv.assigned_agent_name = allocated2.name;
        } catch (e) {
        }
      }
    }
    try {
      await db.prepare(
        `UPDATE conversations SET
          ip = COALESCE(?, ip),
          country = COALESCE(?, country),
          city = COALESCE(?, city),
          isp = COALESCE(?, isp),
          timezone = COALESCE(?, timezone),
          page_context = COALESCE(?, page_context),
          product_snapshot = COALESCE(?, product_snapshot),
          device_info = COALESCE(?, device_info)
        WHERE id = ?`
      ).bind(
        geo?.ip || null,
        geo?.country || null,
        geo?.city || null,
        geo?.isp || null,
        geo?.timezone || null,
        pageContextJson,
        productSnapshotJson,
        deviceInfoJson,
        conv.id
      ).run();
    } catch (e) {
    }
    if (contextData?.page_context?.url) {
      try {
        const jId = `jny_${crypto.randomUUID().slice(0, 8)}`;
        await db.prepare(
          "INSERT INTO visitor_journey_logs (id, conversation_id, visitor_id, page_title, page_url, stay_seconds, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
        ).bind(
          jId,
          conv.id,
          visitorId,
          contextData.page_context.title || null,
          contextData.page_context.url,
          contextData.page_context.stay_seconds || 0,
          Date.now()
        ).run();
      } catch (e) {
      }
    }
    conv = await db.prepare("SELECT * FROM conversations WHERE id = ?").bind(conv.id).first();
    return { conversation: conv, isNew: false };
  }
  const id = `conv_${crypto.randomUUID().slice(0, 8)}`;
  const now = Date.now();
  const name = visitorName || `\u8BBF\u5BA2_${visitorId.slice(-4)}`;
  const allocated = await findLeastLoadedOnlineAgent(db);
  const settingsMap = await getSystemSettings(db);
  let welcomeMsg = getSettingForLang(settingsMap, "welcome_message", visitorLang || "en", "");
  if (!welcomeMsg) {
    welcomeMsg = getSettingForLang(settingsMap, "welcome_message", "en", "") || getSettingForLang(settingsMap, "welcome_message", "zh-CN", "") || settingsMap.welcome_message || DEFAULT_WELCOME_ZH;
  }
  await db.prepare(
    `INSERT INTO conversations (
      id, visitor_id, visitor_name, group_id, status,
      unread_agent_count, unread_visitor_count, last_message_text,
      last_message_time, created_at, ip, country, city, isp, timezone,
      page_context, product_snapshot, device_info, assigned_agent_id, assigned_agent_name
    ) VALUES (?, ?, ?, 'grp_default', 'active', 0, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    id,
    visitorId,
    name,
    welcomeMsg,
    now,
    now,
    geo?.ip || null,
    geo?.country || null,
    geo?.city || null,
    geo?.isp || null,
    geo?.timezone || null,
    pageContextJson,
    productSnapshotJson,
    deviceInfoJson,
    allocated?.id || null,
    allocated?.name || null
  ).run();
  if (contextData?.page_context?.url) {
    try {
      const jId = `jny_${crypto.randomUUID().slice(0, 8)}`;
      await db.prepare(
        "INSERT INTO visitor_journey_logs (id, conversation_id, visitor_id, page_title, page_url, stay_seconds, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
      ).bind(
        jId,
        id,
        visitorId,
        contextData.page_context.title || null,
        contextData.page_context.url,
        contextData.page_context.stay_seconds || 0,
        now
      ).run();
    } catch (e) {
    }
  }
  const welcomeMsgId = `msg_${crypto.randomUUID().slice(0, 8)}`;
  const defaultWelcomeTemplate = welcomeMsg || "${welcome_default:\u60A8\u597D\uFF01\u5F88\u9AD8\u5174\u4E3A\u60A8\u670D\u52A1\uFF0C\u8BF7\u95EE\u6709\u4EC0\u4E48\u53EF\u4EE5\u534F\u52A9\u60A8\u7684\uFF1F}";
  await db.prepare(
    `INSERT INTO messages (
      id, conversation_id, sender_type, sender_id, sender_name,
      message_type, content, status, created_at
    ) VALUES (?, ?, 'agent', 'system', ?, 'text', ?, 'sent', ?)`
  ).bind(
    welcomeMsgId,
    id,
    "${system_agent:\u7CFB\u7EDF\u4E13\u5C5E\u5BA2\u670D}",
    defaultWelcomeTemplate,
    now
  ).run();
  conv = await db.prepare("SELECT * FROM conversations WHERE id = ?").bind(id).first();
  return { conversation: conv, isNew: true };
}
async function updateConversationContext(db, conversationId, visitorId, pageContext, productSnapshot, deviceInfo) {
  const pageContextJson = JSON.stringify(pageContext);
  const productSnapshotJson = productSnapshot ? JSON.stringify(productSnapshot) : null;
  const deviceInfoJson = deviceInfo ? JSON.stringify(deviceInfo) : null;
  try {
    await db.prepare(
      `UPDATE conversations SET
        page_context = ?,
        product_snapshot = COALESCE(?, product_snapshot),
        device_info = COALESCE(?, device_info)
      WHERE id = ?`
    ).bind(pageContextJson, productSnapshotJson, deviceInfoJson, conversationId).run();
    if (pageContext.url) {
      const jId = `jny_${crypto.randomUUID().slice(0, 8)}`;
      await db.prepare(
        "INSERT INTO visitor_journey_logs (id, conversation_id, visitor_id, page_title, page_url, stay_seconds, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
      ).bind(
        jId,
        conversationId,
        visitorId,
        pageContext.title || null,
        pageContext.url,
        pageContext.stay_seconds || 0,
        Date.now()
      ).run();
    }
    return true;
  } catch (e) {
    console.error("Failed to update context", e);
    return false;
  }
}
async function getVisitorJourneyLogs(db, conversationId) {
  try {
    const list = await db.prepare(
      "SELECT * FROM visitor_journey_logs WHERE conversation_id = ? ORDER BY created_at ASC LIMIT 100"
    ).bind(conversationId).all();
    return list.results || [];
  } catch (e) {
    return [];
  }
}
async function getConversations(db, _agentId, _isAdmin, platform2) {
  try {
    await db.prepare("ALTER TABLE conversations ADD COLUMN platform TEXT DEFAULT 'web'").run();
  } catch (e) {
  }
  let sql = "SELECT * FROM conversations WHERE 1=1";
  const params = [];
  if (platform2) {
    sql += " AND (platform = ? OR (platform IS NULL AND ? = 'web'))";
    params.push(platform2, platform2);
  }
  sql += " ORDER BY last_message_time DESC LIMIT 150";
  try {
    let stmt = db.prepare(sql);
    if (params.length > 0)
      stmt = stmt.bind(...params);
    const res = await stmt.all();
    return res.results || [];
  } catch (err) {
    if (String(err?.message || "").includes("platform")) {
      const fallbackSql = "SELECT * FROM conversations ORDER BY last_message_time DESC LIMIT 150";
      const res = await db.prepare(fallbackSql).all();
      return res.results || [];
    }
    throw err;
  }
}
async function getOrCreateWhatsAppConversation(db, waId, senderName) {
  const visitorId = `wa_${waId}`;
  let conv = await db.prepare("SELECT * FROM conversations WHERE visitor_id = ?").bind(visitorId).first();
  const now = Date.now();
  if (conv) {
    if (senderName && conv.visitor_name !== senderName) {
      await db.prepare("UPDATE conversations SET visitor_name = ? WHERE id = ?").bind(senderName, conv.id).run();
      conv.visitor_name = senderName;
    }
    return conv;
  }
  const id = `conv_wa_${crypto.randomUUID().slice(0, 8)}`;
  const allocated = await findLeastLoadedOnlineAgent(db);
  await db.prepare(`
    INSERT INTO conversations (
      id, visitor_id, visitor_name, group_id, status, platform,
      unread_agent_count, unread_visitor_count, last_message_text,
      last_message_time, created_at, assigned_agent_id, assigned_agent_name
    ) VALUES (?, ?, ?, 'grp_default', 'active', 'whatsapp', 1, 0, 'WhatsApp \u6D88\u606F', ?, ?, ?, ?)
  `).bind(
    id,
    visitorId,
    senderName || `WhatsApp_${waId.slice(-4)}`,
    now,
    now,
    allocated?.id || null,
    allocated?.name || null
  ).run();
  return await db.prepare("SELECT * FROM conversations WHERE id = ?").bind(id).first();
}
async function insertWhatsAppMessage(db, conversationId, senderId, senderName, content) {
  const msgId = `msg_wa_${crypto.randomUUID().slice(0, 8)}`;
  const now = Date.now();
  await db.prepare(`
    INSERT INTO messages (
      id, conversation_id, sender_type, sender_id, sender_name,
      message_type, content, status, created_at
    ) VALUES (?, ?, 'visitor', ?, ?, 'text', ?, 'sent', ?)
  `).bind(msgId, conversationId, senderId, senderName, content, now).run();
  await db.prepare(`
    UPDATE conversations SET
      last_message_text = ?,
      last_message_time = ?,
      unread_agent_count = unread_agent_count + 1
    WHERE id = ?
  `).bind(content.slice(0, 80), now, conversationId).run();
}
async function countConversationMedia(db, conversationId) {
  try {
    const row = await db.prepare(
      "SELECT COUNT(*) as count FROM messages WHERE conversation_id = ? AND message_type IN ('image', 'audio', 'file', 'video')"
    ).bind(conversationId).first();
    return row?.count || 0;
  } catch {
    return 0;
  }
}
async function listConversationMediaKeys(db, conversationId) {
  try {
    const res = await db.prepare(
      "SELECT content FROM messages WHERE conversation_id = ? AND message_type IN ('image', 'audio', 'file', 'video')"
    ).bind(conversationId).all();
    const keys = [];
    for (const row of res.results || []) {
      if (!row.content)
        continue;
      const idx = row.content.indexOf("/media/");
      if (idx === -1)
        continue;
      const fileKey = row.content.substring(idx + "/media/".length).trim();
      if (fileKey)
        keys.push(fileKey);
    }
    return keys;
  } catch {
    return [];
  }
}
async function deleteConversationMediaFromR2(db, bucket, conversationId, prefetchedKeys) {
  if (!bucket)
    return 0;
  try {
    const keysToDelete = prefetchedKeys ?? await listConversationMediaKeys(db, conversationId);
    if (keysToDelete.length === 0)
      return 0;
    await Promise.allSettled(keysToDelete.map((k) => bucket.delete(k)));
    return keysToDelete.length;
  } catch (err) {
    console.error("Failed to cleanup R2 media for conversation", conversationId, err);
    return 0;
  }
}
async function deleteConversation(db, conversationId, bucket) {
  const conv = await db.prepare("SELECT visitor_id FROM conversations WHERE id = ?").bind(conversationId).first();
  const visitorId = conv?.visitor_id || null;
  const mediaKeys = await listConversationMediaKeys(db, conversationId);
  const mediaCount = mediaKeys.length;
  if (bucket && mediaKeys.length > 0) {
    try {
      await Promise.race([
        deleteConversationMediaFromR2(db, bucket, conversationId, mediaKeys),
        new Promise((resolve) => setTimeout(resolve, 8e3))
      ]);
    } catch (err) {
      console.warn("R2 media cleanup skipped or timed out", err);
    }
  }
  await db.prepare("DELETE FROM messages WHERE conversation_id = ?").bind(conversationId).run();
  try {
    await db.prepare("DELETE FROM visitor_journey_logs WHERE conversation_id = ?").bind(conversationId).run();
  } catch {
  }
  await db.prepare("DELETE FROM conversations WHERE id = ?").bind(conversationId).run();
  if (conversationId.startsWith("sec_")) {
    await db.prepare("DELETE FROM private_chats WHERE id = ?").bind(conversationId).run();
  }
  return { mediaCount, visitorId };
}
async function updateConversationTag(db, conversationId, tag) {
  try {
    await db.prepare("ALTER TABLE conversations ADD COLUMN tag TEXT DEFAULT NULL").run();
  } catch (e) {
  }
  await db.prepare(
    "UPDATE conversations SET tag = ? WHERE id = ?"
  ).bind(tag, conversationId).run();
}
async function batchCleanupConversations(db, bucket, options) {
  try {
    await db.prepare("ALTER TABLE conversations ADD COLUMN tag TEXT DEFAULT NULL").run();
  } catch (e) {
  }
  const res = await db.prepare("SELECT id, group_id, tag FROM conversations").all();
  const list = res.results || [];
  const toDeleteIds = [];
  for (const c of list) {
    let shouldDelete = false;
    if (options.cleanSilent) {
      const msgRes = await db.prepare(
        "SELECT COUNT(*) as count FROM messages WHERE conversation_id = ? AND sender_type = 'visitor'"
      ).bind(c.id).first();
      if ((msgRes?.count || 0) === 0) {
        shouldDelete = true;
      }
    }
    if (!shouldDelete && options.groupIds && options.groupIds.length > 0) {
      if (options.groupIds.includes(c.group_id || "grp_default")) {
        shouldDelete = true;
      }
    }
    if (!shouldDelete && options.tagMode) {
      const hasTag = Boolean(c.tag && c.tag.trim());
      if (options.tagMode === "has_tag" && hasTag) {
        shouldDelete = true;
      } else if (options.tagMode === "no_tag" && !hasTag) {
        shouldDelete = true;
      }
    }
    if (shouldDelete) {
      toDeleteIds.push(c.id);
    }
  }
  for (const cid of toDeleteIds) {
    await deleteConversation(db, cid, bucket);
  }
  return toDeleteIds.length;
}
var init_conversations = __esm({
  "src/worker/db/conversations.ts"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_settings();
    init_auth();
    init_langSettings();
    __name(getOrCreateConversation, "getOrCreateConversation");
    __name(updateConversationContext, "updateConversationContext");
    __name(getVisitorJourneyLogs, "getVisitorJourneyLogs");
    __name(getConversations, "getConversations");
    __name(getOrCreateWhatsAppConversation, "getOrCreateWhatsAppConversation");
    __name(insertWhatsAppMessage, "insertWhatsAppMessage");
    __name(countConversationMedia, "countConversationMedia");
    __name(listConversationMediaKeys, "listConversationMediaKeys");
    __name(deleteConversationMediaFromR2, "deleteConversationMediaFromR2");
    __name(deleteConversation, "deleteConversation");
    __name(updateConversationTag, "updateConversationTag");
    __name(batchCleanupConversations, "batchCleanupConversations");
  }
});

// src/worker/services/notifier.ts
var notifier_exports = {};
__export(notifier_exports, {
  dispatchLeaveMessageNotification: () => dispatchLeaveMessageNotification
});
async function sendViaResend(apiKey, fromEmail, toEmail, subject, html) {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail.trim() || "Cloudflare IM <onboarding@resend.dev>",
        to: [toEmail.trim()],
        subject,
        html
      })
    });
    const data = await res.json();
    if (res.ok) {
      return { success: true, data };
    }
    return { success: false, error: data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
async function sendViaUsePlunk(secretKey, fromEmail, toEmail, subject, html) {
  try {
    const res = await fetch("https://next-api.useplunk.com/v1/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${secretKey.trim()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: toEmail.trim(),
        subject,
        body: html,
        from: fromEmail.trim() || void 0
      })
    });
    const data = await res.json();
    if (res.ok) {
      return { success: true, data };
    }
    return { success: false, error: data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
async function sendEmailWithFailover(toEmail, subject, html, settings) {
  const resendKey = settings["resend_api_key"];
  const plunkKey = settings["plunk_secret_key"];
  if (resendKey) {
    const resendRes = await sendViaResend(
      resendKey,
      settings["resend_from_email"] || "onboarding@resend.dev",
      toEmail,
      subject,
      html
    );
    if (resendRes.success) {
      return { success: true, provider: "resend" };
    }
    console.warn("Resend send failed, falling back to UsePlunk...", resendRes.error);
  }
  if (plunkKey) {
    const plunkRes = await sendViaUsePlunk(
      plunkKey,
      settings["plunk_from_email"] || "",
      toEmail,
      subject,
      html
    );
    if (plunkRes.success) {
      return { success: true, provider: "useplunk" };
    }
    return { success: false, provider: "useplunk", error: plunkRes.error };
  }
  return { success: false, error: "\u672A\u914D\u7F6E\u6709\u6548\u7684\u90AE\u4EF6\u670D\u52A1\u5BC6\u94A5 (Resend \u6216 UsePlunk)" };
}
async function sendViaTelegram(botToken, chatId, text) {
  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken.trim()}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId.trim(),
        text,
        parse_mode: "HTML"
      })
    });
    const data = await res.json();
    if (data.ok) {
      return { success: true };
    }
    return { success: false, error: data.description };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
async function sendViaWeCom(webhookUrl, markdownText) {
  try {
    let url = webhookUrl.trim();
    if (!url.startsWith("http")) {
      url = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${url}`;
    }
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: { content: markdownText }
      })
    });
    const data = await res.json();
    if (data.errcode === 0) {
      return { success: true };
    }
    return { success: false, error: data.errmsg };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
async function dispatchLeaveMessageNotification(env2, data) {
  const settings = await getSystemSettings(env2.DB);
  const channels = (settings["notify_channels"] || "").split(",").map((s) => s.trim());
  const result = {};
  const timeStr = (/* @__PURE__ */ new Date()).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
  const toEmail = settings["notify_email_to"];
  if (channels.includes("email") && toEmail) {
    const subject = `\u3010\u5728\u7EBF\u5BA2\u670D\u3011\u6536\u5230\u6765\u81EA [${data.visitor_name}] \u7684\u65B0\u79BB\u7EBF\u7559\u8A00`;
    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; rounded: 16px;">
        <h2 style="color: #111827; margin-bottom: 16px; font-size: 18px; border-bottom: 2px solid #07c160; padding-bottom: 8px;">\u{1F514} \u65B0\u5BA2\u6237\u79BB\u7EBF\u7559\u8A00\u901A\u77E5</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #374151;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 90px;">\u5BA2\u6237\u79F0\u547C\uFF1A</td>
            <td style="padding: 8px 0; color: #111827;">${data.visitor_name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">\u8054\u7CFB\u65B9\u5F0F\uFF1A</td>
            <td style="padding: 8px 0; color: #2563eb; font-weight: 600;">${data.contact}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">\u7559\u8A00\u65F6\u95F4\uFF1A</td>
            <td style="padding: 8px 0; color: #6b7280;">${timeStr}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 14px; background-color: #f9fafb; border-left: 4px solid #07c160; border-radius: 4px;">
          <div style="font-weight: bold; font-size: 13px; color: #4b5563; margin-bottom: 6px;">\u7559\u8A00\u9700\u6C42\u8BE6\u60C5\uFF1A</div>
          <div style="font-size: 14px; color: #111827; line-height: 1.6; white-space: pre-wrap;">${data.content}</div>
        </div>
        <div style="margin-top: 20px; font-size: 12px; color: #9ca3af; text-align: center;">
          \u6B64\u90AE\u4EF6\u7531 Cloudflare \u5728\u7EBF\u5BA2\u670D\u7CFB\u7EDF\u81EA\u52A8\u53D1\u9001\uFF0C\u8BF7\u53CA\u65F6\u767B\u5F55\u540E\u53F0\u8DDF\u8FDB\u3002
        </div>
      </div>
    `;
    result.email = await sendEmailWithFailover(toEmail, subject, html, settings);
  }
  const tgToken = settings["telegram_bot_token"];
  const tgChatId = settings["telegram_chat_id"];
  if (channels.includes("telegram") && tgToken && tgChatId) {
    const tgMsg = `\u{1F514} <b>\u3010\u5728\u7EBF\u5BA2\u670D\u3011\u6536\u5230\u65B0\u7684\u79BB\u7EBF\u5BA2\u6237\u7559\u8A00</b>

\u{1F464} <b>\u5BA2\u6237\u79F0\u547C\uFF1A</b> ${data.visitor_name}
\u{1F4DE} <b>\u8054\u7CFB\u65B9\u5F0F\uFF1A</b> <code>${data.contact}</code>
\u23F0 <b>\u7559\u8A00\u65F6\u95F4\uFF1A</b> ${timeStr}

\u{1F4AC} <b>\u7559\u8A00\u9700\u6C42\uFF1A</b>
${data.content}`;
    result.telegram = await sendViaTelegram(tgToken, tgChatId, tgMsg);
  }
  const wecomUrl = settings["wecom_webhook_url"];
  if (channels.includes("wecom") && wecomUrl) {
    const wecomMsg = `### \u{1F514} \u6536\u5230\u65B0\u7684\u5BA2\u6237\u79BB\u7EBF\u7559\u8A00
> **\u5BA2\u6237\u79F0\u547C**\uFF1A<font color="info">${data.visitor_name}</font>
> **\u8054\u7CFB\u65B9\u5F0F**\uFF1A<font color="warning">${data.contact}</font>
> **\u7559\u8A00\u65F6\u95F4**\uFF1A${timeStr}

**\u7559\u8A00\u5185\u5BB9**\uFF1A
${data.content}`;
    result.wecom = await sendViaWeCom(wecomUrl, wecomMsg);
  }
  return result;
}
var init_notifier = __esm({
  "src/worker/services/notifier.ts"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_settings();
    __name(sendViaResend, "sendViaResend");
    __name(sendViaUsePlunk, "sendViaUsePlunk");
    __name(sendEmailWithFailover, "sendEmailWithFailover");
    __name(sendViaTelegram, "sendViaTelegram");
    __name(sendViaWeCom, "sendViaWeCom");
    __name(dispatchLeaveMessageNotification, "dispatchLeaveMessageNotification");
  }
});

// src/worker/db/kb.ts
async function ensureKbTables(db) {
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS kb_documents (
        id TEXT PRIMARY KEY,
        domain TEXT NOT NULL DEFAULT 'support',
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        rel_product_id TEXT,
        tags_json TEXT,
        chunks_count INTEGER DEFAULT 0,
        status TEXT DEFAULT 'ready',
        error_message TEXT,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )
    `).run();
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS kb_chunks (
        id TEXT PRIMARY KEY,
        document_id TEXT NOT NULL,
        domain TEXT NOT NULL DEFAULT 'support',
        chunk_index INTEGER NOT NULL,
        content TEXT NOT NULL,
        vector_id TEXT NOT NULL,
        created_at INTEGER NOT NULL
      )
    `).run();
    try {
      await db.prepare("CREATE INDEX IF NOT EXISTS idx_kb_documents_domain ON kb_documents(domain)").run();
      await db.prepare("CREATE INDEX IF NOT EXISTS idx_kb_documents_product ON kb_documents(rel_product_id)").run();
      await db.prepare("CREATE INDEX IF NOT EXISTS idx_kb_chunks_document ON kb_chunks(document_id)").run();
      await db.prepare("CREATE INDEX IF NOT EXISTS idx_kb_chunks_vector ON kb_chunks(vector_id)").run();
    } catch (e) {
    }
  } catch (err) {
    console.error("Failed to ensure KB tables", err);
  }
}
async function getKbDocuments(db, filter) {
  await ensureKbTables(db);
  let sql = "SELECT * FROM kb_documents WHERE 1=1";
  const params = [];
  if (filter?.domain) {
    sql += " AND domain = ?";
    params.push(filter.domain);
  }
  if (filter?.relProductId) {
    sql += " AND rel_product_id = ?";
    params.push(filter.relProductId);
  }
  if (filter?.status) {
    sql += " AND status = ?";
    params.push(filter.status);
  }
  if (filter?.search) {
    sql += " AND (title LIKE ? OR content LIKE ?)";
    params.push(`%${filter.search}%`, `%${filter.search}%`);
  }
  sql += " ORDER BY updated_at DESC";
  const stmt = db.prepare(sql).bind(...params);
  const result = await stmt.all();
  return result.results || [];
}
async function getKbDocumentById(db, id) {
  await ensureKbTables(db);
  const stmt = db.prepare("SELECT * FROM kb_documents WHERE id = ?").bind(id);
  return await stmt.first();
}
async function saveKbDocument(db, doc) {
  await ensureKbTables(db);
  const sql = `
    INSERT INTO kb_documents (
      id, domain, title, content, rel_product_id, tags_json, chunks_count, status, error_message, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      domain = excluded.domain,
      title = excluded.title,
      content = excluded.content,
      rel_product_id = excluded.rel_product_id,
      tags_json = excluded.tags_json,
      chunks_count = excluded.chunks_count,
      status = excluded.status,
      error_message = excluded.error_message,
      updated_at = excluded.updated_at
  `;
  await db.prepare(sql).bind(
    doc.id,
    doc.domain,
    doc.title,
    doc.content,
    doc.rel_product_id || null,
    doc.tags_json || null,
    doc.chunks_count || 0,
    doc.status || "ready",
    doc.error_message || null,
    doc.created_at,
    doc.updated_at
  ).run();
}
async function saveKbChunks(db, chunks) {
  if (!chunks.length)
    return;
  await ensureKbTables(db);
  const batchSize = 50;
  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize);
    const statements = batch.map(
      (chunk) => db.prepare(`
        INSERT INTO kb_chunks (id, document_id, domain, chunk_index, content, vector_id, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(
        chunk.id,
        chunk.document_id,
        chunk.domain,
        chunk.chunk_index,
        chunk.content,
        chunk.vector_id,
        chunk.created_at
      )
    );
    await db.batch(statements);
  }
}
async function deleteKbChunksByDocumentId(db, documentId) {
  await ensureKbTables(db);
  const rows = await db.prepare("SELECT vector_id FROM kb_chunks WHERE document_id = ?").bind(documentId).all();
  const vectorIds = (rows.results || []).map((r) => r.vector_id);
  await db.prepare("DELETE FROM kb_chunks WHERE document_id = ?").bind(documentId).run();
  return vectorIds;
}
async function deleteKbDocument(db, id) {
  const vectorIds = await deleteKbChunksByDocumentId(db, id);
  await db.prepare("DELETE FROM kb_documents WHERE id = ?").bind(id).run();
  return vectorIds;
}
async function getKbChunksByVectorIds(db, vectorIds) {
  if (!vectorIds || vectorIds.length === 0)
    return [];
  await ensureKbTables(db);
  const placeholders = vectorIds.map(() => "?").join(",");
  const stmt = db.prepare(`SELECT * FROM kb_chunks WHERE vector_id IN (${placeholders})`).bind(...vectorIds);
  const res = await stmt.all();
  return res.results || [];
}
async function updateKbDocumentStatus(db, id, status, chunksCount, errorMessage) {
  await ensureKbTables(db);
  let sql = "UPDATE kb_documents SET status = ?, updated_at = ?";
  const params = [status, Date.now()];
  if (typeof chunksCount === "number") {
    sql += ", chunks_count = ?";
    params.push(chunksCount);
  }
  if (errorMessage !== void 0) {
    sql += ", error_message = ?";
    params.push(errorMessage);
  }
  sql += " WHERE id = ?";
  params.push(id);
  await db.prepare(sql).bind(...params).run();
}
var init_kb = __esm({
  "src/worker/db/kb.ts"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(ensureKbTables, "ensureKbTables");
    __name(getKbDocuments, "getKbDocuments");
    __name(getKbDocumentById, "getKbDocumentById");
    __name(saveKbDocument, "saveKbDocument");
    __name(saveKbChunks, "saveKbChunks");
    __name(deleteKbChunksByDocumentId, "deleteKbChunksByDocumentId");
    __name(deleteKbDocument, "deleteKbDocument");
    __name(getKbChunksByVectorIds, "getKbChunksByVectorIds");
    __name(updateKbDocumentStatus, "updateKbDocumentStatus");
  }
});

// src/worker/services/kbService.ts
var kbService_exports = {};
__export(kbService_exports, {
  DEFAULT_MODEL_POOL: () => DEFAULT_MODEL_POOL,
  DEPRECATED_MODEL_MAP: () => DEPRECATED_MODEL_MAP,
  askKnowledge: () => askKnowledge,
  indexDocument: () => indexDocument,
  searchKnowledge: () => searchKnowledge,
  splitTextIntoChunks: () => splitTextIntoChunks,
  testAiChannel: () => testAiChannel,
  translateContentWithAi: () => translateContentWithAi
});
function splitTextIntoChunks(text, maxChars = 600, overlap = 80) {
  const clean = text.trim();
  if (!clean)
    return [];
  if (clean.length <= maxChars)
    return [clean];
  const chunks = [];
  let start = 0;
  while (start < clean.length) {
    let end = start + maxChars;
    if (end >= clean.length) {
      chunks.push(clean.substring(start).trim());
      break;
    }
    const slice = clean.substring(start, end);
    const breakCandidates = [
      slice.lastIndexOf("\n\n"),
      slice.lastIndexOf("\n"),
      slice.lastIndexOf("\u3002"),
      slice.lastIndexOf("\uFF01"),
      slice.lastIndexOf("\uFF1F"),
      slice.lastIndexOf(". "),
      slice.lastIndexOf("; "),
      slice.lastIndexOf("\uFF1B")
    ];
    const bestBreak = Math.max(...breakCandidates);
    if (bestBreak > maxChars * 0.4) {
      end = start + bestBreak + 1;
    }
    const chunkContent = clean.substring(start, end).trim();
    if (chunkContent.length > 0) {
      chunks.push(chunkContent);
    }
    start = end - overlap;
    if (start >= clean.length)
      break;
  }
  return chunks;
}
async function indexDocument(env2, doc) {
  try {
    await updateKbDocumentStatus(env2.DB, doc.id, "indexing");
    const oldVectorIds = await deleteKbChunksByDocumentId(env2.DB, doc.id);
    if (env2.VECTORIZE_INDEX && oldVectorIds.length > 0) {
      try {
        await env2.VECTORIZE_INDEX.deleteByIds(oldVectorIds);
      } catch (e) {
        console.warn("Failed to delete old vectors from Vectorize", e);
      }
    }
    const rawChunks = splitTextIntoChunks(doc.content, 650, 80);
    if (rawChunks.length === 0) {
      await updateKbDocumentStatus(env2.DB, doc.id, "ready", 0);
      return { success: true, chunksCount: 0 };
    }
    const kbChunks = rawChunks.map((chunkText, idx) => {
      const chunkId = `chunk_${doc.id}_${idx}_${Math.random().toString(36).substring(2, 6)}`;
      return {
        id: chunkId,
        document_id: doc.id,
        domain: doc.domain,
        chunk_index: idx,
        content: chunkText,
        vector_id: `vec_${chunkId}`,
        created_at: Date.now()
      };
    });
    if (env2.AI && env2.VECTORIZE_INDEX) {
      const chunkTexts = kbChunks.map((c) => c.content);
      const embedRes = await env2.AI.run(EMBEDDING_MODEL, { text: chunkTexts });
      const vectorsData = embedRes.data || embedRes;
      if (vectorsData && Array.isArray(vectorsData)) {
        const vectorizeRecords = kbChunks.map((chunk, idx) => ({
          id: chunk.vector_id,
          values: vectorsData[idx],
          metadata: {
            document_id: doc.id,
            domain: doc.domain,
            rel_product_id: doc.rel_product_id || "",
            title: doc.title
          }
        }));
        await env2.VECTORIZE_INDEX.upsert(vectorizeRecords);
      }
    } else {
      console.warn("Workers AI or Vectorize binding missing, skipped embedding upsert");
    }
    await saveKbChunks(env2.DB, kbChunks);
    await updateKbDocumentStatus(env2.DB, doc.id, "ready", kbChunks.length);
    return { success: true, chunksCount: kbChunks.length };
  } catch (err) {
    console.error("Failed to index document", err);
    await updateKbDocumentStatus(env2.DB, doc.id, "error", void 0, err.message || "Indexing failed");
    return { success: false, chunksCount: 0, error: err.message || "Indexing failed" };
  }
}
async function searchKnowledge(env2, query, options) {
  const topK = options?.topK || 4;
  const minScore = options?.minScore || 0.45;
  if (!env2.AI || !env2.VECTORIZE_INDEX) {
    const docs = await getKbDocuments(env2.DB, {
      domain: options?.domains?.[0],
      relProductId: options?.relProductId,
      search: query
    });
    return docs.slice(0, topK).map((d) => ({
      chunk: {
        id: "fallback_" + d.id,
        document_id: d.id,
        domain: d.domain,
        chunk_index: 0,
        content: d.content.substring(0, 400),
        vector_id: "",
        created_at: d.created_at
      },
      score: 0.8,
      title: d.title
    }));
  }
  const embedRes = await env2.AI.run(EMBEDDING_MODEL, { text: [query] });
  const queryVectors = embedRes.data || embedRes;
  const queryVector = queryVectors[0];
  const filter = {};
  if (options?.domains && options.domains.length === 1) {
    filter.domain = options.domains[0];
  } else if (options?.domains && options.domains.length > 1) {
    filter.domain = { $in: options.domains };
  }
  if (options?.relProductId) {
    filter.rel_product_id = options.relProductId;
  }
  const queryParams = { topK: topK * 2 };
  if (Object.keys(filter).length > 0) {
    queryParams.filter = filter;
  }
  const vecResult = await env2.VECTORIZE_INDEX.query(queryVector, queryParams);
  const matches = (vecResult.matches || []).filter((m) => m.score >= minScore).slice(0, topK);
  if (matches.length === 0) {
    return [];
  }
  const vectorIds = matches.map((m) => m.id);
  const chunks = await getKbChunksByVectorIds(env2.DB, vectorIds);
  const chunkMap = /* @__PURE__ */ new Map();
  chunks.forEach((c) => chunkMap.set(c.vector_id, c));
  return matches.map((m) => {
    const c = chunkMap.get(m.id);
    if (!c)
      return null;
    return {
      chunk: c,
      score: m.score,
      title: m.metadata?.title
    };
  }).filter(Boolean);
}
async function callCfWorkersAi(env2, channel2, messages) {
  if (!env2.AI)
    throw new Error("Workers AI \u8FB9\u7F18\u6A21\u578B\u7ED1\u5B9A\u672A\u5F00\u542F");
  let modelName = (channel2.model || "").trim();
  if (DEPRECATED_MODEL_MAP[modelName]) {
    modelName = DEPRECATED_MODEL_MAP[modelName];
  }
  if (!modelName) {
    modelName = "@cf/meta/llama-3.2-3b-instruct";
  }
  try {
    const res = await env2.AI.run(modelName, {
      messages,
      max_tokens: channel2.max_tokens || 1024,
      temperature: channel2.temperature ?? 0.3
    });
    const text = res?.response ?? res?.text ?? res?.result?.response ?? (typeof res === "string" ? res : "");
    if (!text)
      throw new Error("Workers AI \u8FD4\u56DE\u5185\u5BB9\u4E3A\u7A7A");
    return text;
  } catch (err) {
    if (modelName !== "@cf/meta/llama-3.2-3b-instruct" && (String(err?.message || err).includes("deprecated") || String(err?.message || err).includes("No such model"))) {
      const retryRes = await env2.AI.run("@cf/meta/llama-3.2-3b-instruct", {
        messages,
        max_tokens: channel2.max_tokens || 1024,
        temperature: 0.3
      });
      const retryText = retryRes?.response ?? retryRes?.text ?? retryRes?.result?.response ?? (typeof retryRes === "string" ? retryRes : "");
      if (retryText)
        return retryText;
    }
    throw err;
  }
}
async function callOpenAiCompatible(channel2, messages) {
  let endpoint = (channel2.endpoint || "https://api.openai.com/v1").trim().replace(/\/+$/, "");
  if (!endpoint.endsWith("/chat/completions")) {
    endpoint += "/chat/completions";
  }
  const headers = {
    "Content-Type": "application/json"
  };
  if (channel2.api_key?.trim()) {
    headers["Authorization"] = `Bearer ${channel2.api_key.trim()}`;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12e3);
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: channel2.model,
        messages,
        temperature: channel2.temperature ?? 0.3,
        max_tokens: channel2.max_tokens || 1e3
      }),
      signal: controller.signal
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status}: ${errText.substring(0, 150)}`);
    }
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content || "";
    if (!content)
      throw new Error("\u6A21\u578B\u8FD4\u56DE\u7A7A\u5185\u5BB9");
    return content;
  } finally {
    clearTimeout(timer);
  }
}
async function testAiChannel(env2, channel2) {
  const start = Date.now();
  const testMessages = [
    { role: "system", content: 'You are a test assistant. Reply with "pong" only.' },
    { role: "user", content: "ping" }
  ];
  try {
    let reply = "";
    if (channel2.type === "cf_workers_ai") {
      reply = await callCfWorkersAi(env2, channel2, testMessages);
    } else {
      reply = await callOpenAiCompatible(channel2, testMessages);
    }
    const latencyMs = Date.now() - start;
    return { success: true, latencyMs, reply: reply.trim().substring(0, 50) };
  } catch (e) {
    const latencyMs = Date.now() - start;
    return { success: false, latencyMs, error: e.message || "\u8FDE\u63A5\u5931\u8D25" };
  }
}
async function callLlmWithFallback(env2, messages, configuredChannels) {
  const pool = configuredChannels && configuredChannels.length > 0 ? configuredChannels.filter((c) => c.enabled) : DEFAULT_MODEL_POOL.filter((c) => c.enabled);
  const activeChannels = pool.length > 0 ? pool : DEFAULT_MODEL_POOL;
  const errors = [];
  for (const ch of activeChannels) {
    try {
      let output = "";
      if (ch.type === "cf_workers_ai") {
        output = await callCfWorkersAi(env2, ch, messages);
      } else {
        output = await callOpenAiCompatible(ch, messages);
      }
      if (output.trim()) {
        return { text: output.trim(), channelName: ch.name };
      }
    } catch (err) {
      console.warn(`[AI Failover] \u901A\u9053\u3010${ch.name}\u3011\u8C03\u7528\u5931\u8D25: ${err.message}\uFF0C\u6B63\u5728\u65E0\u611F\u5C1D\u8BD5\u4E0B\u4E00\u901A\u9053...`);
      errors.push(`${ch.name}: ${err.message}`);
    }
  }
  throw new Error(`\u5168\u90E8 ${activeChannels.length} \u4E2A AI \u6A21\u578B\u901A\u9053\u5747\u8C03\u7528\u5931\u8D25: ` + errors.join("; "));
}
async function askKnowledge(env2, question, conversationHistory = []) {
  const searchResults = await searchKnowledge(env2, question, {
    domains: ["support", "product"],
    topK: 3,
    minScore: 0.5
  });
  const contextText = searchResults.map((r, i) => `[\u53C2\u8003\u8D44\u6599 ${i + 1} - ${r.title || "\u4F01\u4E1A\u8D44\u6599"}]:
${r.chunk.content}`).join("\n\n");
  const customPrompt = await getSystemSetting(env2.DB, "ai_system_prompt");
  const defaultPrompt = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u3001\u793C\u8C8C\u3001\u4E25\u8C28\u7684\u4F01\u4E1A\u5B98\u65B9\u667A\u80FD\u5BA2\u670D\u987E\u95EE\u3002
\u4F60\u7684\u4EFB\u52A1\u662F\u6839\u636E\u63D0\u4F9B\u7684\u5B98\u65B9\u4F01\u4E1A\u77E5\u8BC6\u5E93\u53C2\u8003\u8D44\u6599\uFF0C\u7CBE\u51C6\u89E3\u7B54\u5BA2\u6237\u63D0\u51FA\u7684\u95EE\u9898\u3002

\u56DE\u7B54\u89C4\u5219\uFF1A
1. \u4F18\u5148\u6839\u636E\u7ED9\u51FA\u7684\u53C2\u8003\u8D44\u6599\u771F\u5B9E\u4F5C\u7B54\uFF0C\u4FDD\u6301\u8BED\u6C14\u4EB2\u5207\u3001\u5BA2\u89C2\u3001\u6709\u5E2E\u52A9\u3002
2. \u5982\u679C\u53C2\u8003\u8D44\u6599\u4E2D\u6CA1\u6709\u63D0\u5230\u76F8\u5173\u4FE1\u606F\uFF0C\u8BF7\u8BDA\u5B9E\u56DE\u7B54\u201C\u5173\u4E8E\u8BE5\u95EE\u9898\u76EE\u524D\u6682\u672A\u67E5\u8BE2\u5230\u786E\u5207\u4FE1\u606F\uFF0C\u6211\u5DF2\u4E3A\u60A8\u8BB0\u5F55\uFF0C\u7A0D\u540E\u53EF\u8F6C\u63A5\u4EBA\u5DE5\u5BA2\u670D\u4E3A\u60A8\u8FDB\u4E00\u6B65\u786E\u8BA4\u201D\uFF0C\u5207\u52FF\u80E1\u4E71\u7F16\u9020\u4EFB\u4F55\u4E8B\u5B9E\u6216\u653F\u7B56\u3002
3. \u6392\u7248\u6761\u7406\u6E05\u6670\uFF0C\u591A\u4F7F\u7528\u5206\u70B9\u8BF4\u660E\u3002`;
  const basePrompt = customPrompt && customPrompt.trim() ? customPrompt.trim() : defaultPrompt;
  const systemPrompt = `${basePrompt}

\u5B98\u65B9\u53C2\u8003\u8D44\u6599\uFF1A
${contextText || "\uFF08\u6682\u65E0\u76F4\u63A5\u76F8\u5173\u7684\u53C2\u8003\u8D44\u6599\uFF09"}`;
  let modelPool = DEFAULT_MODEL_POOL;
  try {
    const poolJson = await getSystemSetting(env2.DB, "ai_model_pool");
    if (poolJson) {
      const parsed = JSON.parse(poolJson);
      if (Array.isArray(parsed) && parsed.length > 0) {
        modelPool = parsed;
      }
    }
  } catch (e) {
  }
  const messages = [
    { role: "system", content: systemPrompt },
    ...conversationHistory.slice(-4),
    { role: "user", content: question }
  ];
  try {
    const { text, channelName } = await callLlmWithFallback(env2, messages, modelPool);
    return {
      answer: text,
      sources: searchResults.map((r) => ({ title: r.title, score: r.score })),
      used_channel: channelName
    };
  } catch (err) {
    console.error("All AI channels failed in askKnowledge:", err);
    const fallbackAnswer = searchResults.length > 0 ? `\u6839\u636E\u4F01\u4E1A\u77E5\u8BC6\u5E93\u4E3A\u60A8\u67E5\u8BE2\u5230\u4EE5\u4E0B\u53C2\u8003\u4FE1\u606F\uFF1A
${searchResults[0].chunk.content}` : "\u60A8\u597D\uFF01\u4EBA\u5DE5\u5BA2\u670D\u5F53\u524D\u5FD9\uFF0C\u7A0D\u540E\u5C06\u4E3A\u60A8\u56DE\u590D\uFF0C\u8BF7\u968F\u65F6\u7559\u8A00\u3002";
    return {
      answer: fallbackAnswer,
      sources: searchResults.map((r) => ({ title: r.title, score: r.score })),
      used_channel: "\u672C\u5730\u77E5\u8BC6\u5E93\u964D\u7EA7\u515C\u5E95"
    };
  }
}
async function translateContentWithAi(env2, params) {
  const { sourceLang, targetLangs, fields, langLabels = {} } = params;
  if (!targetLangs || targetLangs.length === 0 || !fields || Object.keys(fields).length === 0) {
    return { translations: {}, results: {}, used_channel: "none" };
  }
  let modelPool = DEFAULT_MODEL_POOL;
  try {
    const poolJson = await getSystemSetting(env2.DB, "ai_model_pool");
    if (poolJson) {
      const parsed = JSON.parse(poolJson);
      if (Array.isArray(parsed) && parsed.length > 0)
        modelPool = parsed;
    }
  } catch (e) {
  }
  const labelOf = /* @__PURE__ */ __name((code) => {
    const name = (langLabels[code] || "").trim();
    return name ? `${name} (${code})` : code;
  }, "labelOf");
  const translations = {};
  const results = {};
  let lastUsedChannel = "unknown";
  const sourceLabel = labelOf(sourceLang);
  for (const targetLang of targetLangs) {
    if (targetLang === sourceLang)
      continue;
    const targetLabel = labelOf(targetLang);
    const prompt = `\u4F60\u662F\u4E00\u4E2A\u591A\u8BED\u8A00\u672C\u5730\u5316\u7FFB\u8BD1\u5F15\u64CE\u3002
\u8BF7\u5C06\u4EE5\u4E0B JSON \u4E2D\u6BCF\u4E2A\u5B57\u6BB5\u7684\u300C\u503C\u300D\u4ECE\u6E90\u8BED\u8A00\u3010${sourceLabel}\u3011\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00\u3010${targetLabel}\u3011\u3002
\u8BF4\u660E\uFF1AJSON \u7684 Key \u662F\u5B57\u6BB5\u6807\u8BC6\uFF0C\u4E0D\u8981\u7FFB\u8BD1 Key\uFF1B\u53EA\u7FFB\u8BD1\u6BCF\u4E2A Key \u5BF9\u5E94\u7684\u6587\u672C\u5185\u5BB9\u3002
\u89C4\u5219\u8981\u6C42\uFF1A
1. \u8BD1\u6587\u4F7F\u7528\u76EE\u6807\u8BED\u8A00\u3010${targetLabel}\u3011\uFF0C\u81EA\u7136\u3001\u51C6\u786E\u3001\u7B26\u5408\u5F53\u5730\u4E60\u60EF\uFF1B
2. \u82E5\u6587\u672C\u5305\u542B HTML \u6807\u7B7E\uFF0C\u5FC5\u987B\u4FDD\u7559\u5168\u90E8\u6807\u7B7E\u4E0E\u5C5E\u6027\uFF0C\u4EC5\u7FFB\u8BD1\u6807\u7B7E\u4E4B\u95F4\u7684\u53EF\u8BFB\u6587\u5B57\uFF1B
3. \u8F93\u51FA\u5FC5\u987B\u662F\u5408\u6CD5\u7EAF\u51C0 JSON\uFF0CKey \u4E0E\u8F93\u5165\u5B8C\u5168\u4E00\u81F4\uFF0C\u4E0D\u8981 markdown \u6216\u989D\u5916\u8BF4\u660E\u3002

\u5F85\u7FFB\u8BD1 JSON \u6570\u636E\uFF1A
${JSON.stringify(fields, null, 2)}`;
    const messages = [
      {
        role: "system",
        content: `You are a professional localization engine. Translate field values into ${targetLabel}. Reply with raw JSON only.`
      },
      { role: "user", content: prompt }
    ];
    try {
      const { text, channelName } = await callLlmWithFallback(env2, messages, modelPool);
      lastUsedChannel = channelName;
      const cleaned = text.replace(/```(?:json)?/gi, "").replace(/```/g, "").trim();
      const jsonStart = cleaned.indexOf("{");
      const jsonEnd = cleaned.lastIndexOf("}");
      if (jsonStart === -1 || jsonEnd === -1) {
        results[targetLang] = { ok: false, error: "\u6A21\u578B\u672A\u8FD4\u56DE\u5408\u6CD5 JSON" };
        continue;
      }
      const parsed = JSON.parse(cleaned.substring(jsonStart, jsonEnd + 1));
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        results[targetLang] = { ok: false, error: "\u6A21\u578B\u8FD4\u56DE\u7ED3\u6784\u65E0\u6548" };
        continue;
      }
      const hasValue = Object.keys(fields).some((k) => typeof parsed[k] === "string" && parsed[k].trim() !== "");
      if (!hasValue) {
        results[targetLang] = { ok: false, error: "\u8BD1\u6587\u4E3A\u7A7A" };
        continue;
      }
      translations[targetLang] = parsed;
      results[targetLang] = { ok: true };
    } catch (err) {
      console.error(`AI translation failed for ${targetLang}:`, err);
      results[targetLang] = { ok: false, error: err?.message || "\u7FFB\u8BD1\u5F02\u5E38" };
    }
  }
  return { translations, results, used_channel: lastUsedChannel };
}
var EMBEDDING_MODEL, DEPRECATED_MODEL_MAP, DEFAULT_MODEL_POOL;
var init_kbService = __esm({
  "src/worker/services/kbService.ts"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_kb();
    init_settings();
    EMBEDDING_MODEL = "@cf/baai/bge-large-zh-v1.5";
    DEPRECATED_MODEL_MAP = {
      "@cf/meta/llama-3.1-8b-instruct": "@cf/meta/llama-3.2-3b-instruct",
      "@cf/meta/infire-llama-3.1-8b-instruct": "@cf/meta/llama-3.2-3b-instruct",
      "@cf/qwen/qwen1.5-14b-chat": "@cf/meta/llama-3.2-3b-instruct",
      "@cf/qwen/qwen2.5-72b-instruct": "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    };
    DEFAULT_MODEL_POOL = [
      {
        id: "default_cf_llama32",
        name: "Cloudflare Llama-3.2-3B (\u5B98\u65B9\u514D\u8D39\u6781\u901F)",
        type: "cf_workers_ai",
        model: "@cf/meta/llama-3.2-3b-instruct",
        enabled: true
      },
      {
        id: "default_cf_llama33",
        name: "Cloudflare Llama-3.3-70B (\u5B98\u65B9\u514D\u8D39\u65D7\u8230)",
        type: "cf_workers_ai",
        model: "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
        enabled: true
      },
      {
        id: "default_cf_deepseek_r1",
        name: "Cloudflare DeepSeek-R1-32B (\u5B98\u65B9\u514D\u8D39\u63A8\u7406)",
        type: "cf_workers_ai",
        model: "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
        enabled: false
      }
    ];
    __name(splitTextIntoChunks, "splitTextIntoChunks");
    __name(indexDocument, "indexDocument");
    __name(searchKnowledge, "searchKnowledge");
    __name(callCfWorkersAi, "callCfWorkersAi");
    __name(callOpenAiCompatible, "callOpenAiCompatible");
    __name(testAiChannel, "testAiChannel");
    __name(callLlmWithFallback, "callLlmWithFallback");
    __name(askKnowledge, "askKnowledge");
    __name(translateContentWithAi, "translateContentWithAi");
  }
});

// src/worker/index.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/hono.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/hono-base.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/compose.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context2.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context2, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/context.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/request.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/http-exception.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/request/constants.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// node_modules/hono/dist/utils/body.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/utils/buffer.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/utils/crypto.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/utils/buffer.js
var bufferToFormData = /* @__PURE__ */ __name((arrayBuffer, contentType) => {
  const response = new Response(arrayBuffer, {
    headers: {
      // Normalize the media type (case-insensitive) while keeping parameters like the boundary
      "Content-Type": contentType.replace(/^[^;]+/, (mediaType) => mediaType.toLowerCase())
    }
  });
  return response.formData();
}, "bufferToFormData");

// node_modules/hono/dist/utils/body.js
var MAX_NESTING_DEPTH = 32;
var MAX_NESTED_OBJECTS = 1e4;
var isRawRequest = /* @__PURE__ */ __name((request) => "headers" in request, "isRawRequest");
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = isRawRequest(request) ? request.headers : request.raw.headers;
  const contentType = headers.get("Content-Type");
  const mediaType = contentType?.split(";")[0].trim().toLowerCase();
  if (mediaType === "multipart/form-data" || mediaType === "application/x-www-form-urlencoded") {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  if (!isRawRequest(request) && request.bodyCache.formData) {
    return convertFormDataToBodyData(
      await request.bodyCache.formData,
      options
    );
  }
  const headers = isRawRequest(request) ? request.headers : request.raw.headers;
  const arrayBuffer = await request.arrayBuffer();
  const formDataPromise = bufferToFormData(arrayBuffer, headers.get("Content-Type") || "");
  if (!isRawRequest(request)) {
    request.bodyCache.formData = formDataPromise;
  }
  const formData = await formDataPromise;
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  const nestingState = { count: 0 };
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value, nestingState);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value, state) => {
  if (/(?:^|\.)__proto__\./.test(key)) {
    return;
  }
  let nestedForm = form;
  const keys = key.split(".", MAX_NESTING_DEPTH + 2);
  if (keys.length > MAX_NESTING_DEPTH + 1) {
    throwNestingLimitExceeded();
  }
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        if (state.count++ >= MAX_NESTED_OBJECTS) {
          throwNestingLimitExceeded();
        }
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");
var throwNestingLimitExceeded = /* @__PURE__ */ __name(() => {
  throw new Error("Nesting limit exceeded");
}, "throwNestingLimitExceeded");

// node_modules/hono/dist/utils/url.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match2[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (segment.charCodeAt(segment.length - 1) === 63) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.slice(0, -1);
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => str.indexOf("%") !== -1 ? tryDecode(str, decodeURIComponent_) : str, "tryDecodeURIComponent");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return tryDecodeURIComponent(value);
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  const hashIndex = url.indexOf("#", 8);
  if (hashIndex !== -1) {
    url = url.slice(0, hashIndex);
  }
  let encoded;
  if (!multiple && key && key.indexOf("%") === -1 && key.indexOf("+") === -1) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = /* @__PURE__ */ Object.create(null);
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var HonoRequest = /* @__PURE__ */ __name(class {
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex]?.[1][key];
    const param = this.#getParamValue(paramKey);
    return param && tryDecodeURIComponent(param);
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex]?.[1] ?? {});
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = tryDecodeURIComponent(value);
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = /* @__PURE__ */ Object.create(null);
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    for (const anyCachedKey in bodyCache) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * `.bytes()` parses the request body as a `Uint8Array`.
   *
   * @see {@link https://hono.dev/docs/api/request#bytes}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.bytes()
   * })
   * ```
   */
  bytes() {
    return this.#cachedBody("arrayBuffer").then((buffer) => new Uint8Array(buffer));
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    ;
    (this.#validatedData ??= {})[target] = data;
  }
  valid(target) {
    return this.#validatedData?.[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, "HonoRequest");

// node_modules/hono/dist/utils/html.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context2, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context: context2 }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context2, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var createResponseInstance = /* @__PURE__ */ __name((body, init) => new Response(body, init), "createResponseInstance");
var Context = /* @__PURE__ */ __name(class {
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = (layout) => this.#layout = layout;
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = () => this.#layout;
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   // Append multiple headers using the append option (e.g. Vary)
   *   c.header('Vary', 'Accept-Encoding', { append: true })
   *   c.header('Vary', 'User-Agent', { append: true })
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = (name, value, options) => {
    if (this.finalized) {
      this.#res = createResponseInstance(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  };
  status = (status) => {
    this.#status = status;
  };
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    let responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders;
    if (typeof arg === "object" && arg.headers) {
      responseHeaders ??= new Headers();
      for (const [key, value] of new Headers(arg.headers)) {
        if (key === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      if (!responseHeaders) {
        let count3 = 0;
        for (const k in headers) {
          if (++count3 > 1 || typeof headers[k] !== "string") {
            responseHeaders = new Headers();
            break;
          }
        }
      }
      if (responseHeaders) {
        for (const k in headers) {
          const v = headers[k];
          if (typeof v === "string") {
            responseHeaders.set(k, v);
          } else {
            responseHeaders.delete(k);
            for (const v2 of v) {
              responseHeaders.append(k, v2);
            }
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, {
      status,
      headers: responseHeaders ?? headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = (text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  };
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = (object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  };
  html = (html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  };
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = (location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  };
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = () => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  };
}, "Context");

// node_modules/hono/dist/router.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch", "query"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(class extends Error {
}, "UnsupportedPathError");

// node_modules/hono/dist/utils/constants.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = /* @__PURE__ */ __name(class _Hono {
  get;
  post;
  put;
  delete;
  options;
  patch;
  query;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler, r.basePath);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = this.getPath(request).slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler, baseRoutePath) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = {
      basePath: baseRoutePath !== void 0 ? mergePath(this._basePath, baseRoutePath) : this._basePath,
      path,
      method,
      handler
    };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    }
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context2 = await composed(c);
        if (!context2.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context2.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} env - env Object
   * @param {ExecutionContext} executionCtx - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
}, "_Hono");

// node_modules/hono/dist/router/reg-exp-router/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/utils.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createNullObject = /* @__PURE__ */ __name(() => /* @__PURE__ */ Object.create(null), "createNullObject");

// node_modules/hono/dist/router/reg-exp-router/matcher.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = /* @__PURE__ */ __name((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }, "match2");
  this.match = match2;
  return match2(method, path);
}
__name(match, "match");

// node_modules/hono/dist/router/reg-exp-router/node.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return b === TAIL_WILDCARD_REG_EXP_STR ? -1 : 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(class _Node {
  // handler index of a dynamic path, or -1 for a static path terminal
  #index;
  #varIndex;
  #children = createNullObject();
  insert(tokens, index, paramMap, context2, isStatic) {
    let node = this;
    for (let i = 0, len = tokens.length; i < len; i++) {
      const token = tokens[i];
      const pattern = token.length === 1 ? token === "*" ? i === len - 1 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : null : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
      let nextNode;
      if (pattern) {
        const name = pattern[1];
        let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
        if (name && pattern[2]) {
          if (regexpStr === ".*") {
            throw PATH_ERROR;
          }
          regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
          if (/\((?!\?:)/.test(regexpStr)) {
            throw PATH_ERROR;
          }
          if (regexpStr.length === 1 && regExpMetaChars.has(regexpStr)) {
            throw PATH_ERROR;
          }
        }
        nextNode = node.#children[regexpStr];
        if (!nextNode) {
          if (regexpStr !== ONLY_WILDCARD_REG_EXP_STR && regexpStr !== TAIL_WILDCARD_REG_EXP_STR) {
            for (const k in node.#children) {
              if (
                // a single-char pattern coexists with single-char literals as a literal does
                (regexpStr.length > 1 || k.length > 1) && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
              ) {
                throw PATH_ERROR;
              }
            }
          }
          nextNode = node.#children[regexpStr] = new _Node();
        }
        if (name !== "") {
          nextNode.#varIndex ??= context2.varIndex++;
          paramMap.push([name, nextNode.#varIndex]);
        }
      } else {
        nextNode = node.#children[token];
        if (!nextNode) {
          for (const k in node.#children) {
            if (k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR) {
              throw PATH_ERROR;
            }
          }
          nextNode = node.#children[token] = new _Node();
        }
      }
      node = nextNode;
    }
    if (node.#index !== void 0) {
      throw PATH_ERROR;
    }
    node.#index = isStatic ? -1 : index;
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      const childStr = c.buildRegExpStr();
      return childStr === "" ? "" : (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + childStr;
    }).filter(Boolean);
    if (typeof this.#index === "number" && this.#index !== -1) {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, "_Node");

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Trie = /* @__PURE__ */ __name(class {
  #context = { varIndex: 0 };
  #root = new Node();
  #index = 0;
  // dynamic path -> [handler index, param assoc]; static paths are not registered
  paths = createNullObject();
  insert(path, isStatic) {
    if (isStatic) {
      this.#root.insert(path.split(""), 0, [], this.#context, true);
      return;
    }
    const paramAssoc = [];
    const groups = [];
    let markedPath = path;
    for (let i = 0; ; ) {
      let replaced = false;
      markedPath = markedPath.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = markedPath.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, this.#index, paramAssoc, this.#context, false);
    this.paths[path] = [this.#index++, paramAssoc];
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, "Trie");

// node_modules/hono/dist/router/reg-exp-router/router.js
var wildcardRegExpCache = createNullObject();
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    `^${path.replace(
      /\/:[^/{}]+(?:\{\[\^\/]\+})?(?=[/{]|$)|\/?\*$|([.\\+*[^\]$()?{}|])/g,
      (match2, metaChar) => metaChar ? `\\${metaChar}` : match2 === "/*" ? TAIL_WILDCARD_REG_EXP_STR : match2 === "*" ? ONLY_WILDCARD_REG_EXP_STR : `/:${LABEL_REG_EXP_STR}`
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function findMiddleware(middleware, path) {
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  #tries;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: createNullObject() };
    this.#routes = { [METHOD_NAME_ALL]: createNullObject() };
    this.#tries = { [METHOD_NAME_ALL]: new Trie() };
  }
  #insertPath(method, path) {
    try {
      this.#tries[method].insert(path, !/\*|\/:/.test(path));
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      this.#tries[method] = new Trie();
      for (const handlerMap of [middleware, routes]) {
        handlerMap[method] = createNullObject();
        for (const p in handlerMap[METHOD_NAME_ALL]) {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
          this.#insertPath(method, p);
        }
      }
    }
    if (path === "/*") {
      path = "*";
    }
    const methods = method === METHOD_NAME_ALL ? Object.keys(middleware) : [method];
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      for (const m of methods) {
        if (!middleware[m][path]) {
          this.#insertPath(m, path);
          middleware[m][path] = findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        }
      }
      for (const handlerMap of [middleware, routes]) {
        for (const m of methods) {
          for (const p in handlerMap[m]) {
            re.test(p) && handlerMap[m][p].push([handler, path]);
          }
        }
      }
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (const path2 of paths) {
      for (const m of methods) {
        if (!routes[m][path2]) {
          this.#insertPath(m, path2);
          routes[m][path2] = findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || [];
        }
        routes[m][path2].push([handler, path2]);
      }
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = createNullObject();
    for (const method of Object.keys(this.#routes)) {
      matchers[method] = this.#buildMatcher(method);
    }
    this.#middleware = this.#routes = this.#tries = void 0;
    wildcardRegExpCache = createNullObject();
    return matchers;
  }
  #buildMatcher(method) {
    const middleware = this.#middleware[method];
    const routes = this.#routes[method];
    const trie = this.#tries[method];
    const staticMap = createNullObject();
    const handlerData = [];
    const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
    for (const r of [middleware, routes]) {
      for (const path in r) {
        const handlers = r[path];
        const pathData = trie.paths[path];
        if (!pathData) {
          staticMap[path] = [handlers.map(([h]) => [h, createNullObject()]), emptyParam];
          continue;
        }
        handlerData[pathData[0]] = handlers.map(([h, handlerPath]) => [
          h,
          trie.paths[handlerPath][1].reduceRight((map, [key], i) => {
            map[key] = paramReplacementMap[pathData[1][i][1]];
            return map;
          }, createNullObject())
        ]);
      }
    }
    return [regexp, indexReplacementMap.map((i) => handlerData[i]), staticMap];
  }
}, "RegExpRouter");

// node_modules/hono/dist/router/reg-exp-router/prepared-router.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/smart-router/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/smart-router/router.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SmartRouter = /* @__PURE__ */ __name(class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
}, "SmartRouter");

// node_modules/hono/dist/router/trie-router/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/trie-router/router.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/trie-router/node.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParams = createNullObject();
var order = 0;
var Node2 = /* @__PURE__ */ __name(class _Node2 {
  #methods = [];
  #children = createNullObject();
  #patterns = [];
  #pattern;
  #params = emptyParams;
  insert(method, path, handler) {
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = /* @__PURE__ */ new Set();
    let i = 0;
    for (const p of parts) {
      const nextP = parts[++i];
      const pattern = getPattern(p, nextP) || (nextP === void 0 && p && p.indexOf("*") === p.length - 1 ? p : null);
      const isParam = Array.isArray(pattern);
      const key = isParam ? pattern[0] : pattern || p;
      const child = curNode.#children[key] ||= new _Node2();
      if (pattern && !child.#pattern) {
        child.#pattern = pattern;
        curNode.#patterns.push(child);
      }
      curNode = child;
      if (isParam) {
        possibleKeys.add(pattern[1]);
      }
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: [...possibleKeys],
        score: ++order
      }
    });
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      if (handlerSet) {
        handlerSet.params = createNullObject();
        handlerSets.push(handlerSet);
        for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
          const key = handlerSet.possibleKeys[i2];
          handlerSet.params[key] = params?.[key] && !i2 ? params[key] : nodeParams[key] ?? params?.[key];
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            }
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (const child of node.#patterns) {
          const pattern = child.#pattern;
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (typeof pattern === "string") {
            if (pattern === "*" || part.startsWith(pattern.slice(0, -1))) {
              this.#pushHandlerSets(handlerSets, child, method, node.#params);
              if (pattern === "*") {
                child.#params = params;
                tempNodes.push(child);
              }
            }
            continue;
          }
          const [, name, matcher] = pattern;
          if (!part && matcher === true) {
            continue;
          }
          if (matcher !== true) {
            if (!partOffsets) {
              partOffsets = [];
              let offset = path[0] === "/" ? 1 : 0;
              for (let p = 0; p < len; p++) {
                partOffsets[p] = offset;
                offset += parts[p].length + 1;
              }
            }
            const restPathString = path.slice(partOffsets[i]);
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (m[0].length === restPathString.length && child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  node.#params,
                  params
                );
              }
              for (const _ in child.#children) {
                child.#params = params;
                const componentCount = m[0].match(/\//g)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
                break;
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  params,
                  node.#params
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets[1]) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
}, "_Node");

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(class {
  name = "TrieRouter";
  #node = new Node2();
  add(method, path, handler) {
    for (const result of checkOptionalParameter(path) || [path]) {
      this.#node.insert(method, result, handler);
    }
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
}, "TrieRouter");

// node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(class extends Hono {
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
}, "Hono");

// node_modules/hono/dist/middleware/cors/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var cors = /* @__PURE__ */ __name((options) => {
  const opts = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH", "QUERY"],
    allowHeaders: [],
    exposeHeaders: [],
    ...options
  };
  const exposeHeadersStr = opts.exposeHeaders?.length ? opts.exposeHeaders.join(",") : void 0;
  const allowHeadersStr = opts.allowHeaders?.length ? opts.allowHeaders.join(",") : void 0;
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return async (origin, c) => (await optsAllowMethods(origin, c)).join(",");
    } else if (Array.isArray(optsAllowMethods)) {
      const methodsStr = optsAllowMethods.join(",");
      return () => methodsStr;
    } else {
      return () => "";
    }
  })(opts.allowMethods);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (exposeHeadersStr) {
      set("Access-Control-Expose-Headers", exposeHeadersStr);
    }
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*") {
        c.res.headers.append("Vary", "Origin");
      }
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods) {
        set("Access-Control-Allow-Methods", allowMethods);
      }
      let headersStr = allowHeadersStr;
      if (!headersStr) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headersStr = requestHeaders.split(",").map((h) => h.trim()).join(",");
        }
      }
      if (headersStr) {
        set("Access-Control-Allow-Headers", headersStr);
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*") {
      c.header("Vary", "Origin", { append: true });
    }
  }, "cors2");
}, "cors");

// src/worker/routes/auth.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_auth();

// src/worker/utils/turnstile.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function verifyTurnstileToken(token, secretKey, remoteIp) {
  const isProduction = !!secretKey && !secretKey.startsWith("1x");
  if (!isProduction && token === "CF_EDGE_PASS") {
    return true;
  }
  const key = secretKey || "1x0000000000000000000000000000000AA";
  if (!token)
    return false;
  try {
    const formData = new FormData();
    formData.append("secret", key);
    formData.append("response", token);
    if (remoteIp) {
      formData.append("remoteip", remoteIp);
    }
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData
    });
    const outcome = await res.json();
    return outcome.success === true;
  } catch (err) {
    console.error("Turnstile verification network error:", err);
    return false;
  }
}
__name(verifyTurnstileToken, "verifyTurnstileToken");

// src/worker/routes/auth.ts
var authRouter = new Hono2();
authRouter.get("/turnstile-config", async (c) => {
  const siteKey = (c.env.TURNSTILE_SITE_KEY || "").trim();
  const isProduction = !!siteKey && !siteKey.startsWith("1x");
  return c.json({
    success: true,
    data: {
      site_key: isProduction ? siteKey : "",
      is_production: isProduction
    }
  });
});
authRouter.post("/login", async (c) => {
  try {
    const { username, password, security_code, turnstile_token } = await c.req.json();
    if (!username || !password) {
      return c.json({ success: false, message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801" }, 400);
    }
    const expectedSecurityCode = c.env.ADMIN_SECURITY_CODE;
    if (expectedSecurityCode) {
      if (!security_code || security_code.trim() !== expectedSecurityCode.trim()) {
        return c.json({ success: false, message: "\u540E\u53F0\u5B89\u5168\u7801\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u5B89\u5168\u7801\u6B63\u786E" }, 403);
      }
    }
    const clientIp = c.req.header("CF-Connecting-IP");
    const isValidHuman = await verifyTurnstileToken(
      turnstile_token,
      c.env.TURNSTILE_SECRET_KEY,
      clientIp
    );
    if (!isValidHuman) {
      return c.json({ success: false, message: "\u4EBA\u673A\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5" }, 403);
    }
    const agent = await verifyAgent(c.env.DB, username, password);
    if (!agent) {
      return c.json({ success: false, message: "\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF" }, 401);
    }
    await updateAgentStatus(c.env.DB, agent.id, "online");
    return c.json({
      success: true,
      data: {
        id: agent.id,
        username: agent.username,
        display_name: agent.display_name,
        role: agent.role,
        status: "online"
      }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
authRouter.post("/status", async (c) => {
  const { agent_id, status } = await c.req.json();
  if (!agent_id || !status) {
    return c.json({ success: false, message: "\u7F3A\u5C11\u53C2\u6570" }, 400);
  }
  await updateAgentStatus(c.env.DB, agent_id, status);
  try {
    const res = await c.env.DB.prepare("SELECT count(1) as count FROM agents WHERE status = 'online'").first();
    const count3 = res?.count || 0;
    const id = c.env.COORDINATOR.idFromName("global_chat_coordinator");
    const stub = c.env.COORDINATOR.get(id);
    await stub.fetch(new Request("http://coordinator/broadcast-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ has_online: count3 > 0, online_count: count3 })
    }));
  } catch (e) {
  }
  return c.json({ success: true, status });
});
authRouter.get("/online-status", async (c) => {
  try {
    const res = await c.env.DB.prepare("SELECT count(1) as count FROM agents WHERE status = 'online'").first();
    const count3 = res?.count || 0;
    c.header("Cache-Control", "public, max-age=60, s-maxage=60");
    return c.json({
      success: true,
      data: {
        has_online: count3 > 0,
        online_count: count3
      }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
authRouter.get("/me", async (c) => {
  const agentId = c.req.query("agent_id");
  if (!agentId)
    return c.json({ success: false }, 400);
  const agent = await getAgentById(c.env.DB, agentId);
  if (!agent)
    return c.json({ success: false }, 404);
  return c.json({ success: true, data: agent });
});
authRouter.post("/profile", async (c) => {
  try {
    const body = await c.req.json();
    const { agent_id, username, display_name, old_password, new_password } = body;
    if (!agent_id || !username || !display_name) {
      return c.json({ success: false, message: "\u8BF7\u5B8C\u6574\u586B\u5199\u7528\u6237\u540D\u548C\u59D3\u540D" }, 400);
    }
    const updated = await updateCurrentProfile(c.env.DB, agent_id, {
      username,
      display_name,
      old_password,
      new_password
    });
    return c.json({
      success: true,
      data: {
        id: updated.id,
        username: updated.username,
        display_name: updated.display_name,
        role: updated.role,
        status: updated.status
      }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});

// src/worker/routes/chat.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_conversations();

// src/worker/db/messages.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function getMessagesByConversation(db, conversationId, limit = 40, beforeTime) {
  let query = "SELECT * FROM messages WHERE conversation_id = ?";
  const params = [conversationId];
  if (beforeTime && beforeTime > 0) {
    query += " AND created_at < ?";
    params.push(beforeTime);
  }
  query += " ORDER BY created_at DESC LIMIT ?";
  params.push(limit);
  const res = await db.prepare(query).bind(...params).all();
  const list = res.results || [];
  return list.reverse();
}
__name(getMessagesByConversation, "getMessagesByConversation");
async function insertMessage(db, msg) {
  const createdAt = msg.created_at || Date.now();
  const fullMsg = {
    ...msg,
    created_at: createdAt
  };
  await db.prepare(
    `INSERT INTO messages (
      id, conversation_id, sender_type, sender_id, sender_name,
      message_type, content, extra_json, status, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    fullMsg.id,
    fullMsg.conversation_id,
    fullMsg.sender_type,
    fullMsg.sender_id,
    fullMsg.sender_name,
    fullMsg.message_type,
    fullMsg.content,
    fullMsg.extra_json || null,
    fullMsg.status,
    fullMsg.created_at
  ).run();
  let summary = fullMsg.content;
  if (fullMsg.message_type === "image")
    summary = "[\u56FE\u7247]";
  else if (fullMsg.message_type === "audio")
    summary = "[\u8BED\u97F3]";
  else if (fullMsg.message_type === "file")
    summary = "[\u6587\u4EF6]";
  if (fullMsg.sender_type === "visitor") {
    await db.prepare(
      `UPDATE conversations SET 
        last_message_text = ?, 
        last_message_time = ?, 
        unread_agent_count = unread_agent_count + 1 
       WHERE id = ?`
    ).bind(summary, createdAt, fullMsg.conversation_id).run();
  } else {
    await db.prepare(
      `UPDATE conversations SET 
        last_message_text = ?, 
        last_message_time = ?, 
        unread_visitor_count = unread_visitor_count + 1 
       WHERE id = ?`
    ).bind(summary, createdAt, fullMsg.conversation_id).run();
  }
  return fullMsg;
}
__name(insertMessage, "insertMessage");
async function markConversationAsRead(db, conversationId, byRole) {
  if (byRole === "agent") {
    await db.prepare("UPDATE conversations SET unread_agent_count = 0 WHERE id = ?").bind(conversationId).run();
  } else {
    await db.prepare("UPDATE conversations SET unread_visitor_count = 0 WHERE id = ?").bind(conversationId).run();
  }
}
__name(markConversationAsRead, "markConversationAsRead");

// src/worker/routes/chat.ts
init_auth();
init_settings();

// src/worker/db/i18n.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function getLanguages(db) {
  const res = await db.prepare(
    "SELECT code, name, is_default, created_at FROM i18n_languages ORDER BY is_default DESC, created_at ASC"
  ).all();
  return res.results || [];
}
__name(getLanguages, "getLanguages");
async function addLanguage(db, code, name) {
  const existing = await db.prepare("SELECT code FROM i18n_languages WHERE code = ?").bind(code).first();
  if (existing) {
    throw new Error(`\u8BED\u8A00\u4EE3\u7801 ${code} \u5DF2\u5B58\u5728`);
  }
  await db.prepare(
    "INSERT INTO i18n_languages (code, name, is_default, created_at) VALUES (?, ?, 0, ?)"
  ).bind(code, name, Date.now()).run();
  const defaultTranslations = await db.prepare(
    "SELECT key, value, is_custom FROM i18n_translations WHERE lang_code = 'zh-CN'"
  ).all();
  if (defaultTranslations.results) {
    for (const item of defaultTranslations.results) {
      const id = `${code}:${item.key}`;
      await db.prepare(
        "INSERT OR IGNORE INTO i18n_translations (id, lang_code, key, value, is_custom) VALUES (?, ?, ?, ?, ?)"
      ).bind(id, code, item.key, item.value, item.is_custom || 0).run();
    }
  }
}
__name(addLanguage, "addLanguage");
async function deleteLanguage(db, code) {
  const lang = await db.prepare("SELECT is_default FROM i18n_languages WHERE code = ?").bind(code).first();
  if (!lang)
    throw new Error("\u8BED\u79CD\u4E0D\u5B58\u5728");
  if (lang.is_default === 1) {
    throw new Error("\u9ED8\u8BA4\u515C\u5E95\u8BED\u79CD\u4E0D\u53EF\u5220\u9664");
  }
  await db.prepare("DELETE FROM i18n_translations WHERE lang_code = ?").bind(code).run();
  await db.prepare("DELETE FROM i18n_languages WHERE code = ?").bind(code).run();
}
__name(deleteLanguage, "deleteLanguage");
async function setDefaultLanguage(db, code) {
  await db.prepare("UPDATE i18n_languages SET is_default = 0").run();
  await db.prepare("UPDATE i18n_languages SET is_default = 1 WHERE code = ?").bind(code).run();
}
__name(setDefaultLanguage, "setDefaultLanguage");
async function ensureDescriptionColumn(db) {
  try {
    await db.prepare("ALTER TABLE i18n_translations ADD COLUMN description TEXT").run();
  } catch {
  }
}
__name(ensureDescriptionColumn, "ensureDescriptionColumn");
async function getTranslations(db, langCode) {
  await ensureDescriptionColumn(db);
  let query = "SELECT lang_code, key, value, is_custom, description FROM i18n_translations";
  let res;
  try {
    if (langCode) {
      res = await db.prepare(query + " WHERE lang_code = ?").bind(langCode).all();
    } else {
      res = await db.prepare(query).all();
    }
  } catch {
    const fallback = "SELECT lang_code, key, value, is_custom FROM i18n_translations";
    if (langCode) {
      res = await db.prepare(fallback + " WHERE lang_code = ?").bind(langCode).all();
    } else {
      res = await db.prepare(fallback).all();
    }
  }
  const translations = {};
  const customKeySet = /* @__PURE__ */ new Set();
  const keyDescriptions = {};
  if (res.results) {
    for (const row of res.results) {
      if (!translations[row.lang_code]) {
        translations[row.lang_code] = {};
      }
      translations[row.lang_code][row.key] = row.value;
      if (row.description) {
        keyDescriptions[row.key] = row.description;
      }
      if (row.is_custom === 1) {
        customKeySet.add(row.key);
      }
    }
  }
  return {
    translations,
    customKeys: Array.from(customKeySet),
    keyDescriptions
  };
}
__name(getTranslations, "getTranslations");
async function saveTranslations(db, langCode, translations) {
  for (const [key, value] of Object.entries(translations)) {
    const id = `${langCode}:${key}`;
    await db.prepare(
      `INSERT INTO i18n_translations (id, lang_code, key, value) 
       VALUES (?, ?, ?, ?)
       ON CONFLICT(lang_code, key) DO UPDATE SET value = excluded.value`
    ).bind(id, langCode, key, value).run();
  }
}
__name(saveTranslations, "saveTranslations");
async function addCustomKey(db, key, defaultValue, description) {
  const cleanKey = key.trim();
  if (!cleanKey)
    throw new Error("\u8BCD\u6761\u952E\u540D\u4E0D\u80FD\u4E3A\u7A7A");
  await ensureDescriptionColumn(db);
  const memo = (description || "").trim();
  const languages = await getLanguages(db);
  for (const lang of languages) {
    const id = `${lang.code}:${cleanKey}`;
    await db.prepare(
      `INSERT INTO i18n_translations (id, lang_code, key, value, is_custom, description)
       VALUES (?, ?, ?, ?, 1, ?)
       ON CONFLICT(lang_code, key) DO UPDATE SET description = excluded.description`
    ).bind(id, lang.code, cleanKey, defaultValue, memo).run();
  }
}
__name(addCustomKey, "addCustomKey");
async function deleteCustomKey(db, key) {
  const cleanKey = key.trim();
  await db.prepare(
    "DELETE FROM i18n_translations WHERE key = ? AND is_custom = 1"
  ).bind(cleanKey).run();
}
__name(deleteCustomKey, "deleteCustomKey");

// src/worker/routes/chat.ts
init_langSettings();
var chatRouter = new Hono2();
chatRouter.post("/visitor/init", async (c) => {
  try {
    await ensureDefaultAdmin(c.env.DB);
    const body = await c.req.json();
    const {
      visitor_id,
      visitor_name,
      visitor_lang,
      conversation_id,
      page_context,
      product_snapshot,
      device_info
    } = body;
    if (!visitor_id) {
      return c.json({ success: false, message: "\u7F3A\u5C11\u8BBF\u5BA2\u552F\u4E00\u6807\u8BC6" }, 400);
    }
    if (conversation_id) {
      const stillThere = await c.env.DB.prepare("SELECT id FROM conversations WHERE id = ?").bind(conversation_id).first();
      if (!stillThere) {
        return c.json({
          success: true,
          data: { reset_identity: true, reason: "conversation_deleted" }
        });
      }
    }
    const ip = c.req.header("cf-connecting-ip") || c.req.header("x-real-ip") || "";
    const cf = c.req.raw?.cf;
    const country = cf?.country || "";
    const city = cf?.city || "";
    const timezone = cf?.timezone || "";
    const isp = cf?.asOrganization || "";
    const { conversation, isNew } = await getOrCreateConversation(
      c.env.DB,
      visitor_id,
      visitor_name,
      visitor_lang,
      { ip, country, city, isp, timezone },
      { page_context, product_snapshot, device_info }
    );
    const messages = await getMessagesByConversation(c.env.DB, conversation.id, 40);
    if (isNew && c.env.COORDINATOR) {
      try {
        const stub = c.env.COORDINATOR.get(c.env.COORDINATOR.idFromName("global_chat_coordinator"));
        await stub.fetch(
          new Request("http://coordinator/broadcast-message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              conversation_id: conversation.id,
              id: `sys_init_${conversation.id}`,
              sender_type: "agent",
              sender_id: "system",
              content: conversation.last_message_text || "",
              message_type: "text",
              created_at: conversation.created_at || Date.now()
            })
          })
        );
      } catch {
      }
    }
    return c.json({
      success: true,
      data: {
        conversation,
        messages,
        isNew
      }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.post("/visitor/context", async (c) => {
  try {
    const { conversation_id, visitor_id, page_context, product_snapshot, device_info } = await c.req.json();
    if (!conversation_id || !visitor_id || !page_context) {
      return c.json({ success: false, message: "\u53C2\u6570\u4E0D\u5B8C\u6574" }, 400);
    }
    const ok = await updateConversationContext(
      c.env.DB,
      conversation_id,
      visitor_id,
      page_context,
      product_snapshot,
      device_info
    );
    return c.json({ success: ok });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.get("/conversations/:id/journey", async (c) => {
  try {
    const convId = c.req.param("id");
    const list = await getVisitorJourneyLogs(c.env.DB, convId);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.get("/conversations", async (c) => {
  try {
    const agentId = c.req.header("x-agent-id");
    const platform2 = c.req.query("platform");
    let isAdmin = false;
    if (agentId) {
      const ag = await getAgentById(c.env.DB, agentId);
      isAdmin = ag?.role === "admin";
    }
    const list = await getConversations(c.env.DB, agentId, isAdmin, platform2);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.get("/conversations/:id/messages", async (c) => {
  try {
    const convId = c.req.param("id");
    const limit = Number(c.req.query("limit")) || 40;
    const before = Number(c.req.query("before")) || void 0;
    const messages = await getMessagesByConversation(c.env.DB, convId, limit, before);
    return c.json({ success: true, data: messages });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.post("/conversations/:id/read", async (c) => {
  const convId = c.req.param("id");
  const { by } = await c.req.json();
  if (by) {
    await markConversationAsRead(c.env.DB, convId, by);
  }
  return c.json({ success: true });
});
chatRouter.get("/conversations/:id/media-count", async (c) => {
  try {
    const convId = c.req.param("id");
    const count3 = await countConversationMedia(c.env.DB, convId);
    return c.json({ success: true, data: { count: count3 } });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.delete("/conversations/:id", async (c) => {
  try {
    const convId = c.req.param("id");
    const agentId = c.req.header("x-agent-id") || c.req.query("agent_id");
    if (agentId) {
      const { getAgentById: getAgentById2 } = await Promise.resolve().then(() => (init_auth(), auth_exports));
      const agent = await getAgentById2(c.env.DB, agentId);
      if (agent && agent.role !== "admin") {
        return c.json({ success: false, message: "\u6743\u9650\u4E0D\u8DB3\uFF1A\u4EC5\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u4EE5\u5F7B\u5E95\u5220\u9664\u804A\u5929\u8BB0\u5F55" }, 403);
      }
    }
    if (c.env.COORDINATOR) {
      try {
        const stub = c.env.COORDINATOR.get(c.env.COORDINATOR.idFromName("global_chat_coordinator"));
        await stub.fetch(
          new Request("http://coordinator/broadcast-deleted", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              conversation_id: convId,
              clear_identity: true
            })
          })
        );
      } catch {
      }
    }
    const result = await deleteConversation(c.env.DB, convId, c.env.MEDIA_BUCKET);
    return c.json({
      success: true,
      data: { mediaCount: result.mediaCount, visitorId: result.visitorId }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.post("/conversations/:id/tag", async (c) => {
  try {
    const convId = c.req.param("id");
    const { tag } = await c.req.json();
    const { updateConversationTag: updateConversationTag2 } = await Promise.resolve().then(() => (init_conversations(), conversations_exports));
    await updateConversationTag2(c.env.DB, convId, tag ? tag.trim() : null);
    return c.json({ success: true, tag });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.post("/admin/conversations/batch-cleanup", async (c) => {
  try {
    const agentId = c.req.header("x-agent-id") || c.req.query("agent_id");
    if (agentId) {
      const { getAgentById: getAgentById2 } = await Promise.resolve().then(() => (init_auth(), auth_exports));
      const agent = await getAgentById2(c.env.DB, agentId);
      if (agent && agent.role !== "admin") {
        return c.json({ success: false, message: "\u6743\u9650\u4E0D\u8DB3\uFF1A\u4EC5\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u4EE5\u6267\u884C\u6279\u91CF\u6E05\u7406" }, 403);
      }
    }
    const body = await c.req.json();
    const { clean_silent, group_ids, tag_mode } = body;
    const { batchCleanupConversations: batchCleanupConversations2 } = await Promise.resolve().then(() => (init_conversations(), conversations_exports));
    const count3 = await batchCleanupConversations2(c.env.DB, c.env.MEDIA_BUCKET, {
      cleanSilent: clean_silent,
      groupIds: group_ids,
      tagMode: tag_mode
    });
    return c.json({ success: true, deleted_count: count3 });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.get("/widget/config", async (c) => {
  try {
    const brand_color = await getSystemSetting(c.env.DB, "widget_brand_color") || "#07c160";
    const position = await getSystemSetting(c.env.DB, "widget_position") || "bottom-right";
    const custom_icon = await getSystemSetting(c.env.DB, "widget_custom_icon") || "";
    const button_title = await getSystemSetting(c.env.DB, "widget_button_title") || "\u5728\u7EBF\u5BA2\u670D";
    const allowed_domains = await getSystemSetting(c.env.DB, "allowed_domains") || "";
    const widget_items_json = await getSystemSetting(c.env.DB, "widget_items_json") || "";
    const settingsMap = await getSystemSettings(c.env.DB);
    const langs = await getLanguages(c.env.DB);
    const welcome_messages = {};
    for (const lang of langs) {
      welcome_messages[lang.code] = getSettingForLang(
        settingsMap,
        "welcome_message",
        lang.code,
        ""
      );
    }
    const welcome_message = welcome_messages["zh-CN"] || welcome_messages["en"] || settingsMap.welcome_message || settingsMap.welcome_message_zh || DEFAULT_WELCOME_ZH;
    c.header("Cache-Control", "public, max-age=300, s-maxage=300");
    return c.json({
      success: true,
      data: {
        brand_color,
        position,
        custom_icon,
        button_title,
        allowed_domains,
        widget_items_json,
        welcome_message,
        welcome_messages
      }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
chatRouter.post("/visitor/ticket", async (c) => {
  try {
    const { visitor_id, visitor_name, contact, content, conversation_id, extra_fields } = await c.req.json();
    if (!content || !contact) {
      return c.json({ success: false, message: "\u8BF7\u5B8C\u6574\u586B\u5199\u8054\u7CFB\u65B9\u5F0F\u4E0E\u7559\u8A00\u5185\u5BB9" }, 400);
    }
    const name = visitor_name || "\u8BBF\u5BA2";
    const now = Date.now();
    let extraText = "";
    if (extra_fields && typeof extra_fields === "object") {
      const lines = [];
      for (const [k, v] of Object.entries(extra_fields)) {
        if (k !== "name" && k !== "contact" && k !== "content" && v) {
          lines.push(`${k}: ${Array.isArray(v) ? v.join(", ") : v}`);
        }
      }
      if (lines.length > 0) {
        extraText = `
\u3010\u6269\u5C55\u5B57\u6BB5\u3011
` + lines.join("\n");
      }
    }
    const ticketContent = `\u3010\u7559\u8A00\u4E0E\u9700\u6C42\u5DE5\u5355\u3011
\u79F0\u547C\uFF1A${name}
\u8054\u7CFB\u65B9\u5F0F\uFF1A${contact}
\u7559\u8A00\u5185\u5BB9\uFF1A${content}${extraText}`;
    if (conversation_id) {
      const msgId = "msg_" + crypto.randomUUID().slice(0, 10);
      await c.env.DB.prepare(
        `INSERT INTO messages (
          id, conversation_id, sender_type, sender_id, sender_name,
          message_type, content, status, created_at
        ) VALUES (?, ?, 'visitor', ?, ?, 'text', ?, 'sent', ?)`
      ).bind(
        msgId,
        conversation_id,
        visitor_id || "visitor",
        name,
        ticketContent,
        now
      ).run();
      await c.env.DB.prepare(
        "UPDATE conversations SET last_message_text = ?, last_message_time = ?, unread_agent_count = unread_agent_count + 1 WHERE id = ?"
      ).bind(ticketContent, now, conversation_id).run();
      try {
        const id = c.env.COORDINATOR.idFromName("global_chat_coordinator");
        const stub = c.env.COORDINATOR.get(id);
        await stub.fetch(new Request("http://coordinator/broadcast-message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: msgId,
            conversation_id,
            sender_type: "visitor",
            sender_id: visitor_id || "visitor",
            sender_name: name,
            message_type: "text",
            content: ticketContent,
            status: "sent",
            created_at: now
          })
        }));
      } catch (e) {
      }
    }
    const { dispatchLeaveMessageNotification: dispatchLeaveMessageNotification2 } = await Promise.resolve().then(() => (init_notifier(), notifier_exports));
    const notifyRes = await dispatchLeaveMessageNotification2(c.env, {
      visitor_name: name,
      contact,
      content,
      conversation_id,
      visitor_id
    });
    if (conversation_id) {
      c.executionCtx.waitUntil((async () => {
        try {
          const { askKnowledge: askKnowledge2 } = await Promise.resolve().then(() => (init_kbService(), kbService_exports));
          const { answer } = await askKnowledge2(c.env, content);
          if (answer) {
            const aiReplyText = `\u3010AI \u667A\u80FD\u9884\u7B54\u590D\u3011
\u6211\u4EEC\u5DF2\u6536\u5230\u60A8\u7684\u7559\u8A00\u5E76\u5DF2\u63D0\u9192\u4EBA\u5DE5\u5BA2\u670D\u7A0D\u540E\u8DDF\u8FDB\uFF01\u6839\u636E\u4F01\u4E1A\u77E5\u8BC6\u5E93\uFF0C\u521D\u6B65\u4E3A\u60A8\u67E5\u8BE2\u5230\u4EE5\u4E0B\u53C2\u8003\u4FE1\u606F\uFF1A

${answer}`;
            const aiMsgId = "msg_" + crypto.randomUUID().slice(0, 10);
            const aiNow = Date.now();
            await c.env.DB.prepare(
              `INSERT INTO messages (
                id, conversation_id, sender_type, sender_id, sender_name,
                message_type, content, status, created_at
              ) VALUES (?, ?, 'agent', 'ai_bot', 'AI \u667A\u80FD\u5BA2\u670D', 'text', ?, 'sent', ?)`
            ).bind(aiMsgId, conversation_id, aiReplyText, aiNow).run();
            await c.env.DB.prepare(
              "UPDATE conversations SET last_message_text = ?, last_message_time = ? WHERE id = ?"
            ).bind(aiReplyText, aiNow, conversation_id).run();
            const stub = c.env.COORDINATOR.get(c.env.COORDINATOR.idFromName("global_chat_coordinator"));
            await stub.fetch(new Request("http://coordinator/broadcast-message", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: aiMsgId,
                conversation_id,
                sender_type: "agent",
                sender_id: "ai_bot",
                sender_name: "AI \u667A\u80FD\u5BA2\u670D",
                message_type: "text",
                content: aiReplyText,
                status: "sent",
                created_at: aiNow
              })
            }));
          }
        } catch (e) {
          console.warn("Failed to generate ticket pre-reply with KB", e);
        }
      })());
    }
    return c.json({
      success: true,
      message: "\u60A8\u7684\u7559\u8A00\u5DF2\u6210\u529F\u63D0\u4EA4\uFF0C\u5BA2\u670D\u5C06\u5C3D\u5FEB\u4E0E\u60A8\u8054\u7CFB\uFF01",
      data: notifyRes
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});

// src/worker/routes/admin.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_auth();

// src/worker/db/stats.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function getDashboardStats(db) {
  const totalConvs = await db.prepare("SELECT COUNT(*) as c FROM conversations").first();
  const totalMsgs = await db.prepare("SELECT COUNT(*) as c FROM messages").first();
  const onlineAgents = await db.prepare("SELECT COUNT(*) as c FROM agents WHERE status != 'offline'").first();
  const oneDayAgo = Date.now() - 24 * 60 * 60 * 1e3;
  const recentConvs = await db.prepare("SELECT COUNT(*) as c FROM conversations WHERE created_at > ?").bind(oneDayAgo).first();
  return {
    totalConversations: totalConvs?.c || 0,
    totalMessages: totalMsgs?.c || 0,
    onlineAgents: onlineAgents?.c || 0,
    todayConversations: recentConvs?.c || 0
  };
}
__name(getDashboardStats, "getDashboardStats");

// src/worker/routes/admin.ts
init_settings();
var adminRouter = new Hono2();
async function checkAdmin(c) {
  const agentId = c.req.header("x-agent-id") || c.req.query("agent_id");
  if (!agentId)
    return true;
  const { getAgentById: getAgentById2 } = await Promise.resolve().then(() => (init_auth(), auth_exports));
  const agent = await getAgentById2(c.env.DB, agentId);
  return !agent || agent.role === "admin";
}
__name(checkAdmin, "checkAdmin");
adminRouter.get("/agents", async (c) => {
  try {
    const list = await getAllAgents(c.env.DB);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
adminRouter.post("/agents", async (c) => {
  try {
    if (!await checkAdmin(c)) {
      return c.json({ success: false, message: "\u6743\u9650\u4E0D\u8DB3\uFF1A\u4EC5\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u4EE5\u7BA1\u7406\u5750\u5E2D\u5458\u5DE5" }, 403);
    }
    const body = await c.req.json();
    const { username, password, display_name, role } = body;
    if (!username || !password || !display_name) {
      return c.json({ success: false, message: "\u8BF7\u5B8C\u6574\u586B\u5199\u5458\u5DE5\u4FE1\u606F" }, 400);
    }
    await createAgent(c.env.DB, { username, password, display_name, role });
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
adminRouter.put("/agents/:id", async (c) => {
  try {
    if (!await checkAdmin(c)) {
      return c.json({ success: false, message: "\u6743\u9650\u4E0D\u8DB3\uFF1A\u4EC5\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u4EE5\u4FEE\u6539\u5750\u5E2D\u4FE1\u606F" }, 403);
    }
    const id = c.req.param("id");
    const body = await c.req.json();
    await updateAgent(c.env.DB, id, body);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
adminRouter.delete("/agents/:id", async (c) => {
  try {
    if (!await checkAdmin(c)) {
      return c.json({ success: false, message: "\u6743\u9650\u4E0D\u8DB3\uFF1A\u4EC5\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u4EE5\u5220\u9664\u5750\u5E2D\u5458\u5DE5" }, 403);
    }
    const id = c.req.param("id");
    await deleteAgent(c.env.DB, id);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
adminRouter.get("/stats", async (c) => {
  try {
    const stats = await getDashboardStats(c.env.DB);
    return c.json({ success: true, data: stats });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
adminRouter.get("/settings", async (c) => {
  try {
    const data = await getSystemSettings(c.env.DB);
    return c.json({ success: true, data });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
adminRouter.post("/settings", async (c) => {
  try {
    if (!await checkAdmin(c)) {
      return c.json({ success: false, message: "\u6743\u9650\u4E0D\u8DB3\uFF1A\u4EC5\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u4EE5\u4FEE\u6539\u7CFB\u7EDF\u914D\u7F6E" }, 403);
    }
    const body = await c.req.json();
    await updateSystemSettings(c.env.DB, body);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
adminRouter.post("/notify/test", async (c) => {
  try {
    const { dispatchLeaveMessageNotification: dispatchLeaveMessageNotification2 } = await Promise.resolve().then(() => (init_notifier(), notifier_exports));
    const res = await dispatchLeaveMessageNotification2(c.env, {
      visitor_name: "\u6D4B\u8BD5\u5BA2\u6237 (\u7CFB\u7EDF\u8054\u901A\u6D4B\u8BD5)",
      contact: "13800000000 / test@example.com",
      content: "\u8FD9\u662F\u4E00\u6761\u6765\u81EA\u5BA2\u670D\u7BA1\u7406\u7CFB\u7EDF\u7684\u901A\u9053\u8054\u901A\u6027\u6D4B\u8BD5\u6D88\u606F\uFF0C\u5982\u679C\u60A8\u80FD\u770B\u5230\u6B64\u5185\u5BB9\uFF0C\u8BF4\u660E\u901A\u77E5\u670D\u52A1\u914D\u7F6E\u5B8C\u5168\u6B63\u5E38\uFF01"
    });
    return c.json({ success: true, data: res });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});

// src/worker/routes/i18n.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var i18nRouter = new Hono2();
i18nRouter.get("/languages", async (c) => {
  try {
    const list = await getLanguages(c.env.DB);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
i18nRouter.post("/languages", async (c) => {
  try {
    const { code, name } = await c.req.json();
    if (!code || !name) {
      return c.json({ success: false, message: "\u8BF7\u5B8C\u6574\u586B\u5199\u8BED\u8A00\u4EE3\u7801\u548C\u540D\u79F0" }, 400);
    }
    await addLanguage(c.env.DB, code.trim(), name.trim());
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
i18nRouter.delete("/languages/:code", async (c) => {
  try {
    const code = c.req.param("code");
    await deleteLanguage(c.env.DB, code);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
i18nRouter.post("/languages/:code/default", async (c) => {
  try {
    const code = c.req.param("code");
    await setDefaultLanguage(c.env.DB, code);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
i18nRouter.get("/translations", async (c) => {
  try {
    const lang = c.req.query("lang");
    const { translations, customKeys, keyDescriptions } = await getTranslations(c.env.DB, lang);
    return c.json({ success: true, data: translations, customKeys, keyDescriptions });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
i18nRouter.post("/translations", async (c) => {
  try {
    const { lang_code, translations } = await c.req.json();
    if (!lang_code || !translations) {
      return c.json({ success: false, message: "\u7F3A\u5C11\u53C2\u6570" }, 400);
    }
    await saveTranslations(c.env.DB, lang_code, translations);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
i18nRouter.post("/custom-keys", async (c) => {
  try {
    const { key, default_value, description } = await c.req.json();
    if (!key)
      return c.json({ success: false, message: "\u8BCD\u6761\u952E\u540D\u4E0D\u80FD\u4E3A\u7A7A" }, 400);
    await addCustomKey(c.env.DB, key, default_value || "", description || "");
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
i18nRouter.delete("/custom-keys/:key", async (c) => {
  try {
    const key = c.req.param("key");
    await deleteCustomKey(c.env.DB, key);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});

// src/worker/routes/upload.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var uploadRouter = new Hono2();
uploadRouter.post("/upload", async (c) => {
  try {
    const formData = await c.req.parseBody();
    const file = formData["file"];
    if (!file) {
      return c.json({ success: false, message: "\u672A\u627E\u5230\u4E0A\u4F20\u6587\u4EF6" }, 400);
    }
    const ext = file.name ? file.name.split(".").pop() || "bin" : "bin";
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "");
    const fileKey = `${today}/${crypto.randomUUID()}.${ext}`;
    const arrayBuffer = await file.arrayBuffer();
    await c.env.MEDIA_BUCKET.put(fileKey, arrayBuffer, {
      httpMetadata: {
        contentType: file.type || "application/octet-stream"
      }
    });
    const origin = new URL(c.req.url).origin;
    const url = `${origin}/media/${fileKey}`;
    return c.json({
      success: true,
      data: {
        url,
        fileKey,
        fileName: file.name,
        fileSize: file.size,
        contentType: file.type
      }
    });
  } catch (err) {
    return c.json({ success: false, message: "\u4E0A\u4F20\u5931\u8D25: " + err.message }, 500);
  }
});
uploadRouter.get("/media/*", async (c) => {
  const rawPath = c.req.path;
  const fileKey = rawPath.replace(/^\/media\//, "");
  if (!fileKey)
    return c.text("Not found", 404);
  const object = await c.env.MEDIA_BUCKET.get(fileKey);
  if (!object)
    return c.text("Media not found", 404);
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return new Response(object.body, { headers });
});

// src/worker/routes/groups.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker/db/groups.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function getGroups(db) {
  const res = await db.prepare(
    "SELECT id, name, color, created_at FROM customer_groups ORDER BY created_at ASC"
  ).all();
  return res.results || [];
}
__name(getGroups, "getGroups");
async function createGroup(db, name, color) {
  const id = "grp_" + crypto.randomUUID().slice(0, 8);
  const now = Date.now();
  const groupColor = color || "#07c160";
  await db.prepare(
    "INSERT INTO customer_groups (id, name, color, created_at) VALUES (?, ?, ?, ?)"
  ).bind(id, name, groupColor, now).run();
  return { id, name, color: groupColor, created_at: now };
}
__name(createGroup, "createGroup");
async function updateGroup(db, id, name, color) {
  await db.prepare(
    "UPDATE customer_groups SET name = ?, color = ? WHERE id = ?"
  ).bind(name, color || "#07c160", id).run();
}
__name(updateGroup, "updateGroup");
async function deleteGroup(db, id) {
  if (id === "grp_default") {
    throw new Error("\u9ED8\u8BA4\u5206\u7EC4\u4E0D\u53EF\u5220\u9664");
  }
  await db.prepare('UPDATE conversations SET group_id = "grp_default" WHERE group_id = ?').bind(id).run();
  await db.prepare("DELETE FROM customer_groups WHERE id = ?").bind(id).run();
}
__name(deleteGroup, "deleteGroup");
async function setConversationGroup(db, conversationId, groupId) {
  await db.prepare("UPDATE conversations SET group_id = ? WHERE id = ?").bind(groupId, conversationId).run();
}
__name(setConversationGroup, "setConversationGroup");

// src/worker/routes/groups.ts
var groupsRouter = new Hono2();
groupsRouter.get("/groups", async (c) => {
  try {
    const list = await getGroups(c.env.DB);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
groupsRouter.post("/groups", async (c) => {
  try {
    const { name, color } = await c.req.json();
    if (!name)
      return c.json({ success: false, message: "\u5206\u7EC4\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A" }, 400);
    const item = await createGroup(c.env.DB, name, color);
    return c.json({ success: true, data: item });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
groupsRouter.put("/groups/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { name, color } = await c.req.json();
    await updateGroup(c.env.DB, id, name, color);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
groupsRouter.delete("/groups/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await deleteGroup(c.env.DB, id);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 400);
  }
});
groupsRouter.post("/conversations/:id/group", async (c) => {
  try {
    const convId = c.req.param("id");
    const { group_id } = await c.req.json();
    if (!group_id)
      return c.json({ success: false, message: "\u8BF7\u6307\u5B9A\u5206\u7EC4" }, 400);
    await setConversationGroup(c.env.DB, convId, group_id);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});

// src/worker/routes/privateChat.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker/db/privateChat.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_crypto();
init_conversations();
async function createPrivateChat(db, title2, password, agentId, expiresHours) {
  const id = "sec_" + crypto.randomUUID().slice(0, 10);
  const now = Date.now();
  const pwdHash = await hashPassword(password);
  const expiresAt = expiresHours && expiresHours > 0 ? now + expiresHours * 3600 * 1e3 : null;
  await db.prepare(
    `INSERT INTO private_chats (
      id, title, password_hash, plain_password, agent_id, status, last_message_text, last_message_time, created_at, expires_at
    ) VALUES (?, ?, ?, ?, ?, 'active', '\u79C1\u5BC6\u4F1A\u8BDD\u5DF2\u521B\u5EFA', ?, ?, ?)`
  ).bind(
    id,
    title2,
    pwdHash,
    password,
    agentId,
    now,
    now,
    expiresAt
  ).run();
  await db.prepare(
    `INSERT INTO conversations (
      id, visitor_id, visitor_name, assigned_agent_id, group_id, status,
      unread_agent_count, unread_visitor_count, last_message_text,
      last_message_time, created_at
    ) VALUES (?, ?, ?, ?, 'grp_vip', 'active', 0, 0, '\u79C1\u5BC6\u4F1A\u8BDD\u5DF2\u521B\u5EFA', ?, ?)`
  ).bind(
    id,
    `sec_client_${id.slice(-4)}`,
    `[\u79C1\u5BC6] ${title2}`,
    agentId,
    now,
    now
  ).run();
  return {
    id,
    title: title2,
    password_hash: pwdHash,
    plain_password: password,
    agent_id: agentId,
    status: "active",
    last_message_text: "\u79C1\u5BC6\u4F1A\u8BDD\u5DF2\u521B\u5EFA",
    last_message_time: now,
    created_at: now,
    expires_at: expiresAt
  };
}
__name(createPrivateChat, "createPrivateChat");
async function verifyPrivateChatPassword(db, id, password) {
  const chat = await db.prepare("SELECT * FROM private_chats WHERE id = ?").bind(id).first();
  if (!chat) {
    return { success: false, message: "\u79C1\u5BC6\u804A\u5929\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664" };
  }
  if (chat.expires_at && chat.expires_at < Date.now()) {
    return { success: false, message: "\u8BE5\u79C1\u5BC6\u804A\u5929\u5DF2\u8FC7\u671F\u5931\u6548" };
  }
  const inputHash = await hashPassword(password);
  if (chat.password_hash !== inputHash) {
    return { success: false, message: "\u79C1\u5BC6\u8BBF\u95EE\u5BC6\u7801\u9519\u8BEF" };
  }
  return { success: true, chat };
}
__name(verifyPrivateChatPassword, "verifyPrivateChatPassword");
async function getPrivateChats(db) {
  const res = await db.prepare(
    "SELECT id, title, plain_password, agent_id, status, last_message_text, last_message_time, created_at, expires_at FROM private_chats ORDER BY created_at DESC"
  ).all();
  return res.results || [];
}
__name(getPrivateChats, "getPrivateChats");
async function deletePrivateChat(db, id, bucket) {
  await deleteConversationMediaFromR2(db, bucket, id);
  await db.prepare("DELETE FROM messages WHERE conversation_id = ?").bind(id).run();
  await db.prepare("DELETE FROM conversations WHERE id = ?").bind(id).run();
  await db.prepare("DELETE FROM private_chats WHERE id = ?").bind(id).run();
}
__name(deletePrivateChat, "deletePrivateChat");

// src/worker/routes/privateChat.ts
var privateChatRouter = new Hono2();
function privateChatEnabled(env2) {
  return Boolean((env2.PRIVATE_CHAT_DEVELOPER_KEY || "").trim());
}
__name(privateChatEnabled, "privateChatEnabled");
privateChatRouter.get("/private-chats/feature-status", async (c) => {
  return c.json({ success: true, enabled: privateChatEnabled(c.env) });
});
privateChatRouter.get("/private-chats", async (c) => {
  try {
    if (!privateChatEnabled(c.env)) {
      return c.json({ success: false, message: "\u4E13\u5C5E\u529F\u80FD\u672A\u5F00\u542F" }, 404);
    }
    const list = await getPrivateChats(c.env.DB);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
privateChatRouter.post("/private-chats", async (c) => {
  try {
    const body = await c.req.json();
    const { title: title2, password, agent_id, expires_hours } = body;
    if (!title2 || !password || !agent_id) {
      return c.json({ success: false, message: "\u8BF7\u5B8C\u6574\u586B\u5199\u79C1\u804A\u4E3B\u9898\u4E0E\u5BC6\u7801" }, 400);
    }
    const item = await createPrivateChat(c.env.DB, title2, password, agent_id, expires_hours);
    return c.json({ success: true, data: item });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
privateChatRouter.delete("/private-chats/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await deletePrivateChat(c.env.DB, id, c.env.MEDIA_BUCKET);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
privateChatRouter.post("/private-chat/verify", async (c) => {
  try {
    const { id, password } = await c.req.json();
    if (!id || !password) {
      return c.json({ success: false, message: "\u8BF7\u8F93\u5165\u4E13\u5C5E\u8BBF\u95EE\u5BC6\u7801" }, 400);
    }
    const res = await verifyPrivateChatPassword(c.env.DB, id, password);
    if (!res.success || !res.chat) {
      return c.json({ success: false, message: res.message || "\u5BC6\u7801\u9A8C\u8BC1\u5931\u8D25" }, 401);
    }
    const messages = await getMessagesByConversation(c.env.DB, id, 50);
    return c.json({
      success: true,
      data: {
        chat: res.chat,
        messages
      }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});

// src/worker/routes/crm.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker/db/crm.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function ensureCrmTables(db) {
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS crm_customers (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        contact TEXT DEFAULT NULL,
        company TEXT DEFAULT NULL,
        group_id TEXT DEFAULT NULL,
        tag TEXT DEFAULT NULL,
        stage TEXT NOT NULL DEFAULT 'lead',
        country TEXT DEFAULT NULL,
        city TEXT DEFAULT NULL,
        ip TEXT DEFAULT NULL,
        source TEXT DEFAULT 'chat',
        source_conv_id TEXT DEFAULT NULL,
        remark TEXT DEFAULT NULL,
        owner_id TEXT DEFAULT NULL,
        owner_name TEXT DEFAULT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )
    `).run();
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS crm_followups (
        id TEXT PRIMARY KEY,
        customer_id TEXT NOT NULL,
        cycle_number INTEGER DEFAULT 1,
        agent_id TEXT NOT NULL,
        agent_name TEXT NOT NULL,
        content TEXT NOT NULL,
        next_followup_time INTEGER DEFAULT NULL,
        created_at INTEGER NOT NULL
      )
    `).run();
    try {
      await db.prepare("ALTER TABLE crm_customers ADD COLUMN cycle_number INTEGER DEFAULT 1").run();
      await db.prepare("ALTER TABLE crm_customers ADD COLUMN owner_username TEXT DEFAULT NULL").run();
      await db.prepare("ALTER TABLE crm_followups ADD COLUMN cycle_number INTEGER DEFAULT 1").run();
    } catch (e) {
    }
  } catch (e) {
    console.error("Failed to ensure CRM tables", e);
  }
}
__name(ensureCrmTables, "ensureCrmTables");
async function getCrmCustomers(db, filter) {
  await ensureCrmTables(db);
  let sql = "SELECT * FROM crm_customers WHERE 1=1";
  const params = [];
  if (filter?.search) {
    const s = `%${filter.search}%`;
    sql += " AND (name LIKE ? OR contact LIKE ? OR company LIKE ? OR tag LIKE ? OR remark LIKE ?)";
    params.push(s, s, s, s, s);
  }
  if (filter?.stage && filter.stage !== "all") {
    sql += " AND stage = ?";
    params.push(filter.stage);
  }
  if (filter?.groupId && filter.groupId !== "all") {
    sql += " AND group_id = ?";
    params.push(filter.groupId);
  }
  if (filter?.ownerId && filter.ownerId !== "all") {
    sql += " AND owner_id = ?";
    params.push(filter.ownerId);
  }
  sql += " ORDER BY updated_at DESC LIMIT 200";
  let stmt = db.prepare(sql);
  if (params.length > 0) {
    stmt = stmt.bind(...params);
  }
  const res = await stmt.all();
  return res.results || [];
}
__name(getCrmCustomers, "getCrmCustomers");
async function createCrmCustomer(db, data) {
  await ensureCrmTables(db);
  const id = data.id || `crm_${crypto.randomUUID().slice(0, 10)}`;
  const now = Date.now();
  await db.prepare(`
    INSERT INTO crm_customers (
      id, name, contact, company, group_id, tag, stage, cycle_number, country, city, ip,
      source, source_conv_id, remark, owner_id, owner_name, owner_username, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id,
    data.name,
    data.contact || null,
    data.company || null,
    data.group_id || "grp_default",
    data.tag || null,
    data.stage || "lead",
    data.cycle_number || 1,
    data.country || null,
    data.city || null,
    data.ip || null,
    data.source || "chat",
    data.source_conv_id || null,
    data.remark || null,
    data.owner_id || null,
    data.owner_name || null,
    data.owner_username || null,
    now,
    now
  ).run();
  const created = await db.prepare("SELECT * FROM crm_customers WHERE id = ?").bind(id).first();
  return created;
}
__name(createCrmCustomer, "createCrmCustomer");
async function updateCrmCustomer(db, id, data) {
  await ensureCrmTables(db);
  const now = Date.now();
  const fields = [];
  const values = [];
  for (const [k, v] of Object.entries(data)) {
    if (k !== "id" && k !== "created_at" && v !== void 0) {
      fields.push(`${k} = ?`);
      values.push(v);
    }
  }
  fields.push("updated_at = ?");
  values.push(now);
  values.push(id);
  await db.prepare(`UPDATE crm_customers SET ${fields.join(", ")} WHERE id = ?`).bind(...values).run();
  return await db.prepare("SELECT * FROM crm_customers WHERE id = ?").bind(id).first();
}
__name(updateCrmCustomer, "updateCrmCustomer");
async function deleteCrmCustomer(db, id) {
  await ensureCrmTables(db);
  await db.prepare("DELETE FROM crm_followups WHERE customer_id = ?").bind(id).run();
  await db.prepare("DELETE FROM crm_customers WHERE id = ?").bind(id).run();
}
__name(deleteCrmCustomer, "deleteCrmCustomer");
async function getCrmFollowups(db, customerId, cycleNumber) {
  await ensureCrmTables(db);
  let sql = "SELECT * FROM crm_followups WHERE 1=1";
  const params = [];
  if (customerId) {
    sql += " AND customer_id = ?";
    params.push(customerId);
  }
  if (cycleNumber) {
    sql += " AND cycle_number = ?";
    params.push(cycleNumber);
  }
  sql += " ORDER BY created_at DESC LIMIT 150";
  let stmt = db.prepare(sql);
  if (params.length > 0)
    stmt = stmt.bind(...params);
  const res = await stmt.all();
  return res.results || [];
}
__name(getCrmFollowups, "getCrmFollowups");
async function createCrmFollowup(db, data) {
  await ensureCrmTables(db);
  const id = `flw_${crypto.randomUUID().slice(0, 10)}`;
  const now = Date.now();
  let cycle = data.cycle_number;
  if (!cycle) {
    const cust = await db.prepare("SELECT cycle_number FROM crm_customers WHERE id = ?").bind(data.customer_id).first();
    cycle = cust?.cycle_number || 1;
  }
  await db.prepare(`
    INSERT INTO crm_followups (
      id, customer_id, cycle_number, agent_id, agent_name, content, next_followup_time, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id,
    data.customer_id,
    cycle,
    data.agent_id,
    data.agent_name,
    data.content,
    data.next_followup_time || null,
    now
  ).run();
  if (data.new_stage) {
    await db.prepare("UPDATE crm_customers SET stage = ?, updated_at = ? WHERE id = ?").bind(data.new_stage, now, data.customer_id).run();
  } else {
    await db.prepare("UPDATE crm_customers SET updated_at = ? WHERE id = ?").bind(now, data.customer_id).run();
  }
  const created = await db.prepare("SELECT * FROM crm_followups WHERE id = ?").bind(id).first();
  return created;
}
__name(createCrmFollowup, "createCrmFollowup");
async function startNewCustomerCycle(db, customerId, agentId, agentName) {
  await ensureCrmTables(db);
  const cust = await db.prepare("SELECT * FROM crm_customers WHERE id = ?").bind(customerId).first();
  if (!cust)
    throw new Error("\u672A\u627E\u5230\u8BE5\u5BA2\u6237\u6863\u6848");
  const nextCycle = (cust.cycle_number || 1) + 1;
  const now = Date.now();
  await db.prepare("UPDATE crm_customers SET cycle_number = ?, stage = ?, updated_at = ? WHERE id = ?").bind(nextCycle, "following", now, customerId).run();
  const flwId = `flw_${crypto.randomUUID().slice(0, 10)}`;
  await db.prepare(`
    INSERT INTO crm_followups (
      id, customer_id, cycle_number, agent_id, agent_name, content, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    flwId,
    customerId,
    nextCycle,
    agentId || "system",
    agentName || "\u7CFB\u7EDF",
    `\u3010\u5F00\u542F\u7B2C ${nextCycle} \u8F6E\u6210\u4EA4\u590D\u8D2D\u5468\u671F\u3011\u8001\u5BA2\u6237\u518D\u6B21\u54A8\u8BE2\uFF0C\u5F00\u542F\u65B0\u8F6E\u6B21\u63A8\u8FDB`,
    now
  ).run();
  return await db.prepare("SELECT * FROM crm_customers WHERE id = ?").bind(customerId).first();
}
__name(startNewCustomerCycle, "startNewCustomerCycle");
async function getCrmStats(db) {
  await ensureCrmTables(db);
  const res = await db.prepare(`
    SELECT stage, COUNT(*) as count FROM crm_customers GROUP BY stage
  `).all();
  const map = { lead: 0, following: 0, quoted: 0, won: 0, lost: 0 };
  let total = 0;
  for (const r of res.results || []) {
    map[r.stage] = r.count;
    total += r.count;
  }
  return {
    total,
    lead: map.lead || 0,
    following: map.following || 0,
    quoted: map.quoted || 0,
    won: map.won || 0,
    lost: map.lost || 0
  };
}
__name(getCrmStats, "getCrmStats");

// src/worker/routes/crm.ts
init_auth();
var crmRouter = new Hono2();
crmRouter.get("/crm/customers", async (c) => {
  try {
    const search = c.req.query("search");
    const stage = c.req.query("stage");
    const groupId = c.req.query("group_id");
    const ownerId = c.req.query("owner_id");
    const list = await getCrmCustomers(c.env.DB, {
      search,
      stage,
      groupId,
      ownerId
    });
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
crmRouter.post("/crm/customers", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.name || !body.name.trim()) {
      return c.json({ success: false, message: "\u5BA2\u6237\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A" }, 400);
    }
    const customer = await createCrmCustomer(c.env.DB, {
      name: body.name.trim(),
      contact: body.contact ? body.contact.trim() : null,
      company: body.company ? body.company.trim() : null,
      group_id: body.group_id || "grp_default",
      tag: body.tag ? body.tag.trim() : null,
      stage: body.stage || "lead",
      country: body.country || null,
      city: body.city || null,
      ip: body.ip || null,
      source: body.source || "chat",
      source_conv_id: body.source_conv_id || null,
      remark: body.remark ? body.remark.trim() : null,
      owner_id: body.owner_id || null,
      owner_name: body.owner_name || null,
      owner_username: body.owner_username ? body.owner_username.trim() : null
    });
    return c.json({ success: true, data: customer });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
crmRouter.put("/crm/customers/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const updated = await updateCrmCustomer(c.env.DB, id, body);
    if (!updated) {
      return c.json({ success: false, message: "\u672A\u627E\u5230\u8BE5\u5BA2\u6237" }, 404);
    }
    return c.json({ success: true, data: updated });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
crmRouter.delete("/crm/customers/:id", async (c) => {
  try {
    const id = c.req.param("id");
    let agentId = c.req.header("x-agent-id") || c.req.query("agent_id");
    if (!agentId) {
      const authHeader = c.req.header("authorization") || "";
      if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7).trim();
        try {
          const payload = JSON.parse(atob(token.split(".")[1] || ""));
          if (payload?.id)
            agentId = payload.id;
        } catch (e) {
        }
      }
    }
    if (!agentId) {
      return c.json({ success: false, message: "\u672A\u6388\u6743\uFF1A\u8BF7\u63D0\u4F9B\u5750\u5E2D\u51ED\u8BC1" }, 401);
    }
    const agent = await getAgentById(c.env.DB, agentId);
    if (!agent || agent.role !== "admin") {
      return c.json({ success: false, message: "\u6743\u9650\u4E0D\u8DB3\uFF1A\u4EC5\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u4EE5\u5220\u9664\u5BA2\u6237\u8D44\u6599" }, 403);
    }
    await deleteCrmCustomer(c.env.DB, id);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
crmRouter.post("/crm/customers/:id/new-cycle", async (c) => {
  try {
    const id = c.req.param("id");
    const agentId = c.req.header("x-agent-id");
    let agentName = "\u5BA2\u670D";
    if (agentId) {
      const ag = await getAgentById(c.env.DB, agentId);
      if (ag)
        agentName = ag.display_name;
    }
    const updated = await startNewCustomerCycle(c.env.DB, id, agentId, agentName);
    return c.json({ success: true, data: updated });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
crmRouter.get("/crm/followups", async (c) => {
  try {
    const customerId = c.req.query("customer_id");
    const cycleStr = c.req.query("cycle_number");
    const cycleNumber = cycleStr ? Number(cycleStr) : void 0;
    const list = await getCrmFollowups(c.env.DB, customerId, cycleNumber);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
crmRouter.post("/crm/followups", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.customer_id || !body.content || !body.content.trim()) {
      return c.json({ success: false, message: "\u8BF7\u5B8C\u6574\u586B\u5199\u5173\u8054\u5BA2\u6237\u4E0E\u8DDF\u8FDB\u5185\u5BB9" }, 400);
    }
    const item = await createCrmFollowup(c.env.DB, {
      customer_id: body.customer_id,
      agent_id: body.agent_id || "system",
      agent_name: body.agent_name || "\u5BA2\u670D",
      content: body.content.trim(),
      next_followup_time: body.next_followup_time ? Number(body.next_followup_time) : null,
      new_stage: body.new_stage || void 0
    });
    return c.json({ success: true, data: item });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
crmRouter.get("/crm/stats", async (c) => {
  try {
    const stats = await getCrmStats(c.env.DB);
    return c.json({ success: true, data: stats });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});

// src/worker/routes/webhook.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_settings();
init_conversations();
var webhookRouter = new Hono2();
webhookRouter.get("/webhook/whatsapp", async (c) => {
  const mode = c.req.query("hub.mode");
  const token = c.req.query("hub.verify_token");
  const challenge = c.req.query("hub.challenge");
  const configuredToken = await getSystemSetting(c.env.DB, "whatsapp_verify_token") || "meta_im_secret";
  if (mode === "subscribe" && token === configuredToken) {
    console.log("[Meta Webhook] WhatsApp Webhook \u63E1\u624B\u6821\u9A8C\u6210\u529F\uFF01");
    return new Response(challenge, { status: 200 });
  }
  return c.text("Forbidden: Invalid verify token", 403);
});
webhookRouter.post("/webhook/whatsapp", async (c) => {
  try {
    const body = await c.req.json();
    if (body.object !== "whatsapp_business_account") {
      return c.json({ status: "ignored" }, 200);
    }
    const entries = body.entry || [];
    for (const entry of entries) {
      const changes = entry.changes || [];
      for (const change of changes) {
        if (change.field !== "messages")
          continue;
        const value = change.value || {};
        const messages = value.messages || [];
        const contacts = value.contacts || [];
        for (const msg of messages) {
          const waId = msg.from;
          const contactInfo = contacts.find((ct) => ct.wa_id === waId);
          const senderName = contactInfo?.profile?.name || `WhatsApp\u5BA2\u6237(+${waId})`;
          let content = "";
          if (msg.type === "text") {
            content = msg.text?.body || "";
          } else if (msg.type === "image") {
            content = msg.image?.caption ? `[\u56FE\u7247] ${msg.image.caption}` : "[\u56FE\u7247]";
          } else if (msg.type === "video") {
            content = "[\u89C6\u9891\u6D88\u606F]";
          } else if (msg.type === "audio") {
            content = "[\u8BED\u97F3\u7559\u8A00]";
          } else if (msg.type === "document") {
            content = `[\u6587\u6863\u9644\u4EF6] ${msg.document?.filename || ""}`;
          } else {
            content = `[${msg.type || "\u672A\u77E5"}\u6D88\u606F]`;
          }
          if (!content)
            continue;
          const conv = await getOrCreateWhatsAppConversation(c.env.DB, waId, senderName);
          await insertWhatsAppMessage(c.env.DB, conv.id, waId, senderName, content);
          console.log(`[Meta Webhook] \u6210\u529F\u63A5\u6536 WhatsApp \u7528\u6237 (+${waId}) \u7684\u65B0\u6D88\u606F\uFF1A${content}`);
        }
      }
    }
    return c.json({ status: "success" }, 200);
  } catch (err) {
    console.error("[Meta Webhook] \u5904\u7406\u6D88\u606F\u63A8\u9001\u5F02\u5E38:", err);
    return c.json({ status: "error", message: err.message }, 200);
  }
});

// src/worker/routes/forms.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker/db/forms.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function ensureFormTables(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS custom_forms (
      id TEXT PRIMARY KEY,
      key TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      allowed_domains TEXT,
      fields_json TEXT NOT NULL,
      style_config_json TEXT,
      status TEXT DEFAULT 'active',
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )
  `).run();
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS form_submissions (
      id TEXT PRIMARY KEY,
      form_key TEXT NOT NULL,
      form_id TEXT,
      visitor_id TEXT,
      data_json TEXT NOT NULL,
      ip TEXT,
      country TEXT,
      city TEXT,
      source_url TEXT,
      created_at INTEGER NOT NULL
    )
  `).run();
  try {
    await db.prepare("CREATE INDEX IF NOT EXISTS idx_custom_forms_key ON custom_forms(key)").run();
    await db.prepare("CREATE INDEX IF NOT EXISTS idx_form_subs_key ON form_submissions(form_key)").run();
  } catch (e) {
  }
}
__name(ensureFormTables, "ensureFormTables");
async function getAllCustomForms(db) {
  await ensureFormTables(db);
  const rows = await db.prepare(
    "SELECT * FROM custom_forms ORDER BY created_at DESC"
  ).all();
  if (!rows.results)
    return [];
  const forms = [];
  for (const r of rows.results) {
    const countRow = await db.prepare(
      "SELECT COUNT(id) as count FROM form_submissions WHERE form_key = ?"
    ).bind(r.key).first();
    let fields = [];
    let style = {
      primary_color: "#07c160",
      bg_color: "white",
      border_radius: "medium",
      button_text: "\u7ACB\u5373\u63D0\u4EA4",
      success_message: "\u611F\u8C22\u60A8\u7684\u63D0\u4EA4\uFF0C\u6211\u4EEC\u5DF2\u6536\u5230\u60A8\u7684\u7B54\u5377\uFF01"
    };
    try {
      fields = JSON.parse(r.fields_json);
    } catch (e) {
    }
    try {
      if (r.style_config_json)
        style = JSON.parse(r.style_config_json);
    } catch (e) {
    }
    forms.push({
      id: r.id,
      key: r.key,
      title: r.title,
      description: r.description || "",
      allowed_domains: r.allowed_domains || "",
      fields,
      style,
      status: r.status || "active",
      submissions_count: countRow?.count || 0,
      created_at: r.created_at,
      updated_at: r.updated_at
    });
  }
  return forms;
}
__name(getAllCustomForms, "getAllCustomForms");
async function getCustomFormByKey(db, key) {
  await ensureFormTables(db);
  const r = await db.prepare("SELECT * FROM custom_forms WHERE key = ?").bind(key).first();
  if (!r)
    return null;
  let fields = [];
  let style = {
    primary_color: "#07c160",
    bg_color: "white",
    border_radius: "medium",
    button_text: "\u7ACB\u5373\u63D0\u4EA4",
    success_message: "\u611F\u8C22\u60A8\u7684\u63D0\u4EA4\uFF0C\u6211\u4EEC\u5DF2\u6536\u5230\u60A8\u7684\u7B54\u5377\uFF01"
  };
  try {
    fields = JSON.parse(r.fields_json);
  } catch (e) {
  }
  try {
    if (r.style_config_json)
      style = JSON.parse(r.style_config_json);
  } catch (e) {
  }
  return {
    id: r.id,
    key: r.key,
    title: r.title,
    description: r.description || "",
    allowed_domains: r.allowed_domains || "",
    fields,
    style,
    status: r.status || "active",
    created_at: r.created_at,
    updated_at: r.updated_at
  };
}
__name(getCustomFormByKey, "getCustomFormByKey");
async function createCustomForm(db, data) {
  await ensureFormTables(db);
  const id = `form_${Date.now().toString(36)}_${crypto.randomUUID().slice(0, 4)}`;
  const now = Date.now();
  await db.prepare(`
    INSERT INTO custom_forms (
      id, key, title, description, allowed_domains,
      fields_json, style_config_json, status, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, 'active', ?, ?)
  `).bind(
    id,
    data.key,
    data.title,
    data.description || "",
    data.allowed_domains || "",
    JSON.stringify(data.fields),
    JSON.stringify(data.style),
    now,
    now
  ).run();
  return await getCustomFormByKey(db, data.key);
}
__name(createCustomForm, "createCustomForm");
async function updateCustomForm(db, id, data) {
  await ensureFormTables(db);
  const now = Date.now();
  await db.prepare(`
    UPDATE custom_forms SET
      title = ?,
      description = ?,
      allowed_domains = ?,
      fields_json = ?,
      style_config_json = ?,
      updated_at = ?
    WHERE id = ?
  `).bind(
    data.title,
    data.description || "",
    data.allowed_domains || "",
    JSON.stringify(data.fields),
    JSON.stringify(data.style),
    now,
    id
  ).run();
}
__name(updateCustomForm, "updateCustomForm");
async function deleteCustomForm(db, id) {
  await ensureFormTables(db);
  const form = await db.prepare("SELECT key FROM custom_forms WHERE id = ?").bind(id).first();
  if (form) {
    await db.prepare("DELETE FROM form_submissions WHERE form_key = ?").bind(form.key).run();
  }
  await db.prepare("DELETE FROM custom_forms WHERE id = ?").bind(id).run();
}
__name(deleteCustomForm, "deleteCustomForm");
async function getFormSubmissions(db, formKey) {
  await ensureFormTables(db);
  const rows = await db.prepare(
    "SELECT * FROM form_submissions WHERE form_key = ? ORDER BY created_at DESC LIMIT 500"
  ).bind(formKey).all();
  if (!rows.results)
    return [];
  return rows.results.map((r) => {
    let data = {};
    try {
      data = JSON.parse(r.data_json);
    } catch (e) {
    }
    return {
      id: r.id,
      form_key: r.form_key,
      form_id: r.form_id,
      visitor_id: r.visitor_id,
      data,
      ip: r.ip,
      country: r.country,
      city: r.city,
      source_url: r.source_url,
      created_at: r.created_at
    };
  });
}
__name(getFormSubmissions, "getFormSubmissions");
async function insertFormSubmission(db, data) {
  await ensureFormTables(db);
  const id = `sub_${Date.now().toString(36)}_${crypto.randomUUID().slice(0, 4)}`;
  const now = Date.now();
  await db.prepare(`
    INSERT INTO form_submissions (
      id, form_key, visitor_id, data_json, ip, country, city, source_url, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id,
    data.form_key,
    data.visitor_id || "anonymous",
    JSON.stringify(data.data),
    data.ip || "",
    data.country || "",
    data.city || "",
    data.source_url || "",
    now
  ).run();
  return id;
}
__name(insertFormSubmission, "insertFormSubmission");
async function deleteFormSubmission(db, id) {
  await ensureFormTables(db);
  await db.prepare("DELETE FROM form_submissions WHERE id = ?").bind(id).run();
}
__name(deleteFormSubmission, "deleteFormSubmission");

// src/worker/routes/forms.ts
var formsRouter = new Hono2();
function isDomainAllowed(allowedDomains, req) {
  if (!allowedDomains || !allowedDomains.trim())
    return true;
  const origin = req.header("origin") || req.header("referer") || "";
  if (!origin)
    return true;
  try {
    const host = new URL(origin).hostname.toLowerCase();
    if (host === "localhost" || host === "127.0.0.1")
      return true;
    const list = allowedDomains.split(/[\n,]+/).map((d) => d.trim().toLowerCase()).filter(Boolean);
    return list.some((d) => host === d || host.endsWith("." + d));
  } catch (e) {
    return false;
  }
}
__name(isDomainAllowed, "isDomainAllowed");
formsRouter.get("/admin/forms", async (c) => {
  try {
    const list = await getAllCustomForms(c.env.DB);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
formsRouter.post("/admin/forms", async (c) => {
  try {
    const body = await c.req.json();
    const { key, title: title2, description, allowed_domains, fields, style } = body;
    if (!key || !title2) {
      return c.json({ success: false, message: "\u8868\u5355\u540D\u79F0\u4E0E\u8C03\u7528 Key \u4E3A\u5FC5\u586B\u9879" }, 400);
    }
    const cleanedKey = key.trim().toLowerCase().replace(/[^a-z0-9_]/g, "_");
    const existing = await getCustomFormByKey(c.env.DB, cleanedKey);
    if (existing) {
      return c.json({ success: false, message: `\u8C03\u7528 Key [${cleanedKey}] \u5DF2\u5B58\u5728\uFF0C\u8BF7\u66F4\u6362` }, 400);
    }
    const created = await createCustomForm(c.env.DB, {
      key: cleanedKey,
      title: title2.trim(),
      description,
      allowed_domains,
      fields: fields || [],
      style: style || {}
    });
    return c.json({ success: true, data: created });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
formsRouter.put("/admin/forms/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { title: title2, description, allowed_domains, fields, style } = body;
    if (!title2) {
      return c.json({ success: false, message: "\u8868\u5355\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A" }, 400);
    }
    await updateCustomForm(c.env.DB, id, {
      title: title2.trim(),
      description,
      allowed_domains,
      fields: fields || [],
      style: style || {}
    });
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
formsRouter.delete("/admin/forms/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await deleteCustomForm(c.env.DB, id);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
formsRouter.get("/admin/forms/:key/submissions", async (c) => {
  try {
    const key = c.req.param("key");
    const list = await getFormSubmissions(c.env.DB, key);
    return c.json({ success: true, data: list });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
formsRouter.delete("/admin/forms/submissions/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await deleteFormSubmission(c.env.DB, id);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
formsRouter.get("/public/forms/:key", async (c) => {
  try {
    const key = c.req.param("key");
    const form = await getCustomFormByKey(c.env.DB, key);
    if (!form || form.status === "disabled") {
      return c.json({ success: false, message: "\u8BE5\u8868\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u505C\u7528" }, 404);
    }
    if (!isDomainAllowed(form.allowed_domains, c.req)) {
      return c.json({
        success: false,
        message: "\u5F53\u524D\u57DF\u540D\u672A\u83B7\u5F97\u8BE5\u5728\u7EBF\u8868\u5355\u7684\u8C03\u7528\u6388\u6743\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5B89\u5168\u57DF\u540D\u767D\u540D\u5355"
      }, 403);
    }
    return c.json({
      success: true,
      data: {
        key: form.key,
        title: form.title,
        description: form.description,
        fields: form.fields,
        style: form.style
      }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});
formsRouter.post("/public/forms/:key/submit", async (c) => {
  try {
    const key = c.req.param("key");
    const form = await getCustomFormByKey(c.env.DB, key);
    if (!form || form.status === "disabled") {
      return c.json({ success: false, message: "\u8BE5\u8868\u5355\u4E0D\u5B58\u5728\u6216\u5DF2\u505C\u7528" }, 404);
    }
    if (!isDomainAllowed(form.allowed_domains, c.req)) {
      return c.json({ success: false, message: "\u5F53\u524D\u57DF\u540D\u672A\u5728\u6388\u6743\u767D\u540D\u5355\u4E2D\uFF0C\u7981\u6B62\u63D0\u4EA4" }, 403);
    }
    const body = await c.req.json();
    const { visitor_id, data, source_url } = body;
    if (!data || typeof data !== "object") {
      return c.json({ success: false, message: "\u63D0\u4EA4\u6570\u636E\u683C\u5F0F\u9519\u8BEF" }, 400);
    }
    for (const field of form.fields) {
      if (field.required) {
        const val = data[field.key];
        if (val === void 0 || val === null || val === "" || Array.isArray(val) && val.length === 0) {
          return c.json({ success: false, message: `\u8BF7\u586B\u5199\u3010${field.label}\u3011` }, 400);
        }
      }
    }
    const ip = c.req.header("cf-connecting-ip") || c.req.header("x-real-ip") || "";
    const country = c.req.raw?.cf?.country || "";
    const city = c.req.raw?.cf?.city || "";
    const subId = await insertFormSubmission(c.env.DB, {
      form_key: key,
      visitor_id,
      data,
      ip,
      country,
      city,
      source_url: source_url || c.req.header("referer") || ""
    });
    return c.json({
      success: true,
      data: {
        id: subId,
        message: form.style?.success_message || "\u63D0\u4EA4\u6210\u529F\uFF01"
      }
    });
  } catch (err) {
    return c.json({ success: false, message: err.message }, 500);
  }
});

// src/worker/routes/cms.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker/db/cms.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker/db/cms-schema.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function ensureCmsTables(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS cms_categories (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      slug TEXT NOT NULL,
      name_json TEXT NOT NULL,
      description_json TEXT,
      cover TEXT,
      icon TEXT,
      sort_order INTEGER DEFAULT 0,
      seo_title TEXT,
      seo_description TEXT,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )
  `).run();
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS cms_articles (
      id TEXT PRIMARY KEY,
      category_id TEXT,
      slug TEXT NOT NULL,
      cover TEXT,
      author TEXT,
      reading_time INTEGER DEFAULT 1,
      status TEXT DEFAULT 'published',
      sort_order INTEGER DEFAULT 0,
      views_count INTEGER DEFAULT 0,
      seo_title TEXT,
      seo_description TEXT,
      translations_json TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )
  `).run();
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS cms_products (
      id TEXT PRIMARY KEY,
      category_id TEXT,
      slug TEXT NOT NULL,
      cover TEXT,
      images TEXT,
      price REAL DEFAULT 0,
      original_price REAL DEFAULT 0,
      price_currency TEXT DEFAULT 'CNY',
      sku TEXT,
      brand TEXT,
      availability TEXT DEFAULT 'in_stock',
      status TEXT DEFAULT 'active',
      sort_order INTEGER DEFAULT 0,
      seo_title TEXT,
      seo_description TEXT,
      translations_json TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )
  `).run();
  try {
    await db.prepare("ALTER TABLE cms_articles ADD COLUMN cover TEXT").run().catch(() => {
    });
    await db.prepare("ALTER TABLE cms_products ADD COLUMN cover TEXT").run().catch(() => {
    });
    await db.prepare("ALTER TABLE cms_products ADD COLUMN images TEXT").run().catch(() => {
    });
    await db.prepare('ALTER TABLE cms_products ADD COLUMN price_currency TEXT DEFAULT "CNY"').run().catch(() => {
    });
    await db.prepare("ALTER TABLE cms_products ADD COLUMN sku TEXT").run().catch(() => {
    });
    await db.prepare("ALTER TABLE cms_products ADD COLUMN brand TEXT").run().catch(() => {
    });
    await db.prepare('ALTER TABLE cms_products ADD COLUMN availability TEXT DEFAULT "in_stock"').run().catch(() => {
    });
    await db.prepare("CREATE INDEX IF NOT EXISTS idx_cms_categories_type ON cms_categories(type)").run();
    await db.prepare("CREATE INDEX IF NOT EXISTS idx_cms_articles_category ON cms_articles(category_id)").run();
    await db.prepare("CREATE INDEX IF NOT EXISTS idx_cms_articles_status ON cms_articles(status)").run();
    await db.prepare("CREATE INDEX IF NOT EXISTS idx_cms_products_category ON cms_products(category_id)").run();
    await db.prepare("CREATE INDEX IF NOT EXISTS idx_cms_products_status ON cms_products(status)").run();
  } catch (e) {
  }
}
__name(ensureCmsTables, "ensureCmsTables");

// src/worker/db/cms.ts
function formatCategoryRow(row, locale) {
  let nameJson = {};
  let descJson = {};
  try {
    nameJson = typeof row.name_json === "string" ? JSON.parse(row.name_json) : row.name_json || {};
  } catch {
  }
  try {
    descJson = typeof row.description_json === "string" ? JSON.parse(row.description_json) : row.description_json || {};
  } catch {
  }
  const loc = locale || "zh-CN";
  const displayName = nameJson[loc] || Object.values(nameJson)[0] || row.slug;
  const displayDesc = descJson[loc] || Object.values(descJson)[0] || "";
  return {
    id: row.id,
    type: row.type,
    slug: row.slug,
    name_json: nameJson,
    description_json: descJson,
    name: displayName,
    description: displayDesc,
    cover: row.cover || void 0,
    icon: row.icon || void 0,
    sort_order: Number(row.sort_order) || 0,
    seo_title: row.seo_title || void 0,
    seo_description: row.seo_description || void 0,
    created_at: Number(row.created_at),
    updated_at: Number(row.updated_at)
  };
}
__name(formatCategoryRow, "formatCategoryRow");
async function getCmsCategories(db, type, locale) {
  await ensureCmsTables(db);
  let sql = "SELECT * FROM cms_categories";
  const params = [];
  if (type) {
    sql += " WHERE type = ?";
    params.push(type);
  }
  sql += " ORDER BY sort_order ASC, created_at DESC";
  const res = await db.prepare(sql).bind(...params).all();
  return (res.results || []).map((r) => formatCategoryRow(r, locale));
}
__name(getCmsCategories, "getCmsCategories");
async function createCmsCategory(db, data) {
  await ensureCmsTables(db);
  const now = Date.now();
  const id = data.id || `cat_${crypto.randomUUID()}`;
  const type = data.type || "article";
  const slug = (data.slug || id).trim();
  const nameJson = JSON.stringify(data.name_json || (data.name ? { "zh-CN": data.name } : {}));
  const descJson = JSON.stringify(data.description_json || (data.description ? { "zh-CN": data.description } : {}));
  const cover = data.cover || null;
  const icon = data.icon || null;
  const sortOrder = Number(data.sort_order) || 0;
  const seoTitle = data.seo_title || null;
  const seoDesc = data.seo_description || null;
  await db.prepare(`
    INSERT INTO cms_categories (id, type, slug, name_json, description_json, cover, icon, sort_order, seo_title, seo_description, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(id, type, slug, nameJson, descJson, cover, icon, sortOrder, seoTitle, seoDesc, now, now).run();
  return formatCategoryRow({
    id,
    type,
    slug,
    name_json: nameJson,
    description_json: descJson,
    cover,
    icon,
    sort_order: sortOrder,
    seo_title: seoTitle,
    seo_description: seoDesc,
    created_at: now,
    updated_at: now
  });
}
__name(createCmsCategory, "createCmsCategory");
async function updateCmsCategory(db, id, data) {
  await ensureCmsTables(db);
  const now = Date.now();
  const updates = ["updated_at = ?"];
  const params = [now];
  if (data.slug !== void 0) {
    updates.push("slug = ?");
    params.push(data.slug.trim());
  }
  if (data.name_json !== void 0) {
    updates.push("name_json = ?");
    params.push(JSON.stringify(data.name_json));
  }
  if (data.description_json !== void 0) {
    updates.push("description_json = ?");
    params.push(JSON.stringify(data.description_json));
  }
  if (data.cover !== void 0) {
    updates.push("cover = ?");
    params.push(data.cover || null);
  }
  if (data.icon !== void 0) {
    updates.push("icon = ?");
    params.push(data.icon || null);
  }
  if (data.sort_order !== void 0) {
    updates.push("sort_order = ?");
    params.push(Number(data.sort_order) || 0);
  }
  if (data.seo_title !== void 0) {
    updates.push("seo_title = ?");
    params.push(data.seo_title || null);
  }
  if (data.seo_description !== void 0) {
    updates.push("seo_description = ?");
    params.push(data.seo_description || null);
  }
  params.push(id);
  await db.prepare(`UPDATE cms_categories SET ${updates.join(", ")} WHERE id = ?`).bind(...params).run();
}
__name(updateCmsCategory, "updateCmsCategory");
async function deleteCmsCategory(db, id) {
  await ensureCmsTables(db);
  await db.prepare("DELETE FROM cms_categories WHERE id = ?").bind(id).run();
  await db.prepare("UPDATE cms_articles SET category_id = NULL WHERE category_id = ?").bind(id).run();
  await db.prepare("UPDATE cms_products SET category_id = NULL WHERE category_id = ?").bind(id).run();
}
__name(deleteCmsCategory, "deleteCmsCategory");
function formatArticleRow(row, categoriesMap, locale) {
  let trans = {};
  try {
    trans = typeof row.translations_json === "string" ? JSON.parse(row.translations_json) : row.translations_json || {};
  } catch {
  }
  const loc = locale || "zh-CN";
  const currentTrans = trans[loc] || Object.values(trans)[0] || {};
  const coverUrl = row.cover || row.cover_image || void 0;
  const catId = row.category_id || void 0;
  return {
    id: row.id,
    category_id: catId,
    taxonomy_ids: catId ? [catId] : [],
    category: catId && categoriesMap ? categoriesMap.get(catId) : void 0,
    slug: row.slug,
    cover: coverUrl,
    title: currentTrans.title || row.slug,
    summary: currentTrans.summary || "",
    excerpt: currentTrans.excerpt || currentTrans.summary || "",
    content: currentTrans.content || "",
    author: row.author || void 0,
    reading_time: Number(row.reading_time) || 1,
    status: row.status,
    sort_order: Number(row.sort_order) || 0,
    views_count: Number(row.views_count) || 0,
    seo_title: currentTrans.seo_title || row.seo_title || void 0,
    seo_description: currentTrans.seo_description || row.seo_description || void 0,
    translations_json: trans,
    created_at: Number(row.created_at),
    updated_at: Number(row.updated_at)
  };
}
__name(formatArticleRow, "formatArticleRow");
async function getCmsArticles(db, params) {
  await ensureCmsTables(db);
  const page = Math.max(1, Number(params?.page) || 1);
  const pageSize = Math.max(1, Math.min(100, Number(params?.pageSize || params?.limit) || 20));
  const offset = (page - 1) * pageSize;
  const conditions = [];
  const sqlParams = [];
  const catId = params?.categoryId || params?.taxonomyId;
  if (catId) {
    conditions.push("category_id = ?");
    sqlParams.push(catId);
  }
  if (params?.status) {
    conditions.push("status = ?");
    sqlParams.push(params.status);
  }
  if (params?.search) {
    conditions.push("(slug LIKE ? OR translations_json LIKE ?)");
    sqlParams.push(`%${params.search}%`, `%${params.search}%`);
  }
  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
  const countRes = await db.prepare(`SELECT COUNT(id) as total FROM cms_articles ${whereClause}`).bind(...sqlParams).first();
  const total = countRes?.total || 0;
  const querySql = `
    SELECT * FROM cms_articles
    ${whereClause}
    ORDER BY sort_order ASC, created_at DESC
    LIMIT ? OFFSET ?
  `;
  const rowsRes = await db.prepare(querySql).bind(...sqlParams, pageSize, offset).all();
  const categories = await getCmsCategories(db, "article", params?.locale || params?.lang);
  const catMap = new Map(categories.map((c) => [c.id, c]));
  const list = (rowsRes.results || []).map((r) => formatArticleRow(r, catMap, params?.locale || params?.lang));
  const totalPages = total > 0 ? Math.ceil(total / pageSize) : 0;
  return {
    list,
    pages: { total, page, pageSize, totalPages }
  };
}
__name(getCmsArticles, "getCmsArticles");
async function getCmsArticleById(db, id, locale) {
  await ensureCmsTables(db);
  const row = await db.prepare("SELECT * FROM cms_articles WHERE id = ? OR slug = ?").bind(id, id).first();
  if (!row)
    return null;
  let category;
  if (row.category_id) {
    const catRow = await db.prepare("SELECT * FROM cms_categories WHERE id = ?").bind(row.category_id).first();
    if (catRow)
      category = formatCategoryRow(catRow, locale);
  }
  return formatArticleRow(row, category ? /* @__PURE__ */ new Map([[category.id, category]]) : void 0, locale);
}
__name(getCmsArticleById, "getCmsArticleById");
async function createCmsArticle(db, data) {
  await ensureCmsTables(db);
  const now = Date.now();
  const id = data.id || `art_${crypto.randomUUID()}`;
  const catId = data.category_id || data.taxonomy_ids && data.taxonomy_ids[0] || null;
  const slug = (data.slug || id).trim();
  const cover = data.cover || null;
  const author = data.author || null;
  const readingTime = Number(data.reading_time) || 1;
  const status = data.status || "published";
  const sortOrder = Number(data.sort_order) || 0;
  const seoTitle = data.seo_title || null;
  const seoDesc = data.seo_description || null;
  const transJson = JSON.stringify(data.translations_json || {});
  await db.prepare(`
    INSERT INTO cms_articles (id, category_id, slug, cover, author, reading_time, status, sort_order, views_count, seo_title, seo_description, translations_json, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?)
  `).bind(id, catId, slug, cover, author, readingTime, status, sortOrder, seoTitle, seoDesc, transJson, now, now).run();
  return formatArticleRow({
    id,
    category_id: catId,
    slug,
    cover,
    author,
    reading_time: readingTime,
    status,
    sort_order: sortOrder,
    views_count: 0,
    seo_title: seoTitle,
    seo_description: seoDesc,
    translations_json: transJson,
    created_at: now,
    updated_at: now
  });
}
__name(createCmsArticle, "createCmsArticle");
async function updateCmsArticle(db, id, data) {
  await ensureCmsTables(db);
  const now = Date.now();
  const updates = ["updated_at = ?"];
  const params = [now];
  if (data.category_id !== void 0 || data.taxonomy_ids !== void 0) {
    updates.push("category_id = ?");
    params.push(data.category_id || data.taxonomy_ids && data.taxonomy_ids[0] || null);
  }
  if (data.slug !== void 0) {
    updates.push("slug = ?");
    params.push(data.slug.trim());
  }
  if (data.cover !== void 0) {
    updates.push("cover = ?");
    params.push(data.cover || null);
  }
  if (data.author !== void 0) {
    updates.push("author = ?");
    params.push(data.author || null);
  }
  if (data.reading_time !== void 0) {
    updates.push("reading_time = ?");
    params.push(Number(data.reading_time) || 1);
  }
  if (data.status !== void 0) {
    updates.push("status = ?");
    params.push(data.status);
  }
  if (data.sort_order !== void 0) {
    updates.push("sort_order = ?");
    params.push(Number(data.sort_order) || 0);
  }
  if (data.seo_title !== void 0) {
    updates.push("seo_title = ?");
    params.push(data.seo_title || null);
  }
  if (data.seo_description !== void 0) {
    updates.push("seo_description = ?");
    params.push(data.seo_description || null);
  }
  if (data.translations_json !== void 0) {
    updates.push("translations_json = ?");
    params.push(JSON.stringify(data.translations_json));
  }
  params.push(id);
  await db.prepare(`UPDATE cms_articles SET ${updates.join(", ")} WHERE id = ?`).bind(...params).run();
}
__name(updateCmsArticle, "updateCmsArticle");
async function deleteCmsArticle(db, id) {
  await ensureCmsTables(db);
  await db.prepare("DELETE FROM cms_articles WHERE id = ?").bind(id).run();
}
__name(deleteCmsArticle, "deleteCmsArticle");
function formatProductRow(row, categoriesMap, locale) {
  let images = [];
  let trans = {};
  try {
    const rawImgs = row.images || row.images_json;
    images = typeof rawImgs === "string" ? JSON.parse(rawImgs) : rawImgs || [];
  } catch {
  }
  try {
    trans = typeof row.translations_json === "string" ? JSON.parse(row.translations_json) : row.translations_json || {};
  } catch {
  }
  const loc = locale || "zh-CN";
  const currentTrans = trans[loc] || Object.values(trans)[0] || {};
  const coverUrl = row.cover || row.cover_image || (images.length > 0 ? images[0] : void 0);
  const catId = row.category_id || void 0;
  return {
    id: row.id,
    category_id: catId,
    taxonomy_ids: catId ? [catId] : [],
    category: catId && categoriesMap ? categoriesMap.get(catId) : void 0,
    slug: row.slug,
    title: currentTrans.title || currentTrans.name || row.slug,
    cover: coverUrl,
    images,
    price: Number(row.price) || 0,
    original_price: Number(row.original_price) || 0,
    price_currency: row.price_currency || row.currency || "CNY",
    sku: row.sku || void 0,
    brand: row.brand || void 0,
    availability: row.availability || "in_stock",
    status: row.status,
    sort_order: Number(row.sort_order) || 0,
    summary: currentTrans.summary || "",
    description: currentTrans.description || "",
    spec_data: currentTrans.spec_data || currentTrans.specs || "",
    seo_title: currentTrans.seo_title || row.seo_title || void 0,
    seo_description: currentTrans.seo_description || row.seo_description || void 0,
    translations_json: trans,
    created_at: Number(row.created_at),
    updated_at: Number(row.updated_at)
  };
}
__name(formatProductRow, "formatProductRow");
async function getCmsProducts(db, params) {
  await ensureCmsTables(db);
  const page = Math.max(1, Number(params?.page) || 1);
  const pageSize = Math.max(1, Math.min(100, Number(params?.pageSize || params?.limit) || 20));
  const offset = (page - 1) * pageSize;
  const conditions = [];
  const sqlParams = [];
  const catId = params?.categoryId || params?.taxonomyId;
  if (catId) {
    conditions.push("category_id = ?");
    sqlParams.push(catId);
  }
  if (params?.status) {
    conditions.push("status = ?");
    sqlParams.push(params.status);
  }
  if (params?.search) {
    conditions.push("(slug LIKE ? OR translations_json LIKE ?)");
    sqlParams.push(`%${params.search}%`, `%${params.search}%`);
  }
  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
  const countRes = await db.prepare(`SELECT COUNT(id) as total FROM cms_products ${whereClause}`).bind(...sqlParams).first();
  const total = countRes?.total || 0;
  const querySql = `
    SELECT * FROM cms_products
    ${whereClause}
    ORDER BY sort_order ASC, created_at DESC
    LIMIT ? OFFSET ?
  `;
  const rowsRes = await db.prepare(querySql).bind(...sqlParams, pageSize, offset).all();
  const categories = await getCmsCategories(db, "product", params?.locale || params?.lang);
  const catMap = new Map(categories.map((c) => [c.id, c]));
  const list = (rowsRes.results || []).map((r) => formatProductRow(r, catMap, params?.locale || params?.lang));
  const totalPages = total > 0 ? Math.ceil(total / pageSize) : 0;
  return {
    list,
    pages: { total, page, pageSize, totalPages }
  };
}
__name(getCmsProducts, "getCmsProducts");
async function getCmsProductById(db, id, locale) {
  await ensureCmsTables(db);
  const row = await db.prepare("SELECT * FROM cms_products WHERE id = ? OR slug = ?").bind(id, id).first();
  if (!row)
    return null;
  let category;
  if (row.category_id) {
    const catRow = await db.prepare("SELECT * FROM cms_categories WHERE id = ?").bind(row.category_id).first();
    if (catRow)
      category = formatCategoryRow(catRow, locale);
  }
  return formatProductRow(row, category ? /* @__PURE__ */ new Map([[category.id, category]]) : void 0, locale);
}
__name(getCmsProductById, "getCmsProductById");
async function createCmsProduct(db, data) {
  await ensureCmsTables(db);
  const now = Date.now();
  const id = data.id || `prod_${crypto.randomUUID()}`;
  const catId = data.category_id || data.taxonomy_ids && data.taxonomy_ids[0] || null;
  const slug = (data.slug || id).trim();
  const cover = data.cover || null;
  const imagesJson = JSON.stringify(data.images || []);
  const price = Number(data.price) || 0;
  const origPrice = Number(data.original_price) || 0;
  const priceCurrency = data.price_currency || "CNY";
  const sku = data.sku || null;
  const brand = data.brand || null;
  const availability = data.availability || "in_stock";
  const status = data.status || "active";
  const sortOrder = Number(data.sort_order) || 0;
  const seoTitle = data.seo_title || null;
  const seoDesc = data.seo_description || null;
  const transJson = JSON.stringify(data.translations_json || {});
  await db.prepare(`
    INSERT INTO cms_products (id, category_id, slug, cover, images, price, original_price, price_currency, sku, brand, availability, status, sort_order, seo_title, seo_description, translations_json, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(id, catId, slug, cover, imagesJson, price, origPrice, priceCurrency, sku, brand, availability, status, sortOrder, seoTitle, seoDesc, transJson, now, now).run();
  return formatProductRow({
    id,
    category_id: catId,
    slug,
    cover,
    images: imagesJson,
    price,
    original_price: origPrice,
    price_currency: priceCurrency,
    sku,
    brand,
    availability,
    status,
    sort_order: sortOrder,
    seo_title: seoTitle,
    seo_description: seoDesc,
    translations_json: transJson,
    created_at: now,
    updated_at: now
  });
}
__name(createCmsProduct, "createCmsProduct");
async function updateCmsProduct(db, id, data) {
  await ensureCmsTables(db);
  const now = Date.now();
  const updates = ["updated_at = ?"];
  const params = [now];
  if (data.category_id !== void 0 || data.taxonomy_ids !== void 0) {
    updates.push("category_id = ?");
    params.push(data.category_id || data.taxonomy_ids && data.taxonomy_ids[0] || null);
  }
  if (data.slug !== void 0) {
    updates.push("slug = ?");
    params.push(data.slug.trim());
  }
  if (data.cover !== void 0) {
    updates.push("cover = ?");
    params.push(data.cover || null);
  }
  if (data.images !== void 0) {
    updates.push("images = ?");
    params.push(JSON.stringify(data.images));
  }
  if (data.price !== void 0) {
    updates.push("price = ?");
    params.push(Number(data.price) || 0);
  }
  if (data.original_price !== void 0) {
    updates.push("original_price = ?");
    params.push(Number(data.original_price) || 0);
  }
  if (data.price_currency !== void 0) {
    updates.push("price_currency = ?");
    params.push(data.price_currency);
  }
  if (data.sku !== void 0) {
    updates.push("sku = ?");
    params.push(data.sku || null);
  }
  if (data.brand !== void 0) {
    updates.push("brand = ?");
    params.push(data.brand || null);
  }
  if (data.availability !== void 0) {
    updates.push("availability = ?");
    params.push(data.availability);
  }
  if (data.status !== void 0) {
    updates.push("status = ?");
    params.push(data.status);
  }
  if (data.sort_order !== void 0) {
    updates.push("sort_order = ?");
    params.push(Number(data.sort_order) || 0);
  }
  if (data.seo_title !== void 0) {
    updates.push("seo_title = ?");
    params.push(data.seo_title || null);
  }
  if (data.seo_description !== void 0) {
    updates.push("seo_description = ?");
    params.push(data.seo_description || null);
  }
  if (data.translations_json !== void 0) {
    updates.push("translations_json = ?");
    params.push(JSON.stringify(data.translations_json));
  }
  params.push(id);
  await db.prepare(`UPDATE cms_products SET ${updates.join(", ")} WHERE id = ?`).bind(...params).run();
}
__name(updateCmsProduct, "updateCmsProduct");
async function deleteCmsProduct(db, id) {
  await ensureCmsTables(db);
  await db.prepare("DELETE FROM cms_products WHERE id = ?").bind(id).run();
}
__name(deleteCmsProduct, "deleteCmsProduct");

// src/worker/routes/cms.ts
var cmsRouter = new Hono2();
cmsRouter.get("/cms/categories", async (c) => {
  try {
    const type = c.req.query("type");
    const locale = c.req.query("locale") || c.req.query("lang");
    const list = await getCmsCategories(c.env.DB, type, locale);
    return c.json({ status: 200, msg: "ok", data: list }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u5206\u7C7B\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.post("/admin/cms/categories", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.slug || !body.name_json && !body.name) {
      return c.json({ status: 400, msg: "\u5206\u7C7B\u6807\u8BC6 (slug) \u4E0E\u5206\u7C7B\u540D\u79F0\u4E3A\u5FC5\u586B\u9879", data: null }, 400);
    }
    const created = await createCmsCategory(c.env.DB, body);
    return c.json({ status: 200, msg: "ok", data: created }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u521B\u5EFA\u5206\u7C7B\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.put("/admin/cms/categories/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    await updateCmsCategory(c.env.DB, id, body);
    return c.json({ status: 200, msg: "ok", data: null }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u66F4\u65B0\u5206\u7C7B\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.delete("/admin/cms/categories/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await deleteCmsCategory(c.env.DB, id);
    return c.json({ status: 200, msg: "ok", data: null }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u5220\u9664\u5206\u7C7B\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.get("/cms/articles", async (c) => {
  try {
    const categoryId = c.req.query("categoryId") || c.req.query("taxonomyId");
    const status = c.req.query("status");
    const locale = c.req.query("locale") || c.req.query("lang");
    const search = c.req.query("search");
    const page = Number(c.req.query("page")) || 1;
    const pageSize = Number(c.req.query("pageSize") || c.req.query("limit")) || 20;
    const result = await getCmsArticles(c.env.DB, { categoryId, status, locale, search, page, pageSize });
    return c.json({ status: 200, msg: "ok", data: result }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u6587\u7AE0\u5217\u8868\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.get("/cms/articles/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const locale = c.req.query("locale") || c.req.query("lang");
    const article = await getCmsArticleById(c.env.DB, id, locale);
    if (!article) {
      return c.json({ status: 404, msg: "\u6587\u7AE0\u4E0D\u5B58\u5728", data: null }, 404);
    }
    return c.json({ status: 200, msg: "ok", data: article }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u6587\u7AE0\u8BE6\u60C5\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.post("/admin/cms/articles", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.slug) {
      return c.json({ status: 400, msg: "\u6587\u7AE0\u6807\u8BC6 (slug) \u4E3A\u5FC5\u586B\u9879", data: null }, 400);
    }
    const created = await createCmsArticle(c.env.DB, body);
    return c.json({ status: 200, msg: "ok", data: created }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u521B\u5EFA\u6587\u7AE0\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.put("/admin/cms/articles/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    await updateCmsArticle(c.env.DB, id, body);
    return c.json({ status: 200, msg: "ok", data: null }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u66F4\u65B0\u6587\u7AE0\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.delete("/admin/cms/articles/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await deleteCmsArticle(c.env.DB, id);
    return c.json({ status: 200, msg: "ok", data: null }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u5220\u9664\u6587\u7AE0\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.get("/cms/products", async (c) => {
  try {
    const categoryId = c.req.query("categoryId") || c.req.query("taxonomyId");
    const status = c.req.query("status");
    const locale = c.req.query("locale") || c.req.query("lang");
    const search = c.req.query("search");
    const page = Number(c.req.query("page")) || 1;
    const pageSize = Number(c.req.query("pageSize") || c.req.query("limit")) || 20;
    const result = await getCmsProducts(c.env.DB, { categoryId, status, locale, search, page, pageSize });
    return c.json({ status: 200, msg: "ok", data: result }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u4EA7\u54C1\u5217\u8868\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.get("/cms/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const locale = c.req.query("locale") || c.req.query("lang");
    const product = await getCmsProductById(c.env.DB, id, locale);
    if (!product) {
      return c.json({ status: 404, msg: "\u4EA7\u54C1\u4E0D\u5B58\u5728", data: null }, 404);
    }
    return c.json({ status: 200, msg: "ok", data: product }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u4EA7\u54C1\u8BE6\u60C5\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.post("/admin/cms/products", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.slug) {
      return c.json({ status: 400, msg: "\u4EA7\u54C1\u6807\u8BC6 (slug) \u4E3A\u5FC5\u586B\u9879", data: null }, 400);
    }
    const created = await createCmsProduct(c.env.DB, body);
    return c.json({ status: 200, msg: "ok", data: created }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u521B\u5EFA\u4EA7\u54C1\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.put("/admin/cms/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    await updateCmsProduct(c.env.DB, id, body);
    return c.json({ status: 200, msg: "ok", data: null }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u66F4\u65B0\u4EA7\u54C1\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
cmsRouter.delete("/admin/cms/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await deleteCmsProduct(c.env.DB, id);
    return c.json({ status: 200, msg: "ok", data: null }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u5220\u9664\u4EA7\u54C1\u5931\u8D25: " + err.message, data: null }, 500);
  }
});

// src/worker/routes/kb.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_kb();
init_kbService();
init_settings();
var kbRouter = new Hono2();
function checkApiKey(c) {
  const secret = c.env.KB_API_TOKEN || c.env.ADMIN_SECURITY_CODE;
  if (!secret)
    return true;
  const authHeader = c.req.header("Authorization") || "";
  const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.substring(7).trim() : "";
  const apiKey = c.req.header("x-api-key") || c.req.query("api_key") || bearerToken;
  return apiKey === secret;
}
__name(checkApiKey, "checkApiKey");
kbRouter.post("/kb/ask", async (c) => {
  try {
    const body = await c.req.json();
    const question = body.question?.trim();
    if (!question) {
      return c.json({ status: 400, msg: "\u95EE\u9898\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A", data: null }, 400);
    }
    const history = Array.isArray(body.history) ? body.history : [];
    const result = await askKnowledge(c.env, question, history);
    return c.json({ status: 200, msg: "ok", data: result }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u77E5\u8BC6\u5E93\u95EE\u7B54\u5F02\u5E38: " + err.message, data: null }, 500);
  }
});
kbRouter.post("/kb/search", async (c) => {
  try {
    if (!checkApiKey(c)) {
      return c.json({ status: 401, msg: "\u672A\u7ECF\u6388\u6743: API Key \u65E0\u6548\u6216\u672A\u63D0\u4F9B", data: null }, 401);
    }
    const body = await c.req.json();
    const query = body.query?.trim();
    if (!query) {
      return c.json({ status: 400, msg: "\u641C\u7D22\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A", data: null }, 400);
    }
    const domains = body.domain ? [body.domain] : body.domains;
    const results = await searchKnowledge(c.env, query, {
      domains,
      relProductId: body.productId,
      topK: body.topK || 4
    });
    return c.json({ status: 200, msg: "ok", data: results }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u68C0\u7D22\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.get("/kb/products-data", async (c) => {
  try {
    if (!checkApiKey(c)) {
      return c.json({ status: 401, msg: "\u672A\u7ECF\u6388\u6743: API Key \u65E0\u6548\u6216\u672A\u63D0\u4F9B", data: null }, 401);
    }
    const search = c.req.query("search");
    const categoryId = c.req.query("categoryId");
    const lang = c.req.query("lang") || "zh-CN";
    const limit = Number(c.req.query("limit")) || 50;
    const productsRes = await getCmsProducts(c.env.DB, {
      search,
      categoryId,
      lang,
      pageSize: limit,
      status: "active"
    });
    const formattedList = productsRes.list.map((p) => ({
      id: p.id,
      title: p.title || p.slug,
      category_name: p.category?.name || void 0,
      slug: p.slug,
      price: p.price,
      price_currency: p.price_currency,
      sku: p.sku,
      brand: p.brand,
      availability: p.availability || "in_stock",
      summary: p.summary || "",
      description: p.description || "",
      specs: typeof p.spec_data === "object" ? JSON.stringify(p.spec_data) : String(p.spec_data || ""),
      cover: p.cover,
      updated_at: p.updated_at
    }));
    return c.json({ status: 200, msg: "ok", data: formattedList }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u4EA7\u54C1\u6570\u636E\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.get("/kb/products-data/:id", async (c) => {
  try {
    if (!checkApiKey(c)) {
      return c.json({ status: 401, msg: "\u672A\u7ECF\u6388\u6743: API Key \u65E0\u6548\u6216\u672A\u63D0\u4F9B", data: null }, 401);
    }
    const id = c.req.param("id");
    const lang = c.req.query("lang") || "zh-CN";
    const product = await getCmsProductById(c.env.DB, id, lang);
    if (!product) {
      return c.json({ status: 404, msg: "\u4EA7\u54C1\u672A\u627E\u5230", data: null }, 404);
    }
    const productData = {
      id: product.id,
      title: product.title || product.slug,
      category_name: product.category?.name || void 0,
      slug: product.slug,
      price: product.price,
      price_currency: product.price_currency,
      sku: product.sku,
      brand: product.brand,
      availability: product.availability || "in_stock",
      summary: product.summary || "",
      description: product.description || "",
      specs: typeof product.spec_data === "object" ? JSON.stringify(product.spec_data) : String(product.spec_data || ""),
      cover: product.cover,
      updated_at: product.updated_at
    };
    const relatedDocs = await getKbDocuments(c.env.DB, { relProductId: id });
    return c.json({
      status: 200,
      msg: "ok",
      data: {
        product: productData,
        related_knowledge: relatedDocs.map((d) => ({ id: d.id, title: d.title, content: d.content }))
      }
    }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u4EA7\u54C1\u8BE6\u60C5\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.get("/admin/kb/documents", async (c) => {
  try {
    const domain2 = c.req.query("domain");
    const search = c.req.query("search");
    const relProductId = c.req.query("productId");
    const docs = await getKbDocuments(c.env.DB, {
      domain: domain2,
      search,
      relProductId
    });
    return c.json({ status: 200, msg: "ok", data: docs }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u77E5\u8BC6\u5E93\u5217\u8868\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.get("/admin/kb/documents/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const doc = await getKbDocumentById(c.env.DB, id);
    if (!doc) {
      return c.json({ status: 404, msg: "\u6587\u6863\u4E0D\u5B58\u5728", data: null }, 404);
    }
    return c.json({ status: 200, msg: "ok", data: doc }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6\u6587\u6863\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.post("/admin/kb/documents", async (c) => {
  try {
    const body = await c.req.json();
    const { id, domain: domain2 = "support", title: title2, content, rel_product_id, tags } = body;
    if (!title2?.trim() || !content?.trim()) {
      return c.json({ status: 400, msg: "\u6587\u6863\u6807\u9898\u4E0E\u5185\u5BB9\u5747\u4E3A\u5FC5\u586B\u9879", data: null }, 400);
    }
    const docId = id || `doc_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const now = Date.now();
    const doc = {
      id: docId,
      domain: domain2,
      title: title2.trim(),
      content: content.trim(),
      rel_product_id: rel_product_id || null,
      tags_json: tags ? JSON.stringify(tags) : null,
      chunks_count: 0,
      status: "indexing",
      created_at: now,
      updated_at: now
    };
    await saveKbDocument(c.env.DB, doc);
    const indexRes = await indexDocument(c.env, doc);
    return c.json({
      status: 200,
      msg: "\u6587\u6863\u4FDD\u5B58\u6210\u529F",
      data: { id: docId, chunks_count: indexRes.chunksCount, status: indexRes.success ? "ready" : "error" }
    }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u4FDD\u5B58\u77E5\u8BC6\u5E93\u6587\u6863\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.delete("/admin/kb/documents/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const deletedVecIds = await deleteKbDocument(c.env.DB, id);
    if (c.env.VECTORIZE_INDEX && deletedVecIds.length > 0) {
      try {
        await c.env.VECTORIZE_INDEX.deleteByIds(deletedVecIds);
      } catch (e) {
        console.warn("Failed to delete vectors from Vectorize", e);
      }
    }
    return c.json({ status: 200, msg: "\u6587\u6863\u4E0E\u5411\u91CF\u5DF2\u6E05\u9664", data: { id, deleted_chunks: deletedVecIds.length } }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u5220\u9664\u6587\u6863\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.post("/admin/kb/documents/:id/reindex", async (c) => {
  try {
    const id = c.req.param("id");
    const doc = await getKbDocumentById(c.env.DB, id);
    if (!doc) {
      return c.json({ status: 404, msg: "\u6587\u6863\u4E0D\u5B58\u5728", data: null }, 404);
    }
    const indexRes = await indexDocument(c.env, doc);
    return c.json({ status: 200, msg: "\u91CD\u65B0\u7D22\u5F15\u6210\u529F", data: indexRes }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u91CD\u65B0\u7D22\u5F15\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.post("/admin/kb/test-query", async (c) => {
  try {
    const body = await c.req.json();
    const query = body.query?.trim();
    if (!query) {
      return c.json({ status: 400, msg: "\u8C03\u8BD5\u63D0\u95EE\u4E0D\u80FD\u4E3A\u7A7A", data: null }, 400);
    }
    const domains = body.domain ? [body.domain] : void 0;
    const results = await searchKnowledge(c.env, query, {
      domains,
      relProductId: body.productId,
      topK: body.topK || 5,
      minScore: 0.1
    });
    return c.json({ status: 200, msg: "ok", data: results }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u8C03\u8BD5\u67E5\u8BE2\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.post("/admin/kb/sync-from-cms", async (c) => {
  try {
    let importedCount = 0;
    const productsRes = await getCmsProducts(c.env.DB, { pageSize: 100 });
    for (const p of productsRes.list) {
      const transZh = p.translations_json?.["zh-CN"] || Object.values(p.translations_json || {})[0];
      const title2 = p.title || transZh?.title || p.slug;
      const description = transZh?.description || transZh?.summary || "";
      const spec = typeof transZh?.spec_data === "object" ? JSON.stringify(transZh.spec_data) : transZh?.spec_data || "";
      const content = `\u3010\u4EA7\u54C1\u578B\u53F7/\u540D\u79F0\u3011: ${title2}
\u3010SKU\u3011: ${p.sku || "\u9ED8\u8BA4"}
\u3010\u54C1\u724C\u3011: ${p.brand || "\u81EA\u6709\u54C1\u724C"}
\u3010\u4EF7\u683C\u3011: ${p.price} ${p.price_currency}
\u3010\u4EA7\u54C1\u4ECB\u7ECD\u3011:
${description}
${spec ? `\u3010\u89C4\u683C\u53C2\u6570\u3011:
${spec}` : ""}`;
      const docId = `cms_prod_${p.id}`;
      const doc = {
        id: docId,
        domain: "product",
        title: `\u4EA7\u54C1: ${title2}`,
        content,
        rel_product_id: p.id,
        tags_json: JSON.stringify([p.brand, p.availability].filter(Boolean)),
        chunks_count: 0,
        status: "ready",
        created_at: Date.now(),
        updated_at: Date.now()
      };
      await saveKbDocument(c.env.DB, doc);
      await indexDocument(c.env, doc);
      importedCount++;
    }
    const articlesRes = await getCmsArticles(c.env.DB, { pageSize: 100 });
    for (const a of articlesRes.list) {
      const transZh = a.translations_json?.["zh-CN"] || Object.values(a.translations_json || {})[0];
      const title2 = a.title || transZh?.title || a.slug;
      const articleContent = transZh?.content || transZh?.summary || "";
      if (!articleContent.trim())
        continue;
      const content = `\u3010\u6587\u7AE0\u6807\u9898\u3011: ${title2}
\u3010\u4F5C\u8005/\u53D1\u5E03\u3011: ${a.author || "\u4F01\u4E1A\u5B98\u65B9"}
\u3010\u6B63\u6587/\u77E5\u8BC6\u5185\u5BB9\u3011:
${articleContent}`;
      const docId = `cms_art_${a.id}`;
      const doc = {
        id: docId,
        domain: "support",
        title: `\u6587\u7AE0: ${title2}`,
        content,
        rel_product_id: null,
        tags_json: JSON.stringify(["CMS\u6587\u7AE0"]),
        chunks_count: 0,
        status: "ready",
        created_at: Date.now(),
        updated_at: Date.now()
      };
      await saveKbDocument(c.env.DB, doc);
      await indexDocument(c.env, doc);
      importedCount++;
    }
    return c.json({ status: 200, msg: `\u6210\u529F\u540C\u6B65 ${importedCount} \u6761\u5185\u5BB9\u81F3\u77E5\u8BC6\u5E93`, data: { count: importedCount } }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u4ECE CMS \u540C\u6B65\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.get("/admin/kb/ai-config", async (c) => {
  try {
    const strategy = await getSystemSetting(c.env.DB, "ai_reply_strategy") || "always";
    const systemPrompt = await getSystemSetting(c.env.DB, "ai_system_prompt") || "";
    const poolJson = await getSystemSetting(c.env.DB, "ai_model_pool");
    let modelPool = DEFAULT_MODEL_POOL;
    if (poolJson) {
      try {
        const parsed = JSON.parse(poolJson);
        if (Array.isArray(parsed) && parsed.length > 0) {
          modelPool = parsed;
        }
      } catch (e) {
      }
    }
    const ticketAutoReplyStr = await getSystemSetting(c.env.DB, "ai_ticket_auto_reply");
    const ticketAutoReply = ticketAutoReplyStr !== "false";
    return c.json({
      status: 200,
      msg: "ok",
      data: {
        strategy,
        system_prompt: systemPrompt,
        model_pool: modelPool,
        ticket_auto_reply: ticketAutoReply
      }
    }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u83B7\u53D6 AI \u914D\u7F6E\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.post("/admin/kb/ai-config", async (c) => {
  try {
    const body = await c.req.json();
    const updates = {};
    if (body.strategy) {
      updates["ai_reply_strategy"] = body.strategy;
    }
    if (body.system_prompt !== void 0) {
      updates["ai_system_prompt"] = body.system_prompt;
    }
    if (body.model_pool && Array.isArray(body.model_pool)) {
      updates["ai_model_pool"] = JSON.stringify(body.model_pool);
    }
    if (body.ticket_auto_reply !== void 0) {
      updates["ai_ticket_auto_reply"] = String(body.ticket_auto_reply);
    }
    await updateSystemSettings(c.env.DB, updates);
    return c.json({ status: 200, msg: "AI \u5BA2\u670D\u914D\u7F6E\u5DF2\u66F4\u65B0\u5E76\u5B9E\u65F6\u751F\u6548", data: null }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u4FDD\u5B58 AI \u914D\u7F6E\u5931\u8D25: " + err.message, data: null }, 500);
  }
});
kbRouter.post("/admin/kb/test-channel", async (c) => {
  try {
    const channel2 = await c.req.json();
    if (!channel2 || !channel2.model) {
      return c.json({ status: 400, msg: "\u901A\u9053\u914D\u7F6E\u4E0D\u5B8C\u6574", data: null }, 400);
    }
    const testRes = await testAiChannel(c.env, channel2);
    return c.json({ status: 200, msg: "ok", data: testRes }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "\u6D4B\u8BD5\u5F02\u5E38: " + err.message, data: null }, 500);
  }
});
kbRouter.post("/admin/kb/translate", async (c) => {
  try {
    const body = await c.req.json();
    if (!body || !body.sourceLang || !body.targetLangs || !body.fields) {
      return c.json({ status: 400, msg: "\u7F3A\u5C11\u7FFB\u8BD1\u5FC5\u8981\u53C2\u6570", data: null }, 400);
    }
    const result = await translateContentWithAi(c.env, body);
    return c.json({ status: 200, msg: "ok", data: result }, 200);
  } catch (err) {
    return c.json({ status: 500, msg: "AI \u7FFB\u8BD1\u5F02\u5E38: " + err.message, data: null }, 500);
  }
});

// src/worker/durableObject.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_conversations();
init_kbService();
init_settings();
var ChatCoordinator = class {
  ctx;
  env;
  constructor(ctx, env2) {
    this.ctx = ctx;
    this.env = env2;
  }
  async fetch(request) {
    const url = new URL(request.url);
    const upgradeHeader = request.headers.get("Upgrade");
    if (url.pathname === "/broadcast-status" && request.method === "POST") {
      try {
        const body = await request.json();
        const sockets = this.ctx.getWebSockets();
        const payload = JSON.stringify({
          type: "agent_status_change",
          data: body
        });
        for (const s of sockets) {
          try {
            s.send(payload);
          } catch (err) {
          }
        }
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500 });
      }
    }
    if (url.pathname === "/broadcast-message" && request.method === "POST") {
      try {
        const savedMsg = await request.json();
        this.broadcastToConversation(savedMsg.conversation_id, {
          type: "message",
          data: savedMsg
        });
        this.broadcastToAgents({
          type: "conversation_update",
          data: {
            conversation_id: savedMsg.conversation_id,
            last_message: savedMsg
          }
        });
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500 });
      }
    }
    if (url.pathname === "/broadcast-deleted" && request.method === "POST") {
      try {
        const body = await request.json();
        if (body.conversation_id) {
          this.broadcastToConversation(body.conversation_id, {
            type: "conversation_deleted",
            data: {
              conversation_id: body.conversation_id,
              clear_identity: body.clear_identity !== false
            }
          });
        }
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500 });
      }
    }
    if (upgradeHeader !== "websocket") {
      return new Response("Expected WebSocket upgrade", { status: 426 });
    }
    const role = url.searchParams.get("role") || "visitor";
    const conversationId = url.searchParams.get("cid") || "";
    const userId = url.searchParams.get("uid") || "";
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);
    const tags = [`role:${role}`];
    if (conversationId) {
      tags.push(`cid:${conversationId}`);
    }
    if (userId) {
      tags.push(`uid:${userId}`);
    }
    this.ctx.acceptWebSocket(server, tags);
    server.send(JSON.stringify({
      type: "init",
      data: {
        status: "connected",
        role,
        conversationId,
        serverTime: Date.now()
      }
    }));
    return new Response(null, {
      status: 101,
      webSocket: client
    });
  }
  /**
   * 当收到客户端 WebSocket 消息时触发
   */
  async webSocketMessage(ws, rawMessage) {
    try {
      const text = typeof rawMessage === "string" ? rawMessage : new TextDecoder().decode(rawMessage);
      const packet = JSON.parse(text);
      if (packet.type === "message") {
        const msgPayload = packet.data;
        if (!msgPayload || !msgPayload.conversation_id || !msgPayload.content) {
          return;
        }
        const cid = msgPayload.conversation_id;
        const needsEnsure = !cid || cid.startsWith("pending_") || !await this.env.DB.prepare("SELECT id FROM conversations WHERE id = ?").bind(cid).first();
        if (needsEnsure) {
          if (msgPayload.sender_type !== "visitor" || !msgPayload.sender_id) {
            try {
              ws.send(
                JSON.stringify({
                  type: "error",
                  data: { code: "conversation_not_found", conversation_id: cid }
                })
              );
            } catch {
            }
            return;
          }
          const { conversation } = await getOrCreateConversation(
            this.env.DB,
            msgPayload.sender_id,
            msgPayload.sender_name
          );
          const replaced = conversation.id !== cid;
          msgPayload.conversation_id = conversation.id;
          if (replaced) {
            try {
              ws.send(
                JSON.stringify({
                  type: "session_replaced",
                  data: { conversation, reason: "conversation_missing" }
                })
              );
            } catch {
            }
          }
        }
        const savedMsg = await insertMessage(this.env.DB, msgPayload);
        this.broadcastToConversation(savedMsg.conversation_id, {
          type: "message",
          data: savedMsg
        });
        this.broadcastToAgents({
          type: "conversation_update",
          data: {
            conversation_id: savedMsg.conversation_id,
            last_message: savedMsg
          }
        });
        if (savedMsg.sender_type === "visitor" && savedMsg.message_type === "text") {
          this.ctx.waitUntil((async () => {
            try {
              const strategy = await getSystemSetting(this.env.DB, "ai_reply_strategy") || "always";
              if (strategy === "disabled")
                return;
              const isExplicitAi = savedMsg.content.toLowerCase().startsWith("@ai");
              let shouldTrigger = false;
              if (isExplicitAi) {
                shouldTrigger = true;
              } else if (strategy === "always") {
                shouldTrigger = true;
              } else if (strategy === "offline_only") {
                const onlineRes = await this.env.DB.prepare(
                  "SELECT count(1) as count FROM agents WHERE status = 'online'"
                ).first();
                const hasOnlineAgent = (onlineRes?.count || 0) > 0;
                const agentSockets = this.ctx.getWebSockets("role:agent");
                const hasRealAgent = hasOnlineAgent && agentSockets.length > 0;
                shouldTrigger = !hasRealAgent;
              }
              if (shouldTrigger) {
                const queryText = savedMsg.content.replace(/^@ai\s*/i, "").trim();
                if (!queryText)
                  return;
                const recentMsgs = await getMessagesByConversation(this.env.DB, savedMsg.conversation_id, 4);
                const convHistory = recentMsgs.reverse().map((m) => ({
                  role: m.sender_type === "visitor" ? "user" : "assistant",
                  content: m.content
                }));
                const { answer } = await askKnowledge(this.env, queryText, convHistory);
                if (answer) {
                  const aiMsgPayload = {
                    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
                    conversation_id: savedMsg.conversation_id,
                    sender_type: "agent",
                    sender_id: "ai_bot",
                    sender_name: "AI \u667A\u80FD\u5BA2\u670D",
                    message_type: "text",
                    content: answer,
                    status: "sent",
                    created_at: Date.now()
                  };
                  const savedAiMsg = await insertMessage(this.env.DB, aiMsgPayload);
                  this.broadcastToConversation(savedAiMsg.conversation_id, {
                    type: "message",
                    data: savedAiMsg
                  });
                  this.broadcastToAgents({
                    type: "conversation_update",
                    data: {
                      conversation_id: savedAiMsg.conversation_id,
                      last_message: savedAiMsg
                    }
                  });
                }
              }
            } catch (e) {
              console.warn("Failed to auto answer with KB RAG", e);
            }
          })());
        }
      } else if (packet.type === "read") {
        const { conversation_id, by } = packet.data || {};
        if (conversation_id && by) {
          await markConversationAsRead(this.env.DB, conversation_id, by);
          this.broadcastToConversation(conversation_id, {
            type: "read",
            data: { conversation_id, by }
          });
        }
      } else if (packet.type === "call_invite" || packet.type === "call_accept" || packet.type === "call_reject" || packet.type === "call_hangup" || packet.type === "webrtc_offer" || packet.type === "webrtc_answer" || packet.type === "webrtc_ice") {
        const convId = packet.data?.conversation_id;
        if (convId) {
          this.broadcastToConversation(convId, packet);
        }
      } else if (packet.type === "pong") {
      }
    } catch (err) {
      console.error("Error handling websocket message:", err);
    }
  }
  /**
   * 当 WebSocket 连接关闭时触发
   */
  async webSocketClose(ws, code, reason, wasClean) {
    ws.close(code, reason);
  }
  /**
   * 当 WebSocket 出现错误时触发
   */
  async webSocketError(ws, error3) {
    console.error("WebSocket error:", error3);
  }
  /**
   * 向指定会话的所有活跃连接广播数据包
   */
  broadcastToConversation(conversationId, packet) {
    const sockets = this.ctx.getWebSockets(`cid:${conversationId}`);
    const payload = JSON.stringify(packet);
    for (const ws of sockets) {
      try {
        ws.send(payload);
      } catch (e) {
        console.warn("Failed to send to client socket:", e);
      }
    }
  }
  /**
   * 向所有在线客服连接广播数据包
   */
  broadcastToAgents(packet) {
    const sockets = this.ctx.getWebSockets("role:agent");
    const payload = JSON.stringify(packet);
    for (const ws of sockets) {
      try {
        ws.send(payload);
      } catch (e) {
        console.warn("Failed to send to agent socket:", e);
      }
    }
  }
};
__name(ChatCoordinator, "ChatCoordinator");

// src/worker/index.ts
var app = new Hono2();
app.use("*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization", "X-Requested-With", "x-agent-id", "x-developer-key"]
}));
app.route("/api/auth", authRouter);
app.route("/api", chatRouter);
app.route("/api/admin", adminRouter);
app.route("/api", adminRouter);
app.route("/api/i18n", i18nRouter);
app.route("/api/admin/i18n", i18nRouter);
app.route("/api", groupsRouter);
app.route("/api/admin", groupsRouter);
app.route("/api", privateChatRouter);
app.route("/api/admin", privateChatRouter);
app.route("/api", crmRouter);
app.route("/api/admin", crmRouter);
app.route("/api", webhookRouter);
app.route("/api", formsRouter);
app.route("/api", cmsRouter);
app.route("/api/admin", cmsRouter);
app.route("/api", kbRouter);
app.route("/api/admin", kbRouter);
app.route("/api", uploadRouter);
app.route("/", uploadRouter);
app.all("/ws", async (c) => {
  const id = c.env.COORDINATOR.idFromName("global_chat_coordinator");
  const stub = c.env.COORDINATOR.get(id);
  return stub.fetch(c.req.raw);
});
app.get("*", async (c) => {
  const url = new URL(c.req.url);
  const path = url.pathname;
  if (!c.env.ASSETS) {
    return c.text("Not found", 404);
  }
  if (path === "/admin-console.html" || path === "/admin-console") {
    return c.text("Not found", 404);
  }
  if (path.startsWith("/admin")) {
    const secret = (c.env.ADMIN_PATH_SECRET || "").trim();
    if (!secret) {
      return c.text("Not found", 404);
    }
    const validAdminPath = `/admin-${secret}`;
    if (path !== validAdminPath && !path.startsWith(validAdminPath + "/")) {
      return c.text("Not found", 404);
    }
    const adminPage = await c.env.ASSETS.fetch(new Request(new URL("/admin-console.html", url)));
    return new Response(adminPage.body, {
      status: adminPage.status,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  }
  if (path === "/private-chat") {
    const privatePage = await c.env.ASSETS.fetch(new Request(new URL("/private-chat.html", url)));
    return new Response(privatePage.body, {
      status: privatePage.status,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  }
  if (path === "/static-test" || path === "/static-test.html") {
    const testPage = await c.env.ASSETS.fetch(new Request(new URL("/static-test.html", url)));
    if (testPage.status === 200) {
      return new Response(testPage.body, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }
  }
  const landingMap = {
    "/": "/index.html",
    "/index.html": "/index.html",
    "/en": "/en/index.html",
    "/en/": "/en/index.html",
    "/zh-TW": "/zh-TW/index.html",
    "/zh-TW/": "/zh-TW/index.html",
    "/ja": "/ja/index.html",
    "/ja/": "/ja/index.html"
  };
  const landingAsset = landingMap[path];
  if (landingAsset) {
    const page = await c.env.ASSETS.fetch(new Request(new URL(landingAsset, url)));
    if (page.status === 200) {
      return new Response(page.body, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-cache, no-store, must-revalidate"
        }
      });
    }
    return c.text("Not found", 404);
  }
  const assetRes = await c.env.ASSETS.fetch(c.req.raw);
  if (assetRes.status !== 404) {
    return assetRes;
  }
  return c.text("Not found", 404);
});
var worker_default = app;
export {
  ChatCoordinator,
  worker_default as default
};
//# sourceMappingURL=index.js.map
