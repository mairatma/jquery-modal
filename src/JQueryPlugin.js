'use strict';

import core from 'bower:metaljs/src/core';

var JQueryPlugin = {
	register(name, constructor) {
		if (!core.isString(name)) {
			throw new Error('The name string is required for registering a plugin');
		}
		if (!core.isFunction(constructor)) {
			throw new Error('The constructor function is required for registering a plugin');
		}

		$.metal = $.metal || {};
		$.metal[name] = constructor;
		$.fn[name] = handlePluginCall.bind(null, name);
	}
}

function handlePluginCall(name, optionsOrMethodName) {
	var fullName = 'metal-' + name;
	var instance = this.data(fullName);
	if (core.isString(optionsOrMethodName)) {

	} else {
		var options = $.extend({}, optionsOrMethodName, {element: this});
		if (instance) {
			instance.setAttrs(options);
		} else {
			var constructor = $.metal[name];
			this.data(fullName, new constructor(options));
		}
	}
}

export default JQueryPlugin;
