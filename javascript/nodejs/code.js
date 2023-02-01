const isSecure = process.argv[2] === "true";
const http = { host: "http://", request: () => console.log("http") };
const https = { host: "https://", request: () => console.log("https") };

(isSecure ? https : http).request(); // 소괄호 표현식 알아보자

// 배열 지렸고
["open", "error", "message"].forEach(function (method) {
    // definePropery 명시적이라 보기 좋다.
    Object.defineProperty(isSecure ? https : http, "on" + method, {
        /**
         * Returns the current listener
         *
         * @return {Mixed} the set function or undefined
         * @api private
         */
        get: function get() {
            var listener = this.listeners(method)[0];
            return listener
                ? listener._listener
                    ? listener._listener
                    : listener
                : undefined;
        },

        /**
         * Start listening for events
         *
         * @param {Function} listener the listener
         * @return {Mixed} the set function or undefined
         * @api private
         */
        set: function set(listener) {
            this.removeAllListeners(method);
            this.addEventListener(method, listener);
        },
    });
});
console.log();
// https://github.dev/EventSource/eventsource/blob/master/lib/eventsource.js
