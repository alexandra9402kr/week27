import React from 'react';
import './tarif.css';

class Tarif extends React.Component {
    render() {
    const {name, price, speed, isSelected} = this.props;
    return (
        <div className={"tarif-card " + (isSelected? "selected":"")}>
            <div className="tarif-name">{name}</div>
            <div className="tarif-price">{price}</div>
            <div className="tarif-speed">{speed}</div>
            <div className="inf">Объем включенного трафика не ограничен</div>
        </div>
    );
    }
}

export default Tarif;