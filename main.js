/*
 * "Hello {1}, good {2}".pReplace(["Juan", "morning"]) -> "Hello Juan good morning"
 */

String.prototype.pReplace = function(params) {
        var ret = this;
        
        for (var i = 1; i < params.length+1; i++) {
                var re = new RegExp('{(' + i + ')}',"g");
                ret = ret.replace(re, params[i-1]);
        }
        
        return ret;
};