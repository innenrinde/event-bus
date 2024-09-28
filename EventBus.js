/**
 * Class to emit events
 */
export class EventBus {

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
	 * Emit values thorough a channel
	 * @param {String} eventName
	 * @param {Array} args
	 */
	emit(eventName, ...args) {
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