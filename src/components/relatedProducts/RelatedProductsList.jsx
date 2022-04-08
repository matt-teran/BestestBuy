import React from 'react';
import propTypes from 'prop-types';
import ProductCard from './productCard/ProductCard';
import Btn from '../ui/Btn/Btn';
import AddToOutfit from './productCard/AddToOutfit';

class RelatedProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
  }

  scrollHandler(direction) {
    if (direction === 'left') {
      this.setState((prev) => ({ position: prev.position - 1 }));
    } else {
      this.setState((prev) => ({ position: prev.position + 1 }));
    }
  }

  render() {
    const {
      relatedCards, title, clickHandler, outfit, addToOutfit,
    } = this.props;
    const { position } = this.state;
    const cards = relatedCards.map((card) => (
      <ProductCard
        key={card.id}
        avgRating={card.avgRating}
        price={card.default_price}
        name={card.name}
        category={card.category}
        image={card.image}
        clickHandler={clickHandler}
        id={card.id}
        outfit={outfit}
      />
    ));
    return (
      <>
        <h2 className="list-title">{ title }</h2>
        <div className="products-list">
          {position > 0 ? <Btn char="◀" className="scroll-left" clickHandler={() => this.scrollHandler('left')} /> : null}
          {position < cards.length - 1 ? <Btn char="▶" className="scroll-right" clickHandler={() => this.scrollHandler('right')} /> : null}
          {outfit && <AddToOutfit addToOutfit={addToOutfit} />}
          {cards.filter((card, i) => i >= position)}
        </div>
      </>
    );
  }
}

RelatedProductsList.defaultProps = {
  relatedCards: [],
  outfit: false,
  addToOutfit: () => {},
};

RelatedProductsList.propTypes = {
  title: propTypes.string.isRequired,
  relatedCards: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    default_price: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  })),
  outfit: propTypes.bool,
  clickHandler: propTypes.func.isRequired,
  addToOutfit: propTypes.func,
};

export default RelatedProductsList;
