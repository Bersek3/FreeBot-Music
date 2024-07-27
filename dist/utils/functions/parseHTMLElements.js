/* eslint-disable unicorn/filename-case */ export var escapedHTMLElements = {
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "/": "&#x2F;",
    "<": "&lt;",
    "=": "&#x3D;",
    ">": "&gt;",
    "`": "&#x60;"
};
export function parseHTMLElements(text) {
    var res = text;
    var sortedElements = Object.keys(escapedHTMLElements).sort(function(a, b) {
        if (a === "&") return 1;
        if (b === "&") return -1;
        return 0;
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = sortedElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            res = res.replaceAll(new RegExp(escapedHTMLElements[key], "gu"), key);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return res;
}
