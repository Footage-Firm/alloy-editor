(function () {
    'use strict';

    /**
     * The ButtonUnderline class provides functionality for underlying a text selection.
     *
     * @class ButtonUnderline
     * @uses ButtonCommand
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */
    var ButtonUnderline = createReactClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonKeystroke],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default underline
             * @memberof ButtonUnderline
             * @property {String} key
             * @static
             */
            key: 'underline'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonUnderline
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'underline',
                keystroke: {
                    fn: 'execCommand',
                    keys: CKEDITOR.CTRL + 85 /*U*/
                },
                style: 'coreStyles_underline'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonUnderline
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.underline} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-underline" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.underline}>
                    <span className="ae-icon-underline"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonUnderline.key] = AlloyEditor.ButtonUnderline = ButtonUnderline;
}());