(function () {
    'use strict';

    /**
     * The ButtonBold class provides functionality for styling an selection with strong (bold) style.
     *
     * @class ButtonBold
     * @uses ButtonCommand
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */
    var ButtonBold = React.createClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonKeystroke],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default bold
             * @memberof ButtonBold
             * @property {String} key
             * @static
             */
            key: 'bold'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonBold
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'bold',
                keystroke: {
                    fn: 'execCommand',
                    keys: CKEDITOR.CTRL + 66 /*B*/
                },
                style: 'coreStyles_bold'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonBold
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.bold} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-bold" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.bold}>
                    <span className="ae-icon-bold"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonBold.key] = AlloyEditor.ButtonBold = ButtonBold;
}());