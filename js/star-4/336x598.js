(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.light_pin = function() {
	this.initialize(img.light_pin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,930,1036);


(lib.s3phone2 = function() {
	this.initialize(img.s3phone2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,598);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.light_pin();
	this.instance.setTransform(-40.2,-44.8,0.0864,0.0864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-44.8,80.4,89.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.light_pin();
	this.instance.setTransform(-40.2,-44.8,0.0864,0.0864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-44.8,80.4,89.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.light_pin();
	this.instance.setTransform(-40.2,-44.8,0.0864,0.0864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-44.8,80.4,89.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AEC1rIAFgUIgIgJIgEAUIAHAJIBUBrIjnOSIgBARIhuAZgAEH1/IACgKIgJgIIoiCrIjQVwICggDIDUgtIiMU4IAdgbIABgEIB/hjIJg6FIheg1IgDAJIgFAOQADACAEACAEH1/IBkB9IjmOfIgDALIgWAGIACgLAGSmhIkNA+IgXAGAjpVdIBshYIJa5vQgBAAhIglIAHgVIgJADAjhUGIB+zbIl4BHIDI1NIIDiZIkKRNIGdhnIpkaUIgPAoIAGAwIAAAAIABgBIJ97sAjqVgIABgDAjqVeIAAACIAAgCIAJhYAjsVzIgLAIIAEgWIAJgHAjsVzIACgT");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah+BaIjTAtIihADIDQ1wIIiirIAJAIIgCAKIBkB9IjnOfIgWAGIABgRIDnuSIhUhrIAFgUIgIgJIgEAUIAHAJIgHgJIAEgUIAIAJIgFAUIkCQnIBugZIAWgGIgCALIgWAGIACgLIgCALIAWgGIACgLIEOg+IADgJIBeA1IpgaFIh/BiIACgTIgCATIgLAIIAEgVIAJgHIAAABIABgCIBthYIJY5vIhIglIAHgUIgJACIAJgCIgHAUIgHgEIAFgOIgFAOIAHAEIp9bsIgBAAIAJhXIJk6UImcBoIEIxOIoCCZIjIVMIF4hGIh+TbIgOAoIAFAwIgJAHIgEAVIALgIIgBAFIgcAbgAjqVdIABAAIgBACgAjqVegAGUmPIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-50.8,-143.6,101.69999999999999,287.2), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween3("synched",0);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(0,0,1.5357,1.5357);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.5357,scaleY:1.5357},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,scaleX:1,scaleY:1},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-68.7,123.5,137.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(0,-0.05,0.2836,0.2836);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.8769,scaleY:1.8769,y:0,alpha:1,startPosition:7},7).to({scaleX:1,scaleY:1,startPosition:15},8).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,-100.6,180.7,201.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.instance = new lib.Symbol6();
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-53,-146,106,291);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-53,-146,106,291);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).to({alpha:0},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-148.8,119,303);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol7("synched",0);
	this.instance.setTransform(40.2,-100.25,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Layer_4
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(67.8,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	// Layer_1
	this.instance_2 = new lib.s3phone2();
	this.instance_2.setTransform(-168,-299);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-299,336,598);


// stage content:
(lib._336x598 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(168,299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168,299,168,299);
// library properties:
lib.properties = {
	id: '37A5136E39BC744BBEE958D360EF9BA2',
	width: 336,
	height: 598,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"/images/star-4/light_pin.png?1592558198119", id:"light_pin"},
		{src:"/images/star-4/s3phone2.png?1592558198119", id:"s3phone2"}
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
an.compositions['37A5136E39BC744BBEE958D360EF9BA2'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;