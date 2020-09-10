(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.s3_phone1 = function() {
	this.initialize(img.s3_phone1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,778,1256);


(lib.s3_phone2 = function() {
	this.initialize(img.s3_phone2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,778,1234);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.s3_phone2();
	this.instance.setTransform(-389,-412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389,-412,778,1234);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer_1_copy
	this.instance = new lib.s3_phone1();
	this.instance.setTransform(-389,-412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.0612,skewY:19.0003,x:-390.2,y:-546.3},0).wait(1).to({scaleX:0.9887,scaleY:0.9329,skewY:27.0396,x:-342.4,y:-559.05},0).wait(1).to({scaleX:0.8486,scaleY:0.801,skewY:49.1078,x:-215.95,y:-579.35},0).wait(1).to({scaleX:0.7595,scaleY:0.7162,skewY:78.1803,x:-60.45,y:-584},0).wait(1).to({scaleX:0.7097,scaleY:0.6694,skewY:82.2309,x:-37.25,y:-549.05},0).to({_off:true},1).wait(7));

	// Layer_2_copy
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(0,0,0.5397,0.5402,0,0,-98.7686);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regY:0.2,scaleX:0.8295,scaleY:0.8314,skewY:-79.2376,y:99.8},0).wait(1).to({regY:0,scaleX:0.7791,scaleY:0.7808,skewY:-68.203,y:62.15},0).wait(1).to({scaleX:0.7688,scaleY:0.77,skewY:-54.1236,y:32.5},0).wait(1).to({scaleX:0.8487,scaleY:0.8512,skewY:-32.0662,y:-12.5},0).wait(1).to({scaleX:1,scaleY:1,skewY:-23.0008,y:15},0).wait(1).to({scaleX:0.9999,skewY:-10.0013,y:0},0).wait(1).to({scaleX:1,skewY:0,y:4.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.2,-584,780.5999999999999,1684);


// stage content:
(lib._778x824 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(389,412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(389,412,389,844);
// library properties:
lib.properties = {
	id: '8FABA3E2F99A5640ABDD04D752BF02D5',
	width: 778,
	height: 824,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/images/joy-2-plus/s3_phone1.png?1593155826306", id:"s3_phone1"},
		{src:"/images/joy-2-plus/s3_phone2.png?1593155826306", id:"s3_phone2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8FABA3E2F99A5640ABDD04D752BF02D5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;