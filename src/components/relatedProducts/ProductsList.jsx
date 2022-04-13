import React, { useState } from 'react';
import propTypes from 'prop-types';
import ProductCard from './productCard/ProductCard';
import Btn from '../ui/Btn/Btn';

function ProductsList({
  title, cards, clickHandler, children,
}) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const scrollHandler = (direction) => {
    if (direction === 'left') {
      setStart(start - 1);
      setEnd(end - 1);
    } else {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };
  const cardComponents = cards.map((card) => (
    <ProductCard
      key={card.id}
      avgRating={card.avgRating}
      price={card.default_price}
      name={card.name}
      category={card.category}
      image={card.image || ''}
      clickHandler={clickHandler}
      id={card.id}
      outfit={!!children}
    />
  ));
  return (
    <>
      <h2 className="list-title">{ title }</h2>
      <div className="products-list">
        {start > 0 ? <Btn char="◀" className="scroll-left" clickHandler={() => scrollHandler('left')} /> : null}
        {end < cards.length ? <Btn char="▶" className="scroll-right" clickHandler={() => scrollHandler('right')} /> : null}
        {children}
        {cardComponents.slice(start, end)}
      </div>
    </>
  );
}

ProductsList.defaultProps = {
  cards: [],
  children: null,
};

ProductsList.propTypes = {
  title: propTypes.string.isRequired,
  cards: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    default_price: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  })),
  children: propTypes.node,
  clickHandler: propTypes.func.isRequired,
};

export default ProductsList;
