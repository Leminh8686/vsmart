var lightRoot,lightRootMB, cameraRoot, AIRoot, batteryRoot;

function lightCanvas() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        if (!isMobile) {
            canvas = document.getElementById("canvasLight");
            anim_container = document.getElementById("animation_containerLight");
            dom_overlay_container = document.getElementById("dom_overlay_containerLight");
        }
        else {
            canvas = document.getElementById("canvasLightMB");
            anim_container = document.getElementById("animation_containerLightMB");
            dom_overlay_container = document.getElementById("dom_overlay_containerLightMB");
        }
        var comp = AdobeAn.getComposition("C6F48760517DB743B453F20C2FA1AB8C");
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
        lightRoot = exportRoot = new lib._1917x640();
        stage = new lib.Stage(canvas);
        stage.enableMouseOver();
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().width(), ih = $(anim_container).parent().height();
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
function lightCanvasMB() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {

        canvas = document.getElementById("canvasLightMB");
        anim_container = document.getElementById("animation_containerLightMB");
        dom_overlay_container = document.getElementById("dom_overlay_containerLightMB");

        var comp = AdobeAn.getComposition("59D9F8BCCF4EC44FBD025036B50C8162");
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
        lightRootMB = exportRoot = new lib._1080x640();
        stage = new lib.Stage(canvas);
        stage.enableMouseOver();
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().width(), ih = $(anim_container).parent().height();
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
function cameraCanvas() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvasCamera");
        anim_container = document.getElementById("animation_containerCamera");
        dom_overlay_container = document.getElementById("dom_overlay_containerCamera");
        var comp = AdobeAn.getComposition("8FABA3E2F99A5640ABDD04D752BF02D5");
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
        cameraRoot = exportRoot = new lib._778x824();
        stage = new lib.Stage(canvas);
        stage.enableMouseOver();
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().width(), ih = $(anim_container).parent().height();
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
function aiCanvas() {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvasAI");
        anim_container = document.getElementById("animation_containerAI");
        dom_overlay_container = document.getElementById("dom_overlay_containerAI");
        var comp = AdobeAn.getComposition("E1143E006091C646BEA7525012A0ED40");
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
        AIRoot = exportRoot = new lib._468x647();
        stage = new lib.Stage(canvas);
        stage.enableMouseOver();
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().width(), ih = $(anim_container).parent().height();
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
        var comp = AdobeAn.getComposition("7FF4052296BA8C4E957D97145C51DAC8");
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
        batteryRoot = exportRoot = new lib._816x664();
        stage = new lib.Stage(canvas);
        stage.enableMouseOver();
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = $(anim_container).parent().width(), ih = $(anim_container).parent().height();
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
