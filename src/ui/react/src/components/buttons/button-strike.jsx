(function () {
    'use strict';

    /**
     * The ButtonStrike class styles a selection with strike style.
     *
     * @class ButtonStrike
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */
    var ButtonStrike = createReactClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default strike
             * @memberof ButtonStrike
             * @property {String} key
             * @static
             */
            key: 'strike'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonStrike
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'strike',
                style: 'coreStyles_strike'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         * @instance
         * @memberof ButtonStrike
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.strike} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-strike" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.strike}>
                    <span className="ae-icon-strike"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonStrike.key] = AlloyEditor.ButtonStrike = ButtonStrike;
}());