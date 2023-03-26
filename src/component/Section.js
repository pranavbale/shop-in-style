import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react';

let items = [
    {
        "name": "Fancy Product",
        "prise": "$40.00 - $80.00",
        "cart": false,
    },
    {
        "name": "Special Item",
        "prise": "$18.00",
        "cart": false,
    },
    {
        "name": "Sale Item",
        "prise": "$25.00",
        "cart": false,
    },
    {
        "name": "Popular Item",
        "prise": "$40.00",
        "cart": false,
    },
    {
        "name": "Sale Item",
        "prise": "$25.00",
        "cart": false,
    },
    {
        "name": "Fancy Product",
        "prise": "$120.00 - $280.00",
        "cart": false,
    },
    {
        "name": "Special Item",
        "prise": "$18.00",
        "cart": false,
    },
    {
        "name": "Popular Item",
        "prise": "$40.00",
        "cart": false,
    }
]






function Section() {

    // useEffect(() => {
    //     let table1 = document.getElementById("tab");
    //     let htmlText = ``;
    // for (let i = 0; i < items.length;) {
    //     let row = table1.insertRow();
    //     for (let j = 0; i < items.length && j < 4;) {
    //         let cell = row.insertCell();

    //         htmlText = `
    //         <div class="col mb-5">
    //             <div class="card h-100">
    //                 <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    //                 <div class="card-body p-4">
    //                     <div class="text-center">
    //                         <h5 class="fw-bolder">${items[i].name}</h5>
    //                         ${items[i].prise}
    //                     </div>
    //                 </div>
    //                 <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    //                     <div class="text-center"><button class="btn btn-outline-dark mt-auto" onclick ="${change(i)}">Add to cart</button></div>
    //                 </div>
    //             </div>
    //         </div>
    //         ` 
    //         cell = htmlText;
    //         i++;
    //         j++;
    //     }
    // }
    // },[]);
    // const change = (i) => {
    //     i ? false : true;
    //     console.log(i)
    // }

    const DisplayData=items.map(
        (item)=>{
            return(
                <tr>
                    <td><img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /></td>
                    <td>{item.name}</td>
                    <td>{item.prise}</td>
                    <td><button class="btn btn-outline-dark mt-auto">Add to Card</button></td>
                </tr>
            )
        }
    )


    return (<section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <table id="tab">
                <tbody>
                 
                    
                 {DisplayData}
                 
             </tbody>
                </table>
            </div>
        </div>
    </section>);

 
}

export default Section;