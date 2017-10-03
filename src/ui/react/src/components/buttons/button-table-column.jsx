(function () {
    'use strict';

    /**
     * The ButtonTableColumn class provides functionality to work with table columns.
     *
     * @class ButtonTableColumn
     */
    var ButtonTableColumn = React.createClass({
        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableColumn
             * @memberof ButtonTableColumn
             * @property {String} key
             * @static
             */
            key: 'tableColumn'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableColumn
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var buttonCommandsList,
                buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableColumn.key + 'List';
                buttonCommandsList = <AlloyEditor.ButtonCommandsList commands={this._getCommands()} editor={this.props.editor} listId={buttonCommandsListId} onDismiss={this.props.toggleDropdown} />
            }

            return (
                <div className="ae-container ae-has-dropdown">
                    <button aria-expanded={this.props.expanded} aria-label={AlloyEditor.Strings.column} aria-owns={buttonCommandsListId} className="ae-button" onClick={this.props.toggleDropdown} role="listbox" tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.column}>
                        <span className="ae-icon-column"></span>
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
         * @memberof ButtonTableColumn
         * @method _getCommands
         * @protected
         * @return {Array} The list of available commands.
         */
        _getCommands: function() {
            return this.props.commands || [
                {
                    command: 'columnInsertBefore',
                    label: AlloyEditor.Strings.columnInsertBefore
                },
                {
                    command: 'columnInsertAfter',
                    label: AlloyEditor.Strings.columnInsertAfter
                },
                {
                    command: 'columnDelete',
                    label: AlloyEditor.Strings.columnDelete
                }
            ];
        }
    });

    AlloyEditor.Buttons[ButtonTableColumn.key] = AlloyEditor.ButtonTableColumn = ButtonTableColumn;
}());