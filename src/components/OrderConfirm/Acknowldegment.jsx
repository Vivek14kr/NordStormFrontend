import CardGiftcardSharpIcon from '@mui/icons-material/CardGiftcardSharp';
import { useState, useEffect } from 'react';
import "./Acknowldegment.css";
import { LinearProgress } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import { Header } from '../Home/Header';
import { Footer } from '../Home/Footer';

export const OrderConfirm = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    setTimeout(() => {
        setLoading(false);
    }, 5000);


    useEffect(() => {
        getData();
      }, []);

        
 const handleDelete = (id) => {
   fetch(`https://nordstormbc.onrender.com/cart/${id}`, {
     method: "DELETE",
   })
     .then((r) => {
       return r.json();
     })
     .then((res) => {
       getData();
     });
 };


    const getData = () => {
        fetch("https://nordstormbc.onrender.com/cart ")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);

            for (let i = 0; i < data.length; i++) {
              handleDelete(data[i]._id);
            }
            console.log(data, " this sis sf");
          })
          .catch((err) => {
            console.log(err);
          });
    };
  
    return (
        <div>
            { loading ? 
                <Stack sx={{ width: '30%', color: 'grey.500', mt: '300px', ml: '35%' }} spacing={2}>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                </Stack>
            :
                <div>
                    <Header />
                    <div className='successContainer'>
                        <div className='sucLeftBox'>
                            <CardGiftcardSharpIcon />
                            <div className='titleOne'>Thank You!</div>
                            <div className='titleTwo'>Order confirmation has been sent to your mail.</div>
                            <Link to="/" className='continueShpButton'>Continue Shopping</Link>
                        </div>
                    
                        <div className='sucRightBox'>
                            <div>
                                {products.map((e) => (
                                    <div className="confirmProductsBox">
                                        <img src={e.images[0]} alt="" />
                                        <div>
                                            <p className="prodtext1">{e.name}</p>
                                            <p className="prodtext2">₹{e.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
            
        </div>
    )
};