(function () {
    'use strict';

    /**
     * The ButtonParagraphCenter class provides functionality for centering a paragraph.
     *
     * @class ButtonParagraphCenter
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */
    var ButtonParagraphCenter = createReactClass({
        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default paragraphCenter
             * @memberof ButtonParagraphCenter
             * @property {String} key
             * @static
             */
            key: 'paragraphCenter'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonParagraphCenter
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'justifycenter'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonParagraphCenter
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.alignCenter} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-paragraph-center" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.alignCenter}>
                    <span className="ae-icon-align-center"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphCenter.key] = AlloyEditor.ButtonParagraphCenter = ButtonParagraphCenter;
}());