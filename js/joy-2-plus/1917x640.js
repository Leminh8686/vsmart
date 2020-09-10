(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.s7_bg = function() {
	this.initialize(img.s7_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1917,640);


(lib.s7_camera = function() {
	this.initialize(img.s7_camera);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,89);


(lib.s7_image = function() {
	this.initialize(img.s7_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1917,640);


(lib.s7_light = function() {
	this.initialize(img.s7_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,640);// helper functions:

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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiaXA2zMAAAhtlME0vAAAMAAABtlg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-988,-350.7,1976.1,701.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.s7_light();
	this.instance.setTransform(-64,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-64,-320,128,640), null);


(lib.slide2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.298)","#FFFFFF"],[0,1],-237.8,0,237.8,0).s().p("EglJAARIAAghMBKTAAAIAAAhg");
	this.shape.setTransform(237.825,1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slide2, new cjs.Rectangle(0,0,475.7,3.3), null);


(lib.slide1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.298)","#FFFFFF"],[0,1],-974.8,-564.3,-949.3,-564.3).s().p("AhaBaQgkglgBg1QABg0AkgmQAmgkA0gBQA1ABAlAkQAmAmAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slide1, new cjs.Rectangle(-12.7,-12.7,25.5,25.5), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-320,128,640);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol4("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:2106},67).wait(51));

	// Layer_2_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("EimOA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_5 = new cjs.Graphics().p("EijxA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_6 = new cjs.Graphics().p("EihUA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_7 = new cjs.Graphics().p("Eie3A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_8 = new cjs.Graphics().p("EicaA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_9 = new cjs.Graphics().p("EiZ9A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_10 = new cjs.Graphics().p("EiXgA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_11 = new cjs.Graphics().p("EiVDA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_12 = new cjs.Graphics().p("EiSmA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_13 = new cjs.Graphics().p("EiQJA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_14 = new cjs.Graphics().p("EiNsA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_15 = new cjs.Graphics().p("EiLPA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_16 = new cjs.Graphics().p("EiIyA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_17 = new cjs.Graphics().p("EiGVA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_18 = new cjs.Graphics().p("EiD4A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_19 = new cjs.Graphics().p("EiBbA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_20 = new cjs.Graphics().p("Eh++A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_21 = new cjs.Graphics().p("Eh8hA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_22 = new cjs.Graphics().p("Eh6EA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_23 = new cjs.Graphics().p("Eh3nA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_24 = new cjs.Graphics().p("Eh1KA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_25 = new cjs.Graphics().p("EhytA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_26 = new cjs.Graphics().p("EhwQA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_27 = new cjs.Graphics().p("EhtzA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_28 = new cjs.Graphics().p("EhrWA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_29 = new cjs.Graphics().p("Eho5A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_30 = new cjs.Graphics().p("EhmcA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_31 = new cjs.Graphics().p("Ehj/A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_32 = new cjs.Graphics().p("EhhiA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_33 = new cjs.Graphics().p("EhfFA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_34 = new cjs.Graphics().p("EhcoA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_35 = new cjs.Graphics().p("EhaLA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_36 = new cjs.Graphics().p("EhXuA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_37 = new cjs.Graphics().p("EhVRA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_38 = new cjs.Graphics().p("EhS1A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_39 = new cjs.Graphics().p("EhQYA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_40 = new cjs.Graphics().p("EhN7A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_41 = new cjs.Graphics().p("EhLeA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_42 = new cjs.Graphics().p("EhJBA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_43 = new cjs.Graphics().p("EhGkA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_44 = new cjs.Graphics().p("EhEHA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_45 = new cjs.Graphics().p("EhBqA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_46 = new cjs.Graphics().p("Eg/NA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_47 = new cjs.Graphics().p("Eg8wA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_48 = new cjs.Graphics().p("Eg6TA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_49 = new cjs.Graphics().p("Eg32A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg1ZA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_51 = new cjs.Graphics().p("Egy8A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_52 = new cjs.Graphics().p("EgwfA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_53 = new cjs.Graphics().p("EguCA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_54 = new cjs.Graphics().p("EgrlA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_55 = new cjs.Graphics().p("EgpIA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_56 = new cjs.Graphics().p("EgmrA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_57 = new cjs.Graphics().p("EgkOA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_58 = new cjs.Graphics().p("EghxA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_59 = new cjs.Graphics().p("EgfUA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_60 = new cjs.Graphics().p("Egc3A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_61 = new cjs.Graphics().p("EgaaA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_62 = new cjs.Graphics().p("EgX9A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_63 = new cjs.Graphics().p("EgVgA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_64 = new cjs.Graphics().p("EgTDA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_65 = new cjs.Graphics().p("EgQmA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_66 = new cjs.Graphics().p("EgOJA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_67 = new cjs.Graphics().p("EgLsA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_68 = new cjs.Graphics().p("EgJPA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_69 = new cjs.Graphics().p("EgGyA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_70 = new cjs.Graphics().p("EgEVA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_71 = new cjs.Graphics().p("EgB5A42MAAAhxrMFMdAAAMAAABxrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:1064,y:18.35}).wait(1).to({graphics:mask_graphics_5,x:1079.647,y:18.35}).wait(1).to({graphics:mask_graphics_6,x:1095.344,y:18.35}).wait(1).to({graphics:mask_graphics_7,x:1111.041,y:18.35}).wait(1).to({graphics:mask_graphics_8,x:1126.7381,y:18.35}).wait(1).to({graphics:mask_graphics_9,x:1142.4351,y:18.35}).wait(1).to({graphics:mask_graphics_10,x:1158.1321,y:18.35}).wait(1).to({graphics:mask_graphics_11,x:1173.8291,y:18.35}).wait(1).to({graphics:mask_graphics_12,x:1189.5261,y:18.35}).wait(1).to({graphics:mask_graphics_13,x:1205.2231,y:18.35}).wait(1).to({graphics:mask_graphics_14,x:1220.9201,y:18.35}).wait(1).to({graphics:mask_graphics_15,x:1236.6172,y:18.35}).wait(1).to({graphics:mask_graphics_16,x:1252.3142,y:18.35}).wait(1).to({graphics:mask_graphics_17,x:1268.0112,y:18.35}).wait(1).to({graphics:mask_graphics_18,x:1283.7082,y:18.35}).wait(1).to({graphics:mask_graphics_19,x:1299.4052,y:18.35}).wait(1).to({graphics:mask_graphics_20,x:1315.1022,y:18.35}).wait(1).to({graphics:mask_graphics_21,x:1330.7993,y:18.35}).wait(1).to({graphics:mask_graphics_22,x:1346.4963,y:18.35}).wait(1).to({graphics:mask_graphics_23,x:1362.1933,y:18.35}).wait(1).to({graphics:mask_graphics_24,x:1377.8903,y:18.35}).wait(1).to({graphics:mask_graphics_25,x:1393.5873,y:18.35}).wait(1).to({graphics:mask_graphics_26,x:1409.2843,y:18.35}).wait(1).to({graphics:mask_graphics_27,x:1424.9813,y:18.35}).wait(1).to({graphics:mask_graphics_28,x:1440.6784,y:18.35}).wait(1).to({graphics:mask_graphics_29,x:1456.3754,y:18.35}).wait(1).to({graphics:mask_graphics_30,x:1472.0724,y:18.35}).wait(1).to({graphics:mask_graphics_31,x:1487.7694,y:18.35}).wait(1).to({graphics:mask_graphics_32,x:1503.4664,y:18.35}).wait(1).to({graphics:mask_graphics_33,x:1519.1634,y:18.35}).wait(1).to({graphics:mask_graphics_34,x:1534.8604,y:18.35}).wait(1).to({graphics:mask_graphics_35,x:1550.5575,y:18.35}).wait(1).to({graphics:mask_graphics_36,x:1566.2545,y:18.35}).wait(1).to({graphics:mask_graphics_37,x:1581.9515,y:18.35}).wait(1).to({graphics:mask_graphics_38,x:1597.6485,y:18.35}).wait(1).to({graphics:mask_graphics_39,x:1613.3455,y:18.35}).wait(1).to({graphics:mask_graphics_40,x:1629.0425,y:18.35}).wait(1).to({graphics:mask_graphics_41,x:1644.7396,y:18.35}).wait(1).to({graphics:mask_graphics_42,x:1660.4366,y:18.35}).wait(1).to({graphics:mask_graphics_43,x:1676.1336,y:18.35}).wait(1).to({graphics:mask_graphics_44,x:1691.8306,y:18.35}).wait(1).to({graphics:mask_graphics_45,x:1707.5276,y:18.35}).wait(1).to({graphics:mask_graphics_46,x:1723.2246,y:18.35}).wait(1).to({graphics:mask_graphics_47,x:1738.9216,y:18.35}).wait(1).to({graphics:mask_graphics_48,x:1754.6187,y:18.35}).wait(1).to({graphics:mask_graphics_49,x:1770.3157,y:18.35}).wait(1).to({graphics:mask_graphics_50,x:1786.0127,y:18.35}).wait(1).to({graphics:mask_graphics_51,x:1801.7097,y:18.35}).wait(1).to({graphics:mask_graphics_52,x:1817.4067,y:18.35}).wait(1).to({graphics:mask_graphics_53,x:1833.1037,y:18.35}).wait(1).to({graphics:mask_graphics_54,x:1848.8007,y:18.35}).wait(1).to({graphics:mask_graphics_55,x:1864.4978,y:18.35}).wait(1).to({graphics:mask_graphics_56,x:1880.1948,y:18.35}).wait(1).to({graphics:mask_graphics_57,x:1895.8918,y:18.35}).wait(1).to({graphics:mask_graphics_58,x:1911.5888,y:18.35}).wait(1).to({graphics:mask_graphics_59,x:1927.2858,y:18.35}).wait(1).to({graphics:mask_graphics_60,x:1942.9828,y:18.35}).wait(1).to({graphics:mask_graphics_61,x:1958.6799,y:18.35}).wait(1).to({graphics:mask_graphics_62,x:1974.3769,y:18.35}).wait(1).to({graphics:mask_graphics_63,x:1990.0739,y:18.35}).wait(1).to({graphics:mask_graphics_64,x:2005.7709,y:18.35}).wait(1).to({graphics:mask_graphics_65,x:2021.4679,y:18.35}).wait(1).to({graphics:mask_graphics_66,x:2037.1649,y:18.35}).wait(1).to({graphics:mask_graphics_67,x:2052.8619,y:18.35}).wait(1).to({graphics:mask_graphics_68,x:2068.559,y:18.35}).wait(1).to({graphics:mask_graphics_69,x:2084.256,y:18.35}).wait(1).to({graphics:mask_graphics_70,x:2099.953,y:18.35}).wait(1).to({graphics:mask_graphics_71,x:2115.65,y:18.35}).wait(51));

	// Layer_2
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.setTransform(1084.85,7.85);
	this.instance_1.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(122));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-342.8,2234,701.4000000000001);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.slideBtn = new lib.slide1();
	this.slideBtn.setTransform(410.75,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.slideBtn).wait(1));

	// Layer_1
	this.slideBar = new lib.slide2();
	this.slideBar.setTransform(236,0.05,1,1,0,0,0,237.8,1.7);

	this.timeline.addTween(cjs.Tween.get(this.slideBar).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.8,-14.5,475.7,25.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		this.masker.stop();
		var mc = this;
		
		var count = 0;
		var maxSlide = (mc.slider.slideBar.nominalBounds.width );
		this.startAnim = startM;
		this.stopAnim=stopAnim;
		function stopAnim(){
			mc.slider.slideBtn.x =0
			mc.removeEventListener("tick");
			mc.masker.gotoAndStop(0);
			}
		function startM() {
			count = 0;
			console.log(count);
			mc.addEventListener("tick", handleTick);
		}
		
		function handleTick() {
			if (count < mc.slider.slideBar.nominalBounds.width) {
				count += 12;
				mc.slider.slideBtn.x = maxSlide * (count / mc.slider.slideBar.nominalBounds.width);
				mc.masker.gotoAndStop(Math.floor((mc.slider.slideBtn.x / mc.slider.slideBar.nominalBounds.width) * 70))
			}
		}
		//this.slider.slideBtn.on('pressmove', handlerClick.bind(this));
		
		function handlerClick(evt) {
			console.log(evt);
			if (evt.stageX - this.slider.x > 0 && evt.stageX - this.slider.x < mc.slider.slideBar.nominalBounds.width) {
				evt.target.x = evt.stageX - this.slider.x;
				//console.log()
				this.masker.gotoAndStop(Math.floor((evt.target.x / mc.slider.slideBar.nominalBounds.width) * 75))
			}
		
		
		
		}
		this.slider.slideBtn.on("pressup", function (evt) {
			console.log("up");
		})
		this.startAnim();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.instance = new lib.s7_camera();
	this.instance.setTransform(802,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.slider = new lib.Symbol2();
	this.slider.setTransform(723,563.6);

	this.timeline.addTween(cjs.Tween.get(this.slider).wait(1));

	// Layer_6
	this.masker = new lib.Symbol3();
	this.masker.setTransform(-103,319.25);

	this.timeline.addTween(cjs.Tween.get(this.masker).wait(1));

	// Layer_2
	this.instance_1 = new lib.s7_bg();
	this.instance_1.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.s7_image();
	this.instance_2.setTransform(1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-6.1,-23.6,1976,701.4), null);


// stage content:
(lib._1917x640 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,1,1,0.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(952.4,297.4,1017.5000000000001,381);
// library properties:
lib.properties = {
	id: 'C6F48760517DB743B453F20C2FA1AB8C',
	width: 1917,
	height: 640,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/images/joy-2-plus/s7_bg.jpg?1593513689959", id:"s7_bg"},
		{src:"/images/joy-2-plus/s7_camera.png?1593513689959", id:"s7_camera"},
		{src:"/images/joy-2-plus/s7_image.jpg?1593513689959", id:"s7_image"},
		{src:"/images/joy-2-plus/s7_light.png?1593513689959", id:"s7_light"}
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
an.compositions['C6F48760517DB743B453F20C2FA1AB8C'] = {
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