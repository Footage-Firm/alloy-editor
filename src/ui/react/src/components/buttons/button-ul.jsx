(function () {
    'use strict';

    /**
     * The ButtonUnorderedlist class provides functionality for creating unordered lists in an editor.
     *
     * @class ButtonUnorderedlist
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */
    var ButtonUnorderedlist = React.createClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default ul
             * @memberof ButtonUnorderedlist
             * @property {String} key
             * @static
             */
            key: 'ul'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonUnorderedlist
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'bulletedlist',
                style: {
                    element: 'ul'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonUnorderedlist
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.bulletedlist} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-ul" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.bulletedlist}>
                    <span className="ae-icon-bulleted-list"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonUnorderedlist.key] = AlloyEditor.ButtonUnorderedlist = ButtonUnorderedlist;
}());