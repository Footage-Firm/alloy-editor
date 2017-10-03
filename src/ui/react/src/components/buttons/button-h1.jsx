(function () {
    'use strict';

    /**
     * The ButtonH1 class provides wraps a selection in `h1` element.
     *
     * @class ButtonH1
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */
    var ButtonH1 = React.createClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default h1
             * @memberof ButtonH1
             * @property {String} key
             * @static
             */
            key: 'h1'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonH1
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                style: {
                    element: 'h1'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonH1
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.h1} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-h1" onClick={this.applyStyle} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.h1}>
                    <span className="ae-icon-h1"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonH1.key] = AlloyEditor.ButtonH1 = ButtonH1;
}());