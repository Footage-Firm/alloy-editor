(function () {
    'use strict';

    /**
     * The ButtonItalic class provides functionality for styling an selection with italic (em) style.
     *
     * @class ButtonItalic
     * @uses ButtonCommand
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */
    var ButtonItalic = createReactClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonKeystroke],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default italic
             * @memberof ButtonItalic
             * @property {String} key
             * @static
             */
            key: 'italic'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonItalic
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'italic',
                keystroke: {
                    fn: 'execCommand',
                    keys: CKEDITOR.CTRL + 73 /*I*/
                },
                style: 'coreStyles_italic'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonItalic
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.italic} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-italic" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.italic}>
                    <span className="ae-icon-italic"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonItalic.key] = AlloyEditor.ButtonItalic = ButtonItalic;
}());