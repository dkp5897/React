import { useEffect } from 'react';
import { useLocation,useParams, useSearchParams } from 'react-router-dom';
// import './Product.css';

const Product = () => {

    const {pathname} = useLocation();
    const {id} = useParams()
    const [searchParams] = useSearchParams()

    useEffect(()=>{
       console.log(pathname);
       console.log(searchParams.get('email'));
       console.log(searchParams.get('password'));
    },[])
    return (<div style={{marginTop:"100px"}} className='container'>
        <div className='row'>
            <div className="col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#-{id}</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Samsung</td>
                            <td>40000</td>
                            <td>Red</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Sony</td>
                            <td>25000</td>
                            <td>Green</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Micromax</td>
                            <td>50000</td>
                            <td>Yellow</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>)
}

export default Product;