(function () {
    'use strict';

    /**
     * The ButtonTableRemove class provides functionality for removing a table
     *
     * @class ButtonTableRemove
     */
    var ButtonTableRemove = React.createClass({
        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableRemove
             * @memberof ButtonTableRemove
             * @property {String} key
             * @static
             */
            key: 'tableRemove'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableRemove
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            return (
                <button aria-label={AlloyEditor.Strings.deleteTable} className="ae-button" data-type="button-table-remove" onClick={this._removeTable} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.deleteTable}>
                    <span className="ae-icon-bin"></span>
                </button>
            );
        },

        /**
         * Removes the table in the editor element.
         *
         * @instance
         * @memberof ButtonTableRemove
         * @method _removeTable
         * @protected
         */
        _removeTable: function() {
            var editor = this.props.editor.get('nativeEditor');
            var tableUtils = new CKEDITOR.Table(editor);

            tableUtils.remove();

            editor.fire('actionPerformed', this);
        }
    });

    AlloyEditor.Buttons[ButtonTableRemove.key] = AlloyEditor.ButtonTableRemove = ButtonTableRemove;
}());