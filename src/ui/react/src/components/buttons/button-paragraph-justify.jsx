(function () {
    'use strict';

    /**
     * The ButtonParagraphJustify class provides functionality for justfying a paragraph.
     *
     * @class ButtonParagraphJustify
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     */
    var ButtonParagraphJustify = createReactClass({
        mixins: [AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default paragraphJustify
             * @memberof ButtonParagraphJustify
             * @property {String} key
             * @static
             */
            key: 'paragraphJustify'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonParagraphJustify
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'justifyblock'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonParagraphJustify
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.alignJustify} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-paragraph-justify" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.alignJustify}>
                    <span className="ae-icon-align-justified"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphJustify.key] = AlloyEditor.ButtonParagraphJustify = ButtonParagraphJustify;
}());