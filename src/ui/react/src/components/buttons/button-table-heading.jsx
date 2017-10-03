(function () {
    'use strict';

    /**
     * The ButtonTableHeading class provides functionality to work with table heading.
     *
     * @class ButtonTableHeading
     */
    var ButtonTableHeading = React.createClass({
        
        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default tableRow
             * @memberof ButtonTableHeading
             * @property {String} key
             * @static
             */
            key: 'tableHeading'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonTableHeading
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var buttonCommandsList;
            var buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableHeading.key + 'List';
                buttonCommandsList = <AlloyEditor.ButtonCommandsList commands={this._getCommands()} editor={this.props.editor} listId={buttonCommandsListId} onDismiss={this.props.toggleDropdown} />
            }

            var activeHeading = new CKEDITOR.Table(this.props.editor.get('nativeEditor')).getHeading();
            var activeHeadingIntro = AlloyEditor.Strings.headers + ':';
            var activeHeadingLabel = AlloyEditor.Strings['headers' + activeHeading];

            return (
                <div className="ae-container-dropdown-xl ae-has-dropdown">
                    <button aria-expanded={this.props.expanded} aria-label="" className="ae-toolbar-element" onClick={this.props.toggleDropdown} role="combobox" tabIndex={this.props.tabIndex} title="">
                        <div className="ae-container">
                            <span className="ae-container-dropdown-selected-item">{activeHeadingIntro} <strong>{activeHeadingLabel}</strong></span>
                            <span className="ae-icon-arrow"></span>
                        </div>
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
         * @memberof ButtonTableHeading
         * @method _getCommands
         * @protected
         * @return {Array} The list of available commands.
         */
        _getCommands: function () {
            return this.props.commands || [
                {
                    command: 'tableHeadingNone',
                    label: AlloyEditor.Strings.headersNone
                },
                {
                    command: 'tableHeadingRow',
                    label: AlloyEditor.Strings.headersRow
                },
                {
                    command: 'tableHeadingColumn',
                    label: AlloyEditor.Strings.headersColumn
                },
                {
                    command: 'tableHeadingBoth',
                    label: AlloyEditor.Strings.headersBoth
                }
            ];
        }
    });

    AlloyEditor.Buttons[ButtonTableHeading.key] = AlloyEditor.ButtonTableHeading = ButtonTableHeading;
}());