    import React from 'react'
    import './App.css';

    function ReviewItem(params) {
        //data dummy dengan JSON
        const Users = [
        {
            id: 1,
            foto:"https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?cs=srgb&dl=pexels-samad-ismayilov-1270076.jpg&fm=jpg",
            name: "Mc Kenny",
            review: "Anti Selip Terus bagus lagi suka pokoknya"
        },
        {
            id: 2,
            foto:"https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?cs=srgb&dl=pexels-kevin-bidwell-2380794.jpg&fm=jpg",
            name: "James Wilson",
            review: "Kuat dan Awet plus trendy lagi"
        },
        {
            id: 3,
            foto:"https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-yuri-manei-3211476.jpg&fm=jpg",
            name: "Paul Wings",
            review: "Rekomended bgtttt pokonya"
        }
        ];
        const listReview = Users.map((itemsreview) =>
            <div key={itemsreview.id} className="item">
            <img src={itemsreview.foto} alt="Foto"/>
            <div className="User">
                <h3>{itemsreview.name}</h3>
                <p>{itemsreview.review}</p>
            </div>
            </div>
        );
        return(
        <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
        </div>
        );
    }

    export default ReviewItem
