var Renderer = {
	Init: function (canvas) {
		canvas.height = canvas.width * 10 / 16;
		try {
			this.gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
			if (!this.gl)
				throw "this.gl is null";
		}
		catch(e) {
			alert("Unable to get WebGL context");
			return;
		}

		var gl = this.gl;

		gl.viewport(0,0, canvas.width, canvas.height);
		gl.clearColor(0.0,0.0,0.0,1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	}
}