'use strict'

import ComponentRegistry from 'bower:metaljs/src/component/ComponentRegistry';
import SoyComponent from 'bower:metaljs/src/soy/SoyComponent';
import './Modal.soy';

class Modal extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}

	syncVisible() {
		this.element.style.display = this.visible ? 'block' : 'none';
	}
}

ComponentRegistry.register('Modal', Modal);

Modal.ATTRS = {
	headerContent: {
		value: null
	},
	bodyContent: {
		value: null
	},
	footerButtons: {
		value: []
	},
	visible: {
		value: false
	}
};


export default Modal;
