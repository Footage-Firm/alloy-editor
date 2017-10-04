(function () {
    'use strict';

    /**
     * The ButtonImageAlignLeft class provides functionality for aligning an image on left.
     *
     * @class ButtonImageAlignLeft
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */
    var ButtonImageAlignLeft = createReactClass({
        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default imageLeft
             * @memberof ButtonImageAlignLeft
             * @property {String} key
             * @static
             */
            key: 'imageLeft'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonImageAlignLeft
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'justifyleft'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonImageAlignLeft
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.alignLeft} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-image-align-left" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.alignLeft}>
                    <span className="ae-icon-align-left"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonImageAlignLeft.key] = AlloyEditor.ButtonImageAlignLeft = ButtonImageAlignLeft;
}());