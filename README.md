Using the package @innenrinde/event-bus

### Config EventBus class
```
const EventBus = require("@innenrinde/event-bus");
let emitter = new EventBus();
```
### Add one event
```
emitter.on("eventName1", (value) => {});
```

### Emits a value
```
emitter.emit("eventName1", value);
```

### Emits more values
```
emitter.on("eventName2", (value1, value2) => {});
emitter.emit("eventName2", value1, value2);
```

### Emits multiple events at the same time
```
emitter.emit(["eventName1", "eventName2"), value);
```

### Test package using external library:
```
git clone https://github.com/innenrinde/test-event-bus
```
```
npm i
```
```
node index.js
```
