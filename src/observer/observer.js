export default class Observer {
    constructor(subject) {
        subject.registerObserver(this);
        
        this.subscribers = [];
    }
    
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    
    notify(data) {
        this.subscribers.forEach(sub => sub(data))
    }
}