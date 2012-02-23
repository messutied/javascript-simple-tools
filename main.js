String.prototype.pReplace = function(params) {
        var ret = this;
        
        for (var i = 1; i < params.length+1; i++) {
                var re = new RegExp('{(' + i + ')}',"g");
                ret = ret.replace(re, params[i-1]);
        }
        
        return ret;
};