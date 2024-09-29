/**
 * Class to emit events
 */
module.exports = class EventBus {

	/**
	 * Callbacks collection grouped by event name
	 * @type {Object}
	 */
	#events = {};

	/**
	 * Add a specified callback to a list of events
	 * @param {String} eventName
	 * @param {Function} callback
	 */
	on(eventName, callback) {
		this.#events[eventName] = this.#events[eventName] ?? [];
		this.#events[eventName].push(callback);
	}

	/**
	 * Stop emitting an event name
	 * @param {String} eventName
	 */
	off(eventName) {
		delete this.#events[eventName];
	}

	/**
	 * Emit values through eventsName
	 * * - all channels
	 * string - one single channel
	 * array - multiple channels
	 * @param {String|Array} eventsName
	 * @param {Array} args
	 */
	emit(eventsName, ...args) {
		let events = eventsName;
		if (eventsName === "*") {
			events = Object.keys(this.#events);
		} else if (!Array.isArray(eventsName)) {
			events = [eventsName];
		}

		events.forEach(eventName => {
			this.#emitEvent(eventName, ...args);
		});
	}

	/**
	 * Emit value for an event
	 * @param {String} eventName
	 * @param {Array} args
	 */
	#emitEvent(eventName, ...args) {
		if (Array.isArray(this.#events[eventName])) {
			this.#events[eventName].forEach(callback => {
				callback(...args);
			});
		}
	}

	/**
	 * Get full collection of events
	 * @return {Object}
	 */
	events() {
		return this.#events;
	}
}