import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var products = [
    {id: 1,category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {id: 2,category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {id: 3,category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'B  asketball'},
    {id: 4,category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {id: 5,category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {id: 6,category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

class AppReact extends React.Component {
    render() {
        return (
            <div className="appReact">
                <FilterableProductTable></FilterableProductTable>
            </div>
        );
    }
}

class FilterableProductTable extends React.Component {
    render(){
        return (
            <div>
                <SearchBar/>
                <ProductTable/>
            </div>

        );
    }
}

class SearchBar extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <input type="text" name="search" placeholder="filtro"/>
                </div>
                <label htmlFor="SoEstoque">Somente em estoque</label>
                <input type="checkbox" name="isOnStock"/>
            </div>
        );
    }
}

class ProductTable extends React.Component{
    render(){
        const list = products.map((product) => {
            return (<ProductRow product={product}/>);
        });
        console.log(list);
        return(
            <table>
                <thead>
                    <tr>
                        <td>nome</td>
                        <td>preco</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (<ProductRow product={product} key={product.id} />);
                    })}
                </tbody>
            </table>
        );
    }
}

class ProductRow extends React.Component {
    state = {
        show: true,
    };
    handleChange = ({ target }) => {
        this.setState({ show: target.checked });
    }
    render(){
        return (<tr>
            <td>{this.props.product.name}</td>
            <td>{this.state.show ? this.props.product.price : null}</td>
            <td><input checked={this.state.show} type="checkbox" onChange={this.handleChange} /></td>
        </tr>);
    }
}


// ========================================

ReactDOM.render(
    <AppReact />,
    document.getElementById('root')
);
