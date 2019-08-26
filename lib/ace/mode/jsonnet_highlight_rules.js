/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var JsonHighlightRules = function() {

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used
    this.$rules = {
        "start" : [
            {
                token: 'constant.numeric',
                regex: "\\b(\\d+([Ee][+-]?\\d+)?)\\b"
            }, {
                token: 'constant.numeric',
                regex: "\\b\\d+[.]\\d*\([Ee][+-]?\\d+)?\\b"
            }, {
                token: 'constant.numeric',
                regex: "\\b[.]\\d+([Ee][+-]?\\d+)?\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.]is(String|Number|Boolean|Object|Array|Function)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](acos|asin|atan|ceil|char|codepoint|cos|exp|exponent)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](filter|floor|force|length|log|makeArray|mantissa|sign)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](objectFields(All)?|objectHas(All)?|equals|prune)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](pow|sin|sqrt|tan|type|max|min|mod|thisFile)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](abs|assertEqual|escapeString(Bash|Dollars|Json|Python))\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](filterMap|flattenArrays|foldl|foldr|format|join)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](mapWithIndex|mapWithKey|deepJoin|mergePatch)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.]manifest(Ini|Python(Vars)?|Json(Ex)?|Yaml(Doc|Stream)|XmlJsonml)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](lines|map|find|findSubstr|splitLimit|strReplace|ascii(Upper|Lower))\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](set|set(Diff|Inter|Member|Union)|sort|resolvePath)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.]base64(Decode(Bytes)?)?\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](split|stringChars|substr|toString|startsWith|endsWith)\\b"
            }, {
                token: 'support.function',
                regex: "\\bstd[.](parseInt|parseOctal|parseHex|range|uniq|slice|count)\\b"
            }, {
                token: 'variable.language',
                regex: "\\b[$]\\b"
            }, {
                token: 'string.double',
                regex: "\"",
                next: 'string.double'
            }, {
                token: 'string.single',
                regex: "'",
                next: 'string.single'
            }, {
                token: 'comment.block',
                regex: "/\\*",
                next: 'comment.block'
            }, {
                token: 'comment.line',
                regex: "//.*$"
            }, {
                token: 'comment.block',
                regex: "#.*$"
            }, {
                token: 'entity.name.function',
                regex: "\\b[a-zA-Z_][a-z0-9A-Z_]*\\s*(\\([^)]*\\))?\\s*\\+?::?:?"
            }, {
                token: 'storage.type',
                regex: "\\b(import|importstr)\\b"
            }, {
                token: 'keyword.other',
                regex: "\\b(function)\\b"
            }, {
                token: 'variable.language',
                regex: "\\b(self|super)\\b"
            }, {
                token: 'keyword.control',
                regex: "\\b(if|then|else|for|in)\\b"
            }, {
                token: 'keyword.other',
                regex: "\\b(local|tailstrict)\\b"
            }, {
                token: 'constant.language',
                regex: "\\b(true|false|null)\\b"
            }, {
                token: 'keyword.control',
                regex: "\\b(error|assert)\\b"
            }
        ],
        "string.double" : [
            {
                token: 'constant.character.escape',
                regex: "\\\\['\"\\\\/bfnrt]"
            }, {
                token: 'constant.character.escape',
                regex: "\\\\u[0-9a-fA-F]{4}"
            }, {
                token: 'string.double',
                regex: "\"",
                next: 'start'
            }, {
                token: 'invalid.illegal',
                regex: "\\\\[^'\"\\\\/bfnrtu]"
            }, {
                defaultToken : "string.double"
            }
        ],
        "string.single" : [
            {
                token: 'constant.character.escape',
                regex: "\\\\['\"\\\\/bfnrt]"
            }, {
                token: 'constant.character.escape',
                regex: "\\\\u[0-9a-fA-F]{4}"
            }, {
                token: 'string.single',
                regex: "'",
                next: 'start'
            }, {
                token: 'invalid.illegal',
                regex: "\\\\[^'\"\\\\/bfnrtu]"
            }, {
                defaultToken : "string.single"
            }
        ],
        "comment.block": [
            {
                token: 'comment.block',
                regex: "\\*/",
                next: 'start'
            }, {
                defaultToken : "comment.block"
            }
        ]
    };
    
};

oop.inherits(JsonHighlightRules, TextHighlightRules);

exports.JsonHighlightRules = JsonHighlightRules;
});
