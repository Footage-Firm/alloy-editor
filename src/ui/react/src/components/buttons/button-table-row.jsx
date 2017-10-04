(function () {
    'use strict';

    /**
     * The ButtonTableRow class provides functionality to work with table rows.
     *
     * @class ButtonTableRow
     */
    var ButtonTableRow = createReactClass({
        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableRow
             * @memberof ButtonTableRow
             * @property {String} key
             * @static
             */
            key: 'tableRow'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableRow
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var buttonCommandsList;
            var buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableRow.key + 'List';
                buttonCommandsList = <AlloyEditor.ButtonCommandsList commands={this._getCommands()} editor={this.props.editor} listId={buttonCommandsListId} onDismiss={this.props.toggleDropdown} />
            }

            return (
                <div className="ae-container ae-has-dropdown">
                    <button aria-expanded={this.props.expanded} aria-label={AlloyEditor.Strings.row} aria-owns={buttonCommandsListId} className="ae-button" onClick={this.props.toggleDropdown} role="combobox" tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.row}>
                        <span className="ae-icon-row"></span>
                    </button>
                    {buttonCommandsList}
                </div>
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @instance
         * @memberof ButtonTableRow
         * @method _getCommands
         * @protected
         * @return {Array} The list of available commands.
         */
        _getCommands: function () {
            return this.props.commands || [
                {
                    command: 'rowInsertBefore',
                    label: AlloyEditor.Strings.rowInsertBefore
                },
                {
                    command: 'rowInsertAfter',
                    label: AlloyEditor.Strings.rowInsertAfter
                },
                {
                    command: 'rowDelete',
                    label: AlloyEditor.Strings.rowDelete
                }
            ];
        }
    });

    AlloyEditor.Buttons[ButtonTableRow.key] = AlloyEditor.ButtonTableRow = ButtonTableRow;
}());