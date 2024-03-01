import axios from "axios";
import { useEffect,useState } from 'react';
import React from 'react';

const Homepage = () => {
    const [admin, setAdmin] = useState(null);
    const [prod, setProd] = useState(null);
    const [produit, setProduit] = useState(null);
    const [categorie, setCategorie] = useState(null);
    const [achat, setAchat] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/listadmin')
        .then(res => {
            const __admin = res['data'];
            setAdmin(res['data'].length);
            console.log(__admin);
        })
        .catch(error => console.log(error));

        axios.get('http://localhost:8080/api/v1/listproducteur')
        .then(res => {
            const __admin = res['data'];
            setProd(res['data'].length);
            console.log(__admin);
        })
        .catch(error => console.log(error));

        axios.get('http://localhost:8080/api/v1/listcategories')
        .then(res =>{
            const categorie = res["data"];
            setCategorie(res['data'].length);
            console.log(categorie);
        })
        .catch(error => console.log(error));

        axios.get('http://localhost:8080/api/v1/listproduit')
        .then(res =>{
            const produit = res["data"];
            setProduit(res['data'].length);
            console.log(produit);
        })
        .catch(error => console.log(error));

        axios.get('http://localhost:8080/api/v1/listachat')
        .then(res =>{
            const achat = res["data"];
            setAchat(res['data'].length);
            console.log(achat);
        })
        .catch(error => console.log(error));
    }, []);
  return (
    <div>
        <div className="card">
            <h1 className="left-0">Bienvenue sur E-Producteur</h1>

        <div className="grid">
    <div className="col-12 md:col-6 lg:col-4">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Administrateurs</span>
                    <div className="text-900 font-medium text-xl"> {admin} </div>
                </div>
                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-4">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Producteurs</span>
                    <div className="text-900 font-medium text-xl"> {prod} </div>
                </div>
                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-4">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Categories</span>
                    <div className="text-900 font-medium text-xl"> {categorie} </div>
                </div>
                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-4">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Produit</span>
                    <div className="text-900 font-medium text-xl"> {produit} </div>
                </div>
                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-4">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Achats</span>
                    <div className="text-900 font-medium text-xl"> {achat} </div>
                </div>
                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>
</div>
    
        </div>
    </div>
  )
}

export default Homepage