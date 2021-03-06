
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/egret3d/egret3d.js",
	"resourcemanager/resourcemanager.js",
	"polyfill/promise.js",
	"bin-debug/Main.js",
	"bin-debug/sample/ColorMaterialSample.js",
	"bin-debug/sample/CubeSample.js",
	"bin-debug/sample/CylinderSample.js",
	"bin-debug/sample/DirectLightSample.js",
	"bin-debug/sample/ElevationSample.js",
	"bin-debug/sample/OctahedronSphereSample.js",
	"bin-debug/sample/PlaneSample.js",
	"bin-debug/sample/PointLightSample.js",
	"bin-debug/sample/SkyboxSample.js",
	"bin-debug/sample/SphereSample.js",
	"bin-debug/sample/SpotLightSample.js",
	"bin-debug/sample/StorageTestSample.js",
	"bin-debug/sample/TextureMaterialSample.js",
	"bin-debug/sample/UVAnim.js",
	"bin-debug/sample/View3DSample.js",
	"bin-debug/sample/WireframeDrawSample.js",
	"bin-debug/sample/WireframeSample.js",
	"bin-debug/StageMgr.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 960,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};