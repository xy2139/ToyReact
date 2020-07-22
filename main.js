import {ToyReact, Component} from './ToyReact.js';


class MyComponent extends Component {
    render() {
        return <div>
            <span>hello</span>
            <span>world!</span>
            <div>
                {this.children}
            </div>
        </div>
    }
}

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button className="square"
                onClick={() => this.setState({value: 'X'})}>
                {this.state.value || ''}
            </button>
        );
    }
}

class Board extends Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
    render() {
        return (
            <div>
                <div class="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div class="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div class="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

let a = <MyComponent name="a" id="ida">
        <div>123</div>
    </MyComponent>;

let b = <Board />;

ToyReact.render(
    b,
    document.body
);