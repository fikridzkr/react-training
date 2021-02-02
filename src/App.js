import React from 'react'
import logo from './logo.svg';
import './App.css';
import ReviewItem from './Reviews';
import PropTypes from 'prop-types';


function App() {
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo category="Running"  name="Adidas RunFalcon Shoes" price="600000" isDiscount="yes"/>
      <ReviewItem/>
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="image1.jpg" alt="shoes"/>
    </div>

    );
}

function CheckDiscount(props) {
  const {isDiscount, discount} = props;
  if (isDiscount === "yes") {
    return(
      <p>Diskon {discount}% off</p>
    );
  } else if (isDiscount === "coming") {
    return(
      <p>Akan Segera Ada Diskon</p>
    );
  }
  else {
    return(
      <p>Belum Ada Diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const {category, name, price, isDiscount} = props;
  const Benefits = ["Bahan Bagus", "Nyaman dipakai", "Anti selip"]
  const listBenefits = Benefits.map((items) =>
  <li key={items.id} >{items}</li>
);
  return (
    <div className="Deskripsi">
      <p className="Cate">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR {price}</p>
      <CheckDiscount isDiscount={isDiscount} discount={50}/>
      <p className="Info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam, ducimus cupiditate iste quaerat beatae blanditiis laudantium voluptas corporis aspernatur officiis sit, perferendis reiciendis totam rerum. Expedita, quaerat! Incidunt, placeat.
      </p>
      <ul>
        {listBenefits}
      </ul>
      <a href="#" onClick={(e) => TambahCart(name, e) }>Add to cart</a>
    </div>
  );
}

function TambahCart(e) {
  alert("Membeli Produk " + e)
}

CheckDiscount.propTypes = {
  discount: PropTypes.number
};
export default App;
