(function () {
    'use strict';

    /**
     * The ButtonHline class provides inserts horizontal line.
     *
     * @class ButtonHline
     * @uses ButtonCommand
     * @uses ButtonStyle
     */
    var ButtonHline = React.createClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonCommand],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default hline
             * @memberof ButtonHline
             * @property {String} key
             * @static
             */
            key: 'hline'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonHline
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'horizontalrule',
                style: {
                    element: 'hr'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonHline
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            return (
                <button aria-label={AlloyEditor.Strings.horizontalrule} className="ae-button" data-type="button-hline" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.horizontalrule}>
                    <span className="ae-icon-separator"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonHline.key] = AlloyEditor.ButtonHline = ButtonHline;
}());