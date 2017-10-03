(function() {
    'use strict';

    /**
     * ButtonKeystroke is a mixin that provides a `keystroke` prop that allows configuring
     * a function of the instance to be invoked upon the keystroke activation.
     *
     * @class ButtonKeystroke
     */
    var ButtonKeystroke = {
        
        /**
         * Lifecycle. Invoked once, both on the client and server, immediately before the initial rendering occurs.
         *
         * @instance
         * @memberof ButtonKeystroke
         * @method componentWillMount
         */
        componentWillMount: function() {
            var nativeEditor = this.props.editor.get('nativeEditor');
            var keystroke = this.props.keystroke;

            var commandName = keystroke.name || ((Math.random() * 1e9) >>> 0).toString();

            var command = nativeEditor.getCommand(commandName);

            if (!command) {
                command = new CKEDITOR.command(nativeEditor, {
                    exec: function(editor) {
                            var keystrokeFn = keystroke.fn;

                            if (AlloyEditor.Lang.isString(keystrokeFn)) {
                                this[keystrokeFn].call(this, editor);
                            } else if (AlloyEditor.Lang.isFunction(keystrokeFn)) {
                                keystrokeFn.call(this, editor);
                            }
                        }.bind(this)
                    }
                );

                nativeEditor.addCommand(commandName, command);
            }

            this._defaultKeystrokeCommand = nativeEditor.keystrokeHandler.keystrokes[keystroke.keys];

            nativeEditor.setKeystroke(keystroke.keys, commandName);
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @instance
         * @memberof ButtonKeystroke
         * @method componentWillUnmount
         */
        componentWillUnmount: function() {
            this.props.editor.get('nativeEditor').setKeystroke(this.props.keystroke.keys, this._defaultKeystrokeCommand);
        }
    };

    AlloyEditor.ButtonKeystroke = ButtonKeystroke;
}());