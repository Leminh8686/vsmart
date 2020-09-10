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
	this.instance.setTransform(480,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:1986.1},125).wait(1));

	// Layer_2_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("EiAuA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_5 = new cjs.Graphics().p("Eh/xA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_6 = new cjs.Graphics().p("Eh+1A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_7 = new cjs.Graphics().p("Eh95A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_8 = new cjs.Graphics().p("Eh89A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_9 = new cjs.Graphics().p("Eh8BA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_10 = new cjs.Graphics().p("Eh7FA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_11 = new cjs.Graphics().p("Eh6JA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_12 = new cjs.Graphics().p("Eh5MA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_13 = new cjs.Graphics().p("Eh4QA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_14 = new cjs.Graphics().p("Eh3UA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_15 = new cjs.Graphics().p("Eh2YA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_16 = new cjs.Graphics().p("Eh1cA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_17 = new cjs.Graphics().p("Eh0gA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_18 = new cjs.Graphics().p("EhzkA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_19 = new cjs.Graphics().p("EhynA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_20 = new cjs.Graphics().p("EhxrA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_21 = new cjs.Graphics().p("EhwvA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_22 = new cjs.Graphics().p("EhvzA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_23 = new cjs.Graphics().p("Ehu3A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_24 = new cjs.Graphics().p("Eht7A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_25 = new cjs.Graphics().p("Ehs/A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_26 = new cjs.Graphics().p("EhsCA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_27 = new cjs.Graphics().p("EhrGA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_28 = new cjs.Graphics().p("EhqKA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_29 = new cjs.Graphics().p("EhpOA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_30 = new cjs.Graphics().p("EhoSA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_31 = new cjs.Graphics().p("EhnWA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_32 = new cjs.Graphics().p("EhmaA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_33 = new cjs.Graphics().p("EhldA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_34 = new cjs.Graphics().p("EhkhA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_35 = new cjs.Graphics().p("EhjlA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_36 = new cjs.Graphics().p("EhipA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_37 = new cjs.Graphics().p("EhhtA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_38 = new cjs.Graphics().p("EhgxA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_39 = new cjs.Graphics().p("Ehf1A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_40 = new cjs.Graphics().p("Ehe4A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_41 = new cjs.Graphics().p("Ehd8A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_42 = new cjs.Graphics().p("EhdAA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_43 = new cjs.Graphics().p("EhcEA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_44 = new cjs.Graphics().p("EhbIA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_45 = new cjs.Graphics().p("EhaMA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_46 = new cjs.Graphics().p("EhZQA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_47 = new cjs.Graphics().p("EhYTA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_48 = new cjs.Graphics().p("EhXXA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_49 = new cjs.Graphics().p("EhWbA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_50 = new cjs.Graphics().p("EhVfA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_51 = new cjs.Graphics().p("EhUjA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_52 = new cjs.Graphics().p("EhTnA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_53 = new cjs.Graphics().p("EhSrA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_54 = new cjs.Graphics().p("EhRuA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_55 = new cjs.Graphics().p("EhQyA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_56 = new cjs.Graphics().p("EhP2A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_57 = new cjs.Graphics().p("EhO6A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_58 = new cjs.Graphics().p("EhN+A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_59 = new cjs.Graphics().p("EhNCA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_60 = new cjs.Graphics().p("EhMGA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_61 = new cjs.Graphics().p("EhLKA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_62 = new cjs.Graphics().p("EhKNA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_63 = new cjs.Graphics().p("EhJRA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_64 = new cjs.Graphics().p("EhIVA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_65 = new cjs.Graphics().p("EhHZA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_66 = new cjs.Graphics().p("EhGdA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_67 = new cjs.Graphics().p("EhFhA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_68 = new cjs.Graphics().p("EhElA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_69 = new cjs.Graphics().p("EhDoA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_70 = new cjs.Graphics().p("EhCsA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_71 = new cjs.Graphics().p("EhBwA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_72 = new cjs.Graphics().p("EhA0A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg/4A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg+8A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_75 = new cjs.Graphics().p("Eg+AA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_76 = new cjs.Graphics().p("Eg9DA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_77 = new cjs.Graphics().p("Eg8HA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_78 = new cjs.Graphics().p("Eg7LA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_79 = new cjs.Graphics().p("Eg6PA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_80 = new cjs.Graphics().p("Eg5TA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_81 = new cjs.Graphics().p("Eg4XA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_82 = new cjs.Graphics().p("Eg3bA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_83 = new cjs.Graphics().p("Eg2eA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_84 = new cjs.Graphics().p("Eg1iA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_85 = new cjs.Graphics().p("Eg0mA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_86 = new cjs.Graphics().p("EgzqA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_87 = new cjs.Graphics().p("EgyuA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_88 = new cjs.Graphics().p("EgxyA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_89 = new cjs.Graphics().p("Egw2A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_90 = new cjs.Graphics().p("Egv5A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_91 = new cjs.Graphics().p("Egu9A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_92 = new cjs.Graphics().p("EguBA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_93 = new cjs.Graphics().p("EgtFA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_94 = new cjs.Graphics().p("EgsJA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_95 = new cjs.Graphics().p("EgrNA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_96 = new cjs.Graphics().p("EgqRA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_97 = new cjs.Graphics().p("EgpUA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_98 = new cjs.Graphics().p("EgoYA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_99 = new cjs.Graphics().p("EgncA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_100 = new cjs.Graphics().p("EgmgA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_101 = new cjs.Graphics().p("EglkA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_102 = new cjs.Graphics().p("EgkoA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_103 = new cjs.Graphics().p("EgjsA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_104 = new cjs.Graphics().p("EgiwA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_105 = new cjs.Graphics().p("EghzA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_106 = new cjs.Graphics().p("Egg3A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_107 = new cjs.Graphics().p("Egf7A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_108 = new cjs.Graphics().p("Ege/A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_109 = new cjs.Graphics().p("EgeDA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_110 = new cjs.Graphics().p("EgdHA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_111 = new cjs.Graphics().p("EgcLA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_112 = new cjs.Graphics().p("EgbOA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_113 = new cjs.Graphics().p("EgaSA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_114 = new cjs.Graphics().p("EgZWA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_115 = new cjs.Graphics().p("EgYaA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_116 = new cjs.Graphics().p("EgXeA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_117 = new cjs.Graphics().p("EgWiA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_118 = new cjs.Graphics().p("EgVmA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_119 = new cjs.Graphics().p("EgUpA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_120 = new cjs.Graphics().p("EgTtA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_121 = new cjs.Graphics().p("EgSxA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_122 = new cjs.Graphics().p("EgR1A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_123 = new cjs.Graphics().p("EgQ5A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_124 = new cjs.Graphics().p("EgP9A42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_125 = new cjs.Graphics().p("EgPBA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_126 = new cjs.Graphics().p("EgOEA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_127 = new cjs.Graphics().p("EgNIA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_128 = new cjs.Graphics().p("EgMMA42MAAAhxrMFMdAAAMAAABxrg");
	var mask_graphics_129 = new cjs.Graphics().p("EgLQA42MAAAhxrMFMdAAAMAAABxrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:1303.95,y:18.35}).wait(1).to({graphics:mask_graphics_5,x:1309.964,y:18.35}).wait(1).to({graphics:mask_graphics_6,x:1315.978,y:18.35}).wait(1).to({graphics:mask_graphics_7,x:1321.992,y:18.35}).wait(1).to({graphics:mask_graphics_8,x:1328.006,y:18.35}).wait(1).to({graphics:mask_graphics_9,x:1334.02,y:18.35}).wait(1).to({graphics:mask_graphics_10,x:1340.034,y:18.35}).wait(1).to({graphics:mask_graphics_11,x:1346.048,y:18.35}).wait(1).to({graphics:mask_graphics_12,x:1352.062,y:18.35}).wait(1).to({graphics:mask_graphics_13,x:1358.076,y:18.35}).wait(1).to({graphics:mask_graphics_14,x:1364.09,y:18.35}).wait(1).to({graphics:mask_graphics_15,x:1370.104,y:18.35}).wait(1).to({graphics:mask_graphics_16,x:1376.118,y:18.35}).wait(1).to({graphics:mask_graphics_17,x:1382.132,y:18.35}).wait(1).to({graphics:mask_graphics_18,x:1388.146,y:18.35}).wait(1).to({graphics:mask_graphics_19,x:1394.16,y:18.35}).wait(1).to({graphics:mask_graphics_20,x:1400.174,y:18.35}).wait(1).to({graphics:mask_graphics_21,x:1406.188,y:18.35}).wait(1).to({graphics:mask_graphics_22,x:1412.202,y:18.35}).wait(1).to({graphics:mask_graphics_23,x:1418.216,y:18.35}).wait(1).to({graphics:mask_graphics_24,x:1424.23,y:18.35}).wait(1).to({graphics:mask_graphics_25,x:1430.244,y:18.35}).wait(1).to({graphics:mask_graphics_26,x:1436.258,y:18.35}).wait(1).to({graphics:mask_graphics_27,x:1442.272,y:18.35}).wait(1).to({graphics:mask_graphics_28,x:1448.286,y:18.35}).wait(1).to({graphics:mask_graphics_29,x:1454.3,y:18.35}).wait(1).to({graphics:mask_graphics_30,x:1460.314,y:18.35}).wait(1).to({graphics:mask_graphics_31,x:1466.328,y:18.35}).wait(1).to({graphics:mask_graphics_32,x:1472.342,y:18.35}).wait(1).to({graphics:mask_graphics_33,x:1478.356,y:18.35}).wait(1).to({graphics:mask_graphics_34,x:1484.37,y:18.35}).wait(1).to({graphics:mask_graphics_35,x:1490.384,y:18.35}).wait(1).to({graphics:mask_graphics_36,x:1496.398,y:18.35}).wait(1).to({graphics:mask_graphics_37,x:1502.412,y:18.35}).wait(1).to({graphics:mask_graphics_38,x:1508.426,y:18.35}).wait(1).to({graphics:mask_graphics_39,x:1514.44,y:18.35}).wait(1).to({graphics:mask_graphics_40,x:1520.454,y:18.35}).wait(1).to({graphics:mask_graphics_41,x:1526.468,y:18.35}).wait(1).to({graphics:mask_graphics_42,x:1532.482,y:18.35}).wait(1).to({graphics:mask_graphics_43,x:1538.496,y:18.35}).wait(1).to({graphics:mask_graphics_44,x:1544.51,y:18.35}).wait(1).to({graphics:mask_graphics_45,x:1550.524,y:18.35}).wait(1).to({graphics:mask_graphics_46,x:1556.538,y:18.35}).wait(1).to({graphics:mask_graphics_47,x:1562.552,y:18.35}).wait(1).to({graphics:mask_graphics_48,x:1568.566,y:18.35}).wait(1).to({graphics:mask_graphics_49,x:1574.58,y:18.35}).wait(1).to({graphics:mask_graphics_50,x:1580.594,y:18.35}).wait(1).to({graphics:mask_graphics_51,x:1586.608,y:18.35}).wait(1).to({graphics:mask_graphics_52,x:1592.622,y:18.35}).wait(1).to({graphics:mask_graphics_53,x:1598.636,y:18.35}).wait(1).to({graphics:mask_graphics_54,x:1604.65,y:18.35}).wait(1).to({graphics:mask_graphics_55,x:1610.664,y:18.35}).wait(1).to({graphics:mask_graphics_56,x:1616.678,y:18.35}).wait(1).to({graphics:mask_graphics_57,x:1622.692,y:18.35}).wait(1).to({graphics:mask_graphics_58,x:1628.706,y:18.35}).wait(1).to({graphics:mask_graphics_59,x:1634.72,y:18.35}).wait(1).to({graphics:mask_graphics_60,x:1640.734,y:18.35}).wait(1).to({graphics:mask_graphics_61,x:1646.748,y:18.35}).wait(1).to({graphics:mask_graphics_62,x:1652.762,y:18.35}).wait(1).to({graphics:mask_graphics_63,x:1658.776,y:18.35}).wait(1).to({graphics:mask_graphics_64,x:1664.79,y:18.35}).wait(1).to({graphics:mask_graphics_65,x:1670.804,y:18.35}).wait(1).to({graphics:mask_graphics_66,x:1676.818,y:18.35}).wait(1).to({graphics:mask_graphics_67,x:1682.832,y:18.35}).wait(1).to({graphics:mask_graphics_68,x:1688.846,y:18.35}).wait(1).to({graphics:mask_graphics_69,x:1694.86,y:18.35}).wait(1).to({graphics:mask_graphics_70,x:1700.874,y:18.35}).wait(1).to({graphics:mask_graphics_71,x:1706.888,y:18.35}).wait(1).to({graphics:mask_graphics_72,x:1712.902,y:18.35}).wait(1).to({graphics:mask_graphics_73,x:1718.916,y:18.35}).wait(1).to({graphics:mask_graphics_74,x:1724.93,y:18.35}).wait(1).to({graphics:mask_graphics_75,x:1730.944,y:18.35}).wait(1).to({graphics:mask_graphics_76,x:1736.958,y:18.35}).wait(1).to({graphics:mask_graphics_77,x:1742.972,y:18.35}).wait(1).to({graphics:mask_graphics_78,x:1748.986,y:18.35}).wait(1).to({graphics:mask_graphics_79,x:1755,y:18.35}).wait(1).to({graphics:mask_graphics_80,x:1761.014,y:18.35}).wait(1).to({graphics:mask_graphics_81,x:1767.028,y:18.35}).wait(1).to({graphics:mask_graphics_82,x:1773.042,y:18.35}).wait(1).to({graphics:mask_graphics_83,x:1779.056,y:18.35}).wait(1).to({graphics:mask_graphics_84,x:1785.07,y:18.35}).wait(1).to({graphics:mask_graphics_85,x:1791.084,y:18.35}).wait(1).to({graphics:mask_graphics_86,x:1797.098,y:18.35}).wait(1).to({graphics:mask_graphics_87,x:1803.112,y:18.35}).wait(1).to({graphics:mask_graphics_88,x:1809.126,y:18.35}).wait(1).to({graphics:mask_graphics_89,x:1815.14,y:18.35}).wait(1).to({graphics:mask_graphics_90,x:1821.154,y:18.35}).wait(1).to({graphics:mask_graphics_91,x:1827.168,y:18.35}).wait(1).to({graphics:mask_graphics_92,x:1833.182,y:18.35}).wait(1).to({graphics:mask_graphics_93,x:1839.196,y:18.35}).wait(1).to({graphics:mask_graphics_94,x:1845.21,y:18.35}).wait(1).to({graphics:mask_graphics_95,x:1851.224,y:18.35}).wait(1).to({graphics:mask_graphics_96,x:1857.238,y:18.35}).wait(1).to({graphics:mask_graphics_97,x:1863.252,y:18.35}).wait(1).to({graphics:mask_graphics_98,x:1869.266,y:18.35}).wait(1).to({graphics:mask_graphics_99,x:1875.28,y:18.35}).wait(1).to({graphics:mask_graphics_100,x:1881.294,y:18.35}).wait(1).to({graphics:mask_graphics_101,x:1887.308,y:18.35}).wait(1).to({graphics:mask_graphics_102,x:1893.322,y:18.35}).wait(1).to({graphics:mask_graphics_103,x:1899.336,y:18.35}).wait(1).to({graphics:mask_graphics_104,x:1905.35,y:18.35}).wait(1).to({graphics:mask_graphics_105,x:1911.364,y:18.35}).wait(1).to({graphics:mask_graphics_106,x:1917.378,y:18.35}).wait(1).to({graphics:mask_graphics_107,x:1923.392,y:18.35}).wait(1).to({graphics:mask_graphics_108,x:1929.406,y:18.35}).wait(1).to({graphics:mask_graphics_109,x:1935.42,y:18.35}).wait(1).to({graphics:mask_graphics_110,x:1941.434,y:18.35}).wait(1).to({graphics:mask_graphics_111,x:1947.448,y:18.35}).wait(1).to({graphics:mask_graphics_112,x:1953.462,y:18.35}).wait(1).to({graphics:mask_graphics_113,x:1959.476,y:18.35}).wait(1).to({graphics:mask_graphics_114,x:1965.49,y:18.35}).wait(1).to({graphics:mask_graphics_115,x:1971.504,y:18.35}).wait(1).to({graphics:mask_graphics_116,x:1977.518,y:18.35}).wait(1).to({graphics:mask_graphics_117,x:1983.532,y:18.35}).wait(1).to({graphics:mask_graphics_118,x:1989.546,y:18.35}).wait(1).to({graphics:mask_graphics_119,x:1995.56,y:18.35}).wait(1).to({graphics:mask_graphics_120,x:2001.574,y:18.35}).wait(1).to({graphics:mask_graphics_121,x:2007.588,y:18.35}).wait(1).to({graphics:mask_graphics_122,x:2013.602,y:18.35}).wait(1).to({graphics:mask_graphics_123,x:2019.616,y:18.35}).wait(1).to({graphics:mask_graphics_124,x:2025.63,y:18.35}).wait(1).to({graphics:mask_graphics_125,x:2031.644,y:18.35}).wait(1).to({graphics:mask_graphics_126,x:2037.658,y:18.35}).wait(1).to({graphics:mask_graphics_127,x:2043.672,y:18.35}).wait(1).to({graphics:mask_graphics_128,x:2049.686,y:18.35}).wait(1).to({graphics:mask_graphics_129,x:2055.7,y:18.35}).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.setTransform(1084.85,7.85);
	this.instance_1.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.9,-342.8,1976,701.4000000000001);


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
				mc.masker.gotoAndStop(Math.floor((mc.slider.slideBtn.x / mc.slider.slideBar.nominalBounds.width) * 80)+20)
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
	this.instance.setTransform(802,-2);

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
	this.instance_1.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.s7_image();
	this.instance_2.setTransform(1,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-6.1,-23.6,1976,701.4), null);


// stage content:
(lib._1080x640 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-441.85,2,1,0.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92,298.4,1436.1,381);
// library properties:
lib.properties = {
	id: '59D9F8BCCF4EC44FBD025036B50C8162',
	width: 1080,
	height: 640,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/images/joy-2-plus/s7_bg.jpg?1593513510857", id:"s7_bg"},
		{src:"/images/joy-2-plus/s7_camera.png?1593513510857", id:"s7_camera"},
		{src:"/images/joy-2-plus/s7_image.jpg?1593513510857", id:"s7_image"},
		{src:"/images/joy-2-plus/s7_light.jpg?1593513510857", id:"s7_light"}
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
an.compositions['59D9F8BCCF4EC44FBD025036B50C8162'] = {
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