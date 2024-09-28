Java.perform(function() {
    var DexClassLoader = Java.use('dalvik.system.DexClassLoader');
    
    var strClass = 'java.lang.String';

    DexClassLoader.$init.overload(strClass,strClass,strClass, 'java.lang.ClassLoader').implementation = function(path, dir, arg3, arg4) {
        console.log("[*] DexClassLoader constructor called!");
        console.log("dexPath: " + path);
        console.log("optimizedDirectory: " + dir);

        var Thread = Java.use('java.lang.Thread');
        var currentThread = Thread.currentThread();
        var stackTrace = currentThread.getStackTrace();
        console.log("[*] Call stack:");

        for (var i = 0; i < stackTrace.length; i++) {
            var st = stackTrace[i].toString();
            if (st.includes("gohcthplmgmyrcnhcgsxtysyue")){
            	console.log(st);
            }
        }

        return this.$init(path, dir, arg3, arg4);
    };
});

