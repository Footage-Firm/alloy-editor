(function () {
    'use strict';

    /**
     * The ButtonRemoveFormat class removes style formatting.
     *
     * @class ButtonRemoveFormat
     * @uses ButtonCommand
     */
    var ButtonRemoveFormat = React.createClass({
        mixins: [AlloyEditor.ButtonCommand],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default removeFormat
             * @memberof ButtonRemoveFormat
             * @property {String} key
             * @static
             */
            key: 'removeFormat'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonRemoveFormat
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'removeFormat'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonRemoveFormat
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            return (
                <button aria-label={AlloyEditor.Strings.removeformat} className='ae-button' data-type="button-removeformat" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.removeformat}>
                    <span className="ae-icon-removeformat"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonRemoveFormat.key] = AlloyEditor.ButtonRemoveFormat = ButtonRemoveFormat;
}());