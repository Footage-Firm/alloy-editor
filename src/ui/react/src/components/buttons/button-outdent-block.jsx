(function () {
	'use strict';

	/**
     * The ButtonOutdentBlock class provides functionality for outdenting blocks.
     *
     * @class ButtonOutdentBlock
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */
    var ButtonOutdentBlock = createReactClass({
        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default indentBlock
             * @memberof ButtonOutdentBlock
             * @property {String} key
             * @static
             */
            key: 'outdentBlock'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonOutdentBlock
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'outdent'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonOutdentBlock
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.outdent} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-outdent-block" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.outdent}>
                    <span className="ae-icon-outdent-block"></span>
                </button>
            );
        }

    });

    AlloyEditor.Buttons[ButtonOutdentBlock.key] = AlloyEditor.ButtonOutdentBlock = ButtonOutdentBlock;
}());