import {Component, EventEmitter, Prop, Event} from '@stencil/core';


@Component({
    tag: 'my-name',
    styleUrl: 'my-name.scss'
})
export class MyName {
    @Event() todoCompleted: EventEmitter;

    @Prop() first: string;

    @Prop() last: string;

    componentDidLoad() {
        console.log('I loaded my-name component');
        setTimeout(() => {
            this.todoCompleted.emit({isDummy: true})
        }, 5000)
    }


    render() {
        return (
            <div>
                Hello, my name is {this.first} {this.last}
            </div>
        );
    }
}
