function getUrlParam(sUrl, sKey) {
    var param = sUrl.split('#')[0].split('?')[1];
    if(sKey){
        var arr = [];
        var keys = param.split('&');
        for(var key of keys){
            if(key.split('=')[0]==sKey){
                arr.push(key.split('=')[1])
            }
        }
        if(arr.length==0)
            return ""
        else if(arr.length==1)
            return arr[0]
        else 
            return arr;
    }else{
        if(param==undefined || param=="")
            return {}
        else{
                var keys = param.split('&');
                var obj = {};
            for(var key of keys){
                var name = keys.split('=')[0];
                var value = keys.split('=')[1];
                if(!obj.hasOwnProperty(name)){
                    obj[name] = [];
                }
                obj[name].push(value);
            }
            return obj;
         }
    }
}