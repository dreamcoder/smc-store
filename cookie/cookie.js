"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookie = void 0;
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Cookie.get = function (name) {
        var arr;
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if ((arr = document.cookie.match(reg))) {
            return decodeURIComponent(arr[2]);
        }
        else {
            return '';
        }
    };
    Cookie.set = function (name, value, options) {
        var tempWindow = window;
        var cookieStr = tempWindow.escape(name) + '=' + tempWindow.escape(value) + ';';
        if (!options) {
            options = {};
        }
        if (options.expires) {
            var dtExpires = new Date(new Date().getTime() + options.expires * 1000 * 60 * 60 * 24);
            cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
        }
        if (options.path) {
            cookieStr += 'path=' + options.path + ';';
        }
        if (options.domain) {
            cookieStr += 'domain=' + options.domain + ';';
        }
        document.cookie = cookieStr;
    };
    Cookie.delete = function (name, options) {
        if (Cookie.get(name)) {
            if (!options) {
                options = {};
            }
            options.expires = -1;
            Cookie.set(name, '', options);
        }
    };
    return Cookie;
}());
exports.Cookie = Cookie;
//# sourceMappingURL=cookie.js.map