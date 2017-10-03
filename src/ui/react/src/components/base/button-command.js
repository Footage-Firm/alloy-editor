(function() {
    'use strict';

    /**
     * ButtonCommand is a mixin that executes a command via CKEDITOR's API.
     *
     * @class ButtonCommand
     */
    var ButtonCommand = {
        
        /**
         * Executes a CKEditor command and fires `actionPerformed` event.
         *
         * @instance
         * @memberof ButtonCommand
         * @param {Object=} data Optional data to be passed to CKEDITOR's `execCommand` method.
         * @method execCommand
         */
        execCommand: function(data) {
            var editor = this.props.editor.get('nativeEditor');

            editor.execCommand(this.props.command, data);

            if (this.props.modifiesSelection) {
                editor.selectionChange(true);
            }

            editor.fire('actionPerformed', this);
        }
    };

    AlloyEditor.ButtonCommand = ButtonCommand;
}());