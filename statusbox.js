// Console styling variables
const console_styling = "background-color:#fff;color:#000;border-radius:14px;";
const console_prefix = "%c Statusbox %c";
// Main class
class StatusBox {
    // StatusBox-Constructor
    constructor(options) {
        // 
        // Options checks
        // 
        if (!options) {
            console.error(console_prefix + "No options given!", console_styling);
        } else {
            // Position
            if (!options.position) {
                console.warn("No position given! Putting the container on the right side.");
            } else {
                if (!["l", "r"].includes(options.position.toString().toLowerCase())) {
                    console.error(console_prefix + "Invalid position option given!", console_styling);
                }
            }
            // Check if container element is given
            if (!options.container) {
                console.warn(console_prefix + "Container parameter not given, using div with id \"statuscontainer\"!", console_styling);
                this.container_id = "statuscontainer";
            } else {
                this.container_id = options.container;
            }
            if (!document.getElementById(options.container)) {
                console.warn(console_prefix + "Container element couldn't be found!", console_styling);
            }
            // Set class vars
            this.options = options;
            this.types = options.types;
            this.container = document.getElementById(this.container_id);
        }
    }
}