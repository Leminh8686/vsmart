var cameraRoot, cpuRoot,cpuRootMb, fingerRoot,fingerRootMb;
function cameraCanvas() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvasCamera");
        anim_container = document.getElementById("containerCamera");
        dom_overlay_container = document.getElementById("overlayCamera");
        var comp = AdobeAn.getComposition("9269E41F9E0B9642A40D534A97CB0EBB");
        
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        cameraRoot = exportRoot = new lib._1073x690();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().parent().width(), ih = $(anim_container).parent().parent().height();
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', false, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
    
    init();
}

function cpuCanvas() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvasCPU");
        anim_container = document.getElementById("animation_containerCPU");
        dom_overlay_container = document.getElementById("dom_overlay_containerCPU");
        var comp = AdobeAn.getComposition("33E8FA03B87CBC48B17002912EB85E0C");
        
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        cpuRoot = exportRoot = new lib._1920x948();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(".s2-phone").width(), ih = $(".s2-phone").height();
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', false, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
    
    init();
}
function cpuCanvasMb() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvasCPUMB");
        anim_container = document.getElementById("animation_containerCPUMB");
        dom_overlay_container = document.getElementById("dom_overlay_containerCPUMB");
        var comp = AdobeAn.getComposition("00E5F0212051EF4C868D4D47E0470310");
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        cpuRootMb= exportRoot = new lib._1080x1240();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(".s2-phone").width(), ih = $(".s2-phone").height();
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', false, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
    init();
}
function batteryCanvas() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvasBattery");
        anim_container = document.getElementById("animation_containerBattery");
        dom_overlay_container = document.getElementById("dom_overlay_containerBattery");
        var comp = AdobeAn.getComposition("37A5136E39BC744BBEE958D360EF9BA2");
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        exportRoot = new lib._336x598();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().parent().width(), ih = $(anim_container).parent().parent().height();
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', false, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
    init();
}
function fingerCanvas() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvasFinger");
        anim_container = document.getElementById("animation_containerFinger");
        dom_overlay_container = document.getElementById("dom_overlay_containerFinger");
        var comp = AdobeAn.getComposition("5F5A27E9E01649478F9BC419C3269E20");
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        fingerRoot = exportRoot = new lib._700x852();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().parent().width(), ih = $(anim_container).parent().parent().height();
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', false, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
    init()
}
function fingerCanvasMb() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvasFingerMb");
        anim_container = document.getElementById("animation_containerFingerMb");
        dom_overlay_container = document.getElementById("dom_overlay_containerFingerMb");
        var comp=AdobeAn.getComposition("5F5A27E9E01649478F9BC419C3269E21");
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        fingerRootMb = exportRoot = new lib._700x852mobile();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().parent().width(), ih = $(anim_container).parent().parent().height();
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', false, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
    init()
}
